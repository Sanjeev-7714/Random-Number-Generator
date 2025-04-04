import React, { useState } from 'react';

const RandomNumberGenerator = () => {
  // State to store the three random numbers
  const [numbers, setNumbers] = useState([null, null, null]);
  
  // Function to generate three random numbers between 1 and 100
  const generateRandomNumbers = () => {
    const newNumbers = Array(3)
      .fill()
      .map(() => Math.floor(Math.random() * 100) + 1);
    
    setNumbers(newNumbers);
  };

  // Styles object
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '1rem',
      background: 'linear-gradient(to bottom right, #7e57c2, #2962ff)',
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      boxSizing: 'border-box',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      maxWidth: '500px',
      width: '100%'
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#333'
    },
    button: {
      width: '100%',
      padding: '0.75rem 1.5rem',
      backgroundColor: '#7e3fce',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '1.1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      marginBottom: '2rem'
    },
    numbersContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    },
    numberBox: {
      textAlign: 'center',
      margin: '0.5rem'
    },
    numberCircle: {
      backgroundColor: '#f5f5f5',
      borderRadius: '50%',
      height: '6rem',
      width: '6rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.5rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    numberText: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#333'
    },
    numberLabel: {
      fontSize: '0.875rem',
      color: '#666',
      margin: '0'
    },
    instructionText: {
      textAlign: 'center',
      color: '#777',
      marginTop: '2rem',
      fontSize: '0.875rem'
    }
  };

  // Add global styles to document
  React.useEffect(() => {
    // Create a style element
    const style = document.createElement('style');
    // Add CSS rules to remove margins and padding
    style.innerHTML = `
      body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
      }
      #root {
        height: 100%;
        width: 100%;
      }
    `;
    // Append style to document head
    document.head.appendChild(style);
    
    // Clean up function
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Random Number Generator</h1>
        
        <button 
          onClick={generateRandomNumbers}
          style={styles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = '#6a2dad'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#7e3fce'}
        >
          Generate Random Numbers
        </button>
        
        <div style={styles.numbersContainer}>
          {numbers.map((number, index) => (
            <div key={index} style={styles.numberBox}>
              <div style={styles.numberCircle}>
                <span style={styles.numberText}>
                  {number !== null ? number : '?'}
                </span>
              </div>
              <p style={styles.numberLabel}>Number {index + 1}</p>
            </div>
          ))}
        </div>
        
        <p style={styles.instructionText}>
          Click the button above to generate three random numbers between 1 and 100.
        </p>
      </div>
    </div>
  );
};

export default RandomNumberGenerator;