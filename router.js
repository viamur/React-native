import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import Home from './Screens/Home';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';

const AuthStack = createStackNavigator();

const useRoute = () => {
  const [isAuth, setIsAuth] = useState(false);

  //   const navigation = useNavigation();

  return (
    <AuthStack.Navigator>
      {!isAuth ? (
        <>
          <AuthStack.Screen
            name="Registration"
            component={() => <RegistrationScreen setIsAuth={setIsAuth} />}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Login"
            component={() => <LoginScreen setIsAuth={setIsAuth} />}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <AuthStack.Screen
          name="Home"
          component={() => <Home setIsAuth={setIsAuth} />}
          options={{ headerShown: false }}
        />
      )}
    </AuthStack.Navigator>
  );
};
export default useRoute;
