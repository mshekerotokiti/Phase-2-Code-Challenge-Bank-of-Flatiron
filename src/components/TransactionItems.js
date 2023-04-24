import React from "react";

function TransactionItems({index, category, date, description, amount, id}){
  const isEven = index % 2 === 0
    return(
      <table className="ui celled striped padded table">
        <tr className={isEven ? "even" : ""}>
            <td>{date}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td className="amount-td">{amount}
            </td>
        </tr>
      </table> 
    );
}

export default TransactionItems;