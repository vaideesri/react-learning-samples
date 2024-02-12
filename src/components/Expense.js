import React from 'react'
import Expenseitem from './Expenseitem'

function Expense() {
    let expense=[
        {title:"household", amount: 5000, date:new Date()},
        {title:"rent", amount:7000, date:new Date(2023,10,22)}   ]
  return (
    <div>
      {expense[0].title}
      {expense[1].amount}<br/>
      <Expenseitem title={expense[0].title} amount={expense[1].amount} date={expense[1].date}/>
    </div>
  )
}

export default Expense
