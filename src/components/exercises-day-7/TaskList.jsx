import React, { useState } from "react";

export default function TaskList() {
  const initialTasks = [
    { id: 1, title: "Aprender React", done: true },
    { id: 2, title: "Practicar entrevistas", done: false },
    { id: 3, title: "Enviar CVs", done: false },
  ];

  const [filteredTasks, setFilteredTasks] = useState(initialTasks);
  const [showCompleted, setShowCompleted] = useState(false);

  function tasksCompleted() {
    if (showCompleted) {
        setFilteredTasks(initialTasks)
      setShowCompleted(false);
    } else {
      const filter = initialTasks.filter((task) => task.done);

      setFilteredTasks(filter);
      setShowCompleted(true);
    }
  }

  return (
    <div>
      <h1>Tasks</h1>
      <button onClick={tasksCompleted}>{showCompleted ? <p>Show Tasks Completed</p> : <p>Show All Tasks</p>}</button>
      {showCompleted ? <h2>Tasks Completed</h2> : <h2>Tasks</h2>}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
