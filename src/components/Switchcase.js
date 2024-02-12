import { useState } from "react";

function GradeCalculator() {
  let [mark, setMarks] = useState();
  let [grade, setGrade] = useState();

  function ClickFun() {
    switch (true) {
      case mark > 80:
        grade = "A";
        break;
      case mark > 60:
        grade = "B";
        break;
      case mark > 35:
        grade = "C";
        break;
      default:
        grade = "F";
    }
    setGrade(grade);
  }

  return (
    <div style={{backgroundColor:"pink", padding:"20px"}}>
      <h1>Grade Calculator</h1>
      <div>
        <label>Marks</label>
        <input type="text" name="mark" onChange={(event) => {
            setMarks(event.target.value);
          }}
        ></input>
      </div>
      <div>
        <label>Grade</label>
        <input type="text" value={grade}></input>
      </div>
      <button onClick={ClickFun}> Calculate</button>
    </div>
  );
}
export default GradeCalculator;
