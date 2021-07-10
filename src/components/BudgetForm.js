import React from 'react'
import SaveOrCancelButton from './SaveOrCancelButton'
import { Form } from 'semantic-ui-react'
import MainForm from './MainForm';
function BudgetForm({
  addEntry,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setExpense
}) {
    
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
        <SaveOrCancelButton addEntry={addEntry} description={description} value={value} isExpense={isExpense}/>
      </Form>
    )
}

export default BudgetForm
