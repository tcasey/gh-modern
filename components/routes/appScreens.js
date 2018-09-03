import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import Ionicons from '@expo/vector-icons/Ionicons'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Settings from '../screens/Settings'
import Profile from '../screens/Profile'
import OtherProfile from '../screens/Profile/OtherProfile'
import Repositories from '../screens/Profile/Repositories'
import Repository from '../screens/Repository'
import Stars from '../screens/Profile/Stars'
import Followers from '../screens/Profile/Followers'
import Following from '../screens/Profile/Following'
import { Color } from '../../constants'

const tabIconHelper = (tintColor, focused, type) => {
  return (
    <Ionicons
      name={focused ? `ios-${type}` : `ios-${type}-outline`}
      size={26}
      style={{ color: tintColor }}
    />
  )
}
const stackNavOptions = {
  navigationOptions: ({ navigation }) => ({
    headerTintColor: Color.PRIMARY,
    headerStyle: {
      backgroundColor: Color.WHITE
    },
    headerBackground: Color.WHITE,
    title: navigation.state.params ? navigation.state.params.title : null
  }),
  cardStyle: {
    backgroundColor: Color.BACKGROUND
  }
}
const sharedRoutes = {
  Following,
  Followers,
  OtherProfile,
  Repositories,
  Repository,
  Settings,
  Stars
}
const HomeStack = createStackNavigator(
  {
    Home,
    ...sharedRoutes
  },
  {
    ...stackNavOptions
  }
)
const SearchStack = createStackNavigator(
  {
    Search,
    ...sharedRoutes
  },
  {
    ...stackNavOptions
  }
)
const ProfileStack = createStackNavigator(
  {
    Profile,
    ...sharedRoutes
  },
  {
    initialRouteName: 'Profile',
    navigationOptions: ({ navigation }) => ({
      headerTintColor: Color.PRIMARY,
      headerStyle: {
        backgroundColor: Color.WHITE
      },
      headerBackground: Color.WHITE,
      title: navigation.state.params ? navigation.state.params.title : null,
      headerBackTitle: null
    }),
    cardStyle: {
      backgroundColor: Color.BACKGROUND
    }
  }
)

const GHModern = createBottomTabNavigator(
  {
    HomeRoutes: {
      screen: HomeStack,
      path: '/',
      navigationOptions: {
        swipeEnabled: true,
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) =>
          tabIconHelper(tintColor, focused, 'home')
      }
    },
    SearchRoutes: {
      screen: SearchStack,
      path: '/search',
      navigationOptions: {
        swipeEnabled: true,
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor, focused }) =>
          tabIconHelper(tintColor, focused, 'search')
      }
    },
    ProfileRoutes: {
      screen: ProfileStack,
      path: '/profile',
      navigationOptions: {
        swipeEnabled: true,
        title: 'Profile',
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor, focused }) =>
          tabIconHelper(tintColor, focused, 'person')
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Color.PRIMARY,
      allowFontScaling: false,
      style: {
        backgroundColor: Color.WHITE
      }
    },
    tabBarPosition: 'bottom',
    initialRouteName: 'ProfileRoutes'
  }
)

export default GHModern
