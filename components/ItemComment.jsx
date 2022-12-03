import { Image, StyleSheet, Text, View } from 'react-native';
import { getDate } from '../utils/convertDate';

const ItemComment = ({ userId, data }) => {
  // check is owner this comment user
  const isOwner = userId == data.user.userId;

  // convert date in 09 июня, 2020 | 09:14
  const date = getDate(data.date);

  return (
    <View style={{ ...styles.container, flexDirection: isOwner ? 'row-reverse' : 'row' }}>
      <Image
        source={data.user.avatar}
        style={{
          ...styles.image,
          marginRight: isOwner ? 0 : 16,
          marginLeft: isOwner ? 16 : 0,
        }}
      />
      <View
        style={{
          ...styles.wrap,
          borderTopLeftRadius: isOwner ? 6 : 0,
          borderTopRightRadius: isOwner ? 0 : 6,
        }}
      >
        <Text style={styles.comment}>{data.comment}</Text>
        <Text style={{ ...styles.date, textAlign: isOwner ? 'left' : 'right' }}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  'container:last:child': {
    marginBottom: 0,
  },
  image: {
    width: 28,
    height: 28,

    borderRadius: '50%',
  },
  wrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 6,
    padding: 16,

    flex: 1,
  },
  comment: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    lineHeight: 18,

    color: '#212121',

    marginBottom: 8,
  },
  date: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    lineHeight: 12,

    color: '#bdbdbd',
  },
});

export default ItemComment;
