import React, {useState} from 'react'
import "./AddNewExpense.css";
import Popup from './Popup';
// import NewExpense from './NewExpense';


const AddNewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [inputs, setInputs] = useState({
    item_name:'',
    item_price:'',
    date:''
  });

  const handleChange = (event) => {
    // const { name, value } = event.target;
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))

  
  }

  const submithandler = (event) => 
  {
  
    event.preventDefault()
    const expenseData={
      title : inputs.item_name,
      amount: +inputs.item_price,
      date:new Date(inputs.date)
    }

  console.log("From AddNewExpense",expenseData)
   

  props.onSaveExpenseData(expenseData)
    //  props

   setInputs({
    item_name: '',
    item_price: '',
    date: '',
   })

 
   setIsOpen(!isOpen);
   
    // console.log(inputs);
  }

 


  return (
    <div className='main-container'>
        <div className='container'>
        <input type="button" value="Add New Expense " className='addbtn' onClick={togglePopup}/>
            
            {isOpen && <Popup
              content={<>
               
          <div className="form">
           <div className="title">Welcome</div>
           <div className="subtitle">Let's Add your Expense Details!</div>
             <form onSubmit={submithandler} >
             <div className="input-container ic1">
              <input id="expense_date" className="input" type="date" name='date' placeholder="" value={inputs.date || ""}  onChange={handleChange} />
               <div className="cut"></div>
              <label htmlFor="expense_date" className="placeholder">Expense Date</label>
              </div>
              <div className="input-container ic2">
             <input id="itemName" className="input" type="text" placeholder="" name='item_name' value={inputs.item_name || ""}  onChange={handleChange} />
            <div className="cut"></div>
            <label htmlFor="itemName" className="placeholder">Item Name</label>
          </div>
         <div className="input-container ic2">
          <input id="amount" className="input" type="number" placeholder="" name='item_price' value={inputs.item_price || ""}  onChange={handleChange}/>
          <div className="cut cut-short"></div>
          <label htmlFor="amount" className="placeholder">Price of Item</label>
         </div>
         <input type="submit" className='submit'/>
           </form>
         </div>
            </>}
              handleClose={togglePopup}
              />}
        </div>
       
    </div>
  )
}

export default AddNewExpense