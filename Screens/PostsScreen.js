import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import ItemPost from '../components/ItemPost';
import ProfilePost from '../components/ProfilePost';

//del
// const data = [{ id: 1 }, { id: 2 }, { id: 3 }];

const PostsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <ProfilePost />
      {/* <ScrollView style={styles.scrollView}> */}
      <FlatList
        data={route.params}
        style={{ width: '100%', marginTop: 32 }}
        renderItem={({ item }) => <ItemPost data={item} navigation={navigation} />}
        keyExtractor={(item, idx) => idx}
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
