import React from 'react'
import styled from 'styled-components'

import PiStatus from './components/PiStatus'

import firebase from './utils/firebase'
import './font.css'

const SuperWrapper = styled.div`
  display: flex;
  flex-direction:column;
  width: 80%;
  margin: 0 auto;
  margin-top: 80px;
`

const Contianer = styled.div`
  display: flex;
  flex-direction:column;
`

const Header = styled.h1`
  color: #424242;
  margin: 0;
`

const SubHeader = styled.p`
color: #9E9E9E;
`
class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      controls: null,
      pi: null,
      settings: null
    }
  }

  componentDidMount() {
    const dataRef = firebase.database().ref('/')

    dataRef.on('value', (snapshot) => {
      let items = snapshot.val()
      this.setState({
        controls : items.Controls,
        pi: items.PI,
        settings: items.Settings
      })
    })
  }

  render() {
    return (
      <SuperWrapper>
        <Header>Simple Smart Home Controller</Header>
        <SubHeader>Last Updated from Server : {this.state.settings != null ? this.state.settings.last_update_datetime : null}</SubHeader>
        {
          this.state.controls !== null && this.state.pi !== null && this.state.settings !== null ?
          <Contianer>
            <PiStatus pi={this.state.pi}/>
          </Contianer> : <p>Gathering information from Firebase</p> //Prevent Exception from feeding null value when loading the data
        }
      </SuperWrapper>
    );
  }
}

export default App;
