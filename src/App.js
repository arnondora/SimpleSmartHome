import React from 'react'
import styled from 'styled-components'

import Sensor from './components/Sensor'
import Blinds from './components/Blinds'
import Lights from './components/Lights'
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

const ControllerWrapper = styled.div`
  display: flex;
`

const ControllerItem = styled.div`
  width:40%;
  margin-right: 30px;
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

            <Sensor sensors={this.state.controls.Sensors}/>
            <ControllerWrapper>
                <ControllerItem><Blinds blinds={this.state.controls.Blinds} onBlindsToggle={this.onBlindsToggle.bind(this)}/></ControllerItem>
                <ControllerItem><Lights blinds={this.state.controls.Lights} onLightToggle={this.onLightToggle.bind(this)}/></ControllerItem>
            </ControllerWrapper>
            <PiStatus pi={this.state.pi}/>
          </Contianer> : <p>Gathering information from Firebase</p> //Prevent Exception from feeding null value when loading the data
        }
      </SuperWrapper>
    );
  }

  onBlindsToggle = name => (event, checked) => {
    var toggle = checked === true ? 1 : 0
    firebase.database().ref('/Controls/Blinds/' + name).child('value').set(toggle)
  }

  onLightToggle = name => (event, checked) => {
    var toggle = checked === true ? 1 : 0
    firebase.database().ref('/Controls/Lights/' + name).child('value').set(toggle)
  }
}

export default App;
