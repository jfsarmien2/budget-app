import React from 'react'
import { Statistic } from 'semantic-ui-react'
function DisplayIncome({title, income, color, size='tiny'}) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{textAlign:'center'}}>{title}:</Statistic.Label>
            <Statistic.Value>{isNaN(income) ? 0 : income}</Statistic.Value>
        </Statistic>
    )
}

export default DisplayIncome
