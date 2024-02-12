import React, { useState } from 'react'

function Logicaland() {
  console.log((4==4)&&(2>3))
  console.log((3==4)||(2>3))
  console.log(!(2==2)&&(2>3))
  let [signin,setLogin]=useState(false)
  return(
    <div>
        {signin && (
            <div>
                <p> signin </p>
                <button onClick={()=>setLogin(false)}> sign out</button>
                </div>
        )}
        {!signin &&(
          <div>
          <p> signout </p>
          <button onClick={()=>setLogin(true)}> sign in</button>
          </div>  
        )}
    </div>
  )
}

export default Logicaland
