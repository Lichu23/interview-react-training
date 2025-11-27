import React, { useEffect, useState } from "react";
const products = [
  { id: 1, name: "Mouse", price: 25 },
  { id: 2, name: "Keyboard", price: 80 },
  { id: 3, name: "Monitor", price: 200 },
  { id: 4, name: "USB Cable", price: 10 },
];

export default function ProductList() {
  const [cart, setCart] = useState([]);
  const [selectValue, setSelectValue] = useState("Default");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const totalProducts = cart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  console.log(totalProducts);
  console.log(cart);
  function addProduct(productId) {
    const existProduct = cart.find((product) => product.id === productId);
    if (existProduct) {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      const newProduct = products.find((product) => product.id === productId);
      setCart((prevCart) => [...prevCart, { ...newProduct, quantity: 1 }]);
    }
  }

  useEffect(() => {
    let copy = [...products];

    if (selectValue === "low") {
      copy = copy.sort((a, b) => a.price - b.price);
      setFilteredProducts(copy);
    } else if (selectValue === "high") {
      copy = copy.sort((a, b) => b.price - a.price);
      setFilteredProducts(copy);
    } else if (selectValue === "A-Z") {
      copy = copy.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
      setFilteredProducts(copy);
    } else {
      setFilteredProducts(products);
    }
  }, [selectValue]);

  return (
    <div>
      <h1>ProductList</h1>
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="high">High</option>
        <option value="low">Low</option>
        <option value="A-Z">A-Z</option>
      </select>
      <p>Items in cart: {totalProducts}</p>
      <p>Total price: {totalPrice}</p>

      {filteredProducts.length === 0 ? (
        <p>No hay product aun</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}{" "}
              <button onClick={() => addProduct(product.id)}>+</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
