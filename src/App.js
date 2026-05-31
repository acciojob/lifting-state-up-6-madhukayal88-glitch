// src/App.js
import React, { useState } from "react";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
    { id: 3, text: "Read a chapter", completed: false },
  ]);

  // Mark as completed (immutable update)
  const handleComplete = (id) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: true } : t))
    );
  };

  // If you want toggle behavior instead of only marking true
  const handleToggle = (id) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo List</h2>
      <TodoList todos={todos} handleComplete={handleComplete} handleToggle={handleToggle} />
    </div>
  );
}
