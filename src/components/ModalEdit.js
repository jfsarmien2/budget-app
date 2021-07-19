import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import MainForm from './MainForm'
import { useDispatch } from 'react-redux';
import { closeModal } from '../action/modal.action';
import BudgetEntryDetails from '../hooks/BudgetEntryDetails';

function ModalEdit({ 
    isOpen, 
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setExpense,
    id
 }) {
   const dispatch = useDispatch();
   const  newEntry = BudgetEntryDetails(description, value, isExpense);
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <MainForm 
                 description={newEntry.description}
                 value={newEntry.value}
                 isExpense={newEntry.isExpense}
                 setDescription={newEntry.setDescription}
                 setValue={newEntry.setValue}
                 setExpense={newEntry.setExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeModal()) }>Close</Button>
                <Button onClick={() => newEntry.updateEntry(id) } primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit
