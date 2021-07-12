import React from 'react'
import {Segment, Grid } from 'semantic-ui-react'
import DisplayIncome from './DisplayIncome'
function DisplayAccountSummary({totalIncome, totalExpenses}) {
    return (
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayIncome title="Income" income={totalIncome} color='green'/>
            </Grid.Column>
            <Grid.Column>
               <DisplayIncome title="Expenses" income={totalExpenses} color='red'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayAccountSummary
