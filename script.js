var products = [
    {
        name: "Cartoon Astronaut T-shirts",
        brand: "Adidas",
        image: "images/products/f1.jpg",
        price: "$123"
    },
    // Add more products as needed
];
function addProduct() {
    var productName = document.getElementById("productName").value;
    var productBrand = document.getElementById("productBrand").value;
    var productImage = document.getElementById("productImage").value;
    var productPrice = document.getElementById("productPrice").value;

    // Validate that all fields are filled out
    if (!productName || !productBrand || !productImage || !productPrice) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a new product object
    var newProduct = {
        name: productName,
        brand: productBrand,
        image: productImage,
        price: productPrice
    };

    // Add the new product to the array
    products.push(newProduct);

    // Clear the form fields
    document.getElementById("product-form").reset();

    // Update the display with the new product
    displayProducts();
}
function createProductElement(product) {
        var productElement = document.createElement("div");
        productElement.className = "pro";
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="des">
                <span>${product.brand}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="star"></div>
                <h3 class="prices">${product.price}</h3>
            </div>
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
        `;
        return productElement;
    }

    // Function to display products in the container
    function displayProducts() {
        var productContainer = document.getElementById("product-container");

        // Iterate over the products array and create product elements
        for (var i = 0; i < products.length; i++) {
            var product = products[i];
            var productElement = createProductElement(product);
            productContainer.appendChild(productElement);
        }
    }

    // Call the displayProducts function when the page loads
    window.onload = function () {
        displayProducts();
    };
