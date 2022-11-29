import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import PostsScreen from './PostsScreen';
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';

const MainTab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: 'Публикации',
          headerTitleStyle: styles.headerTitle,
          headerRight: () => (
            <TouchableOpacity>
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: styles.header,
          headerRightContainerStyle: styles.header,
          tabBarIcon: ({ focused, size, color }) => {
            return <Feather name="grid" size={size} color={'rgba(33, 33, 33, 0.8)'} />;
          },
          // headerShadowVisible: false,  убирает стандраное нижний бордер в хедере
          // tabBarBadge: 3, это как значек(типо не прочитанные сообщение и тд)
        }}
      />
      <MainTab.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: 'none' },
          title: 'Создать Публикацию',

          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.ovalIcon}>
              <Feather name="plus" size={20} color={'#FFFFFF'} />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={'rgba(33, 33, 33, 0.8)'} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  ovalIcon: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
    color: '#212121',
  },
  header: {
    paddingRight: 16,
  },
});

export default Home;
