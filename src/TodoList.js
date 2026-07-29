import React from 'react';

function TodoList({ todos, onComplete }) {
  return (
    <div style={{
      background: '#f8f9fa',
      borderRadius: '1rem',
      padding: '1.5rem',
      minHeight: '200px'
    }}>
      {todos.length === 0 ? (
        <div style={{
          textAlign: 'center',
          color: '#6b7d92',
          padding: '2rem 0'
        }}>
          🎉 No todos left! All tasks completed.
        </div>
      ) : (
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.8rem 1rem',
                marginBottom: '0.5rem',
                background: todo.completed ? '#e8f5e9' : 'white',
                borderRadius: '0.8rem',
                border: todo.completed ? '1px solid #a5d6a7' : '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                opacity: todo.completed ? 0.8 : 1
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                flex: 1
              }}>
                {/* Status indicator */}
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: todo.completed ? '#4caf50' : '#e0e0e0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: 'white',
                  flexShrink: 0
                }}>
                  {todo.completed && '✓'}
                </div>

                {/* Todo text */}
                <span style={{
                  fontSize: '1rem',
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#6b7d92' : '#1a1a2e',
                  wordBreak: 'break-word'
                }}>
                  {todo.text}
                </span>
              </div>

              {/* Complete button - only shown if not completed */}
              {!todo.completed ? (
                <button
                  onClick={() => onComplete(todo.id)}
                  style={{
                    padding: '0.4rem 1rem',
                    background: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    marginLeft: '0.5rem'
                  }}
                  onMouseOver={(e) => e.target.style.background = '#218838'}
                  onMouseOut={(e) => e.target.style.background = '#28a745'}
                >
                  Complete ✓
                </button>
              ) : (
                <span style={{
                  fontSize: '0.8rem',
                  color: '#28a745',
                  fontWeight: '600',
                  background: '#e8f5e9',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '50px'
                }}>
                  Done ✅
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
