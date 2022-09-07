import React,{useState} from 'react'
import Card from '../../UI/Card/Card'
// import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Filter from '../Filter/Filter'
import ExpenseItemList from '../ExpenseItemList/ExpenseItemList'
import ExpenseChart from '../ExpenseChart/ExpenseChart'

const Expense = (props) => {

  const [filteredYear, setFilteredYear] = useState("2020");


  const filterChangeHandler = (selectedYear) => {

    setFilteredYear(selectedYear);
    // console.log(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className='card_container'>
     <Card className="expense">
     <Filter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}/>
          
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseItemList filterExpense={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expense