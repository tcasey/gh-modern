import { Amplitude } from 'expo'
import get from 'lodash.get'

const props = {
  local: require('./local.json'),
  staging: require('./staging.json'),
  // production: require('./production.json')
}

const releaseChannel = get(Expo, 'Constants.manifest.releaseChannel')
let ENV =
  releaseChannel ||
  get(Expo, 'Constants.manifest.env.REACT_NATIVE_ENV', 'production')

if (ENV === 'default') {
  ENV = 'production'
}

const event = Amplitude.logEvent
const eventDetails = Amplitude.logEventWithProperties
const analyticsInit = Amplitude.initialize('someID')
const identify = Amplitude.setUserId
const userDetails = Amplitude.setUserProperties
const envProps = props[ENV] || props.local

module.exports = Object.assign(
  {
    event,
    eventDetails,
    analyticsInit,
    identify,
    userDetails,
  },
  envProps
)
