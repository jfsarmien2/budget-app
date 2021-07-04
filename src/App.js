import React, {useState} from 'react'
import {  Container } from 'semantic-ui-react'
import './App.css';
import MainHeader from './components/MainHeader';
import DisplayIncome from './components/DisplayIncome';
import BudgetForm from './components/BudgetForm';
import DisplayAccountSummary from './components/DisplayAccountSummary';
import TransactionListDisplay from './components/TransactionListDisplay';



function App() {
  
  const [entries, setEntries] = useState(initialEntries);
  
  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function addEntry(description, value, isExpense) {
      const result = entries.concat({
         id: entries.length + 1,
         description: description,
         value: value,
         isExpense: isExpense
      });
      console.log(result);
      setEntries(result);
  }

  return (
    <Container>
      <MainHeader title="Budget"/>
        <DisplayIncome title="Your Balance" income="2,550.53" size='small'/>

        <DisplayAccountSummary />

      <MainHeader title='History' type='h3'/>
       <TransactionListDisplay entries={entries} deleteEntry={deleteEntry}/>

      <MainHeader title='Add new transaction' type='h3'/>
        <BudgetForm addEntry={addEntry}/>
    </Container>
  );
}

export default App;
var initialEntries = [
  {
    id: 1,
    description: 'Work Income',
    value: '$500.00',
    isExpense: false
  },
  {
    id: 2,
    description: 'Electric Bill',
    value: '$50.00',
    isExpense:  true
  },
  {
    id: 3,
    description: 'Rent',
    value: '$100.00',
    isExpense:  true
  },
  {
    id: 4,
    description: 'Water Bill',
    value: '$30.00',
    isExpense:  true
  }
];