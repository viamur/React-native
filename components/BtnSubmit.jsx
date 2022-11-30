import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const BtnSubmit = ({ title, onSubmit, disabled = false }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      style={{ ...styles.btnSend, backgroundColor: disabled ? '#F6F6F6' : '#FF6C00' }}
      onPress={onSubmit}
    >
      <Text style={{ ...styles.btnSendText, color: disabled ? '#bdbdbd' : '#fff' }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnSend: {
    borderRadius: 100,
    padding: 16,
    width: '100%',
  },
  btnSendText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,

    textAlign: 'center',
  },
});

export default BtnSubmit;
