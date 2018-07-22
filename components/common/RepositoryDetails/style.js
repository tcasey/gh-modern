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
  markdownWrapper: {
    paddingHorizontal: Layout.EDGE_PADDING
  },
  ownerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.DEFAULT,
    height: 120,
    padding: Layout.EDGE_PADDING
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: Layout.ICON_GAP,
    marginBottom: Layout.EDGE_PADDING,
    // position: 'absolute',
    // top: 48,
    backgroundColor: Color.WHITE
  },
  textContainer: {
    // position: 'absolute',
    // top: 160,
    width: '100%'
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
    // fontWeight: 'bold',
    padding: Layout.EDGE_PADDING,
    textAlign: 'center'
  },
  language: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: Layout.INNER_PADDING
  },
  itemStyle: {
    paddingHorizontal: Layout.EDGE_PADDING
  },
  icon: {
    color: Color.DEFAULT,
    paddingRight: Layout.ICON_GAP * 2
  },
  topicContainer: {
    height: 50,
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

export const markdownStyles = {
  heading: {
    paddingTop: Layout.ICON_GAP,
    fontWeight: 'bold'
  },
  heading1: {
    fontSize: 16
  },
  heading2: {
    fontSize: 16
  },
  heading3: {
    fontSize: 12
  },
  heading4: {
    fontSize: 10
  }
}

export default styles
