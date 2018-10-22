import React from 'react'
import { Container, Header as SeHeader, Icon } from 'semantic-ui-react'


function Header() {
  return (
    <Container className='top-header'>
      <SeHeader
        size='huge'
        as='h1'
        icon='laptop'
        content='Yasuの開発日記'
        inverted
        block
        className='header-content'
      />
    </Container>
  )
}

export default Header
