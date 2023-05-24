import React, { useState, useEffect } from 'react';
import './App.css';

function TaskCard({ id, header, content, updateTask, deleteTaskCard }) {
  const handleHeaderChange = (e) => {
    updateTask(id, 'header', e.target.value);
  };

  const handleContentChange = (e) => {
    updateTask(id, 'content', e.target.value);
  };

  const handleDelete = () => {
    deleteTaskCard(id);
  };

  return (
    <div className="taskcard">
      <input
        type="text"
        className="task-header"
        placeholder="Enter task "
        value={header}
        onChange={handleHeaderChange}
      />
      <textarea
        className="task-content"
        placeholder="Enter your notes here"
        value={content}
        onChange={handleContentChange}
      />
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTaskCard = () => {
    const newTaskCard = {
      id: Date.now(),
      header: '',
      content: '',
    };
    setTasks([...tasks, newTaskCard]);
  };

  const deleteTaskCard = (id) => {
    const updatedTasks = tasks.filter((taskCard) => taskCard.id !== id);
    setTasks(updatedTasks);
  };

  const updateTask = (id, field, value) => {
    const updatedTasks = tasks.map((taskCard) => {
      if (taskCard.id === id) {
        return { ...taskCard, [field]: value };
      }
      return taskCard;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Board</h1>
      <div className="hold">
        <div className="column" id="column-1">
          <h2>Column 1</h2>
          <div className="taskcard-container">
            {tasks.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                id={taskCard.id}
                header={taskCard.header}
                content={taskCard.content}
                updateTask={updateTask}
                deleteTaskCard={deleteTaskCard}
              />
            ))}
          </div>
        </div>
        <div className="column" id="column-2">
          <h2>Column 2</h2>
          <div className="taskcard-container"></div>
        </div>
        <div className="column" id="column-3">
          <h2>Column 3</h2>
          <div className="taskcard-container"></div>
        </div>
      </div>
      <button className="add-button" onClick={addTaskCard}>
        Add Task
      </button>
    </div>
  );
}

export default App;
