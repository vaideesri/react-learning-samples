import React from 'react'

function Expensedate(data) {
    let year=data.date.getFullYear()
    let month=data.date.getMonth()
    let date1=data.date.getDate()
  return (
    <div>
      <h2>Expense date</h2>
{year}<br/>
{month}<br/>
{date1}
    </div>
  )
}

export default Expensedate
