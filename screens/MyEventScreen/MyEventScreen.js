import {
    KeyboardAvoidingView,
    Keyboard,
    StyleSheet,
    Text,
    View,
    Modal,
    TextInput,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";
  import { SelectList } from "react-native-dropdown-select-list";
  import DatePicker from "@react-native-community/datetimepicker";
  import { useState } from "react";

  export default function EventScreen({navigation}) {

    const data2 = ["Running", "Hiking", "Snorkeling", "Tennis", "Cycling", "Basketball", "Football"];
    const [sport, setSport] = useState('');
    const [dateEvent, setDateEvent] = useState(new Date());
    const [hourEvent, setHourEvent] = useState(new Date());
    const [searchAddress, setSearchAddress] = useState('');
    const [eventDescription, setEventDescription] = useState('')

    const dateEventSelected = (event, value) => {
      setDateEvent(value)
    }

    const hourEventSelected = (event, value) => {
      setHourEvent(value)
    }

    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/background.jpg')}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            
            <View style={styles.headerContainer}>
            <Text style={styles.headerText}>My Event</Text>
            </View>
{/* WHICH SPORT ? */}
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


{/* DATE SELECTION */}
            <View style={styles.sectionContainer}>
                <Text style={styles.questionText}>Select a date</Text>
                <DatePicker
                style={styles.calendar}
                mode="date"
                value={dateEvent}
                minimumDate={new Date()}
                textColor="#E74C3C"
                accentColor="#E74C3C"
                onChange={dateEventSelected}
                format="hh:mm"/>
            </View>

{/* HOUR SELECTION */}
            <View style={styles.sectionContainer}>
                <Text style={styles.questionText}>Select an hour</Text>
                <DatePicker
                style={styles.hour}
                mode="time"
                value={hourEvent}
                onChange={hourEventSelected}
                textColor="#E74C3C"
                accentColor="#E74C3C"
                minuteInterval={10}/>
            </View>

{/* ADDRESS SELECTION */}
            
            <View style={styles.descriptionContainer}>
                <Text style={styles.questionText}>Where ?</Text>
                <TextInput
                onSubmit={Keyboard.dismiss}
                style={styles.addressInput}
                placeholder="Enter an address"
                placeholderTextColor="#ccd1e8"
                onChangeText={(value) => {setSearchAddress(value);}}/>
            </View>

{/* EVENT DESCRIPTION */}
            <View style={styles.descriptionContainer}>
                <Text style={styles.questionText}>Enter a short description of your event</Text>
                <TextInput
                onSubmit={Keyboard.dismiss}
                style={styles.descriptionInput}
                placeholder="Enter a short description"
                placeholderTextColor="#ccd1e8"
                onChangeText={(value) => {setEventDescription(value);}}/>
            </View>

{/* BUTTON CANCEL AND CONFIRM */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
              style={styles.button}>
                <Text style={styles.textButton}>CANCEL</Text>
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.button}>
                <Text style={styles.textButton}>CONFIRM</Text>
              </TouchableOpacity>
            </View>





        </KeyboardAvoidingView>
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
      // CONTAINERS
      headerContainer: {
        width: '100%',
        height: '10%',
        paddingLeft: 10,
      },
    sectionContainer: {
        width: '100%',
        borderWidth: 2,
        marginBottom: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
      descriptionContainer: {
        width: '100%',
        height: '23%',
        flexDirection: 'column',
        borderWidth: 2,
        paddingHorizontal: 20,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: '17%',
        borderWidth: 2,
      },
      calendar: {
        backgroundColor: "white",
        opacity: 0.9,
      },
      hour: {
        backgroundColor: "white",
        opacity: 0.9,
      },
      addressInput: {
        width: "90%",
        height: '35%',
        borderColor: "#E74C3C",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: 'white',
        paddingLeft: 10,
      },
      descriptionInput: {
        width: "90%",
        height: "35%",
        borderColor: "#E74C3C",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: 'white',
        paddingLeft: 10,
      },
      button: {
        alignItems: "center",
        justifyContent: "center",
        width: "30%",
        height: "40%",
        backgroundColor: "#E74C3C",
        borderRadius: 10,
      },
    //   TEXT
    headerText: {
      fontSize: 45,
      fontWeight: "700",
      color: "white",
      fontFamily: "Poppins-Bold",
      textShadowColor: "black",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 20,
    },
    questionText: {
      fontFamily: "Poppins-Medium",
      fontSize: 20,
      color: "black",
      backgroundColor: "white",
      marginTop: 15,
    },
    textButton: {
      color: "#ffffff",
      fontWeight: "600",
      fontSize: 16,
      fontFamily: "Poppins-Bold",
    },
  })