import {  theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  activeButton: {
    backgroundColor: 'red'
  },
  button: {
    backgroundColor: theme.light.colors.btnColor,
    margin: 16,
  },
  labelStyle: {
    fontSize: 8,
    color: 'black',
    alignContent:'center',
    textAlign:'center'
  },
  articlesContainer: { flex: 1 }
});