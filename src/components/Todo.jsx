{/*import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, List, ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Paper style={{ padding: '16px', marginTop: '16px' }}>
        <Typography variant="h4" gutterBottom>
          To-Do List
        </Typography>
        <TextField
          label="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index} dense button onClick={() => handleToggleTask(index)}>
              <Checkbox checked={task.completed} tabIndex={-1} disableRipple />
              <ListItemText primary={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Todo;*/}

import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex w-[270px]">
      <div className="bg-white border-2 border-gray-100 shadow-xl rounded-3xl p-5 w-full max-w-md h-[300px] ">
        <h1 className="text-xl mb-4 font-sans">Daily Checklist</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Task"
          className="border border-gray-300 rounded p-2 w-full mb-4"
        />
        <button
          onClick={handleAddTask}
          className="bg-[#1e1e1e] text-white px-4 py-2 rounded-lg mb-4 w-full"
        >
          Add Task
        </button>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-2 border-b ${task.completed ? 'bg-green-100' : ''}`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTask(index)}
                  className="mr-2"
                />
                <span className={`flex-grow ${task.completed ? 'line-through' : ''}`}>{task.text}</span>
              </div>
              <button
                onClick={() => handleDeleteTask(index)}
                className="text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;