import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import for Routes
import axios from 'axios';
import Header from './Components/Header';
import RecipeSearch from './Components/RecipeSearch';
import RecipeDetail from './Components/RecipeDetail';
import Filters from './Components/Filters';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState('');

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => setCategories(response.data.categories))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <Header />
      <Filters categories={categories} onFilterChange={setFilteredCategory} />
      <Routes>
        <Route path="/" element={<RecipeSearch category={filteredCategory} />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
