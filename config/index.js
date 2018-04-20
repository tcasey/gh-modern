import Expo from 'expo'
import get from 'lodash.get'

const props = {
  local: require('./local.json'),
  staging: require('./staging.json'),
  production: require('./production.json')
}

const releaseChannel = get(Expo, 'Constants.manifest.releaseChannel')
let ENV =
  releaseChannel ||
  get(Expo, 'Constants.manifest.env.REACT_NATIVE_ENV', 'production')

if (ENV === 'default') {
  ENV = 'production'
}

const event = Expo.Amplitude.logEvent
const eventDetails = Expo.Amplitude.logEventWithProperties
const analyticsInit = Expo.Amplitude.initialize('someID')
const identify = Expo.Amplitude.setUserId
const userDetails = Expo.Amplitude.setUserProperties
const envProps = props[ENV] || props.local

module.exports = Object.assign(
  {
    event,
    eventDetails,
    analyticsInit,
    identify,
    userDetails
  },
  envProps
)
