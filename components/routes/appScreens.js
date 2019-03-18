import React from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import { Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
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
  return <AntDesign name={type} size={26} style={{ color: tintColor }} />
}
const sharedRoutes = {
  Following,
  Followers,
  OtherProfile,
  Repositories,
  Repository,
  Settings,
  Stars,
}
const HomeStack = createStackNavigator(
  {
    Home,
    ...sharedRoutes,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.PRIMARY,
        borderBottomColor: Color.BORDER_GRAY,
      },
      headerTintColor: Color.WHITE,
    },
  }
)
const SearchStack = createStackNavigator(
  {
    Search,
    ...sharedRoutes,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.PRIMARY,
        borderBottomColor: Color.BORDER_GRAY,
      },
      headerTintColor: Color.WHITE,
    },
  }
)
const ProfileStack = createStackNavigator(
  {
    Profile,
    ...sharedRoutes,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.PRIMARY,
        borderBottomColor: Color.BORDER_GRAY,
      },
      headerTintColor: Color.WHITE,
    },
  }
)

const GHModern = createBottomTabNavigator(
  {
    HomeRoutes: {
      screen: HomeStack,
      path: '/',
      navigationOptions: ({ navigation }) => ({
        title: 'Home',
        tabBarIcon: ({ tintColor, focused }) =>
          tabIconHelper(tintColor, focused, 'home'),
      }),
    },
    SearchRoutes: {
      screen: SearchStack,
      path: '/search',
      navigationOptions: ({ navigation }) => ({
        title: 'Search',
        tabBarIcon: ({ tintColor, focused }) =>
          tabIconHelper(tintColor, focused, 'search1'),
      }),
    },
    ProfileRoutes: {
      screen: ProfileStack,
      path: '/profile',
      navigationOptions: ({ navigation }) => ({
        title: 'Profile',
        tabBarIcon: ({ tintColor, focused }) =>
          tabIconHelper(tintColor, focused, 'user'),
      }),
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        if (!focused) {
          return <Text>un focused</Text>
        }
        return <Text>focused</Text>
      },
    }),
    tabBarOptions: {
      activeTintColor: Color.PRIMARY,
      allowFontScaling: false,
      style: {
        borderTopColor: Color.BORDER_GRAY,
      },
    },
    initialRouteName: 'SearchRoutes',
  }
)

export default GHModern
