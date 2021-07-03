import {  Container } from 'semantic-ui-react'
import './App.css';
import MainHeader from './components/MainHeader';
import DisplayIncome from './components/DisplayIncome';
import BudgetForm from './components/BudgetForm';
import DisplayAccountSummary from './components/DisplayAccountSummary';
import TransactionList from './components/TransactionList';


function App() {
  return (
    <Container>
      <MainHeader title="Budget"/>
        <DisplayIncome title="Your Balance" income="2,550.53" size='small'/>
        <DisplayAccountSummary />
      <MainHeader title='History' type='h3'/>
        <TransactionList title='Another' amount='20.00' isExpense/>
        <TransactionList title='Something' amount='100.00'/>
      <MainHeader title='Add new transaction' type='h3'/>
        <BudgetForm />
    </Container>
  );
}

export default App;
