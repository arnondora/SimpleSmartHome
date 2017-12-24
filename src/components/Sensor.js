import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.h2`
  color: #424242;
`

const StatWrapper = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
`

const StatHeader = styled.h3`
  color: #424242;
  margin: 0;
`
const StatInfo = styled.p`
  color: #424242;
  margin-bottom: 0

  :first-child {
    margin-top: 0;
  }
`

const StatContainer = styled.div`
  display: flex;
  flex-direction:column;
  flex-wrap:nowrap;
  border: 2px solid #E0E0E0;
  padding: 10px 10px 0 10px;
  margin: 5px 5px 5px 5px;
  flex-basis: 45%

`


export default class Sensor extends React.Component {
  render () {
    return (
      <Container>
        <Header>Sensors Status</Header>

        <StatWrapper>
          <StatContainer>
            <StatHeader>Humidity</StatHeader>
            <StatInfo>Current : {this.props.sensors.Humidity.current_inside}</StatInfo>
            <StatInfo>Max : {this.props.sensors.Humidity.max_inside}</StatInfo>
            <StatInfo>Min : {this.props.sensors.Humidity.max_inside}</StatInfo>
          </StatContainer>

          <StatContainer>
            <StatHeader>Temperature</StatHeader>
            <StatInfo>Current : {this.props.sensors.Temperature.current_inside}</StatInfo>
            <StatInfo>Max : {this.props.sensors.Temperature.max_inside}</StatInfo>
            <StatInfo>Min : {this.props.sensors.Temperature.max_inside}</StatInfo>
          </StatContainer>
        </StatWrapper>

      </Container>
    )
  }
}
