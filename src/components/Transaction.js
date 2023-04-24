import React from "react";

function Transaction({transactions, search }) {                                  
  return (
    <>
    {transactions

    //filter description details on the search bar
      .filter((transaction) =>
        transaction.description.toLowerCase().includes(search.toLowerCase())                
        )
           
          //display transactions data in a table
      .map((transaction) =>                                                                   
          <tr key= {transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        )}
    </>
  );
}

export default Transaction;