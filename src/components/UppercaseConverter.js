import React, { useState } from 'react';

const UppercaseConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');

  const handleButtonClick = () => {
    let convertedValue = '';

    for (let i = 0; i < inputValue.length; i++) {
      const currentChar = inputValue[i];

      if (currentChar === currentChar.toUpperCase()) {

        convertedValue += currentChar.toLowerCase();
      } else {

        convertedValue += currentChar.toUpperCase();
      }
    }

    setResultValue(convertedValue);
  };

  return (
    <div style={{ backgroundColor: 'pink', padding: '20px', alignItems: 'center' }}>
      <h1>UPPERCASE CONVERTER</h1>
      <label>
        Input:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <br />
      <label>
        Result:
        <input type="text" value={resultValue} readOnly />
      </label>
      <br />
      <button onClick={handleButtonClick}>Convert Case</button>
    </div>
  );
};

export default UppercaseConverter;
