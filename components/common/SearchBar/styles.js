import { StyleSheet } from 'react-native'
import { Layout, Color } from '../../../constants'

const styles = StyleSheet.create({
  input: {
    width: Layout.window.width - Layout.EDGE_PADDING,
    height: 32,
    borderWidth: 1,
    borderRadius: Layout.ICON_GAP,
    marginBottom: Layout.EDGE_PADDING,
    padding: Layout.ICON_GAP,
    paddingLeft: 40,
    borderColor: Color.BACKGROUND,
    backgroundColor: Color.BACKGROUND
  },
  icon: {
    position: 'absolute',
    top: Layout.ICON_GAP / 2,
    left: Layout.ICON_GAP,
    color: Color.DEFAULT
  }
})

export default styles
