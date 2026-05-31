
import React, { useState } from "react";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
    { id: 3, text: "Read a chapter", completed: false },
  ]);

  
  const handleComplete = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: true } : t))
    );
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>Todo List</h2>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}
