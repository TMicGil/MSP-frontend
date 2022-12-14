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

  export default function MapScreen({navigation}) {
    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/background.jpg')}>
        <View style={styles.container}>
            
            <View style={styles.headerContainer}>
                <Text style={styles.text}>Header</Text>
            </View>

            <View style={styles.mapContainer}>
                <Text style={styles.text}>Map</Text>
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
        width: '100%',
        height: '100%',
        backgroundColor: 'yellow'

      },
    //   TEXT
    text: {
        fontSize: 40
    },

  })