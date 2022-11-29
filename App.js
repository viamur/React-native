import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import CreatePostsScreen from './Screens/CreatePostsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import PostsScreen from './Screens/PostsScreen';
import Home from './Screens/Home';

/* Переменная Font дает нас возможность загрузить шрифты в асинхронном режиме в наше приложение. 
    Создаем функцию которая будет загружать шрифты */
const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
};

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [dimensions, setDimensions] = useState(Dimensions.get('window').width - 20 * 2);

  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get('window').width - 20 * 2;
  //     setDimensions(width);
  //   };
  //   Dimensions.addEventListener('change', onChange);
  //   return () => {
  //     Dimensions.removeEventListener('change', onChange);
  //   };
  // }, []);

  if (!isReady) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} onError={console.warn} />
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <AuthStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </AuthStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

{
  /* <StatusBar style="auto" /> */
}
