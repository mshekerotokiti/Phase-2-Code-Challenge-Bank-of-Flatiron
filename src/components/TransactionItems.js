import React from "react";
import Transactions from "./Transactions";
function TransactionItems({transactions, search}){
    return(
      <table className="ui celled striped padded table">
        <tbody>
         <tr>
         <th>Date</th>
         <th>Description</th>
         <th>Category</th>
         <th>Amount</th>
         </tr>

         {/*Transactions  component here*/}
         <Transactions search={search} transactions= {transactions}/>
        </tbody>
      </table>
  
            
    )
}
export default TransactionItems;