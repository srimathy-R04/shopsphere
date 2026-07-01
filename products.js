const productContainer = document.querySelector(".product-container");

function displayProducts(productList){

productContainer.innerHTML="";

productList.forEach(product=>{

productContainer.innerHTML+=`

<div class="card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.category}</p>

<p class="price">₹${product.price}</p>

<button onclick="addToCart('${product.name}')">
Add to Cart
</button>

</div>

`;

});

}

displayProducts(products);

function addToCart(name){

alert(name+" added to cart successfully!");

}