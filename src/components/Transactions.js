import React from 'react';

function Transactions({transactions, search}){
    return(
      <>
     
        {transactions
         //filter description details on the search bar
        .filter((transaction) =>
        transaction.description.toLowerCase().includes(search.toLowerCase())

        )
        //display data in the table
        .map((trans)=> 
      <tr key= {trans.id}>
        <td>{trans.date} </td>
        <td>{trans.description}</td>
        <td>{trans.category}</td>
        <td>{trans.amount}</td>
       </tr>
          )}
        
       </>
    );
}
export default Transactions;