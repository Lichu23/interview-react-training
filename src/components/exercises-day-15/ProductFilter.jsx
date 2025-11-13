import React, { useEffect, useState } from "react";

export default function ProductFilter() {
  const [search, setSearch] = useState("");
  const [filterSelected, setFilterSelected] = useState("all");
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "Mouse", category: "Electronics", price: 25 },
    { id: 3, name: "Shoes", category: "Clothing", price: 60 },
    { id: 4, name: "T-Shirt", category: "Clothing", price: 20 },
    { id: 5, name: "Coffee", category: "Food", price: 10 },
    { id: 6, name: "Pizza", category: "Food", price: 15 },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = products;

    if (filterSelected !== "all") {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(filterSelected)
      );
    }

    if (search.trim()) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [search, filterSelected]);

 

  function resetFilters() {
    setFilterSelected("all");
    setSearch("");
  }
  return (
    <div>
      <label>Search</label>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />

      <select value={filterSelected} onChange={(e) => setFilterSelected(e.target.value)}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="food">Food</option>
      </select>

      {filteredProducts.length === 0 ? (
        <p>No se encontraron parecidos</p>
      ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
      )}

      <button onClick={resetFilters}>Reset Filters</button>
    </div>
  );
}
