import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>

          {todo.completed ? (
            <span> Completed</span>
          ) : (
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
