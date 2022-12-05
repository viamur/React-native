import React, { useState } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { StatusBar } from 'react-native';
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

  if (!isReady) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} onError={console.warn} />
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
    </Provider>
  );
}
