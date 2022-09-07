import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'


const ExpenseItemList = (props) => {

    if(props.filterExpense.length===0){
        return <p>No Records Found</p>
    }
   
  return (
    <div> 
     {
       props.filterExpense.map((filteredExpense) => (
          <ExpenseItem
            key={filteredExpense.id}
            title={filteredExpense.title}
            amount={filteredExpense.amount}
            date={filteredExpense.date}
          />
        ))
      }
    
    </div>
  )
}

export default ExpenseItemList