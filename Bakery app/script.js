
function BakeryItem(name, price, weight) {
    this.name = name;
    this.price = price;
    this.weight = weight;
}


const items = [
    new BakeryItem("Yummy Truffle", 87, "750g"),
    new BakeryItem("Almond cake", 45, "400g"),
    new BakeryItem("Black Forest", 55, "350g"),
    new BakeryItem("Apple Pie", 72, "100g"),
    new BakeryItem("Muffin", 32, "150g")
];


function Cart() {
    this.items = [];
    
   
    this.addItem = function(item) {
        this.items.push(item);
    };

   
    this.displayCart = function() {
        const cartList = document.getElementById("cartList");
        cartList.innerHTML = ""; // Clear previous list
        
        if (this.items.length === 0) {
            const noItemsMessage = document.createElement("li");
            noItemsMessage.textContent = "Your cart is empty!";
            cartList.appendChild(noItemsMessage);
        } else {
            this.items.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.name} - $${item.price} - ${item.weight}`;
                cartList.appendChild(li);
            });
        }
    };

   
    this.getTotalPrice = function() {
        return this.items.reduce((total, item) => total + item.price, 0);
    };
}


const cart = new Cart();


function displayItems() {
    const itemList = document.getElementById("itemList");
    items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = `Price: $${item.price}`;

        const itemWeight = document.createElement("p");
        itemWeight.textContent = `Weight: ${item.weight}`;

        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.onclick = function() {
            cart.addItem(item);
            alert(`${item.name} has been added to the cart!`);
        };

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(itemWeight);
        itemDiv.appendChild(addButton);

        itemList.appendChild(itemDiv);
    });
}


document.getElementById("viewCartButton").addEventListener("click", function() {
    const cartSection = document.getElementById("cartSection");
    cartSection.style.display = "block"; // Show the cart section
    cart.displayCart(); // Display the cart contents
    document.getElementById("checkoutButton").textContent = `Checkout - $${cart.getTotalPrice()}`;
});

document.getElementById("closeCartButton").addEventListener("click", function() {
    const cartSection = document.getElementById("cartSection");
    cartSection.style.display = "none"; // Hide the cart section
});


displayItems();
