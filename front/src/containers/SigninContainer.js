import React from 'react'
import { SignIn } from '../components'
import * as SignInActions from '../actions/signin'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SignInContainer extends React.Component {
  editEmail = (email) => {
    this.props.editEmail(email)
  }
  editPassword = (password) => {
    console.log(this.props.user)
    this.props.editPassword(password)
  }
  signIn = () => {
    this.props.signIn()
  }
  render() {
    return (
      <SignIn
        user={this.props.user}
        editEmail={this.editEmail}
        editPassword={this.editPassword}
        signIn={this.signIn}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  user: createSelector(
    (state) => state.user,
    (userState) => userState
  ),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SignInActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer)
