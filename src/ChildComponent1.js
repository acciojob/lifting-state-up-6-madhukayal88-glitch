import React from 'react';

function ChildComponent1({ selectedOption, setSelectedOption }) {
  return (
    <div style={{
      padding: '1.5rem',
      background: '#f0f4ff',
      borderRadius: '1rem',
      border: '2px solid #dbe7ff',
      textAlign: 'center'
    }}>
      <h3>🟦 Child Component 1</h3>
      <p>Click a button to update parent state</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        <button 
          onClick={() => setSelectedOption('Option A')}
          style={{
            padding: '0.7rem',
            background: selectedOption === 'Option A' ? '#2563eb' : '#e2e8f0',
            color: selectedOption === 'Option A' ? 'white' : '#1a1a2e',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Option A {selectedOption === 'Option A' && '✓'}
        </button>
        
        <button 
          onClick={() => setSelectedOption('Option B')}
          style={{
            padding: '0.7rem',
            background: selectedOption === 'Option B' ? '#2563eb' : '#e2e8f0',
            color: selectedOption === 'Option B' ? 'white' : '#1a1a2e',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Option B {selectedOption === 'Option B' && '✓'}
        </button>
        
        <button 
          onClick={() => setSelectedOption('Option C')}
          style={{
            padding: '0.7rem',
            background: selectedOption === 'Option C' ? '#2563eb' : '#e2e8f0',
            color: selectedOption === 'Option C' ? 'white' : '#1a1a2e',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Option C {selectedOption === 'Option C' && '✓'}
        </button>
      </div>
    </div>
  );
}

export default ChildComponent1;
