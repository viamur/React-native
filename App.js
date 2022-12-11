import React, { useCallback, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar, View, LogBox, ActivityIndicator } from 'react-native';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Main from './components/Main'
import store from './redux/store';

/* Переменная Font дает нас возможность загрузить шрифты в асинхронном режиме в наше приложение. 
    Создаем функцию которая будет загружать шрифты */
const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
};

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [isReady, setIsReady] = useState(false);

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

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);



  if (!isReady) {
    return null;
  }

  LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView} >
          <Main />
        </View>
      </SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
    </Provider>
  );
}
