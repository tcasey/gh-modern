import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Color from '../../constants/Color'

const LOADING_MESSAGES = [
  'Locating the required gigapixels to render',
  'Spinning up the hamster',
  'Shovelling coal into the server',
  'Programming the flux capacitor',
  // '640K ought to be enough for anybody',
  // 'Would you prefer chicken, steak, or tofu?',
  // 'Pay no attention to the man behind the curtain',
  // 'Would you like fries with that?',
  'Checking the gravitational constant in your locale',
  "At least you're not on hold",
  'The server is powered by a lemon and two electrodes',
  // 'We love you just the way you are',
  // 'Take a moment to sign up for our lovely prizes',
  // "Don't think of purple hippos",
  'Wait while the satellite moves into position',
  "It's still faster than you could draw it",
  'My other load screen is much faster. You should try that one instead.',
  'The version I have of this in testing has much funnier load screens',
  'Loading humorous message',
  // 'Warming up Large Hadron Collider',
  'The magic elves are working frantically in here',
  // 'Happy Elf and Sad Elf are talking about your data',
  'All the relevant elves are on break',
  "Elf down! We're cloning the elf that was supposed to get you the data",
  'Time is an illusion. Loading time doubly so',
  'Are we there yet?',
  // 'Please insert 25¢',
  // 'Hang on a sec, I know your data is here somewhere',
  // "HELP!, I'm being held hostage, and forced to write the stupid lines!",
  'Searching for Answer to Life, the Universe, and Everything',
  'Waiting for the system admin to hit enter',
  'Paging for the system admin',
  'Warming up the processors',
  'RE-calibrating the internet',
  // 'We apologise for the fault in the subtitles. Those responsible have been sacked',
  // 'Counting backwards from infinity',
  // 'Scanning your hard drive for credit card details. Please be patient',
  // "Don't panic",
  'Loading the loading message'
  // 'Potent potables',
  // 'Reticulating Splines'
]

const LONG_LOADING_MESSAGES = [
  'Taking longer than usual',
  'Retrying...',
  'Still working...',
  'Sorry for the wait'
]

export default class Loading extends Component {
  static getRandom (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  constructor (props) {
    super(props)

    const { delay, interval, timeout, message } = props
    const timers = []

    if (delay) {
      timers.push(
        this.createTimer(
          'show',
          () => {
            if (!message) {
              this.startInterval(interval)
            }

            return true
          },
          delay
        )
      )
    }

    if (timeout) {
      timers.push(
        this.createTimer(
          'message',
          () => {
            this.clearTimers()

            return Loading.getRandom(LONG_LOADING_MESSAGES)
          },
          timeout + delay
        )
      )
    }

    this.state = {
      message: message || Loading.getRandom(LOADING_MESSAGES),
      show: delay === 0,
      timers
    }
  }

  // To prevent leaking timers
  componentWillUnmount () {
    this.clearTimers()
  }

  startInterval (time) {
    const interval = setInterval(() => {
      this.setState({
        message: Loading.getRandom(LOADING_MESSAGES)
      })
    }, time)

    this.setState({ interval })
  }

  clearTimers () {
    this.state.timers.forEach(id => {
      clearTimeout(id)
    })
    if (this.state.interval) {
      clearInterval(this.state.interval)
    }
  }

  createTimer (key, value, timeout = 0) {
    return setTimeout(() => {
      if (typeof value === 'function') {
        value = value()
      }
      this.setState({
        [key]: value
      })
    }, timeout)
  }

  render () {
    if (this.state.show) {
      return (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>{this.state.message}</Text>
          <ActivityIndicator size='large' color={Color.BLACK} />
        </View>
      )
    }

    return (
      <View style={styles.loading}>
        <ActivityIndicator size='large' color={Color.BLACK} />
      </View>
    )
  }
}

Loading.propTypes = {
  interval: PropTypes.number,
  timeout: PropTypes.number,
  delay: PropTypes.number,
  message: PropTypes.string
}

Loading.defaultProps = {
  interval: 5000,
  timeout: 90000,
  delay: 2000
}

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    width: '100%',
    // borderRadius: 10,
    backgroundColor: 'transparent',
    padding: 20
  },
  loadingText: {
    fontSize: 20,
    color: Color.PRIMARY,
    marginBottom: 20,
    textAlign: 'center'
  }
})
