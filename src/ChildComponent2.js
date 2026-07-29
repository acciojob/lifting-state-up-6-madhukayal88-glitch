import React from 'react';

function ChildComponent2({ selectedOption, setSelectedOption }) {
  return (
    <div style={{
      padding: '1.5rem',
      background: '#f5f0ff',
      borderRadius: '1rem',
      border: '2px solid #e4d5ff',
      textAlign: 'center'
    }}>
      <h3>🟪 Child Component 2</h3>
      <p>Click a button to update parent state</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        <button 
          onClick={() => setSelectedOption('Option X')}
          style={{
            padding: '0.7rem',
            background: selectedOption === 'Option X' ? '#7c3aed' : '#e2e8f0',
            color: selectedOption === 'Option X' ? 'white' : '#1a1a2e',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Option X {selectedOption === 'Option X' && '✓'}
        </button>
        
        <button 
          onClick={() => setSelectedOption('Option Y')}
          style={{
            padding: '0.7rem',
            background: selectedOption === 'Option Y' ? '#7c3aed' : '#e2e8f0',
            color: selectedOption === 'Option Y' ? 'white' : '#1a1a2e',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Option Y {selectedOption === 'Option Y' && '✓'}
        </button>
        
        <button 
          onClick={() => setSelectedOption('Option Z')}
          style={{
            padding: '0.7rem',
            background: selectedOption === 'Option Z' ? '#7c3aed' : '#e2e8f0',
            color: selectedOption === 'Option Z' ? 'white' : '#1a1a2e',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Option Z {selectedOption === 'Option Z' && '✓'}
        </button>
      </div>
    </div>
  );
}

export default ChildComponent2;
