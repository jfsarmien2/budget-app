import React, {useState} from 'react'
import {  Container } from 'semantic-ui-react'
import './App.css';
import MainHeader from './components/MainHeader';
import DisplayIncome from './components/DisplayIncome';
import BudgetForm from './components/BudgetForm';
import DisplayAccountSummary from './components/DisplayAccountSummary';
import TransactionListDisplay from './components/TransactionListDisplay';
import ModalEdit from './components/ModalEdit'


function App() {
  
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = React.useState('');
  const [value, setValue] = React.useState('');
  const [isExpense, setExpense] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
        <TransactionListDisplay entries={entries} deleteEntry={deleteEntry} setIsOpen={setIsOpen}/>

      <MainHeader title='Add new transaction' type='h3'/>
        <BudgetForm 
          addEntry={addEntry}
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setExpense={setExpense}
        />
        <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}/>
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