import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import Touchable from '@vivintsolar-oss/native-vs-touchable'
import { Color, Layout } from '../../constants'

export default function MetricLabel (props) {
  const Wrapper = props.onPress ? Touchable : View
  return (
    <Wrapper onPress={props.onPress}>
      <Text style={styles.metric}>{props.metric}</Text>
      <Text style={styles.label}>{props.label}</Text>
    </Wrapper>
  )
}

MetricLabel.propTypes = {
  metric: PropTypes.number,
  label: PropTypes.string,
  onPress: PropTypes.func
}

const styles = StyleSheet.create({
  metric: {
    fontSize: Layout.TEXT,
    fontWeight: 'bold',
    color: Color.PRIMARY,
    textAlign: 'center'
  },
  label: {
    fontSize: Layout.SPAN,
    color: Color.PRIMARY
  }
})
