import React from 'react'
import {Container} from 'semantic-ui-react'
import TransactionList from './TransactionList'

function TransactionListDisplay({entries}) {
    return (
        <Container>
            {entries.map((entry) =>(
                <TransactionList 
                 key={entry.id}
                 {...entry}
                />
            ))}
        </Container>
    )
}

export default TransactionListDisplay

