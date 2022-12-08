
import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import ItemPost from '../components/ItemPost';
import ProfilePost from '../components/ProfilePost';
import { db } from '../firebase/config';


const PostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  let listenersPosts;

  const getAllPost = async () => {
    listenersPosts = onSnapshot(collection(db, 'posts'), (doc) => {
      const postsArray = doc.docs.map(el => ({ ...el.data(), id: el.id }))
      setPosts(postsArray)
    })
  }

  useEffect(() => {
    getAllPost()
    return () => listenersPosts();
  }, []);

  return (
    <View style={styles.container}>
      <ProfilePost />
      {/* <ScrollView style={styles.scrollView}> */}
      <FlatList
        data={posts}
        style={{ width: '100%', marginTop: 32 }}
        renderItem={({ item }) => <ItemPost data={item} navigation={navigation} />}
        keyExtractor={(item, idx) => idx.toString()}
      />
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  scrollView: {
    marginTop: 32,
  },
});
export default PostsScreen;
