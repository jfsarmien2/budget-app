import React from 'react'
import {Segment, Grid } from 'semantic-ui-react'
import DisplayIncome from './DisplayIncome'
function DisplayAccountSummary() {
    return (
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayIncome title="Income" income="1,450.53" color='green'/>
            </Grid.Column>
            <Grid.Column>
               <DisplayIncome title="Expenses" income="623.00" color='red'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayAccountSummary
