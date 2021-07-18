import React from "react";
import Task from './Task';

function TaskList({ tasks, setTasks, category, submittedData }) {

  const newArray = tasks.filter(task => {
    if(category === "All") {
      return true; 
    }else {
      return task.category === category;
    }
  })
  const displayTasks = newArray.map(task => <Task key={task.text} text={task.text} category={task.category} onDelete={handleDelete} /> )
 
  
  function handleDelete(string) {
    const newTasksArray = tasks.filter(task => {
      // console.log(key);

      return task.text !== string});
    
    
    setTasks(newTasksArray);
    
  }


  return (
    <div className="tasks">
      {displayTasks}
      {submittedData.map(data => (
        <Task key={data.id} text={data.text} category={data.category} onDelete={handleDelete} />
      ))}
      
    </div>
  );
}

export default TaskList;
