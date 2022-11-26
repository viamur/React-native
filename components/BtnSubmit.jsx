import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const BtnSubmit = ({ title, onSubmit }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.btnSend} onPress={onSubmit}>
      <Text style={styles.btnSendText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnSend: {
    borderRadius: 100,
    padding: 16,
    width: '100%',

    backgroundColor: '#FF6C00',
  },
  btnSendText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,

    textAlign: 'center',
    color: '#fff',
  },
});

export default BtnSubmit;
