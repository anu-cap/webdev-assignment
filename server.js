const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // To serve static files like CSS
app.set('view engine', 'ejs'); // Use EJS for rendering views (optional)

// In-memory data for users and products
let products = [];
let users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
];

let loggedInUser = null;

// Home route - Index page with Admin & User Login options
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Admin Login page route
app.get('/login/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login-admin.html'));
});

// User Login page route
app.get('/login/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login-user.html'));
});

// Admin Login POST request handling
app.post('/login/admin', (req, res) => {
    const { username, password } = req.body;
    
    // Check if the username and password match the admin's credentials
    const user = users.find(u => u.username === username && u.password === password && u.role === 'admin');
    
    // If credentials match, log in and redirect to admin panel
    if (user) {
        loggedInUser = user;
        res.redirect('/admin');
    } else {
        // If credentials do not match, send an error message
        res.send('Invalid Admin credentials. Please try again.');
    }
});

// User Login POST request handling
app.post('/login/user', (req, res) => {
    const { username, password } = req.body;
    
    // Check if the username and password match the user's credentials
    const user = users.find(u => u.username === username && u.password === password && u.role === 'user');
    
    // If credentials match, log in and redirect to user panel
    if (user) {
        loggedInUser = user;
        res.redirect('/user');
    } else {
        // If credentials do not match, send an error message
        res.send('Invalid User credentials. Please try again.');
    }
});

// Admin route - Admin Dashboard (view all products, register products)
app.get('/admin', (req, res) => {
    if (loggedInUser && loggedInUser.role === 'admin') {
        res.sendFile(path.join(__dirname, 'views', 'admin.html'));
    } else {
        res.redirect('/');
    }
});

// Admin route - Register a new product (POST request)
app.post('/admin/register', (req, res) => {
    const { name, id, price, category, manufactureDate, expirationDate } = req.body;
    const newProduct = { name, id, price, category, manufactureDate, expirationDate };
    products.push(newProduct);
    res.redirect('/admin');
});

// User route - User Dashboard (search products)
app.get('/user', (req, res) => {
    if (loggedInUser && loggedInUser.role === 'user') {
        res.sendFile(path.join(__dirname, 'views', 'user.html'));
    } else {
        res.redirect('/');
    }
});

// User route - Handle product search by name or category
app.post('/user/search', (req, res) => {
    const { searchQuery } = req.body;
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    res.json(filteredProducts);
});

// Logout route - to log out the user
app.get('/logout', (req, res) => {
    loggedInUser = null;
    res.redirect('/');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
