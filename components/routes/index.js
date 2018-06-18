import { createSwitchNavigator } from 'react-navigation'
import Account from './account'
import App from './appScreens'

export default createSwitchNavigator(
  {
    Account,
    App
  },
  {
    initialRouteName: 'Account'
  }
)
