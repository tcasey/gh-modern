import React, { Component } from 'react'
import { Text } from 'react-native'
import { withNavigation } from 'react-navigation'

class Home extends Component {
  static navigationOptions() {
    return {
      title: 'Home',
    }
  }

  render() {
    return <Text />
  }
}

export default withNavigation(Home)
