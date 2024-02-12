import React from 'react'
import { useState } from 'react';
const Swapping = () => {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');

  const handleInput = () => {
    setInput1Value(input2Value);
    setInput2Value(input1Value);
  };
  return (
    <div>
      <input type="text" value={input1Value} onChange={(e) => setInput1Value(e.target.value)}
      />
      <input type="text" value={input2Value} onChange={(e) => setInput2Value(e.target.value)}
      />
      <button onClick={handleInput}>Swap Values</button>
    </div>
  );
};

export default Swapping;
