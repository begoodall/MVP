import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#334257',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titleText: {
    fontFamily: 'Gill Sans',
    fontSize: 26,
    color: '#F3F3F3'
  },
  baseText: {
    fontFamily: 'Gill Sans',
    fontSize: 24,
    lineHeight: 32,
    color: '#F3F3F3',
    paddingBottom: 20
  },
  input: {
    borderBottomColor: '#7DCCF3',
    height: 40,
    width: 280,
    borderBottomWidth: 1
  }
})