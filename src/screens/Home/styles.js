import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#77dd77',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
  },
  mainTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
  },
  keyButton: {
      padding: 5,
      width: 45,
      height: 45,
      borderRadius: 90,
      marginTop: 10,
      position: 'absolute'
  },
  keyButtonText: {
      color: '#fff',
      position: 'absolute',
      top: '40%'
  }
});

export default styles;