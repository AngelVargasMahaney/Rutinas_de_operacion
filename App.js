import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/login/LoginScreen';
import ContenedorScreens from './src/module 1/ContenedorScreens';
import TemplateScreen from './src/Template/TemplateScreen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import TemplateVersion2 from './src/Template/TemplateVersion2';

export default function App() {
  return (
    // <ContenedorScreens />
    // <NativeBaseProvider>
    //     <TemplateScreen />
    // </NativeBaseProvider>
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <TemplateVersion2 />
      </ApplicationProvider>
    </>
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
