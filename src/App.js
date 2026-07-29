import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  // State: array of todo items
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Master lifting state up', completed: false },
    { id: 4, text: 'Complete the assignment', completed: false },
    { id: 5, text: 'Review React concepts', completed: false }
  ]);

  // Handler function to mark a todo as completed
  const handleComplete = (id) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id 
          ? { ...todo, completed: true } 
          : todo
      )
    );
  };

  // Handler function to add a new todo (bonus feature)
  const handleAddTodo = (text) => {
    if (text.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Handler function to reset all todos (bonus feature)
  const handleResetTodos = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: false })));
  };

  // Count completed and pending todos
  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      padding: '2rem',
      background: 'white',
      borderRadius: '1.5rem',
      boxShadow: '0 20px 40px -12px rgba(0, 20, 30, 0.15)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: '600',
        marginBottom: '0.25rem',
        color: '#1a1a2e'
      }}>
        📋 Todo List
      </h1>
      <p style={{ 
        color: '#4a5b6e',
        marginBottom: '2rem',
        borderLeft: '3px solid #3b82f6',
        paddingLeft: '0.75rem'
      }}>
        Parent manages state · Child displays and updates
      </p>

      {/* Stats */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1.5rem',
        padding: '0.8rem',
        background: '#f8f9fa',
        borderRadius: '0.8rem',
        justifyContent: 'space-around'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a2e' }}>
            {todos.length}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#6b7d92' }}>Total</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#dc3545' }}>
            {pendingCount}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#6b7d92' }}>Pending</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#28a745' }}>
            {completedCount}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#6b7d92' }}>Completed</div>
        </div>
      </div>

      {/* Child Component - receives todos and handler */}
      <TodoList 
        todos={todos} 
        onComplete={handleComplete}
      />

      {/* Add Todo (Bonus Feature) */}
      <div style={{
        marginTop: '1.5rem',
        paddingTop: '1.5rem',
        borderTop: '2px solid #f0f2f5'
      }}>
        <form onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.elements.newTodo;
          handleAddTodo(input.value);
          input.value = '';
        }} style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
          <input
            name="newTodo"
            placeholder="Add a new todo..."
            style={{
              flex: 1,
              padding: '0.7rem 1rem',
              border: '2px solid #dce1e9',
              borderRadius: '50px',
              fontSize: '0.95rem',
              outline: 'none',
              transition: '0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#dce1e9'}
          />
          <button
            type="submit"
            style={{
              padding: '0.7rem 1.5rem',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: '0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#1d4ed8'}
            onMouseOut={(e) => e.target.style.background = '#2563eb'}
          >
            Add
          </button>
        </form>
        <button
          onClick={handleResetTodos}
          style={{
            marginTop: '0.8rem',
            padding: '0.5rem 1rem',
            background: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            fontSize: '0.85rem',
            cursor: 'pointer',
            transition: '0.2s',
            width: '100%'
          }}
          onMouseOver={(e) => e.target.style.background = '#5a6268'}
          onMouseOut={(e) => e.target.style.background = '#6c757d'}
        >
          Reset All Todos
        </button>
      </div>

      <div style={{
        marginTop: '1.5rem',
        fontSize: '0.8rem',
        color: '#6b7d92',
        textAlign: 'center',
        borderTop: '1px solid #e2e8f0',
        paddingTop: '1.2rem'
      }}>
        ⚡ State lifted up · Parent controls todo completion
      </div>
    </div>
  );
}

export default App;
