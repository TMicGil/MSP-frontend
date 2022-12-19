import {
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    View,
    Modal,
    TextInput,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";
  import MapView, { Marker } from "react-native-maps";
  import { useSelector } from "react-redux";
  import { useState } from "react";
  

  export default function EventScreen({navigation}) {

    const user = useSelector((state) => state.user.value);
    const [eventPosition, setEventPosition] = useState(null);

    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/background.jpg')}>
        <View style={styles.container}>
            
            <View style={styles.headerContainer}>
                <Text style={styles.text}>Header</Text>
            </View>

            <View style={styles.mapContainer}>
                <MapView style={styles.map} region={user.location}>
                    {user.location && <Marker coordinate={user.location} title={user.firstname} description="Your position" pinColor="blue" />}
                </MapView>
            </View>

            <View style={styles.informationContainer}>
                <Text style={styles.textsmall}>Infos : sport and date</Text>
            </View>

            <View style={styles.addressContainer}>
                <Text style={styles.textsmall}>Address of the event</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.text}>Description of the event</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Text style={styles.text}>add to favs</Text>
                <Text style={styles.text}>confirm</Text>
            </View>





        </View>
        </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
    imgBackground: {
        height: '100%',
        width: '100%',
      },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      },
      headerContainer: {
        width: '100%',
        height: '10%',
        backgroundColor: 'orange',
        marginTop: 45,
      },
      mapContainer: {
        width: '97%',
        height: '30%',
        borderWidth: 2,
        borderColor: '#E74C3C',
        borderRadius: 10,
      },
      map: {
        flex: 1,
        borderRadius: 10,
      },
      informationContainer: {
        width: '100%',
        height: '10%',
        backgroundColor: 'lightgrey',
      },
      addressContainer: {
        width: '100%',
        height: '6%',
        backgroundColor: 'red',
      },
      descriptionContainer: {
        width: '100%',
        height: '23%',
        backgroundColor: 'skyblue',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '17%',
        backgroundColor: 'lightcoral',
      },
    //   TEXT
    text: {
        fontSize: 40
    },
    textsmall: {
        fontSize: 20
    },
  })