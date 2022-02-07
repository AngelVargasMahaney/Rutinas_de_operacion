import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/login/LoginScreen';
import ContenedorScreens from './src/module 1/ContenedorScreens';

export default function App() {
  return (
    // <ContenedorScreens />
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
