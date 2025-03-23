import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import './Styles/RecipeCard.css';
>>>>>>> 84cd9ff2ee14e6dab8f1c2916efd37c47f76deae

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} width={200}/>
      <h3>{recipe.strMeal}</h3>
      <Link to={`/recipe/${recipe.idMeal}`}>View Details</Link>
    </div>
  );
};

export default RecipeCard;
