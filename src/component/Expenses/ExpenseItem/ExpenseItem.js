import ExpenseDate from "../Expensedate/ExpenseDate";
import "./ExpenseItem.css";
import React,{useState} from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const changeOnButtonClick=()=>setTitle("Hi my name is Anish")
//part 3 passing data via props
return (
    <div className="expense-item">
      {/* <h2><ExpenseDate date={props.date}/></h2> */}
      <div className="expense_date"><ExpenseDate date={props.date}/></div>

      <div className="expense-item__description">
        <h2 id="expense_item">{title}</h2>
        <div className="expense-item__price">{props.amount}</div>

        <button className="Btn" onClick={changeOnButtonClick}> Click me </button>     
        </div>
    </div>
  );
}

export default ExpenseItem;

