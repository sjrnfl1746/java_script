const products = [
    {name: "Laptop", price: 1200},
    {name: "Mouse", price: 25},
    {name: "Keyboard", price: 45},
    {name: "Monitor", price: 150}
];

const lowerProducts = products.filter(function (product, index, array) {

    return product.price <= 100;
})

lowerProducts.forEach(function (product) {
    console.log(product.name);
});