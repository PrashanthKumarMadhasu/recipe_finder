import React from 'react';

const Filters = ({ categories, onFilterChange }) => {
  return (
    <div className="filters">
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">Filter by Category</option>
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
