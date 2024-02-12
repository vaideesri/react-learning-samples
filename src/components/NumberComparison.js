import React, { useState } from 'react';

const NumberComparison = () => {
  const [inputValues, setInputValues] = useState([]);
  const [result, setResult] = useState('');

  const handleButtonClick = () => {
    const filteredValues = inputValues.filter((value) => !isNaN(value));

    if (filteredValues.length > 0) {
      const greater = filteredValues.filter((value) => value > 100);
      const less = filteredValues.filter((value) => value < 100);
      setResult(`Numbers greater than 100: ${greater.join(', ')}\nNumbers less than 100: ${less.join(', ')}`);
    } else {
      setResult('Please enter valid numbers.');
    }
  };
  return (
    <div style={{ backgroundColor: 'grey', padding: '20px', alignItems: 'center' }}>
      <h1>NUMBER COMPARISON</h1>
      <label>
        Enter numbers (comma-separated):
        <input
          type="text"
          value={inputValues}
          onChange={(e) => setInputValues(e.target.value.split(','))}/>
      </label>
      <button onClick={handleButtonClick}>Check</button>
      <div>
        <strong>Result:</strong>
        <pre>{result}</pre>
      </div>
    </div>
  );
};

export default NumberComparison;
