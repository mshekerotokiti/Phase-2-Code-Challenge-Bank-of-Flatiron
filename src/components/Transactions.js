import TransactionItems from "./TransactionItems";
function Transactions(transactions){
    return(
        <table>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
              {transactions.map(trans => {
                return <TransactionItems
                date= {trans.date}
                description= {trans.description}
                category={trans.category}
                amount= {trans.amount}
                key={trans.id} />
              })}
        </table>
    )
}
export default Transactions;