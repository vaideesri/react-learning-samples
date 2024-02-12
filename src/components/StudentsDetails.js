import React from "react";
import StudentsDetailsCSE from "./StudentsDetailsCSE";


function StudentsDetailsIT(data) {
  return (
    <div style={{ marginLeft: "45%"}}>
      <table border={"2px"}>
        <tr>
            <th>Name1 : </th><td>{data.Name1} </td><br/>
        <th>Score: </th><td>{data.Score1}</td>
        <br/></tr>

        <tr><th>Name2 : </th><td>{data.Name2} </td><br/>
        <th>Score: </th><td>{data.Score2}</td>
        <br/></tr>
      </table><br/>
      <b style={{marginLeft:"-80%"}}>{data.dept} DEPARTMENT</b>
      <StudentsDetailsCSE Name3={data.Name3} Name4={data.Name4} Score3={data.Score3} Score4={data.Score4}/>

    </div>
  );
}

export default StudentsDetailsIT;
