import React from "react";

// Icons - font awesome
import { FaTimes } from "react-icons/fa";

// Styles
import { Wrapper } from "./Task.styles";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <Wrapper
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </Wrapper>
  );
};

export default Task;
