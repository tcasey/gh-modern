import { StyleSheet } from 'react-native'
import { Layout, Color } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_GRAY
  },
  controls: {
    paddingLeft: Layout.EDGE_PADDING
  },
  spacing: {
    paddingTop: Layout.EDGE_PADDING * 2
  },
  icon: {
    paddingHorizontal: Layout.EDGE_PADDING
  },
  renderLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0
  }
})

export default styles
