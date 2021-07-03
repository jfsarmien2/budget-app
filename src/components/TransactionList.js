import React from 'react'
import {Segment, Grid, Icon } from 'semantic-ui-react'
function TransactionList({title, amount, isExpense = false}) {
    return (
    <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>{title}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>{amount}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
         </Grid>
    </Segment>
    )
}

export default TransactionList
