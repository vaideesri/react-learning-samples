import React, { useState } from 'react'

function Usestatehook() {
  let [count,setcount]=useState(100);
  const increment=()=>{
    setcount(count+3);
  }
  const decrement=()=>{
    setcount(count-3);
  }

  return (
    <div>
      <h3>{`the value is ${count}`}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Usestatehook
