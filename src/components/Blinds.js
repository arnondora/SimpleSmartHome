import React from 'react'
import styled from 'styled-components'
import { map } from 'lodash'
import Toggle from 'material-ui/Toggle'

const Container = styled.div`
  display: flex;
  flex-direction:column;
`

const SwitchWrapper = styled.div`
  display: flex;
`

const Header = styled.h2`
  color: #424242;
`

export default class Blinds extends React.Component {
  render () {
    const blindList = map(this.props.blinds,((info,key) => {
        return <SwitchWrapper key={key}>
          <Toggle
            label={key}
            name={key}
            defaultToggled={info.value === 0 ? false : true}
            onToggle={this.props.onBlindsToggle(key)}
          />
        </SwitchWrapper>
    }))

    return (
      <Container>
        <Header>Blinds</Header>
        {blindList}
      </Container>
    )
  }
}
