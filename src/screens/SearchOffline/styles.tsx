import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header_text: {
    fontSize: 13,
    width: '90%',
    paddingLeft: '15%',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  title_text: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'left',
    fontWeight: '500',
    color: Colors.textPrimary,
    paddingLeft: '5%',
  },
  author_text: {
    fontSize: 15,
    textAlign: 'left',
    fontWeight: '500',
    color: Colors.textSecondary,
    paddingBottom: '5%',
    paddingLeft: '5%',
  },
  audio_container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: '5%',
    width: '90%',
    paddingLeft: '10%',
    paddingBottom: '3%',
    alignItems: 'center',
  },
  view: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingTop: '0%',
  },
  view1: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '15%',
    paddingBottom: '10%',
  },
  view2: {
    position: 'absolute',
    width: 400,
    height: 100,
    left: 0,
    top: 500,
    bottom: 0,
    backgroundColor: Colors.surfaceGrey,
    overflow: 'hidden',
  },
});
