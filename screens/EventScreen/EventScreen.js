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
  import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
  import { faStar } from "@fortawesome/free-solid-svg-icons";

  export default function EventScreen({navigation}) {
    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/background.jpg')}>
        <View style={styles.container}>
            
            <View style={styles.headerContainer}>
                <Text style={styles.text}>Header</Text>
            </View>

            <View style={styles.mapContainer}>
                <Text style={styles.text}>Map</Text>
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
              <TouchableOpacity>
                <FontAwesomeIcon icon={faStar} size={26}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text>CONFIRM</Text>
              </TouchableOpacity>
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
        height: '30%',
        backgroundColor: 'yellow'
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