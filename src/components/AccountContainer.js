import React, { useState, useEffect } from "react";
import TransactionItems from "./TransactionItems";
import SearchForm from "./SearchForm";
import NewTransactionForm from "./NewTransactionForm";



function AccountContainer() {

  //use state hook to update the transaction and search fields
  const [transactions, setTransactions] = useState([])                           
  const [search, setSearch] = useState("")

   //useEffect hook to fetch our data from server
  useEffect(() => {                                                               
    fetch("http://localhost:8000/transactions")
    .then((res)=> res.json())
    .then((data)=> setTransactions(data))
  }, [])

  console.log(transactions)

//add new transaction from NewTransactionForm component 
  function addTransaction(newTransaction){                                            
    const updatedTransaction = [...transactions, newTransaction]
    setTransactions(updatedTransaction)
  }

  return (
    <div>
      <SearchForm search = {search} setSearch = {setSearch}/>
      <NewTransactionForm addTransaction = {addTransaction}/>
      <TransactionItems transactions = {transactions} search ={search} />
    </div>
  );
}

export default AccountContainer;

