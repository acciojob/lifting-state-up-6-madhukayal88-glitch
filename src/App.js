import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Project", completed: false },
    { id: 3, text: "Practice Coding", completed: false }
  ]);

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: true }
        : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <TodoList
        todos={todos}
        handleComplete={handleComplete}
      />
    </div>
  );
}

export default App;
