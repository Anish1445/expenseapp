import React from 'react'
import AddNewExpense from './AddNewExpense';
import './NewExpense.css'

const NewExpense = (props) => {

    const onSaveExpenseHandle=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData, 
            id:Math.random().toString()
        }
        console.log("New Expense File",expenseData)
        props.onAddExpense(expenseData)
    }
  return (
    <div>
       <AddNewExpense onSaveExpenseData={onSaveExpenseHandle} />
    </div>
  );
};

export default NewExpense