# Bank of Flatiron

## Project Guidelines
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).For this project, I’ll be building out a React application that displays a list of recent bank transactions, among other features.

As a user, I should be able to:

See a table of the transactions.

Fill out and submit the form to add a new transaction. This should add the new transaction to the table as well as post the new transaction to the backend API for persistence.

Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

## Setup

Go to [http://localhost:8001/transactions](http://localhost:8001/transactions) to setup the JSON server running


## Available Scripts

In the project directory, you can run:

### `npm install`

Installs  the apps dependencies 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Explanation

The component Hierarchy is:
App ├──AccountContainer ├── AddTansactionForm └── Search └── TransactionList ├── Transactions


## License

This project was coded by Copyright (c) 2023 [Sharon Tokiti](https://github.com/mshekerotokiti)


