import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  ImageBackground,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Platform,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import BgImage from '../components/BgImage';
import BtnSubmit from '../components/BtnSubmit';
import InputAvatar from '../components/InputAvatar';
import InputDefault from '../components/InputDefault';
import InputPassword from '../components/InputPassword';
import TextTitle from '../components/TextTitle';
import { authSignUp } from '../redux/auth/authOperations';

/* ImageBackground */
const bgImage = require('../assets/images/bgAuth.jpeg');

const RegistrationScreen = ({ setIsAuth }) => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isShowKeyboard, isSetShowKeyboard] = useState(false);
  const [nameActiveInput, setNameActiveInput] = useState('');
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const handleActive = (focus, name) => {
    if (focus === 'onFocus') {
      name === 'login' && setNameActiveInput('login');
      name === 'email' && setNameActiveInput('email');
      name === 'password' && setNameActiveInput('password');

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
    console.log({ login, email, password });
    dispatch(authSignUp({ login, email, password }));

    setLogin('');
    setEmail('');
    setPassword('');
    setNameActiveInput('');
    handleUseKeyboard();

    // перебрасывает на home
    // navigation.navigate('Home');
    setIsAuth(true);
  };

  return (
    <TouchableWithoutFeedback onPress={handleUseKeyboard}>
      <View style={styles.container}>
        <BgImage>
          <View
            style={{
              ...styles.wrap,
              paddingBottom: isShowKeyboard ? (Platform.OS == 'ios' ? 230 : 32) : 45,
            }}
          >
            <InputAvatar />
            <TextTitle title="Регестрация" />
            <InputDefault
              nameActiveInput={nameActiveInput}
              placeholder="Логин"
              setChange={setLogin}
              handleActive={handleActive}
              name="login"
              value={login}
            />
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
                <BtnSubmit title={'Зарегистрироваться'} onSubmit={handleSubmit} />

                <Text style={styles.textBottom}>
                  Уже есть аккаунт?{' '}
                  <Text
                    onPress={() => {
                      navigate('Login');
                    }}
                  >
                    Войти
                  </Text>
                </Text>
              </>
            )}
          </View>
        </BgImage>
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
    position: 'relative',

    width: '100%',
    alignItems: 'center',

    paddingTop: 92,
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

export default RegistrationScreen;
