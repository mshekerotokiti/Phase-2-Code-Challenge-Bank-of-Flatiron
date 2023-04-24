import React from 'react';
import './App.css';
import AccountContainer from './components/AccountContainer';


function App() {

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
       <h1>The Royal Bank of Flatiron</h1>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
