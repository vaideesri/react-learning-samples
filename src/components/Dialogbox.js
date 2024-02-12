import React from 'react'

function Dialogbox() {
    let handleAlert=()=>{
        alert("Welcome to GT college")
    }
    let handleConfirm=()=>{
        let res=window.confirm("Are you sure want to save?")
        console.log(res)
        
    }
    let handlePrompt=()=>{
        let name1=window.prompt("Enter your name")
        console.log(name1)
    }
    let handlePrint=()=>{
        window.print()
    }
  return (
    <div>
      <button onClick={handleAlert}>alert</button>
      <button onClick={handleConfirm}>confirm</button>
      <button onClick={handlePrompt}>prompt</button>
      <button onClick={handlePrint}>print</button>
    </div>
  )
}

export default Dialogbox
