import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/';

// Function to search recipes by name or ingredient
export const searchRecipes = async (query) => {
  try {
    const response = await axios.get(`${API_URL}search.php?s=${query}`);
    return response.data.meals || [];  // Return the list of meals, or an empty array if no meals are found
  } catch (error) {
    console.error("Error searching recipes:", error);
    throw error;
  }
};

// Function to get details of a specific recipe by ID
export const getRecipeDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}lookup.php?i=${id}`);
    return response.data.meals[0] || null;  // Return the meal details or null if not found
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    throw error;
  }
};

// Function to get all categories (e.g., vegetarian, vegan, etc.)
export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}categories.php`);
    return response.data.categories || [];  // Return the categories list
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Function to get recipes by category (e.g., vegetarian, vegan)
export const getRecipesByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}filter.php?c=${category}`);
    return response.data.meals || [];  // Return the list of meals for the given category
  } catch (error) {
    console.error(`Error fetching recipes by category (${category}):`, error);
    throw error;
  }
};
