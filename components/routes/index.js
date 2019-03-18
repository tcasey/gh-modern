import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Account from './account'
import App from './appScreens'

export default createAppContainer(
  createSwitchNavigator(
    {
      Account,
      App,
    },
    {
      initialRouteName: 'Account',
    }
  )
)
