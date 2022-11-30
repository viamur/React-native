import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BgImage from '../components/BgImage';

const ProfileScreen = () => {
  return (
    <BgImage>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20 }}>ProfileScreen</Text>
      </SafeAreaView>
    </BgImage>
  );
};

export default ProfileScreen;
