import React from 'react';
import { useEffect , useState} from 'react';
import './App.css';
import Transactions from './components/Transactions';

function App() {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then((resp) => resp.json())
    .then(trans => setTransactions(trans))
  })

  return (
    <div className="App">
      <div className="App-header">
       <h1>The Royal Bank of Flatiron</h1>
      </div>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
