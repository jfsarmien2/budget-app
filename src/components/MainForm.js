import React from 'react'
import { Form, Segment, Checkbox } from 'semantic-ui-react'
function MainForm({
    description,
    value, 
    isExpense, 
    setDescription,
    setValue,
    setExpense
  }) {
    return (
        <>
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
        </>
    )
}

export default MainForm
