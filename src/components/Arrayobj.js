import React from 'react'

function Arrayobj() {
    let arr1=["apple","orange","mango"]
    let arr2=["onion","potato","tomato"]
    let num1=[4,1,6,4,8]
    let everymet=num1.every(val=>val%2==0)
    let somemet=num1.some(val=>val%2==0)
    let b=[]
    num1.forEach((val,index)=>(
        b.push(<div key={index}>{val}</div>)
    ))
    let reducemet=num1.reduce((acc,val)=>acc+val,0)
    let reduceright=num1.reduceRight((val,acc)=>acc+val,0)
  return (
    <div>
      {num1.splice(0,2)}<br/>
      {num1}
      {/* {num1.sort((a,b)=>b-a)} */}
      {/* {num1.reverse()}<br/> */}
      {reduceright}<br/>
      {reducemet}<br/>
      {arr2.unshift("mango")}<br/>
      {arr2}<br/>
      {arr1}<br/>
      {arr1.shift()}<br/>
      {arr1.pop()}<br/>
      {arr1}<br/>
      {arr1.push("banana")}
        {num1.indexOf(4)}<br/>
        {num1.lastIndexOf(4)}
        {b}<br/>
        {num1.map((item,i)=>(
            <div key={i}>
            {item *2}</div>))}<br/>
            {num1.map(val=>val)}<br/>
        {num1.filter(item=>item==4)}<br/>
        {somemet.toString()}
        {everymet.toString()}<br/>
      {arr1.concat(arr2).join(" & ")}

    </div>
  )
}

export default Arrayobj
