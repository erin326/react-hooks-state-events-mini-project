import React from "react";

function CategoryFilter({ categories, onCategoryClick }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(item => (
        <button  type="text" key={item} onClick={onCategoryClick} >{item}</button> 
      ))}
    </div>
  );
}

export default CategoryFilter;
