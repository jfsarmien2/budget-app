import React from 'react'
import {Container} from 'semantic-ui-react'
import TransactionList from './TransactionList'

function TransactionListDisplay({entries, deleteEntry, editEntry}) {
    return (
        <Container>
            {entries.map((entry) =>(
                <TransactionList 
                 key={entry.id}
                 {...entry}
                 deleteEntry={deleteEntry}
                 editEntry={editEntry}
                />
            ))}
        </Container>
    )
}

export default TransactionListDisplay

