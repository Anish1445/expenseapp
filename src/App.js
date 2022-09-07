import './App.css';
import Expense from './component/Expenses/Expense/Expense';
import NewExpense from './component/AddNewExpense/NewExpense';
import { useState } from 'react';

function App() {
  
    const Dummy_Expenses = [
      {
        id: "e1",
        title: "Book stand",
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
      {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: "e4",
        title: "New Desk",
        amount: 450,
        date: new Date(2021, 5, 12),
      },
    ];
  
    const [expenses,setExpenses] = useState(Dummy_Expenses)

    const addExpensehandler=(expense)=>{

      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    }

    console.log(expenses);

 return (
      
      // part three
    <div className='Foot'>
       <NewExpense onAddExpense={addExpensehandler}/>
       {/* <div className='main'> */}
        {/* <div className='section1'>
        <div className='Container' > */}
          <Expense expenses={expenses}/>
       </div>
      //  <div>
      //  </div>
      //  </div>
    // </div>
    
  );
}

export default App;
