import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

function App() {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState('None');

  // Handler function to update the selected option
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent" style={{
      maxWidth: '700px',
      margin: '50px auto',
      padding: '2.5rem',
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
        🔄 Lift State Up 3
      </h1>
      <p style={{ 
        color: '#4a5b6e',
        marginBottom: '2rem',
        borderLeft: '3px solid #3b82f6',
        paddingLeft: '0.75rem'
      }}>
        Parent manages state · Two children update it
      </p>

      {/* Display the currently selected option */}
      <div style={{
        padding: '1rem',
        marginBottom: '2rem',
        background: '#f8f9fa',
        borderRadius: '1rem',
        textAlign: 'center',
        border: '2px solid #e2e8f0'
      }}>
        <span style={{ fontSize: '0.9rem', color: '#6b7d92' }}>
          Selected Option:
        </span>
        <span style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700',
          color: selectedOption !== 'None' ? '#2563eb' : '#1a1a2e',
          marginLeft: '0.5rem'
        }}>
          {selectedOption}
        </span>
      </div>

      {/* Two child components */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem'
      }}>
        <ChildComponent1 
          onSelect={handleOptionSelect}
          selectedOption={selectedOption}
        />
        <ChildComponent2 
          onSelect={handleOptionSelect}
          selectedOption={selectedOption}
        />
      </div>

      {/* Reset button */}
      <button
        onClick={() => handleOptionSelect('None')}
        style={{
          marginTop: '2rem',
          padding: '0.7rem',
          width: '100%',
          background: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          fontSize: '0.95rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
      >
        Reset Selection
      </button>

      <div style={{
        marginTop: '1.5rem',
        fontSize: '0.8rem',
        color: '#6b7d92',
        textAlign: 'center',
        borderTop: '1px solid #e2e8f0',
        paddingTop: '1.2rem'
      }}>
        ⚡ Click buttons in either child to update parent state
      </div>
    </div>
  );
}

export default App;
