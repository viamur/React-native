import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const InputAvatar = ({}) => {
  return (
    <View style={styles.inputAvatar}>
      <AntDesign name="pluscircleo" size={24} color="#FF6C00" style={styles.inputAvatarIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputAvatar: {
    position: 'absolute',
    top: -60,

    width: 120,
    height: 120,

    backgroundColor: '#F6F6F6',
    borderRadius: 16,

    zIndex: 2,
  },
  inputAvatarIcon: {
    position: 'absolute',
    bottom: 14,
    right: -12,
  },
});

export default InputAvatar;
