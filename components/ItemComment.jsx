import { Image, StyleSheet, Text, View } from 'react-native';

// del
// const userId = 1;
// const data = {
//   id: 1,
//   photo: img,
//   comments: [
//     {
//       id: 1,
//       user: {
//         userId: 2,
//         avatar: img,
//       },
//       date: Date.now(),
//       comment:
//         'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
//     },
//     {
//       id: 2,
//       user: {
//         userId: 1,
//         avatar: img,
//       },
//       date: Date.now(),
//       comment:
//         'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
//     },
//     {
//       id: 2,
//       user: {
//         userId: 2,
//         avatar: img,
//       },
//       date: Date.now(),
//       comment: 'Thank you! That was very helpful!.',
//     },
//   ],
// };

const ItemComment = ({ userId, data }) => {
  return (
    <View style={{ backgroundColor: userId == data.user.userId ? 'red' : 'white', flex: 1 }}>
      <Image source={data.user.avatar} style={styles.image} />
      <View>
        <Text>{data.comment}</Text>
        <Text>{data.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 28,
    height: 28,

    borderRadius: '50%',
  },
});

export default ItemComment;
