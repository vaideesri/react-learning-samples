import React from 'react'

function Numberobj() {
    var num = 77.1234;
         var val = num.toExponential(); 
  return (
    <div>
      {val}<br/>
      {num.toFixed()}<br/>
      {num.toFixed(2)}<br/>
      {num.toPrecision(3)}<br/>4
      {num.toString()}<br/>
      {num.valueOf()}
    </div>
  )
}

export default Numberobj;
