import React, { useState, useEffect } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((recipe) => (
            <li key={recipe.idMeal}>{recipe.strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
