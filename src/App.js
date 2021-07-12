import React, {useState, useEffect } from 'react'
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
  const [entryId, setEntryId] = useState(null);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() =>{
    if(!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    entries.map(entry => {
      if(entry.isExpense) {
         return totalExpenses += Number(entry.value)
      }
        return totalIncome += Number(entry.value)
    });
    setTotal(totalIncome - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncome);
  }, [entries]);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function addEntry() {
      const result = entries.concat({
         id: entries.length + 1,
         description: description,
         value: value,
         isExpense: isExpense
      });
      console.log(result);
      setEntries(result);
      resetEntry();
  }

  function editEntry(id) {
    console.log(`Edit ${id}`);
    if(id) {
       const index = entries.findIndex((entry) => entry.id === id);
       const entry = entries[index];
       setEntryId(id);
       setDescription(entry.description);
       setValue(entry.value);
       setExpense(entry.isExpense);
       setIsOpen(true);
    }
  }

  function resetEntry() {
    setDescription('');
    setValue('');
    setExpense(false);
  }

  return (
    <Container>
      <MainHeader title="Budget"/>
        <DisplayIncome title="Your Balance" income={total} size='small'/>

        <DisplayAccountSummary totalIncome={incomeTotal} totalExpenses={expenseTotal}/>

      <MainHeader title='History' type='h3'/>
        <TransactionListDisplay 
          entries={entries} 
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />

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
        <ModalEdit 
          isOpen={isOpen} 
          setIsOpen={setIsOpen}
          addEntry={addEntry}
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setExpense={setExpense}
        />
    </Container>
  );
}

export default App;
var initialEntries = [
  {
    id: 1,
    description: 'Work Income',
    value: 500.00,
    isExpense: false
  },
  {
    id: 2,
    description: 'Electric Bill',
    value: 50.00,
    isExpense:  true
  },
  {
    id: 3,
    description: 'Rent',
    value: 100.00,
    isExpense:  true
  },
  {
    id: 4,
    description: 'Water Bill',
    value: 30.00,
    isExpense:  true
  }
];