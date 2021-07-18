import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList"
import {v4 as uuidv4 } from 'uuid';

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const taskData = TASKS;
  const categoryData = CATEGORIES;
  
  const [tasks, setTasks] = useState(taskData);
  const [category, setCategory] = useState("All");
  const [isActive, setActive] = useState(false)
  const [input, setInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Code');
  const [submittedData, setSubmittedData] = useState([]);

  function handleCategoryClick(event) {
    setCategory(event.target.textContent)
   
    event.target.className = (isActive ? 'selected' : null);
   
    setActive(isActive => !isActive);
  }
  
  function handleCategoryDropDown(event){
    setSelectedCategory(event.target.value);
  }

  function handleSubmit(event) {

    event.preventDefault();

    const formData = {
      id: uuidv4(),
      text: input,
      category: selectedCategory
    }
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    console.log(event.target.value);

  }

  function handleInputChange(event) {
    setInput(event.target.value);
    console.log(event.target.value)
  }
  

   
    
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  categories={categoryData} onCategoryClick={handleCategoryClick} isActive={isActive} />
      <NewTaskForm categoryData={categoryData} onTaskFormSubmit={handleSubmit} input={input} onInputChange={handleInputChange} onCategoryDropDown={handleCategoryDropDown} selectedCategory={selectedCategory} />
      <TaskList tasks={tasks} setTasks={setTasks} category={category} submittedData={submittedData} />
    </div>
  );
}

export default App;
