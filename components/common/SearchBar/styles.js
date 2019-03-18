import { StyleSheet } from 'react-native'
import { Layout, Color } from '../../../constants'

const styles = StyleSheet.create({
  input: {
    width: Layout.window.width - Layout.EDGE_PADDING,
    height: 40,
    borderWidth: 1,
    borderRadius: Layout.ICON_GAP,
    marginBottom: Layout.EDGE_PADDING,
    padding: Layout.ICON_GAP,
    paddingLeft: 40,
    borderColor: 'red',
    backgroundColor: 'blue',
  },
  icon: {
    position: 'absolute',
    top: Layout.ICON_GAP,
    left: Layout.ICON_GAP,
    color: Color.DEFAULT,
  },
})

export default styles
