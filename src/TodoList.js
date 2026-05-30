import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>

          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>
              complete
            </button>
          )}

          {todo.completed && <span> completed</span>}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
