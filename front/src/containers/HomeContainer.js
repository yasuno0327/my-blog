import React from 'react'
import PropTypes from 'prop-types'
import { Home } from '../components'
import * as HomeActions from '../actions/home'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class HomeContainer extends React.Component {
  render() {
    return (
      <Home />
    )
  }
}

const mapStateToProps = createStructuredSelector({
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
