import { Platform, StatusBar, StyleSheet } from 'react-native';
import Colors from './styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surfaceWhite,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  h1: {
    fontFamily: 'DMSans-Bold',
    fontSize: 50,
    fontWeight: '700',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  h2: {
    fontFamily: 'DMSans-Bold',
    fontSize: 40,
    fontWeight: '400',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  h3: {
    fontFamily: 'DMSans-Regular',
    fontSize: 33,
    fontWeight: '400',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  h4: {
    fontFamily: 'DMSans-Regular',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  body1: {
    fontFamily: 'DMSans-Regular',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  body2: {
    fontFamily: 'DMSans-Regular',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  body3: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  overline1: {
    fontFamily: 'Avenir',
    fontWeight: '900',
    fontSize: 14,
    textTransform: 'uppercase',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  overline2: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 12,
    textTransform: 'uppercase',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  h3Bold: {
    fontFamily: 'DMSans-Bold',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  h4Bold: {
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  body1Bold: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  body2Bold: {
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  numbers: {
    fontFamily: 'DMMono_500Medium',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
});
