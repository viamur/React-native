import { StyleSheet, Text } from 'react-native';

const TextTitle = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: '0,01em',

    marginBottom: 33,
    color: '#212121',
  },
});

export default TextTitle;
