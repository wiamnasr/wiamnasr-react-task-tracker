// Components
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

// Hooks
import { useState } from "react";

function App() {
  // Keeping the states at the top level of my app to be able to use it with other components

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "May 7th at 6:50pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "May 8th at 2:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "May 8th at 5:00pm",
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
