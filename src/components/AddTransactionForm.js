import React, {useState} from "react";

function AddTransactionForm({ addTransaction }) {                 
    //use state hook to update the date, category, description and amount fields
     const [date, setDate] = useState("")                             
     const [description, setDescription] = useState("")
     const [category, setCategory] = useState("")
     const [amount, setAmount] = useState("")

    // brings functionality to submit button, prevents default refreshing behavior, 
     function handleSubmit(e) {                                       
      e.preventDefault();
      const transactionObj = {
        date: date,
        description: description,
        category: category,
        amount: amount,
      };

   // post method to add transactions to our database
      fetch("http://localhost:8001/transactions", {                             
        
      method: "POST",
        
      headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify(transactionObj),
      })
      
        .then((response) => response.json())
        .then((transaction) => addTransaction(transaction));
    }
    

  return (
                                      
      <form className="form" onSubmit = {handleSubmit}>
        <div className="inputs">
          <input type="date" name="date" value={date}                                             
          onChange = {(e) => setDate(e.target.value)}/>

          <input type="text" name="description" placeholder="Description" value={description}
          onChange = {(e) => setDescription(e.target.value)}/>

          <input type="text" name="category" placeholder="Category" value={category}
          onChange = {(e) => setCategory(e.target.value)}/>

          <input type="number" name="amount" placeholder="Amount" step="0.01" value={amount}
          onChange = {(e) => setAmount(e.target.value)}/>

        </div>
        <button className="button" type="submit">
          Add Transaction
        </button>
      </form>
  
  );
}

export default AddTransactionForm;