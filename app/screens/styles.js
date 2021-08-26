import { StyleSheet } from 'react-native';

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
    padding: 8,
    color: '#F3F3F3',
    borderBottomColor: 'rgba(125, 204, 243, 0.8)',
    height: 50,
    width: 280,
    borderBottomWidth: 1
  },
});

export const dashStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#334257',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    top: 70,
    left: 40,
    alignSelf: 'flex-start',
    fontFamily: 'Gill Sans',
    fontSize: 30,
    color: '#F3F3F3'
  },
  list: {
    top: 60,
    left: 20,
    // alignSelf: 'flex-start'
  },
  listItemText: {
    fontFamily: 'Gill Sans',
    fontSize: 24,
    fontWeight: '300',
    color: '#F3F3F3'
  },
  listItemTextSmall: {
    fontFamily: 'Gill Sans',
    fontSize: 18,
    fontWeight: '200',
    alignSelf: 'center',
    color: '#F3F3F3'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 315,
    padding: 14,
    marginTop: 18,
    marginBottom: 18,
    backgroundColor: 'rgba(125, 204, 243, 0.3)',
    borderColor: '#7DCCF3',
    borderRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderWidth: 1,
  },
  addFormBtn: {
    justifyContent: 'center',
    height: 70,
    width: 70,
    backgroundColor: 'rgba(125, 204, 243, 0.4)',
    borderRadius: 50,
    bottom: 160,
    left: 280
  },
  addFormPlus: {
    color: '#F3F3F3',
    fontSize: 36,
    textAlign: 'center',
    alignSelf: 'center'
  }

})