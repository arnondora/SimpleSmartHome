import React from 'react'
import styled from 'styled-components'

import firebase from './utils/firebase'
import './font.css'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 80px;
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
      console.log(items)
      this.setState({
        controls : items.Controls,
        pi: items.PI,
        settings: items.Settings
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        Hello World
      </Container>
    );
  }
}

export default App;
