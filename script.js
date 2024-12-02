
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        id: formData.get('id'),
        price: formData.get('price'),
        category: formData.get('category'),
        manufactureDate: formData.get('manufactureDate'),
        expirationDate: formData.get('expirationDate')
    };

    fetch('/admin/register', {
        method: 'POST',
        body: new URLSearchParams(data),
    })
    .then(() => {
        alert('Product registered successfully!');
        window.location.reload();
    })
    .catch(err => console.error('Error registering product:', err));
});


document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchQuery = document.getElementById('search-query').value;

    fetch('/user/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ searchQuery })
    })
    .then(response => response.json())
    .then(products => {
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = ''; // Clear existing results

        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - ${product.category} - $${product.price}`;
            resultsContainer.appendChild(li);
        });
    })
    .catch(err => console.error('Error searching products:', err));
});
