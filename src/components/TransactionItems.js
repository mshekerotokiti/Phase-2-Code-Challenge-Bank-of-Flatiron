import React from "react";
import Transactions from "./Transactions";

function TransactionItems({transactions, search}){
    return(
      <table className="ui celled striped padded table">
        <tbody>
         <tr>
           <th className="ui center aligned header">Date</th>
           <th className="ui center aligned header">Description</th>
           <th className="ui center aligned header">Category</th>
           <th className="ui center aligned header">Amount </th>
         </tr>

         {/*Transactions  component here*/}
         <Transactions search={search} transactions= {transactions}/>
        </tbody>
      </table> 
    );
}

export default TransactionItems;