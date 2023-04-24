import React from 'react';
import TransactionItems from './TransactionItems';

function Transactions({transactions}){
    return(
       <table>
         <thead>
             <tr>
                <th>DATE</th>
                <th>CATEGORY</th>
                <th>DESCRIPTION</th>
                <th>AMOUNT</th>
             </tr>
         </thead>
         <tbody>
             {transactions.map((transaction, index) => {

             return <TransactionItems
                  index={index}
                  id = {transaction.id}
                  date={transaction.date}
                  category={transaction.category}
                  description={transaction.description}
                  amount={transaction.amount}
                  key={transaction.id}
                />
         })}
        </tbody>
       </table>
       
    )
}
export default Transactions;