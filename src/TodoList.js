// src/TodoList.js
import React from "react";
import PropTypes from "prop-types";

export default function TodoList({ todos, handleComplete, handleToggle }) {
  if (!todos || todos.length === 0) return <p>No todos yet.</p>;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ marginBottom: 8 }}>
          <span style={{ textDecoration: todo.completed ? "line-through" : "none", marginRight: 12 }}>
            {todo.text}
          </span>

          {/* If completed show label else show Complete button */}
          {todo.completed ? (
            <span style={{ color: "green", fontWeight: 600 }}>Completed</span>
          ) : (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}

          {/* Optional toggle button if you passed handleToggle */}
          {handleToggle && (
            <button style={{ marginLeft: 8 }} onClick={() => handleToggle(todo.id)}>
              Toggle
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func,
};
