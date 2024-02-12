import React, { useState } from 'react'

function Whileloop() {
//   let i=0
//   while(i<5){
//     console.log("the value of i is ", i)
//     i++
//   }

let [count,setCount]=useState(0)
let output=[]

let handleLoop=()=>{
    if(count<5){
        setCount(count+1)
    }

}
let i =0
while(i<count){
    output.push(<div>item{i+1}</div>)
    i++
}
return(
    <div style={{backgroundColor:"grey", padding:"20px"}}>
        <h1>Whileloop</h1>
        <button onClick={handleLoop}>while loop</button>
        {output}
    </div>
)
}

export default Whileloop
