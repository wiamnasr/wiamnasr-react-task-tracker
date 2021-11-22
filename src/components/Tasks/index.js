import React from "react";
import Task from "../Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        // Passing in each task as a prop
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
