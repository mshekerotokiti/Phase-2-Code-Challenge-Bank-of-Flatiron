import React from 'react';

function Transactions({transactions, search}){
    return(
      <>
        {transactions.map((trans)=> 
      <tr> key={trans.id}
        <td>{trans.Date} </td>
        <td>{trans.Description}</td>
        <td>{trans.Category}</td>
        <td>{trans.Amount}</td>
       </tr>
        )}
        
       </>
    );
}
export default Transactions;