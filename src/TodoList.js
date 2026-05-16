import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
              marginRight: "10px"
            }}
          >
            {todo.text}
          </span>

          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}

          {todo.completed && <span> Completed</span>}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
