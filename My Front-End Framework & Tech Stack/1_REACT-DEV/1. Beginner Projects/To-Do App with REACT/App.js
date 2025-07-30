import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText.trim() } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="App">
      <div className="todo-container">
        <header className="app-header">
          <h1>Todo List</h1>
          <p className="subtitle">Stay organized and get things done!</p>
        </header>

        <TodoForm onAddTodo={addTodo} />

        <div className="stats">
          <span className="stat">
            Total: <strong>{totalCount}</strong>
          </span>
          <span className="stat">
            Completed: <strong>{completedCount}</strong>
          </span>
          <span className="stat">
            Remaining: <strong>{totalCount - completedCount}</strong>
          </span>
        </div>

        <TodoList
          todos={todos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
        />

        {completedCount > 0 && (
          <button className="clear-completed" onClick={clearCompleted}>
            Clear Completed ({completedCount})
          </button>
        )}

        {todos.length === 0 && (
          <div className="empty-state">
            <p>No todos yet. Add one above to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;