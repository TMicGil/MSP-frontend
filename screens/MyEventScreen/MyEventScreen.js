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

  export default function EventScreen({navigation}) {
    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/background.jpg')}>
        <View style={styles.container}>
            
            <View style={styles.headerContainer}>
                <Text style={styles.text}>Your Event</Text>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.textsmall}>Which sport ? -- dropdown</Text>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.textsmall}>Date ? -- datepicker</Text>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.textsmall}>Hour ? -- datetimepicker</Text>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.textsmall}>Where ? -- search address</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.text}>Description of the event</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Text style={styles.text}>cancel</Text>
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
        marginTop: 45,
      },
      headerContainer: {
        width: '100%',
        height: '10%',
        backgroundColor: 'orange',
      },
    sectionContainer: {
        width: '100%',
        height: '10%',
        borderWidth: 2,
        backgroundColor: 'lightgrey',
        marginBottom: 4,
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