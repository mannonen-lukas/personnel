import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FieldButton from './components/FieldButton';

export default function App() {
  return (
    <View style={styles.container}>
      <FieldButton style={styles.btn} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'red',
    alignItems: 'center',
  },
});