import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import ItemPost from '../components/ItemPost';
import ProfilePost from '../components/ProfilePost';

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <ProfilePost />
      <ScrollView style={styles.scrollView}>
        {/* <FlatList
          data={courses}
          renderItem={({ item }) => <ItemPost data={item} />}
          keyExtractor={item => item.id}
        /> */}
      </ScrollView>
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
