import React from 'react';
<<<<<<< HEAD
=======
import './Styles/Header.css';
>>>>>>> 84cd9ff2ee14e6dab8f1c2916efd37c47f76deae

const Filters = ({ categories, onFilterChange }) => {
  return (
    <div className="filters">
      <select onChange={(e) => onFilterChange(e.target.value)}>
<<<<<<< HEAD
        <option value="">Filter by Category</option>
=======
        <option value="" id='dropdown'>Filter by Category</option>
>>>>>>> 84cd9ff2ee14e6dab8f1c2916efd37c47f76deae
        {categories.map((category) => (
          <option key={category.strCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
