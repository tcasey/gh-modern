import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Touchable from '@vivintsolar-oss/native-vs-touchable'
import VSSvg from '@vivintsolar-oss/native-vs-icons'
import { Color, Layout } from '../../../constants'
import styles from './styles'

const headerImage =
  'https://res.cloudinary.com/tcasey/image/upload/v1523757052/Header.png'

export default class Header extends Component {
  render () {
    const { renderLeft, renderCenter, renderRight, navigation } = this.props

    return (
      <View style={styles.container}>
        {renderLeft && renderLeft()}
        {renderCenter && renderCenter(navigation)}
        {renderRight && renderRight(navigation)}
      </View>
    )
  }
}

Header.defaultProps = {
  renderLeft: navigation => {
    return (
      <Touchable
        hitSlop={Layout.HIT_SLOP}
        style={styles.renderLeft}
        onPress={() => {
          navigation.goBack(null)
        }}
      >
        <VSSvg.LeftChevron width={16} height={16} color={Color.WHITE} />
      </Touchable>
    )
  },
  renderCenter: navigation => {
    return (
      <ImageBackground
        source={{ uri: headerImage }}
        style={{ width: '100%', height: '100%', top: -40 }}
      >
        <Text style={styles.headerText}>{navigation.state.routeName}</Text>
      </ImageBackground>
    )
  },
  renderRight: navigation => {
    return (
      <Touchable
        hitSlop={Layout.HIT_SLOP}
        style={styles.renderRight}
        onPress={() => {
          navigation.navigate('Settings', {
            title: 'Settings'
          })
        }}
      >
        <VSSvg.SettingsFillIcon width={16} height={16} color={Color.WHITE} />
      </Touchable>
    )
  }
}
