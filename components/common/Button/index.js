import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'
import VSTouchable from '@vivintsolar-oss/native-vs-touchable'
import { Color } from '../../../constants'

export default class CustomButton extends Component {
  render () {
    const containerStyles = [styles.button]
    const { style, outline, text } = this.props

    if (style) {
      containerStyles.push(style)
    }

    if (outline) {
      return (
        <VSTouchable style={styles.outlineButton} {...this.props}>
          <Text style={styles.outlineButtonText}>{text || 'CLICK ME'}</Text>
        </VSTouchable>
      )
    }

    return (
      <VSTouchable style={containerStyles} {...this.props}>
        <Text style={styles.buttonText}>{text || 'CLICK ME'}</Text>
      </VSTouchable>
    )
  }
}
CustomButton.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.object,
  outline: PropTypes.bool
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: Color.PRIMARY,
    padding: 10,
    width: 'auto',
    alignSelf: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    color: Color.WHITE
  },
  outlineButton: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Color.PRIMARY,
    backgroundColor: Color.WHITE,
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center'
  },
  outlineButtonText: {
    paddingLeft: 10,
    paddingRight: 10,
    color: Color.BLACK
  }
})
