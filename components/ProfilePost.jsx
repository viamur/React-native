import { Image, StyleSheet, Text, View } from 'react-native';

//del
import img from '../assets/icon.png';

const ProfilePost = () => {
  return (
    <View style={styles.profile}>
      <Image style={styles.profileImage} resizeMode={'cover'} source={img} />
      <View>
        <Text style={styles.profileName}>Natali Romanova</Text>
        <Text style={styles.profileEmail}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 16,

    marginRight: 8,
  },
  profileName: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },
  profileEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8)',
  },
});

export default ProfilePost;
