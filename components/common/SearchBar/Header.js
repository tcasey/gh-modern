import React from 'react'
import { Animated, Dimensions, Platform, StyleSheet, View } from 'react-native'
import { withNavigation, HeaderBackButton } from 'react-navigation'
import { Constants } from 'expo'

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 50 : 56
const STATUSBAR_HEIGHT = Constants.statusBarHeight
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56

export class Header extends React.PureComponent {
  static HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT

  _navigateBack = () => {
    this.props.navigation.goBack(null)
  }

  _maybeRenderBackButton = () => {
    if (!this.props.backButton) {
      return
    }

    return (
      <HeaderBackButton
        onPress={this._navigateBack}
        pressColorAndroid={this.props.tintColor || '#fff'}
        tintColor={this.props.tintColor}
        title={this.props.backButtonTitle || null}
        truncatedTitle={this.props.backButtonTruncatedTitle || null}
        titleStyle={this.props.backButtonTitleStyle || null}
      />
    )
  }

  render() {
    let headerStyle = {}
    if (Platform.OS === 'ios') {
      platformContainerStyles = {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: this.props.borderBottomColor || 'rgba(0, 0, 0, .3)',
      }
    } else {
      platformContainerStyles = {
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: StyleSheet.hairlineWidth,
        shadowOffset: {
          height: StyleSheet.hairlineWidth,
        },
        elevation: 4,
      }
    }
    if (this.props.backgroundColor) {
      headerStyle.backgroundColor = this.props.backgroundColor
    }

    return (
      <Animated.View style={[styles.container, headerStyle]}>
        <View style={styles.appBar}>
          <View style={[StyleSheet.absoluteFill, styles.header]}>
            {this._maybeRenderBackButton()}
            {this.props.children}
          </View>
        </View>
      </Animated.View>
    )
  }
}
let platformContainerStyles

const styles = StyleSheet.create({
  container: {
    paddingTop: STATUSBAR_HEIGHT,
    height: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
    ...platformContainerStyles,
  },
  appBar: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    bottom: 0,
    left: TITLE_OFFSET,
    right: TITLE_OFFSET,
    top: 0,
    position: 'absolute',
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
  },
  left: {
    left: 0,
    bottom: 0,
    top: 0,
    position: 'absolute',
  },
  right: {
    right: 0,
    bottom: 0,
    top: 0,
    position: 'absolute',
  },
})

export default withNavigation(Header)
