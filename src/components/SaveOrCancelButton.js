import React from 'react'
import {  Button } from 'semantic-ui-react'
function SaveOrCancelButton({addEntry, description, value, isExpense}) {
    return (
    <Button.Group style={{marginTop: 20, marginBottom: 20, paddingBottom: 10}}>
         <Button>Cancel</Button>
         <Button.Or />
         <Button primary onClick={() => addEntry(description, value, isExpense)}>Ok</Button>
    </Button.Group>
    )
}

export default SaveOrCancelButton
