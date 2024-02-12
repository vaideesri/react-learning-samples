import React, { useState } from 'react';

function Sumofseries() {
  const [Value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const calculateSum = () => {
    const n = Value;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }

    setResult(sum);
  };

  return (
    
    <div style={{backgroundColor:"grey", padding:"20px"}}>
        <h1>Sum Of Series</h1>
      <label>value: <input type="text" value={Value} onChange={handleInputChange} />
      </label><br/>
      <label>Result:
        <input type="text" value={result} readOnly />
      </label><br/>
      <button onClick={calculateSum}>Calculate</button>
    </div>
  );
}

export default Sumofseries;
