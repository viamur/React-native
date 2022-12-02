import { Text, View } from 'react-native';

const CommentsScreen = ({ navigation, route }) => {
  console.log('CommentsScreen', route.params);
  return (
    <View>
      <Text>CommentsScreen</Text>
    </View>
  );
};

export default CommentsScreen;
