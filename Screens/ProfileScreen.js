import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import BgImage from '../components/BgImage';
import InputAvatar from '../components/InputAvatar';
import ItemPost from '../components/ItemPost';

import { getUserId, getUserName, getUserPhoto } from '../redux/auth/authSelectors';
import { authSignOut } from '../redux/auth/authOperations';

//icon
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

//del
const data = [{ id: 1 }, { id: 2 }, { id: 3 }];

const ProfileScreen = ({ navigation, setIsAuth }) => {
  const [posts, setPosts] = useState([])

  const userName = useSelector(getUserName);
  const userId = useSelector(getUserId);

  const dispatch = useDispatch();

  const getAllPosts = async () => {
    const q = query(collection(db, "posts"), where("userId", "==", userId));

    onSnapshot(q, (doc) => {
      const postsArray = doc.docs.map(el => ({ ...el.data(), id: el.id }));
      setPosts(postsArray);
    });
  }

  useEffect(() => {
    getAllPosts();
  }, [])


  return (
    <BgImage>
      <ScrollView>
        <SafeAreaView style={{ paddingTop: 100 }}>
          <View style={styles.container}>
            <InputAvatar />
            <Text style={styles.userName}>{userName}</Text>
            <View style={{ width: '100%' }} >

              {posts.map(el => {
                return <ItemPost key={el.id} data={el} navigation={navigation} />
              })}
            </View>
            <TouchableOpacity onPress={() => dispatch(authSignOut())} style={styles.logout}>
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </BgImage>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: '200%',
    paddingTop: 90,
    paddingHorizontal: 16,
    position: 'relative',

    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  logout: {
    position: 'absolute',
    right: 16,
    top: 24,
  },
  userName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: '0.01em',
    color: '#212121',

    marginBottom: 32,
  },
});
export default ProfileScreen;
