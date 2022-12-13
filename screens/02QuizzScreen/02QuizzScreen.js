import {
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    Modal,
    TextInput,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPerson, faPersonDress } from "@fortawesome/free-solid-svg-icons";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { SelectList } from "react-native-dropdown-select-list";


  export default function QuizzScreen({ navigation }) {

    const [sportPractice, setSportPractice] = useState([]);
    const [level, setLevel] = useState('');

    const data = [
        {key: '1', value: 'Running'},
        {key: '2', value: 'Tennis'},
        {key: '3', value: 'Cycling'},
        {key: '4', value: 'Basketball'},
        {key: '5', value: 'Football'},
    ]

    const data2 = ['Amateur', 'Medium', 'Semi-Pro', 'Pro', 'Later']

    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/background.jpg')}>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>My Sport Pal</Text>
            </View>

            <View style={styles.subHeaderContainer}>
                <Text style={styles.subHeaderText}>Welcome Name !</Text>
            </View>

            {/* SPORTS SELECTION */}
            <View style={styles.quizzContainer}>
                <View>
                    <Text style={styles.questionText}>What sport do you practice ?</Text>
                    <MultipleSelectList
                    setSelected={(val) => setSportPractice(val)}
                    data={data}
                    save='value'
                    onSelect={() => console.log(sportPractice)}
                    search={false}
                    placeholder="Select sports you practice"
                    label="Sports selected"
                    labelStyles={{color: '#E74C3C'}}
                    badgeStyles={{backgroundColor: '#E74C3C'}}
                    badgeTextStyles={{color: 'white', fontSize: 16}}
                    boxStyles={{backgroundColor: 'white'}}
                    inputStyles={{color: '#E74C3C'}}
                    dropdownStyles={{backgroundColor: 'white'}}
                    dropdownTextStyles={{fontSize: 16}}
                    maxHeight={200}/>
                </View>

                {/* LEVEL SELECTION */}
                <View>
                    <Text style={styles.questionText}>What is your level ?</Text>
                    <SelectList
                    placeholder="Select your level"
                    data={data2}
                    setSelected={setLevel}
                    search={false}
                    boxStyles={{backgroundColor: 'white'}}
                    inputStyles={{color: '#E74C3C'}}
                    dropdownStyles={{backgroundColor: 'white'}}
                    dropdownTextStyles={{fontSize: 16}}
                    maxHeight={150}/>
                </View>

                <View>
                    <Text style={styles.questionText}>What is your date of birth ?</Text>
                </View>

                <View style={styles.sexContainer}>
                <TouchableOpacity style={styles.sexButton}>
                    <FontAwesomeIcon style={styles.textButton} icon={faPerson} size={26}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sexButton}>
                    <FontAwesomeIcon style={styles.textButton} icon={faPersonDress} size={26}/>
                </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.questionText}>Sport's Pal from your sex only or mixed ?</Text>
                </View>

                <View style={styles.sexContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>MIXED</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>ONLY</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>LATER</Text>
                </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.questionText}>Changing like the seasons ?</Text>
                    <Text style={styles.textEnd}>You will be able to update your preferences later in your profile section !</Text>
                </View>

                <View style={styles.goContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>GO</Text>
                </TouchableOpacity>
                </View>

            </View>
        </View>
        </ImageBackground>
        
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 42,
        marginHorizontal: 10,
      },
      imgBackground: {
        height: '100%',
        width: '100%',
      },
      headerContainer: {
        alignItems: 'center',
        width: '100%',
        alignItems: 'flex-start',
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
      subHeaderContainer: {
        alignItems: 'center',
        width: '100%',
        alignItems: 'flex-start',
        paddingLeft: 10,
        paddingTop: 10,
      },
      subHeaderText: {
        fontFamily: "Poppins-Medium",
        fontSize: 25,
        color: '#E74C3C',
        backgroundColor: 'white',
      },
    //   BUTTONS
      button: {
        alignItems: "center",
        justifyContent: "center",
        width: '30%',
        paddingTop: 10,
        marginTop: 10,
        backgroundColor: "#E74C3C",
        borderRadius: 10,
      },
      sexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      sexButton: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 10,
        backgroundColor: "#E74C3C",
        borderRadius: 100,
      },
      textButton: {
        color: "#ffffff",
        height: 30,
        fontWeight: "600",
        fontSize: 16,
        fontFamily: "Poppins-Bold",
      },
      goContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
    //   TEXT
    questionText: {
        fontFamily: "Poppins-Medium",
        fontSize: 20,
        color: 'black',
        backgroundColor: 'white',
        marginBottom: 15,
    },
    textEnd: {
        fontFamily: "Poppins-Light",
        fontSize: 18,
        color: 'black',
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
  });