import { useState } from "react";


export default function FavoriteMovies() {
  const initialMovies = [
    { id: 1, title: "Inception", favorite: true },
    { id: 2, title: "Interstellar", favorite: false },
    { id: 3, title: "Titanic", favorite: false },
    { id: 4, title: "Matrix", favorite: false },
  ];
  const [movies, setMovies] = useState(initialMovies);
  const favorites = movies.filter((movie) => movie.favorite === true);

  function favoriteMovie(movieId) {
    const updatedMovies = movies.map((movie) =>
      movie.id === movieId ? { ...movie, favorite: !movie.favorite } : movie
    );

    setMovies(updatedMovies);
  }

  return (
    <div>
      <h1>FavoriteMovies</h1>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}{" "}
            <button onClick={() => favoriteMovie(movie.id)}>
              {movie.favorite ? "⭐ Favorite" : "Not Favorite"}
            </button>
          </li>
        ))}
      </ul>
      <p>{`Tienes ${favorites.length} pelicula/s favorita/s`}</p>
    </div>
  );
}
