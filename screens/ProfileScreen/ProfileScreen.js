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
  import { useSelector } from "react-redux";

  export default function ProfileScreen({navigation}) {

    const user = useSelector((state) => state.user.value);

    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/background.jpg')}>
        <View style={styles.container}>
{/* HEADER */}
            <View style={styles.headerContainer}>
              <View style={styles.userInfoContainer}>
                    <View style={styles.image}></View>
                    <View style={styles.userInfo}>
                      <Text style={styles.textsmallname}>{user.firstname}</Text>
                      <Text style={styles.textsmallname}>City</Text>
                      <Text style={styles.textsmallname}>Age</Text>
                    </View>
                </View>
            </View>
{/* REVIEWS */}
            <View style={styles.reviewsContainer}>
                <Text style={styles.textsmall}>Reviews</Text>
            </View>
{/* DESCRIPTION */}
            <View style={styles.descriptionContainer}>
                <Text style={styles.text}>Description</Text>
            </View>
{/* MY SPORTS */}
            <View style={styles.sportContainer}>
                <Text style={styles.textsmall}>Sports</Text>
            </View>
{/* MY EVENTS */}
            <View style={styles.myEventContainer}>
                <Text style={styles.text}>My events</Text>
            </View>
{/* PARTICIPATE TO */}
            <View style={styles.eventContainer}>
                <Text style={styles.text}>Participate to</Text>
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
      width: '50%',
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
// 
      reviewsContainer: {
        width: '100%',
        height: '7%',
        backgroundColor: 'lightgrey',
      },
      descriptionContainer: {
        width: '100%',
        height: '18%',
        backgroundColor: 'yellow'
      },
      sportContainer: {
        width: '100%',
        height: '10%',
        backgroundColor: 'red',
      },
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
    text: {
        fontSize: 40
    },
    textsmall: {
        fontSize: 20
    },
  })