import React, { useState } from 'react'


function Ifcondition() {
let [num,setvalue] = useState();
let [OddEven,checkValue]=useState();
const handleInputChange = (e) => {setvalue(e.target.value)};

function Check(){
    if(num % 2 == 0){
      OddEven="Even Number";
    }
    else{
      OddEven="Odd Number";
    }
  checkValue(OddEven);
    
}


return (
  <div style={{backgroundColor:"grey", padding:"20px"}}>
      <h1>ODD or EVEN </h1>
    <label>Value </label>
    <input type='text' name="num" placeholder='Enter a number' onChange={handleInputChange} >
      </input><br/>
    <label>Result</label>
    <input type="text" value={OddEven}></input><br/>
    <button onClick={Check} >Check it</button>

  </div>
)
}

export default Ifcondition
