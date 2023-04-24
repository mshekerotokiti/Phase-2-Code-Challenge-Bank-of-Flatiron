import React from "react";
import Transaction from "./Transaction.js";

function TransactionList({transactions, search}) {                       
  return (

    <table className="table">
      <tbody>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>

        {/* render a list of <Transaction> components here */}

        <Transaction   search ={search}  transactions = {transactions}  />                      

      </tbody>
    </table>
  );
}

export default TransactionList;