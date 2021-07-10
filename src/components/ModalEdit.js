import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import BudgetForm from './BudgetForm'

function ModalEdit({ isOpen, setIsOpen }) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <BudgetForm />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false) }>Close</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit
