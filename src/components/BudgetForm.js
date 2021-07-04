import React from 'react'
import SaveOrCancelButton from './SaveOrCancelButton'
import { Form, Segment, Checkbox } from 'semantic-ui-react'
function BudgetForm({addEntry}) {
    const [description, setDescription] = React.useState('');
    const [value, setValue] = React.useState('');
    const [isExpense, setExpense] = React.useState(false);
    return (
     <Form unstackable>
        <Form.Group>
          <Form.Input 
            icon='tags'
            label='Description'
            placeholder='New'
            width={12}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Input 
            icon='dollar'
            label='Value'
            placeholder='100.00'
            iconPosition='left'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Group>
        <Segment compact>
          <Checkbox 
            toggle 
            label='is expense?'
            checked={isExpense}
             onChange={(e) => setExpense(prevState => !prevState)}
          />
        </Segment>
        <SaveOrCancelButton addEntry={addEntry} description={description} value={value} isExpense={isExpense}/>
      </Form>
    )
}

export default BudgetForm
