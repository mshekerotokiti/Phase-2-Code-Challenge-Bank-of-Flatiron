import React from "react";
import { useState } from "react";

function NewItemForm({ addNewTransaction }) {                       
     
    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: 0
    })

     // brings functionality to submit button, prevents default refreshing behavior
    function handleSubmit(e) {                                        
     e.preventDefault();
     addNewTransaction(formData)
     setFormData ({
            date: "",
            description: "",
            category: "",
            amount: 0
     })
    }
     //handle form data change
     function handleFormDataChange(e) {
        setFormData(data => ({ ...data, [e.target.name]: e.target.value }))
    }
 
 return (

    <form onSubmit={handleSubmit} id="new-item-form">
    <div className="form-inputs">
        <label htmlFor="date">Date:</label>
        <input onChange={handleFormDataChange} value={formData.date} name="date" id="date" type="date" data-date-inline-picker="true"></input>
        <input onChange={handleFormDataChange} name="description" value={formData.description} placeholder="Description" className="text-input" ></input>
        <input name="category" onChange={handleFormDataChange} placeholder="Category" value={formData.category}></input>
        <input  onChange={handleFormDataChange} name="amount" placeholder="Amount" value={formData.amount} type="number"></input>
    </div>
    <button className="add"> Add Transaction</button>
</form>
 )

}
export default NewItemForm;
