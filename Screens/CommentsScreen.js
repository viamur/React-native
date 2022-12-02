import { useState } from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// icon
import { AntDesign } from '@expo/vector-icons';

// del
import img from '../assets/icon.png';
import ItemComment from '../components/ItemComment';
const userId = 1;
const data = {
  id: 1,
  photo: img,
  comments: [
    {
      id: 1,
      user: {
        userId: 2,
        avatar: img,
      },
      data: Date.now(),
      comment:
        'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
    },
    {
      id: 2,
      user: {
        userId: 1,
        avatar: img,
      },
      data: Date.now(),
      comment:
        'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
    },
    {
      id: 2,
      user: {
        userId: 2,
        avatar: img,
      },
      data: Date.now(),
      comment: 'Thank you! That was very helpful!.',
    },
  ],
};

const CommentsScreen = ({ navigation, route }) => {
  const [comment, setComment] = useState('');
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={60}
      behavior={Platform.OS == 'ios' ? 'position' : 'height'}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Image source={data.photo} resizeMode="cover" style={styles.image} />
          <FlatList
            data={data.comments}
            style={{ width: '100%', flex: 1 }}
            renderItem={({ item }) => <ItemComment userId={userId} data={item} />}
            keExtractor={(item, idx) => item.id}
          />
          <View style={styles.wrapInput}>
            <TextInput
              style={styles.input}
              placeholder="Комментировать..."
              value={comment}
              onChangeText={text => setComment(text)}
            />
            <TouchableOpacity style={styles.btnSend}>
              <AntDesign name="arrowup" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    minHeight: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    overflow: 'hidden',

    marginBottom: 32,
  },
  wrapInput: {
    // marginTop: 100,
    position: 'absolut',
    width: '100%',
    // bottom: 16,
    // left: 16,
  },
  input: {
    width: '100%',
    height: 50,
    paddingLeft: 16,
    paddingRight: 42,

    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#e8e8e8',

    backgroundColor: '#f6f6f6',
  },
  btnSend: {
    width: 34,
    height: 34,

    borderRadius: '50%',
    backgroundColor: '#ff6c00',

    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});

export default CommentsScreen;
