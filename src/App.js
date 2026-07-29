import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

function App() {
  const [selectedOption, setSelectedOption] = useState('None');

  return (
    <div className="parent" style={{
      maxWidth: '700px',
      margin: '50px auto',
      padding: '2.5rem',
      background: 'white',
      borderRadius: '1.5rem',
      boxShadow: '0 20px 40px -12px rgba(0, 20, 30, 0.15)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🔄 Lift State Up 3</h1>
      <p>Parent manages state · Two children update it</p>

      <div style={{
        padding: '1rem',
        marginBottom: '2rem',
        background: '#f8f9fa',
        borderRadius: '1rem',
        textAlign: 'center',
        border: '2px solid #e2e8f0'
      }}>
        <h2>Selected Option: {selectedOption}</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem'
      }}>
        <ChildComponent1 
          selectedOption={selectedOption} 
          setSelectedOption={setSelectedOption} 
        />
        <ChildComponent2 
          selectedOption={selectedOption} 
          setSelectedOption={setSelectedOption} 
        />
      </div>

      <button
        onClick={() => setSelectedOption('None')}
        style={{
          marginTop: '2rem',
          padding: '0.7rem',
          width: '100%',
          background: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          fontSize: '1rem',
          cursor: 'pointer'
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
