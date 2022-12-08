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
import { auth, db } from '../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import uploadFile from '../utils/uploadFile';
import { updateProfile } from 'firebase/auth';
import { updateAvatar } from '../redux/auth/authSlice';


const ProfileScreen = ({ navigation, setIsAuth }) => {
  const [posts, setPosts] = useState([])
  const [image, setImage] = useState(useSelector(getUserPhoto));

  const userName = useSelector(getUserName);
  const userId = useSelector(getUserId);
  const photo = useSelector(getUserPhoto)

  const dispatch = useDispatch();
  let listenersProfile;

  const getAllPosts = async () => {
    const q = query(collection(db, "posts"), where("userId", "==", userId));

    listenersProfile = onSnapshot(q, (doc) => {
      const postsArray = doc.docs.map(el => ({ ...el.data(), id: el.id }));
      setPosts(postsArray);
    });
  };

  const updateAvatarUser = async () => {
    try {
      const imageURL = await uploadFile({ path: 'avatarImage', photo: image, name: userId });
      const user = auth.currentUser;
      await updateProfile(user, {
        photoURL: imageURL,
      })
      dispatch(updateAvatar(imageURL))
      console.log('useEffect uploadFile imageURL user', imageURL, user)
    } catch (error) {
      console.log('updateAvatarUser Error', error)
    }
  }

  useEffect(() => {
    getAllPosts();
    return () => listenersProfile();
  }, []);


  useEffect(() => {
    if (photo !== image) {
      updateAvatarUser();
    }

  }, [image])

  return (
    <BgImage>
      <ScrollView>
        <SafeAreaView style={{ paddingTop: 100 }}>
          <View style={styles.container}>
            <InputAvatar image={image} setImage={setImage} />
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
