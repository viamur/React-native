import { useNavigation } from '@react-navigation/native';
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
import BgImage from '../components/BgImage';
import BtnSubmit from '../components/BtnSubmit';
import InputDefault from '../components/InputDefault';
import InputPassword from '../components/InputPassword';
import TextTitle from '../components/TextTitle';

const LoginScreen = ({ setIsAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isShowKeyboard, isSetShowKeyboard] = useState(false);
  const [nameActiveInput, setNameActiveInput] = useState('');
  const { navigate } = useNavigation();

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

    // перебрасывает на home
    setIsAuth(true);
  };

  return (
    <TouchableWithoutFeedback onPress={handleUseKeyboard}>
      <View style={styles.container}>
        <BgImage>
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

                <Text style={styles.textBottom}>
                  Нет аккаунта?{' '}
                  <Text onPress={() => navigate('Registration')}> Зарегистрироваться</Text>
                </Text>
              </>
            )}
          </View>
          {/* </KeyboardAvoidingView> */}
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
