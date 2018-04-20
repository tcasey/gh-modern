import { StyleSheet } from 'react-native'
import { Color, Layout } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  section: {
    width: '100%',
    marginTop: Layout.EDGE_PADDING
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.DEFAULT,
    // padding: Layout.EDGE_PADDING,
    height: 120,
    position: 'relative'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: Layout.ICON_GAP,
    marginBottom: Layout.EDGE_PADDING,
    position: 'absolute',
    top: 48,
    backgroundColor: Color.WHITE
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    top: 160
  },
  textWrapper: {
    justifyContent: 'space-around',
    paddingHorizontal: Layout.EDGE_PADDING,
    marginBottom: Layout.EDGE_PADDING
  },
  owner: {
    fontSize: Layout.TITLE,
    color: Color.WHITE
  },
  textWhite: {
    color: Color.WHITE
  },
  smallText: {
    fontSize: Layout.SPAN,
    textAlign: 'center'
  },
  lightText: {
    color: Color.DEFAULT,
    textAlign: 'center'
  },
  bold: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bottomLinks: {
    marginTop: Layout.EDGE_PADDING * 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  description: {
    marginTop: Layout.EDGE_PADDING,
    textAlign: 'center'
  },
  link: {
    color: Color.PRIMARY,
    marginTop: Layout.ICON_GAP,
    textAlign: 'center'
  },
  title: {
    fontSize: Layout.HEADER,
    color: Color.BLACK,
    // backgroundColor: Color.WHITE,
    padding: Layout.EDGE_PADDING,
    textAlign: 'center'
  },
  itemStyle: {
    paddingHorizontal: Layout.EDGE_PADDING
  },
  icon: {
    color: Color.DEFAULT,
    paddingRight: Layout.ICON_GAP * 2
  },
  topicContainer: {
    height: '100%',
    flexDirection: 'row',
    marginRight: Layout.EDGE_PADDING,
    marginLeft: Layout.EDGE_PADDING
  },
  topicWrapper: {
    height: 32,
    borderRadius: 4,
    backgroundColor: Color.WHITE,
    padding: Layout.INNER_PADDING,
    marginRight: Layout.ICON_GAP
  },
  topicText: {
    color: Color.PRIMARY,
    fontSize: Layout.SPAN
  }
})

export default styles
