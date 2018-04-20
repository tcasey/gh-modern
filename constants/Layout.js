import { Dimensions } from 'react-native'

export default {
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  isSmallDevice: Dimensions.get('window').width < 375,
  tabBarHeight: 65,
  EDGE_PADDING: 16,
  INNER_PADDING: 8,
  OUTER_PADDING: 16,
  ICON_GAP: 8,
  TITLE: 24,
  HEADER: 18,
  TEXT: 16,
  SPAN: 12,
  HIT_SLOP: {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10
  }
}
