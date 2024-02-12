import React from 'react'
import { useState } from "react";
function Usestate2() {
    const [details, setdetails] = useState({
        mobile: '333',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
     });

const update=()=>{
    setdetails(previousState=>{
        return{
          ...previousState, 
        
        username: 'vaidee',
        email: 'abc@gmail.com',
        password: '********',
        confirmPassword: '********'}
    });
}
  return (
    <div>
      <h1>Students Details</h1>
      <p>The updated Student detail is<br/>
      Mobile:{details.mobile}<br/> 
      username:{details.username}<br/>
      email:{details.email}<br/>
      password:{details.password}<br/>
      confirmPassword:{details.confirmPassword}<br/> </p>
      <button onClick={update}>change</button>
      <input type="text" value={details.username} ></input>
    </div>
  )
}

export default Usestate2
