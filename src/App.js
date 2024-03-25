import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editTaskText, setEditTaskText] = useState('');

  const addTask = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, inputTask]);
      setInputTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEdit = (index) => {
    setEditTaskIndex(index);
    setEditTaskText(tasks[index]);
  };

  const saveEditedTask = () => {
    const newTasks = [...tasks];
    newTasks[editTaskIndex] = editTaskText;
    setTasks(newTasks);
    setEditTaskIndex(null);
    setEditTaskText('');
  };

  return (
    <div className="App">
      <div className="container">
        <h1>To-Do List</h1>
        <div className="task-input">
          <input
            type="text"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            placeholder="Enter a task..."
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              {editTaskIndex === index ? (
                <input
                  type="text"
                  value={editTaskText}
                  onChange={(e) => setEditTaskText(e.target.value)}
                />
              ) : (
                <span>{task}</span>
              )}
              <div>
                {editTaskIndex === index ? (
                  <button onClick={saveEditedTask}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(index)}>Edit</button>
                )}
                <button onClick={() => removeTask(index)}>Done!</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
