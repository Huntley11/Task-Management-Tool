import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [progressList, setProgressList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const handleClick = () => {
    const id = todoList.length + 1;
    const newTask = {
      id: id,
      task: input,
      complete: false,
    };
    setTodoList(prev => [...prev, newTask]);
    setInput('');
  };

  const handleMoveToProgress = id => {
    const task = todoList.find(task => task.id === id);
    if (task) {
      setProgressList(prev => [...prev, task]);
      setTodoList(prev => prev.filter(task => task.id !== id));
    }
  };

  const handleMoveToCompleted = id => {
    const task = progressList.find(task => task.id === id);
    if (task) {
      setCompletedList(prev => [...prev, task]);
      setProgressList(prev => prev.filter(task => task.id !== id));
    }
  };

  return (
    <div className="App">
      <div className="lists-container">
        <div className="todo-list">
          <h2>Todo List</h2>
          <input value={input} onChange={e => setInput(e.target.value)} />
          <button onClick={handleClick}>Add</button>
          <ul id='todoList'>
            {todoList.map(todo => (
              <li key={todo.id}>
                {todo.task}
                <button onClick={() => handleMoveToProgress(todo.id)}>Move to Progress</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="progress-list">
          <h2>Progress List</h2>
          <ul id='progress'>
            {progressList.map(task => (
              <li key={task.id}>
                {task.task}
                <button onClick={() => handleMoveToCompleted(task.id)}>Move to Completed</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="completed-list">
          <h2>Completed List</h2>
          <ul id='completed'>
            {completedList.map(task => (
              <li key={task.id}>{task.task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
