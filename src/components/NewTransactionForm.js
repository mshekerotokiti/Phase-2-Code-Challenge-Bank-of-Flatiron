import React from "react";
import { useState } from "react";

function NewTransactionForm ({newTransaction}){
    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: 0
    })
    function handleSubmitForm(e){
        e.preventefault();
    }

    function handleDataChange(e){
        setFormData(e.target.value)
    }

    return(
        <form className="form" onSubmit= {handleSubmitForm}>
            <div>
                <input  onChange={handleDataChange} value={formData.date} name="date" type= "date" data-date-inline-picker= "true"/>
                <input onChange={handleDataChange} value={formData.description} name="description" placeholder="Description" type="text"/>
                <input onChange={handleDataChange} value={formData.category} name="category" placeholder="Category" type="text"/>
                <input onChange={handleDataChange} value={formData.amount} step="0.01" name="amount" placeholder="Amount" type="number"/>
            </div>
            <button className="button" type="submit">Add Transaction</button>
        </form>
    );
}
export default NewTransactionForm;