import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { Dimensions, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import useRoute from './router';
import store from './redux/store';

// del
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase/config';

/* Переменная Font дает нас возможность загрузить шрифты в асинхронном режиме в наше приложение. 
    Создаем функцию которая будет загружать шрифты */
const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
};

// const AuthStack = createStackNavigator();
// const MainTab = createBottomTabNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [dimensions, setDimensions] = useState(Dimensions.get('window').width - 20 * 2);

  const routing = useRoute();

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
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>{routing}</NavigationContainer>
      </SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
    </Provider>
  );
}
