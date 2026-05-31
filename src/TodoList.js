import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>

          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
