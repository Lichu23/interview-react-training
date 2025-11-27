import React, { useEffect, useState } from "react";

export default function FavoritesProducts() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", favorite: false },
    { id: 2, name: "Mouse", favorite: true },
    { id: 3, name: "Headphones", favorite: false },
    { id: 4, name: "Keyboard", favorite: false },
  ]);
  const favorites = products.filter((product) => product.favorite === true);
  const [isInitialized, setIsInitialized] = useState(false);

  function favoriteProduct(productId) {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, favorite: !product.favorite }
          : product
      )
    );
  }
  useEffect(() => {
    const stored = localStorage.getItem("favorites");

    if (stored) {
      const favIds = JSON.parse(stored);
      setProducts((prev) =>
        prev.map((p) =>
          favIds.includes(p.id)
            ? { ...p, favorite: true }
            : { ...p, favorite: false }
        )
      );
    }
    setIsInitialized(true)

  }, []);

  useEffect(() => {
        if (!isInitialized) return; // ⛔ evita sobrescribir al cargar

    const favIds = products
      .filter((product) => product.favorite)
      .map((product) => product.id);
    localStorage.setItem("favorites", JSON.stringify(favIds));
  }, [products, isInitialized]);

  return (
    <div>
      <h1>FavoritesProducts</h1>

      {products.length === 0 ? (
        <p>Aun no hay productos</p>
      ) : (
        <>
          <ul>
            {products.map((product) => (
              <li
                style={{ flexDirection: "row", flex: 1 }}
                key={product.id}
                onClick={() => favoriteProduct(product.id)}
              >
                {product.name}
                {product.favorite ? <p>⭐</p> : ""}
              </li>
            ))}
          </ul>

          <p>
            Favorites: {favorites.length} / {products.length}
          </p>
        </>
      )}
    </div>
  );
}
