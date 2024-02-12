import React from 'react';
import StudentsDetailsIT from './StudentsDetails';

function Students() {
    let StudentsDetail=
    [
        {Name:"Anu", Age:"20", Dept:"IT", Score:"590"}, 
        {Name:"Neha", Age:"21", Dept:"CSE", Score:"592"}, 
        {Name:"Pavi", Age:"20", Dept:"CSE", Score:"570"}, 
        {Name:"Nivi", Age:"21", Dept:"IT", Score:"585"}
    ]
  return (
    <div>
        <br/>
        <b>{StudentsDetail[0].Dept} DEPARTMENT</b>
        <StudentsDetailsIT dept={StudentsDetail[1].Dept} Name1={StudentsDetail[0].Name} Name2={StudentsDetail[3].Name} Name3={StudentsDetail[1].Name} Name4={StudentsDetail[2].Name} Score1={StudentsDetail[0].Score} Score2={StudentsDetail[3].Score} Score3={StudentsDetail[1].Score} Score4={StudentsDetail[2].Score} />
      
    </div>
  )
}

export default Students
