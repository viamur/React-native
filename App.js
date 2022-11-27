import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';

import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';

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
    <>
      {/* <LoginScreen /> */}
      <RegistrationScreen dimensions={dimensions} />
    </>
  );
}

{
  /* <StatusBar style="auto" /> */
}
