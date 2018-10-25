import React from 'react'
import { HomeContainer, SignInContainer } from '../containers'
import { Header } from '../components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function Routes() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route path='/signin' component={SignInContainer} />
        </Switch>
      </Container>
    </Router>
  )
}

export default Routes
