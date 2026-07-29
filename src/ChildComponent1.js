import React from 'react';

function ChildComponent1({ onSelect, selectedOption }) {
  return (
    <div style={{
      padding: '1.5rem',
      background: '#f0f4ff',
      borderRadius: '1rem',
      border: '2px solid #dbe7ff',
      textAlign: 'center'
    }}>
      <h3 style={{
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#1a1a2e',
        marginBottom: '0.5rem'
      }}>
        🟦 Child Component 1
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
          onClick={() => onSelect('Option A')}
          style={{
            padding: '0.7rem',
            background: selectedOption === 'Option A' ? '#2563eb' : '#e2e8f0',
            color: selectedOption === 'Option A' ? 'white' : '#1a1a2e',
            border: selectedOption === 'Option A' ? '2px solid #2563eb' : '2px solid #cbd5e1',
            borderRadius: '50px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          Option A {selectedOption === 'Option A' && '✓'}
        </button>

        <button
          onClick={() => onSelect('Option B')}
          style={{
            padding: '0.7rem',
            background: selectedOption === 'Option B' ? '#2563eb' : '#e2e8f0',
            color: selectedOption === 'Option B' ? 'white' : '#1a1a2e',
            border: selectedOption === 'Option B' ? '2px solid #2563eb' : '2px solid #cbd5e1',
            borderRadius: '50px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          Option B {selectedOption === 'Option B' && '✓'}
        </button>

        <button
          onClick={() => onSelect('Option C')}
          style={{
            padding: '0.7rem',
            background: selectedOption === 'Option C' ? '#2563eb' : '#e2e8f0',
            color: selectedOption === 'Option C' ? 'white' : '#1a1a2e',
            border: selectedOption === 'Option C' ? '2px solid #2563eb' : '2px solid #cbd5e1',
            borderRadius: '50px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          Option C {selectedOption === 'Option C' && '✓'}
        </button>
      </div>

      <div style={{
        marginTop: '1rem',
        fontSize: '0.7rem',
        color: '#6b7d92',
        background: '#e8eeff',
        padding: '0.3rem 0.8rem',
        borderRadius: '50px',
        display: 'inline-block'
      }}>
        Status: {selectedOption === 'Option A' || selectedOption === 'Option B' || selectedOption === 'Option C' 
          ? `Selected ${selectedOption}` : 'No selection'}
      </div>
    </div>
  );
}

export default ChildComponent1;
