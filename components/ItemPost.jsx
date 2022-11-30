import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// icon
import { SimpleLineIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

//del
import img from '../assets/icon.png';

const ItemPost = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode={'cover'} source={img} />
      <Text style={styles.title}>Лес</Text>
      <View style={styles.bottomBlock}>
        <View style={styles.iconBlock}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconBlock}>
            {false ? (
              <FontAwesome name="comment-o" style={styles.icon} size={18} color="#BDBDBD" />
            ) : (
              <FontAwesome name="comment" style={styles.icon} size={18} color="#FF6C00" />
            )}
            <Text style={false ? styles.countComment : styles.countCommentAccent}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconBlock}>
            {false ? (
              <AntDesign name="like2" style={styles.icon} size={18} color="#FF6C00" />
            ) : (
              <AntDesign name="like1" style={styles.icon} size={18} color="#FF6C00" />
            )}
            <Text style={false ? styles.countComment : styles.countCommentAccent}>8</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.bottomBlock}>
          <SimpleLineIcons name="location-pin" style={styles.icon} size={18} color="#BDBDBD" />
          <Text style={{ ...styles.countCommentAccent, ...styles.locationText }}>Ukraine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 240,

    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 500,

    color: '#212121',
    marginBottom: 8,
  },
  bottomBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  icon: {
    marginRight: 8,
  },
  countComment: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
  countCommentAccent: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  locationText: {
    textDecorationLine: 'underline',
    textDecorationColor: '#212121',
  },
});

export default ItemPost;