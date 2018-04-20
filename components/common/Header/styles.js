import { StyleSheet } from 'react-native'
import { Layout, Color } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 124
    // paddingHorizontal: Layout.EDGE_PADDING
  },
  headerText: {
    fontSize: 17,
    fontWeight: '700',
    color: Color.WHITE,
    textAlign: 'center',
    marginHorizontal: 16,
    position: 'absolute',
    bottom: 12,
    left: Layout.window.width / 2.5
  },
  renderRight: {
    position: 'absolute',
    right: Layout.EDGE_PADDING,
    bottom: -Layout.ICON_GAP
  },
  renderLeft: {
    position: 'absolute',
    left: Layout.EDGE_PADDING,
    bottom: -Layout.ICON_GAP
  }
})

export default styles
