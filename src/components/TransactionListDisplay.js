import React from 'react'
import {Container} from 'semantic-ui-react'
import TransactionList from './TransactionList'

function TransactionListDisplay({entries, deleteEntry, setIsOpen}) {
    return (
        <Container>
            {entries.map((entry) =>(
                <TransactionList 
                 key={entry.id}
                 {...entry}
                 deleteEntry={deleteEntry}
                 setIsOpen={setIsOpen}
                />
            ))}
        </Container>
    )
}

export default TransactionListDisplay

