import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BgImage from '../components/BgImage';
import InputAvatar from '../components/InputAvatar';
import ItemPost from '../components/ItemPost';

//icon
import { MaterialIcons } from '@expo/vector-icons';

//del
const data = [{ id: 1 }, { id: 2 }, { id: 3 }];

const ProfileScreen = ({ setIsAuth }) => {
  return (
    <BgImage>
      <ScrollView>
        <SafeAreaView style={{ paddingTop: 100 }}>
          <View style={styles.container}>
            <InputAvatar />
            <Text style={styles.userName}>Natali Romanova</Text>
            <FlatList
              data={data}
              style={{ width: '100%' }}
              renderItem={({ item }) => <ItemPost data={item} />}
              keyExtractor={item => item.id}
            />
            <TouchableOpacity onPress={() => setIsAuth(false)} style={styles.logout}>
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
    height: '100%',
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
