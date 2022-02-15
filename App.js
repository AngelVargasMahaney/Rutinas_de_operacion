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
import Screen1 from './src/module 2/Screen1';
import Screen2 from './src/module 2/Screen2';
import { AuthProvider } from './src/context/authState';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';



const Stack = createNativeStackNavigator();
function MyStack() {
  return (

    <Stack.Navigator screenOptions={{
      headerShown: false,
    }
    }>
      <Stack.Screen name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="Home"
        component={ContenedorScreens} />
    </Stack.Navigator>
  )
}


export default function App() {
  let [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    // <ContenedorScreens />
    // <NativeBaseProvider>
    //     <TemplateScreen />
    // </NativeBaseProvider>
    // <AuthProvider>
    //   <IconRegistry icons={EvaIconsPack} />
    //   <ApplicationProvider {...eva} theme={eva.light}>
    //     <NativeBaseProvider>
    //       <NavigationContainer>
    //         <MyStack />
    //       </NavigationContainer>
    //     </NativeBaseProvider>

    //   </ApplicationProvider>
    // </AuthProvider>
    <AuthProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <MyStack />
          </ApplicationProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthProvider>
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
