import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import MainForm from './MainForm'

function ModalEdit({ 
    isOpen, 
    setIsOpen,
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setExpense
 }) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <MainForm 
                 description={description}
                 value={value}
                 isExpense={isExpense}
                 setDescription={setDescription}
                 setValue={setValue}
                 setExpense={setExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false) }>Close</Button>
                <Button onClick={() => setIsOpen(false) } primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit
