import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";



function AccountContainer() {
 //use state hook to update the transaction and search fields
  const [transactions, setTransactions] = useState([])                           
  const [search, setSearch] = useState("")

  //useEffect hook to fetch our data from server
  useEffect(() => {                                                                
    fetch("http://localhost:8001/transactions")
    .then((res)=> res.json())
    .then((data)=> setTransactions(data))
  }, [])

  console.log(transactions)

  function addTransaction(newTransaction){                                           
    const updatedTransaction = [...transactions, newTransaction]
    setTransactions(updatedTransaction)
  }

  return (
    <div>
      <Search search = {search} setSearch = {setSearch}/>
      <AddTransactionForm addTransaction = {addTransaction}/>
      <TransactionList transactions = {transactions} search ={search} />
    </div>
  );
}

export default AccountContainer;