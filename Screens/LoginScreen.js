import { useState } from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

/* ImageBackground */
const bgImage = require('../assets/images/bgAuth.jpeg');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isShowKeyboard, isSetShowKeyboard] = useState(false);
  const [nameActiveInput, setNameActiveInput] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleActive = (focus, name) => {
    if (focus === 'onFocus') {
      name === 'email' ? setNameActiveInput('email') : setNameActiveInput('password');
      return isSetShowKeyboard(true);
    }
    if (focus === 'onBlur') {
      setNameActiveInput('');
      isSetShowKeyboard(false);
    }
  };

  const handleUseKeyboard = () => {
    isSetShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleUseKeyboard}>
      <View style={styles.container}>
        <ImageBackground source={bgImage} resizeMode="cover" style={styles.background}>
          <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <View style={{ ...styles.wrap, paddingBottom: isShowKeyboard ? 32 : 110 }}>
              <Text style={styles.title}>Войти</Text>
              <TextInput
                style={
                  nameActiveInput === 'email'
                    ? { ...styles.input, ...styles.inputActive, marginBottom: 16 }
                    : { ...styles.input, marginBottom: 16 }
                }
                placeholderTextColor="#BDBDBD"
                placeholder="Адрес электронной почты"
                onChangeText={text => setEmail(text)}
                onFocus={() => handleActive('onFocus', 'email')}
                onBlur={() => handleActive('onBlur', 'email')}
                value={email}
                keyboardType="email-address"
              />

              <View style={styles.wrapPassword}>
                <TextInput
                  style={
                    nameActiveInput === 'password'
                      ? { ...styles.input, ...styles.inputActive }
                      : { ...styles.input }
                  }
                  placeholderTextColor="#BDBDBD"
                  placeholder="Пароль"
                  secureTextEntry={secureText}
                  onChangeText={text => setPassword(text)}
                  onFocus={() => handleActive('onFocus', 'password')}
                  onBlur={() => handleActive('onBlur', 'password')}
                  value={password}
                />
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.btnPassword}
                  onPress={() => setSecureText(prev => !prev)}
                >
                  <Text style={styles.btnPasswordText}>{secureText ? 'Показать' : 'Скрыть'}</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: '100%', display: isShowKeyboard ? 'none' : 'flex' }}>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnSend}>
                  <Text style={styles.btnSendText}>Войти</Text>
                </TouchableOpacity>
                <Text style={styles.textBottom}>Нет аккаунта? Зарегистрироваться</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  wrap: {
    backgroundColor: '#fff',

    width: '100%',
    alignItems: 'center',

    paddingTop: 32,
    // paddingBottom: 110,
    paddingHorizontal: 10,

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: '0,01em',

    marginBottom: 33,
    color: '#212121',
  },
  input: {
    height: 50,
    width: '100%',

    fontSize: 16,
    lineHeight: 19,

    padding: 16,
    fontFamily: 'Roboto-Regular',

    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  inputActive: {
    borderColor: '#FF6C00',
    backgroundColor: '#fff',
  },
  wrapPassword: {
    position: 'relative',
    width: '100%',

    marginBottom: 43,
  },
  btnPassword: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  btnPasswordText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,

    color: '#1B4371',
  },
  btnSend: {
    borderRadius: 100,
    padding: 16,
    width: '100%',
    marginBottom: 16,

    backgroundColor: '#FF6C00',
  },
  btnSendText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,

    textAlign: 'center',
    color: '#fff',
  },
  textBottom: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',

    color: '#1B4371',
  },
});

export default LoginScreen;
