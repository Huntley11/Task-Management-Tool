import React, { useState } from 'react';
import './AppTaskCard.css';

function TaskCard({ id, header, content, updateTask, deleteTaskCard, moveToProgress, moveToCompleted, isCompleted }) {
  const handleHeaderChange = (e) => {
    updateTask(id, 'header', e.target.value);
  };

  const handleContentChange = (e) => {
    updateTask(id, 'content', e.target.value);
  };

  const handleDelete = () => {
    deleteTaskCard(id);
  };

  const handleMoveToProgress = () => {
    moveToProgress(id);
  };

  const handleMoveToCompleted = () => {
    moveToCompleted(id);
  };

  return (
    <div className="taskcard">
      <input
        type="text"
        className="task-header"
        placeholder="Enter task header"
        value={header}
        onChange={handleHeaderChange}
      />
      <textarea
        className="task-content"
        placeholder="Enter your task here"
        value={content}
        onChange={handleContentChange}
      />
      {isCompleted ? (
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      ) : (
        <button className="delete-button" disabled>
          Delete
        </button>
      )}
      <button className="progress-button" onClick={handleMoveToProgress}>
        Move to Progress
      </button>
      {moveToCompleted && (
        <button className="completed-button" onClick={handleMoveToCompleted}>
          Move to Completed
        </button>
      )}
    </div>
  );
}




function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [progressList, setProgressList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const updateTask = (id, field, value) => {
    if (field === 'header') {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((task) => {
          if (task.id === id) {
            return { ...task, header: value };
          }
          return task;
        });
        return updatedTasks;
      });
    } else if (field === 'content') {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((task) => {
          if (task.id === id) {
            return { ...task, content: value };
          }
          return task;
        });
        return updatedTasks;
      });
    }
  };

  const deleteTaskCard = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setProgressList((prevProgressList) => prevProgressList.filter((task) => task.id !== id));
    setCompletedList((prevCompletedList) => prevCompletedList.filter((task) => task.id !== id));
  };

  const handleMoveToProgress = (id) => {
    const taskCard = tasks.find((taskCard) => taskCard.id === id);
    if (taskCard) {
      setProgressList((prev) => [...prev, taskCard]);
      setTasks((prev) => prev.filter((taskCard) => taskCard.id !== id));
    }
  };

  /*const handleMoveToTodo = (id) => {
    const taskCard = progressList.find((taskCard) => taskCard.id === id);
    if (taskCard) {
      setTasks((prev) => [...prev, taskCard]);
      setProgressList((prev) => prev.filter((taskCard) => taskCard.id !== id));
    }
  };
*/
  const handleMoveToCompleted = (id) => {
    const taskCard = progressList.find((taskCard) => taskCard.id === id);
    if (taskCard) {
      setCompletedList((prev) => [...prev, taskCard]);
      setProgressList((prev) => prev.filter((taskCard) => taskCard.id !== id));
    }
  };

  const handleMoveToProgressFromCompleted = (id) => {
    const taskCard = completedList.find((taskCard) => taskCard.id === id);
    if (taskCard) {
      setProgressList((prev) => [...prev, taskCard]);
      setCompletedList((prev) => prev.filter((taskCard) => taskCard.id !== id));
    }
  };

  const addTaskCard = () => {
    const newTaskCard = {
      id: tasks.length + 1,
      header: '',
      content: ''
    };
    setTasks((prevTasks) => [...prevTasks, newTaskCard]);
  };

  return (
    <div className="App">
      <div className="lists-container">
        <div className='addtask'>
          <button className="add-button" onClick={addTaskCard}>
            Add Task
          </button>
        </div>
        <div className="todo-list">
          <h2>Todo List</h2>
          <ul id="todo">
            {tasks.map((taskCard) => (
              <TaskCard
                key={taskCard.id}
                id={taskCard.id}
                header={taskCard.header}
                content={taskCard.content}
                updateTask={updateTask}
                deleteTaskCard={deleteTaskCard}
                moveToProgress={handleMoveToProgress}
                moveToCompleted={handleMoveToCompleted}

              />
            ))}
          </ul>
        </div>
        <div className="progress-list">
          <h2>Progress List</h2>
          <ul id="progress">
            {progressList.map((taskCard) => (
              <TaskCard
                key={taskCard.id}
                id={taskCard.id}
                header={taskCard.header}
                content={taskCard.content}
                updateTask={updateTask}
                deleteTaskCard={deleteTaskCard}
                moveToProgress={handleMoveToProgress}
                moveToCompleted={handleMoveToCompleted}

              />
            ))}
          </ul>
        </div>
        <div className="completed-list">
          <h2>Completed List</h2>
          <ul id="completed">
            {completedList.map((taskCard) => (
              <TaskCard
                key={taskCard.id}
                id={taskCard.id}
                header={taskCard.header}
                content={taskCard.content}
                updateTask={updateTask}
                deleteTaskCard={deleteTaskCard}
                moveToProgress={handleMoveToProgressFromCompleted}

                isCompleted={true}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}



export default App;
