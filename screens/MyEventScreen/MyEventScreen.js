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
  import { SelectList } from "react-native-dropdown-select-list";
  import { useState } from "react";

  export default function EventScreen({navigation}) {

    const data2 = ["Amateur", "Medium", "Semi-Pro", "Pro"];
    const [sport, setSport] = useState('')

    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/background.jpg')}>
        <View style={styles.container}>
            
            <View style={styles.headerContainer}>
            <Text style={styles.headerText}>My Event</Text>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.questionText}>Which sport ?</Text>
                    <SelectList
                      placeholder="Select your Sport"
                      data={data2}
                      setSelected={setSport}
                      search={false}
                      boxStyles={{ backgroundColor: "white" }}
                      inputStyles={{ color: "#E74C3C" }}
                      dropdownStyles={{ backgroundColor: "white" }}
                      dropdownTextStyles={{ fontSize: 16 }}
                      maxHeight={150}
                    />
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
      // HEADER
      headerContainer: {
        width: '100%',
        height: '10%',
        paddingLeft: 10,
      },
      headerText: {
        fontSize: 45,
        fontWeight: "700",
        color: "white",
        fontFamily: "Poppins-Bold",
        textShadowColor: "black",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 20,
      },
    sectionContainer: {
        width: '100%',
        height: '10%',
        borderWidth: 2,
        backgroundColor: 'lightgrey',
        marginBottom: 4,
    },
    // FIRST QUESTION
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
    questionText: {
      fontFamily: "Poppins-Medium",
      fontSize: 20,
      color: "black",
      backgroundColor: "white",
      marginTop: 15,
    },
    text: {
        fontSize: 40
    },
    textsmall: {
        fontSize: 20
    },
  })