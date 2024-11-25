
const books = {
    "Fiction": [
        { name: "The Great Gatsby", image: "https://images.unsplash.com/photo-1536632746-dc8f9ff9cc26?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5MnwzNjB8c2VhY2h8MTF8fGJlYXV0aWZ1bHxlbnwwfHx8fDE2Nzc0MjkzNzU&ixlib=rb-1.2.1&q=80&w=400" },
        { name: "1984", image: "https://images.unsplash.com/photo-1586205788591-18e2e7076743?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5MnwzNjB8c2VhY2h8Mnx8fGJlYXV0aWZ1bHxlbnwwfHx8fDE2Nzc0MjkzNzU&ixlib=rb-1.2.1&q=80&w=400" },
        { name: "To Kill a Mockingbird", image: "https://images.unsplash.com/photo-1543146480-f7b2feebf20a?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5MnwzNjB8c2VhY2h8Mnx8fGJlYXV0aWZ1bHxlbnwwfHx8fDE2Nzc0MjkzNzU&ixlib=rb-1.2.1&q=80&w=400" }
    ],
    "Non-Fiction": [
        { name: "Sapiens: A Brief History of Humankind", image: "https://images.unsplash.com/photo-1556741533-60a7e96e1d12?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5MnwzNjB8c2VhY2h8OXx8fGJlYXV0aWZ1bHxlbnwwfHx8fDE2Nzc0MjkzNzU&ixlib=rb-1.2.1&q=80&w=400" },
        { name: "Educated", image: "https://images.unsplash.com/photo-1546967354-d9c98d6dbb91?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5MnwzNjB8c2VhY2h8Mnx8fGJlYXV0aWZ1bHxlbnwwfHx8fDE2Nzc0MjkzNzU&ixlib=rb-1.2.1&q=80&w=400" },
        { name: "Becoming", image: "https://images.unsplash.com/photo-1583273197432-1261a79ff423?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5MnwzNjB8c2VhY2h8Mnx8fGJlYXV0aWZ1bHxlbnwwfHx8fDE2Nzc0MjkzNzU&ixlib=rb-1.2.1&q=80&w=400" }
    ],
    "Science": [
        { name: "A Brief History of Time", image: "https://images.unsplash.com/photo-1560762196-b5cf09745771?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5MnwzNjB8c2VhY2h8MXx8fGJlYXV0aWZ1bHxlbnwwfHx8fDE2Nzc0MjkzNzU&ixlib=rb-1.2.1&q=80&w=400" },
        { name: "The Selfish Gene", image: "https://images.unsplash.com/photo-1596649413889-440c3c7c27b0?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5MnwzNjB8c2VhY2h8Mnx8fGJlYXV0aWZ1bHxlbnwwfHx8fDE2Nzc0MjkzNzU&ixlib=rb-1.2.1&q=80&w=400" }
    ],
    "Technology": [
        { name: "The Innovators", image: "https://images.unsplash.com/photo-1596620922443-b84d3157d9be?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5MnwzNjB8c2VhY2h8M3x8fGJlYXV0aWZ1bHxlbnwwfHx8fDE2Nzc0MjkzNzU&ixlib=rb-1.2.1&q=80&w=400" },
        { name: "The Lean Startup", image: "https://images.unsplash.com/photo-1591627397219-c8241c62db71?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5MnwzNjB8c2VhY2h8Mnx8fGJlYXV0aWZ1bHxlbnwwfHx8fDE2Nzc0MjkzNzU&ixlib=rb-1.2.1&q=80&w=400" }
    ],
    "Magazines": [
        { name: "Time", image: "https://images.unsplash.com/photo-1593591217360-c91f00c45bfa?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5MnwzNjB8c2VhY2h8NHx8fGJlYXV0aWZ1bHxlbnwwfHx8fDE2Nzc0MjkzNzU&ixlib=rb-1.2.1&q=80&w=400" },
        { name: "National Geographic", image: "https://images.unsplash.com/photo-1571051373061-e07d20498e3a?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5MnwzNjB8c2VhY2h8Mnx8fGJlYXV0aWZ1bHxlbnwwfHx8fDE2Nzc0MjkzNzU&ixlib=rb-1.2.1&q=80&w=400" }
    ]
};


let userData = {};


document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    const categories = [];
    document.querySelectorAll('.category:checked').forEach((checkbox) => {
        categories.push(checkbox.value);
    });

   
    if (age < 10 || age > 80) {
        document.getElementById('registrationError').style.display = 'block';
        return;
    }

    
    userData = { name, age, email, categories };
    localStorage.setItem('userData', JSON.stringify(userData));
    
    
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

n
document.getElementById('loginFormSubmit').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (storedData && storedData.email === email) {
        userData = storedData;
        showBooks();
    } else {
        alert('No user found with this email!');
    }
});


function showBooks() {
    const bookListDiv = document.getElementById('bookList');
    bookListDiv.innerHTML = ''; 
    
    userData.categories.forEach((category) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('col-md-4', 'mb-4');
        categoryDiv.innerHTML = `<h4 class="text-primary">${category}</h4><div class="card shadow-sm"><div class="card-body"><ul class="list-unstyled"></ul></div></div>`;
        
        const bookUl = categoryDiv.querySelector('ul');
        books[category].forEach((book) => {
            const li = document.createElement('li');
            li.classList.add('d-flex', 'align-items-center', 'mb-3');
            li.innerHTML = `<img src="${book.image}" alt="${book.name}" class="img-thumbnail" style="width: 50px; height: 75px; margin-right: 10px;"><span>${book.name}</span>`;
            bookUl.appendChild(li);
        });

        bookListDiv.appendChild(categoryDiv);
    });

   
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('bookCategories').style.display = 'block';
}
