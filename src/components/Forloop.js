import React, { useState } from 'react';

function ForLoop() {
  let [count, setCount] = useState(0);
  let output = [];

  let handleInput = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  for (let i = 0; i < count; i++) {
    output.push(<div>item{i + 1}</div>);
  }

  return (
    <div style={{backgroundColor:"pink", padding:"20px"}}>
      <h1>For Loop</h1>
      <button onClick={handleInput}>For Loop</button>
      {output}
    </div>
  );
}

export default ForLoop;
