import { useEffect, useState } from 'react';
import {
  ImageBackground,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Platform,
  StyleSheet,
} from 'react-native';
import BtnSubmit from '../components/BtnSubmit';
import InputDefault from '../components/InputDefault';
import InputPassword from '../components/InputPassword';
import TextTitle from '../components/TextTitle';

/* ImageBackground */
const bgImage = require('../assets/images/bgAuth.jpeg');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isShowKeyboard, isSetShowKeyboard] = useState(false);
  const [nameActiveInput, setNameActiveInput] = useState('');

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

  const handleSubmit = () => {
    console.log({ email, password });

    setEmail('');
    setPassword('');
    setNameActiveInput('');
    handleUseKeyboard();
  };

  return (
    <TouchableWithoutFeedback onPress={handleUseKeyboard}>
      <View style={styles.container}>
        <ImageBackground source={bgImage} resizeMode="cover" style={styles.background}>
          {/* <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}> */}
          <View
            style={{
              ...styles.wrap,
              paddingBottom: isShowKeyboard ? (Platform.OS == 'ios' ? 260 : 32) : 110,
            }}
          >
            <TextTitle title="Войти" />

            <InputDefault
              nameActiveInput={nameActiveInput}
              placeholder="Адрес электронной почты"
              setChange={setEmail}
              handleActive={handleActive}
              name="email"
              value={email}
            />

            <InputPassword
              nameActiveInput={nameActiveInput}
              setPassword={setPassword}
              password={password}
              handleActive={handleActive}
            />
            {!isShowKeyboard && (
              <>
                <BtnSubmit title={'Войти'} onSubmit={handleSubmit} />

                <Text style={styles.textBottom}>Нет аккаунта? Зарегистрироваться</Text>
              </>
            )}
          </View>
          {/* </KeyboardAvoidingView> */}
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
  textBottom: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',

    marginTop: 16,
    color: '#1B4371',
  },
});

export default LoginScreen;
