import React from 'react'
import { Button, Checkbox, Form, Container, Header } from 'semantic-ui-react'

function SignIn() {
  function onEdit(user) {
    this.props.editUser(user);
  }
  return (
    <Container className='signin-container'>
      <Form className='signin-form'>
        <Header>Admin page</Header>
        <Form.Field>
          <label>Email</label>
          <input placeholder='example@example.com' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='password' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  )
}

export default SignIn
