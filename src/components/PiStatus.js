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
  flex-basis: 30%

`

export default class PiStatus extends React.Component {
  render () {
    return (
      <Container>
        <Header>Pi's Status</Header>
        <StatWrapper>

          <StatContainer>
            <StatHeader>CPU</StatHeader>
            <StatInfo>Temperature : {this.props.pi.CPU.temperature}</StatInfo>
          </StatContainer>

          <StatContainer>
            <StatHeader>DISK</StatHeader>
            <StatInfo>Total : {this.props.pi.DISK.total} GB</StatInfo>
            <StatInfo>Used : {this.props.pi.DISK.used} GB</StatInfo>
            <StatInfo>Free : {this.props.pi.DISK.free} GB</StatInfo>
          </StatContainer>

          <StatContainer>
            <StatHeader>RAM</StatHeader>
            <StatInfo>Total : {this.props.pi.RAM.total} MB</StatInfo>
            <StatInfo>Used : {this.props.pi.RAM.used} MB</StatInfo>
            <StatInfo>Free : {this.props.pi.RAM.free} MB</StatInfo>
          </StatContainer>
        </StatWrapper>
      </Container>
    )
  }
}
