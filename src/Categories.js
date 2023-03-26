import React from "react";

const Categories = ({ categories, select }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="btn"
            className="filter-btn"
            key={category}
            onClick={() => select(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
