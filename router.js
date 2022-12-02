import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import Home from './Screens/Home';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import CommentsScreen from './Screens/CommentsScreen';
import MapScreen from './Screens/MapScreen';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const RootStack = createStackNavigator();

const useRoute = () => {
  const [isAuth, setIsAuth] = useState(false);

  const navigation = useNavigation();
  console.log(navigation);

  return (
    <RootStack.Navigator>
      <RootStack.Group>
        {!isAuth ? (
          <>
            <RootStack.Screen
              name="Registration"
              component={() => <RegistrationScreen setIsAuth={setIsAuth} />}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Login"
              component={() => <LoginScreen setIsAuth={setIsAuth} />}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <RootStack.Screen
            name="Home"
            component={() => <Home setIsAuth={setIsAuth} />}
            options={{ headerShown: false }}
          />
        )}
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'card' }}>
        <RootStack.Screen
          name="Comment"
          options={{
            title: 'Комментарии',
            headerLeft: () => (
              <TouchableOpacity onPress={() => {}}>
                <AntDesign name="arrowleft" size={24} color="rgba(33, 33, 33, 0.8)" />
              </TouchableOpacity>
            ),
            headerLeftContainerStyle: styles.headerLeft,
            headerRightContainerStyle: styles.headerRight,
          }}
          component={CommentsScreen}
        />
        <RootStack.Screen name="Map" options={{ headerShown: false }} component={MapScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    paddingLeft: 16,
  },
  headerRight: {
    paddingRight: 16,
  },
});
export default useRoute;
