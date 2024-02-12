import React from 'react'

function StudentsDetailsCSE(data) {
  return (
    <div>
        
      <table border={"2px"}>
        <tr>
            <th>Name1 : </th><td>{data.Name3} </td><br/>
        <th>Score: </th><td>{data.Score3}</td>
        <br/></tr>

        <tr><th>Name2 : </th><td>{data.Name4} </td><br/>
        <th>Score: </th><td>{data.Score4}</td>
        <br/></tr>
      </table>
    </div>
  )
}

export default StudentsDetailsCSE
