const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 },
  { id: 4, name: "Monitor", price: 300 },
];

function getExpensiveProducts(products, minPrice) {

    const filterProducts = products.filter((product) => product.price > minPrice)

    console.log(filterProducts)
}

getExpensiveProducts(products, 100)
