import React from 'react';

function ChildComponent2({ onSelect, selectedOption }) {
  return (
    <div style={{
      padding: '1.5rem',
      background: '#f5f0ff',
      borderRadius: '1rem',
      border: '2px solid #e4d5ff',
      textAlign: 'center'
    }}>
      <h3 style={{
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#1a1a2e',
        marginBottom: '0.5rem'
      }}>
        🟪 Child Component 2
      </h3>
      <p style={{
        fontSize: '0.85rem',
        color: '#4a5b6e',
        marginBottom: '1rem'
      }}>
        Click a button to update parent state
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.7rem'
      }}>
        <button
          onClick={() => onSelect('Option X')}
          style={{
            padding: '0.7rem',
            background: selectedOption === 'Option X' ? '#7c3aed' : '#e2e8f0',
            color: selectedOption === 'Option X' ? 'white' : '#1a1a2e',
            border: selectedOption === 'Option X' ? '2px solid #7c3aed' : '2px solid #cbd5e1',
            borderRadius: '50px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          Option X {selectedOption === 'Option X' && '✓'}
        </button>

        <button
          onClick={() => onSelect('Option Y')}
          style={{
            padding: '0.7rem',
            background: selectedOption === 'Option Y' ? '#7c3aed' : '#e2e8f0',
            color: selectedOption === 'Option Y' ? 'white' : '#1a1a2e',
            border: selectedOption === 'Option Y' ? '2px solid #7c3aed' : '2px solid #cbd5e1',
            borderRadius: '50px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          Option Y {selectedOption === 'Option Y' && '✓'}
        </button>

        <button
          onClick={() => onSelect('Option Z')}
          style={{
            padding: '0.7rem',
            background: selectedOption === 'Option Z' ? '#7c3aed' : '#e2e8f0',
            color: selectedOption === 'Option Z' ? 'white' : '#1a1a2e',
            border: selectedOption === 'Option Z' ? '2px solid #7c3aed' : '2px solid #cbd5e1',
            borderRadius: '50px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          Option Z {selectedOption === 'Option Z' && '✓'}
        </button>
      </div>

      <div style={{
        marginTop: '1rem',
        fontSize: '0.7rem',
        color: '#6b7d92',
        background: '#ede5ff',
        padding: '0.3rem 0.8rem',
        borderRadius: '50px',
        display: 'inline-block'
      }}>
        Status: {selectedOption === 'Option X' || selectedOption === 'Option Y' || selectedOption === 'Option Z' 
          ? `Selected ${selectedOption}` : 'No selection'}
      </div>
    </div>
  );
}

export default ChildComponent2;
