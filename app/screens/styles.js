import { StyleSheet, TouchableNativeFeedback } from 'react-native';

export const s = StyleSheet.create({
  evenContainer: {
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
    paddingBottom: 10
  },
  pText: {
    fontFamily: 'Gill Sans',
    fontSize: 24,
    lineHeight: 32,
    color: '#F3F3F3',
    padding: 20
  },
  idText: {
    fontFamily: 'Gill Sans',
    fontSize: 22,
    fontWeight: '300',
    lineHeight: 32,
    color: '#F3F3F3',
    textDecorationLine: 'underline',
    textDecorationColor: 'rgba(125, 204, 243, 0.7)',
    marginTop: 20,
    padding: 20
  },
  input: {
    fontFamily: 'Gill Sans',
    fontSize: 20,
    lineHeight: 28,
    padding: 10,
    color: '#F3F3F3',
    borderBottomColor: 'rgba(125, 204, 243, 0.8)',
    height: 50,
    width: 280,
    borderBottomWidth: 1
  },
  nextBtn: {
    position: 'absolute',
    color: 'white',
    width: 43,
    height: 32,
    left: 293,
    top: 749,
  }
})