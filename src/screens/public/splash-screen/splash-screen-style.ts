import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentContainerStyle: {
    minHeight: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    position: 'relative',
    paddingTop: 51,
  },
  nextButton: {
    backgroundColor: '#130160',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60 / 2,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    width: '100%',
  },
  textContainer: {
    width: '100%',
    marginTop: 78,
  },
  logo: {
    textAlign: 'right',
    width: '100%',
    color: '#000000',
    marginBottom: 93,
    lineHeight: 23,
    fontWeight: '700',
    fontSize: 18,
  },
  title: {
    fontSize: 40,
    color: '#000',
    fontFamily: 'DMSans-Medium',
    fontWeight: '700',
  },
  titleSpan: {
    color: '#FCA34D',
    textDecorationLine: 'underline',
  },
  description: {
    color: '#524B6B',
    fontSize: 14,
    width: '90%',
    lineHeight: 18,
    fontFamily: 'DMSans-Medium',
    fontWeight: '400',
    marginTop: 15,
  },
});
