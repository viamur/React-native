import {
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
import BtnSubmit from '../components/BtnSubmit';

//icon
import { SimpleLineIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const CreatePostsScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        > */}
        <TouchableOpacity
          onPress={() => Keyboard.dismiss()}
          activeOpacity={0.7}
          style={styles.uploadImgBlock}
        >
          <View style={styles.wrapForPositionIcon}>
            <Image style={styles.image} resizeMode="cover" />
            <View
              style={{
                ...styles.wrapIcon,
                backgroundColor: true ? '#fff' : 'rgba(255, 255, 255, 0.3)',
              }}
            >
              <MaterialIcons name="photo-camera" size={24} color={true ? '#BDBDBD' : '#fff'} />
            </View>
          </View>
          <Text style={styles.textUploadImg}>{true ? 'Загрузите фото' : 'Редактировать фото'}</Text>
        </TouchableOpacity>
        {/* ===========================================FORM=============================== */}

        <TextInput
          style={styles.inputName}
          placeholder="Название..."
          placeholderTextColor={'#bdbdbd'}
        />

        <TouchableOpacity activeOpacity={0.7} style={styles.wrapLocation}>
          <TextInput
            placeholder="Местность..."
            placeholderTextColor={'#bdbdbd'}
            style={{ ...styles.inputName, paddingLeft: 28 }}
          />
          <SimpleLineIcons
            name="location-pin"
            style={styles.iconLocation}
            size={18}
            color="#BDBDBD"
          />
        </TouchableOpacity>
        <BtnSubmit
          title={'Опубликовать'}
          disabled={true ? true : false}
          onSubmit={() => console.log('hello')}
        />

        {/* =======================================TRASH=========================================== */}

        <TouchableOpacity activeOpacity={0.7} style={styles.wrapTrash}>
          <FontAwesome5 name="trash-alt" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        {/* </KeyboardAvoidingView> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 32,
    flex: 1,

    backgroundColor: '#fff',
  },
  uploadImgBlock: {
    marginBottom: 32,
  },
  wrapForPositionIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    width: '100%',
    height: 240,

    backgroundColor: '#e8e8e8',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 8,

    marginBottom: 8,
  },
  wrapIcon: {
    position: 'absolute',
    width: 60,
    height: 60,

    borderRadius: '50%',

    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textUploadImg: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
  inputName: {
    width: '100%',
    height: 50,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,

    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  wrapLocation: {
    marginBottom: 32,
    position: 'relative',
  },
  iconLocation: {
    position: 'absolute',
    left: 0,
    bottom: 16,
  },
  wrapTrash: {
    width: 70,
    height: 40,

    backgroundColor: '#F6F6F6',
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    bottom: 22,
    left: '50%',

    transform: [{ translateX: -20 }],
  },
});

export default CreatePostsScreen;
