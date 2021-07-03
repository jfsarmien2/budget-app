import React from 'react'
import SaveOrCancelButton from './SaveOrCancelButton'
import { Form } from 'semantic-ui-react'
function BudgetForm() {
    return (
     <Form unstackable>
        <Form.Group>
          <Form.Input 
            icon='tags'
            label='Description'
            placeholder='New'
            width={12}
          />
          <Form.Input 
            icon='dollar'
            label='Value'
            placeholder='100.00'
            iconPosition='left'
          />
        </Form.Group>
        <SaveOrCancelButton />
      </Form>
    )
}

export default BudgetForm
