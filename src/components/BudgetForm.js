import React from 'react';
import SaveOrCancelButton from './SaveOrCancelButton';
import { Form } from 'semantic-ui-react';
import MainForm from './MainForm';
import BudgetEntryDetails from '../hooks/BudgetEntryDetails';

function BudgetForm() {
  const{
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setExpense,
    addEntry
  } = BudgetEntryDetails();
    return (
     <Form unstackable>
        <MainForm 
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setExpense={setExpense}
        />
        <SaveOrCancelButton addEntry={addEntry}/>
      </Form>
    )
}

export default BudgetForm
