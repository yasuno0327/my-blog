import React from 'react'
import { Button, Checkbox, Form, Container, Header } from 'semantic-ui-react'

function SignIn({user, editEmail, editPassword, signIn}) {
  return (
    <Container className='signin-container'>
      <Form className='signin-form'>
        <Header>Admin page</Header>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder='example@example.com'
            onChange={(e) => editEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder='password'
            onChange={(e) => editPassword(e.target.value)}
          />
        </Form.Field>
        <Button type='submit' onClick={signIn}>Submit</Button>
      </Form>
    </Container>
  )
}

export default SignIn
