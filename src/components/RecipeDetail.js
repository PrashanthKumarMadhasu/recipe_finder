import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/globalStyles.css";
import { FaHeart } from "react-icons/fa6";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-detail">
      <div className="header-container">
        <h2>{recipe.strMeal}</h2>
        <FaHeart id="heart-icon" />
      </div>

      <img src={recipe.strMealThumb} alt={recipe.strMeal} id="recipe-img" />
      <p id="recipe-info">{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;
