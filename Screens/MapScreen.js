import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// icon
import { AntDesign } from '@expo/vector-icons';


const MapScreen = ({ navigation, route: { params } }) => {
  if (!params.coordinate) {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 24, marginTop: '50%' }}>
          Координаты отсутсвуют
        </Text>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={35} color="#FF6C00" />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        region={params.coordinate.coords}
        mapType="standard"
        minZoomLevel={12}
      >
        <Marker
          title={params.nameLocation}
          coordinate={params.coordinate.coords}
          description={params.title}
        />
      </MapView>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={35} color="#FF6C00" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backBtn: {
    position: 'absolute',
    left: 16,
    top: 25,
  },
});

export default MapScreen;
