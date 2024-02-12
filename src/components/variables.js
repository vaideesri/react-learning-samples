import React from "react";
import { Link,useNavigate } from "react-router-dom";

let number1 = 10;
let bool1 = false;
const a1 = "const string1";
let string1 = "The above values are in Global Scope";

function Variables() {
  let navigate=useNavigate("")
  let number2 = 38.88;
  let bool2 = true;
  const a2 = "const string2";
  let string2 = "The above values are inside local Scope";

//   callback function
    let callbackfunction=()=>{
        let string3 = " This string is from the Callback function";
        return string3;
    }
    const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)
let newarr=myArray[0]
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
let restOperator=(...args)=>{
  return args.filter(val=>val==2)
}
console.log(restOperator(2,3,2,6,2))
  return (
    <div>
      {numbersCombined.join()}
      {newarr}
      {myList}
    {/* calling global scope  variables */}
      {number1} <br />
      {bool1.toString()} <br />
      {a1} <br />
      {string1} <br />
    {/* calling local scope variables */}
      {number2} <br />
      {bool2.toString()} <br />
      {a2} <br />
      {string2} <br />
      {callbackfunction()}<br/>
      <Link to="/Operator"><button>Operators</button></Link>
      <button onClick={()=>navigate("/logicalor")}>logicalor</button>
    </div>
  );
}

export default Variables;
