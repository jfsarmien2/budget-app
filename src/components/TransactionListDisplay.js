import React from 'react'
import {Container} from 'semantic-ui-react'
import TransactionList from './TransactionList'

function TransactionListDisplay({entries, deleteEntry}) {
    return (
        <Container>
            {entries.map((entry) =>(
                <TransactionList 
                 key={entry.id}
                 {...entry}
                 deleteEntry={deleteEntry}
                />
            ))}
        </Container>
    )
}

export default TransactionListDisplay

