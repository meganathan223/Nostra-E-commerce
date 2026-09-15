// product list
const products = [
    {
        id: 1,
        name: "Formal Shirt",
        category: "formal",
        price: 45,
        color: "white",
        rating: 4.5,
        img: "./images/collections/c1.jpg"
    },
    { id: 2, name: "Formal Shirt", category: "formal", price: 149, color: "red", rating: 4.8, img: "./images/collections/c2.jpg" },
    { id: 3, name: "Formal Shirt", category: "formal", price: 25, color: "green", rating: 4.2, img: "./images/collections/c3.jpg" },
    { id: 4, name: "Casual Shirt", category: "casual", price: 35, color: "blue", rating: 4.0, img: "./images/collections/f2.jpg" },
    { id: 5, name: "Casual Shirt", category: "casual", price: 120, color: "blue", rating: 4.7, img: "./images/collections/f1.jpg" },
    { id: 6, name: "Casual Shirt", category: "casual", price: 29, color: "white", rating: 4.4, img: "./images/collections/f3.jpg" }
];

// Elements Selectors
const searchInput = document.getElementById("search-input");

const categoryRadios = document.getElementsByName("category");

const priceSlider = document.getElementById("price-range");
const priceValueText = document.getElementById("price-val");

const colorCheckboxes = document.getElementsByName("color");

const resetBtn = document.getElementById("reset-filters");

const grid = document.getElementById("product-grid");
const noProductsMsg = document.getElementById("no-products");

// Render Products Grid System
function displayProducts(filteredProducts) {
    grid.innerHTML = "";

    if (filteredProducts.length === 0) {
        noProductsMsg.classList.remove("hide");
        return;
    }

    noProductsMsg.classList.add("hide");

    filteredProducts.forEach(product => {
        const cardHtml = `
            <article class="product-card">
                <div class="img-container">
                    <img src="${product.img}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h4 class="product-title">${product.name}</h4>
                    <div class="product-meta">
                        <span class="product-price">₹${product.price}</span>
                        <div class="rating-stars">★★★★★ (${product.rating})</div>
                    </div>
                </div>
            </article>
        `;
        grid.insertAdjacentHTML("beforeend", cardHtml);//
    });
}
displayProducts(products);



// Bind Application Event Observers 
searchInput.addEventListener("input", applyFilters);
priceSlider.addEventListener("input", applyFilters);
categoryRadios.forEach(radio => radio.addEventListener("change", applyFilters));
colorCheckboxes.forEach(checkbox => checkbox.addEventListener("change", applyFilters));

// Reset Application Controls Configuration State
resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    priceSlider.value = priceSlider.max;
    categoryRadios[0].checked = true; // resets to "All"
    colorCheckboxes.forEach(checkbox => checkbox.checked = false);
    applyFilters();
});

// Master Filtering System Logic
function applyFilters() {
    // 1. Fetch Search Input Term
    const searchTerm = searchInput.value.toLowerCase().trim();

    // 2. Fetch Selected Category
    let selectedCategory = "all";
    for (const radio of categoryRadios) {
        if (radio.checked) {
            selectedCategory = radio.value;
            break; //
        }
    }

    // 3. Fetch Maximum Price Bound
    const maxPrice = parseFloat(priceSlider.value);
    priceValueText.textContent = `₹${maxPrice}`;

    // 4. Fetch Selected Array of Color Checkboxes
    const selectedColors = Array.from(colorCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    // Apply Filter Matrix Arrays Logic
    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        const matchesPrice = product.price <= maxPrice;
        const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);

        return matchesSearch && matchesCategory && matchesPrice && matchesColor;//
    });

    displayProducts(filtered);
}




