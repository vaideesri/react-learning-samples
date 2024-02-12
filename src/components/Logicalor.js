import React from 'react'

function Logicalor(pro) {
    let username=pro.name || "guest"
    console.log(2&3)
    console.log(2|3)
    console.log(~3)
    console.log(2^3)
    console.log(2>>1)
    let a=5
    let b=10
  return (
    <div>
     
      {a-=b}
      {a}
      {/* a=a+b */}
      {username}<br/>
      {(b>a)?"b is greater": "a is greater"}<br/>
      {typeof({})}
    </div>
  )
}

export default Logicalor
