const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // To serve static files like CSS
app.set('view engine', 'ejs'); // Use EJS for rendering views (optional)


let products = [];
let users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
];

let loggedInUser = null;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.get('/login/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login-admin.html'));
});

app.get('/login/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login-user.html'));
});


app.post('/login/admin', (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(u => u.username === username && u.password === password && u.role === 'admin');
    
   
    if (user) {
        loggedInUser = user;
        res.redirect('/admin');
    } else {
       
        res.send('Invalid Admin credentials. Please try again.');
    }
});

app.post('/login/user', (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(u => u.username === username && u.password === password && u.role === 'user');
    
    if (user) {
        loggedInUser = user;
        res.redirect('/user');
    } else {
       
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


app.post('/admin/register', (req, res) => {
    const { name, id, price, category, manufactureDate, expirationDate } = req.body;
    const newProduct = { name, id, price, category, manufactureDate, expirationDate };
    products.push(newProduct);
    res.redirect('/admin');
});


app.get('/user', (req, res) => {
    if (loggedInUser && loggedInUser.role === 'user') {
        res.sendFile(path.join(__dirname, 'views', 'user.html'));
    } else {
        res.redirect('/');
    }
});

app.post('/user/search', (req, res) => {
    const { searchQuery } = req.body;
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    res.json(filteredProducts);
});

app.get('/logout', (req, res) => {
    loggedInUser = null;
    res.redirect('/');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
