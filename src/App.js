import React, {useState, useEffect } from 'react'
import {  Container } from 'semantic-ui-react'
import './App.css';
import MainHeader from './components/MainHeader';
import DisplayIncome from './components/DisplayIncome';
import BudgetForm from './components/BudgetForm';
import DisplayAccountSummary from './components/DisplayAccountSummary';
import TransactionListDisplay from './components/TransactionListDisplay';
import ModalEdit from './components/ModalEdit';
import { useSelector, useDispatch } from 'react-redux';
import { getAllEntries } from './action/entries.action';

function App() {
  const [entry, setEntry] = useState({});
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = useSelector(state => state.entries)
  const { isOpen, id } = useSelector(state => state.modal);
  const dispatch = useDispatch();
  useEffect(() =>{
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);
  
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
  

 
  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);
  return (
    <Container>
      <MainHeader title="Budget"/>
        <DisplayIncome title="Your Balance" income={total} size='small'/>

        <DisplayAccountSummary totalIncome={incomeTotal} totalExpenses={expenseTotal}/>

      <MainHeader title='History' type='h3'/>
        <TransactionListDisplay entries={entries} />

      <MainHeader title='Add new transaction' type='h3'/>
        <BudgetForm />
        <ModalEdit isOpen={isOpen} {...entry}/>
    </Container>
  );
}

export default App;
