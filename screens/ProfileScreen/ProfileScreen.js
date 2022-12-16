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
    Keyboard,
    Alert,
  } from "react-native";
  import { useSelector } from "react-redux";
  import { useState, useEffect } from "react";

  export default function ProfileScreen({navigation}) {

    const user = useSelector((state) => state.user.value);

    const [hasPermission, setHasPermission] = useState(false);
    const [userDescription, setUserDescription] = useState('');
    const [userLevel, setUserLevel] = useState('');
    const [descriptionModal, setDescriptionModal] = useState(false);
    const [userSports, setUserSports] = useState([]);
    const [userDateBirth, setUserDateBirth] = useState(0);


    // GET USER INFO FROM DATABASE
    useEffect(() =>{
      fetch(`https://msp-backend.vercel.app/users/${user.token}`)
      .then(response => response.json())
      .then(data => {
        console.log('user info for profile screen:', data)
        if (data.result) {
          setUserSports(data.user.sport);
          setUserDateBirth(data.user.dateOfBirth);
          setUserDescription(data.user.description);
          setUserLevel(data.user.level)

        }
        setHasPermission(true);
      }
      )
    }, []);

    if (!hasPermission) {
      return <View><Text>Loading...</Text></View>
    } 

    // MAP TO GET AND DISPLAY ALL THE SPORT SELECTED IN THE DB
    const eachUserSport = userSports.map((sport, i)=> {
      return <Text key={i} style={styles.eachTextSport}>{sport}</Text>
    })

    // GET THE USER's AGE FOR HEADER
    const getAge = (stringDate) => {
      const today = new Date();
      const birthDate = new Date (stringDate);
      const yearsDifference = today.getFullYear() - birthDate.getFullYear();
      if (today.getMonth() < birthDate.getMonth() || 
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        return yearsDifference - 1
      }
      return yearsDifference;
    };

// MODAL FOR MODIFY THE DESCRIPTION
    const showDescriptionModal = () => {
      setDescriptionModal(!descriptionModal)
    }

    // SEND THE USER DESCRIPTION TO DB 
    const sendDescription = () => {
      const body = {
        token: user.token,
        description: userDescription,
      };
      fetch('https://msp-backend.vercel.app/users/description', {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((response) => response.json())
      .then((data) => {
        if (data.result) {
          Alert.alert("Confirmation :", "Your description has been modified :)", {cancelable: true})
        }
      });
      setDescriptionModal(!descriptionModal);
    }

    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/background.jpg')}>
        <View style={styles.container}>
          {/* MODAL FOR USER DESCRIPTION */}
          <Modal visible={descriptionModal} animationType="fade" transparent>
            <KeyboardAvoidingView style={{flex:1, justifyContent: 'flex-end'}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>

                  <Text style={styles.textTitleSml}>Enter here your new description :</Text>

                  <TextInput
                  onChangeText={(value) => {setUserDescription(value)}}
                  value={userDescription}
                  placeholder="Enter a new description about yourself"
                  placeholderTextColor="#ccd1e8"
                  style={styles.descriptionInput}
                  multiline={true}
                  />

                  <View style={styles.modalBtnContainer}>
                  <TouchableOpacity 
                  style={styles.modalBtn}
                  onPress={() => showDescriptionModal()}>
                    <Text style={styles.modalTextBtn}>CANCEL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  style={styles.modalBtn}
                  onPress={() => sendDescription()}>
                    <Text style={styles.modalTextBtn}>CONFIRM</Text>
                  </TouchableOpacity>
                  </View>

                </View>

              </View>

            </KeyboardAvoidingView>

          </Modal>
{/* HEADER */}
            <View style={styles.headerContainer}>
              <View style={styles.userInfoContainer}>
                    <View style={styles.image}></View>
                    <View style={styles.userInfo}>
                      <Text style={styles.textsmallname}>{user.firstname}</Text>
                      <Text style={styles.textsmallname}>City</Text>
                      <Text style={styles.textsmallname}>{getAge(userDateBirth)} years old</Text>
                      <Text style={styles.textsmallname}>{userLevel}</Text>
                    </View>
                </View>
            </View>
{/* REVIEWS */}
            <View style={styles.reviewsContainer}>
                <Text style={styles.textsmall}>Reviews</Text>
            </View>
{/* DESCRIPTION */}
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{userDescription}</Text>
                <TouchableOpacity 
                style={styles.modifyBtn}
                onPress={() => showDescriptionModal()}>
                  <Text style={styles.textButton}>Modify</Text>
                </TouchableOpacity>
            </View>
{/* MY SPORTS */}
            <View style={styles.sportContainer}>
                <Text style={styles.textTitle}>Sports :</Text>
                <View style={styles.mySports}>
                    {eachUserSport}
                </View>
            </View>
{/* MY EVENTS */}
            <View style={styles.myEventContainer}>
                <Text style={styles.textTitle}>{user.firstname}'s events :</Text>
            </View>
{/* PARTICIPATE TO */}
            <View style={styles.eventContainer}>
                <Text style={styles.textTitle}>Participate to</Text>
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
    // DESCRIPTION MODAL
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      backgroundColor: "white",
      width: "80%",
      height:'50%',
      borderRadius: 20,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    descriptionInput: {
      width: '90%',
      height: "40%",
      borderColor: "#E74C3C",
      borderWidth: 1,
      borderRadius: 10,
      fontSize: 16,
      backgroundColor: 'white',
      paddingLeft: 10,
      marginTop: 10,
    },
    modalBtnContainer: {
      flexDirection: 'row',
      height: '30%',
      marginTop: 7,
    },
    modalBtn: {
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 10,
      padding: 7,
      backgroundColor: "#E74C3C",
      borderRadius: 10,
      height: '70%',
    },
    modalTextBtn: {
      color: "#ffffff",
      fontWeight: "600",
      fontSize: 15,
      fontFamily: "Poppins-Medium",
    },
      // HEADER
      headerContainer: {
        width: '100%',
        height: '20%',
        marginTop: 45,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        height: '80%',
    },
    image: {
      width: '43%',
      height: '100%',
      borderRadius: '50%',
      marginRight: 8,
      backgroundColor: 'orange',
  },
  userInfo: {
    flexDirection: 'column',
  },
  textsmallname: {
    backgroundColor: 'white',
    fontSize: 20,
    marginBottom: 4,
    fontFamily: 'Poppins-Regular',
    color: '#E74C3C'
},
// DESCRIPTION
descriptionContainer: {
  width: '97%',
  height: '20%',
  flexDirection: 'column',
  alignItems: 'center',
},
descriptionText: {
  width: 350,
  height: "55%",
  borderColor: "#E74C3C",
  borderWidth: 1,
  borderRadius: 10,
  fontSize: 16,
  backgroundColor: 'white',
  paddingHorizontal: 10,
  fontFamily: 'Poppins-Regular'
},
reviewsContainer: {
  width: '100%',
  height: '7%',
  backgroundColor: 'lightgrey',
  },
  modifyBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 4,
    width: "40%",
    marginTop: 10,
    backgroundColor: "#E74C3C",
    borderRadius: 10,
  },
  textButton: {
    color: "#ffffff",
    height: 30,
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
// SPORT 
      sportContainer: {
        width: '100%',
        height: '10%',
        flexDirection: 'column',
        alignItems: 'center',
      },
      mySports: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
      eachTextSport: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,   
        color: '#E74C3C',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#E74C3C',
        borderRadius: 15,
        paddingHorizontal: 8,
        marginHorizontal: 6,
      },
// 
      myEventContainer: {
        width: '100%',
        height: '18%',
        backgroundColor: 'skyblue',
      },
      eventContainer: {
        width: '100%',
        height: '18%',
        backgroundColor: 'lightcoral',
      },
    //   TEXT
    textTitle: {
      fontFamily: 'Poppins-Medium',
      fontSize: 26,    
      backgroundColor: 'white',
    },
    textTitleSml: {
      fontFamily: 'Poppins-Medium',
      fontSize: 20,    
      backgroundColor: 'white',

    }
  })