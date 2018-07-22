import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CatchError extends Component {
  componentDidCatch (error, info) {
    console.log(error)
  }

  render () {
    return this.props.children
  }
}

Error.propTypes = {
  children: PropTypes.any
}
