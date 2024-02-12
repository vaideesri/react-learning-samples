import React from 'react'
import Expensedate from './Expensedate'
function Expenseitem(data) {
  return (
    <div>
        <h1>Expense item</h1>
        {data.title}<br/>
        {data.amount}<br/>
        {/* {data.date.toLocaleString()} */}
        <Expensedate date={data.date}/>
      
    </div>
  )
}

export default Expenseitem
