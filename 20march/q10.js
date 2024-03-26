function filterProductsByCategory(products) {
    // Return a function that filters products by category
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

// Example usage:
const productsArray = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'T-Shirt', category: 'Clothing' },
    { name: 'Smartphone', category: 'Electronics' },
    { name: 'Jeans', category: 'Clothing' }
];

const filterByCategory = filterProductsByCategory(productsArray);

// Filter products by 'Electronics' category
const electronicsProducts = filterByCategory('Electronics');
console.log(electronicsProducts);
// Output: [{ name: 'Laptop', category: 'Electronics' }, { name: 'Smartphone', category: 'Electronics' }]

// Filter products by 'Clothing' category
const clothingProducts = filterByCategory('Clothing');
console.log(clothingProducts);
// Output: [{ name: 'T-Shirt', category: 'Clothing' }, { name: 'Jeans', category: 'Clothing' }]
