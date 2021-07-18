import React from "react";

function NewTaskForm({ categoryData, onTaskFormSubmit, input, onInputChange, onCategoryDropDown, selectedCategory }) {

  const categoryArray = categoryData.filter(category => category !== "All");
  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input value={input} onChange={onInputChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select value={selectedCategory} onChange={onCategoryDropDown} name="category">
         {categoryArray.map(category => (
           <option key={category}>{category}</option>
         ))}
        
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
