import React from 'react'

function Loopcontrol() {
// continue and break
let i=0
while(i<10){
    i++
    if(i%2==0)
    {
        continue
    }
    if(i===9)
    {
        break
    }
    console.log("the value of i is",i)
    
}
}

export default Loopcontrol
