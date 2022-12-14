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

  export default function ProfileScreen({navigation}) {
    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/background.jpg')}>
        <View style={styles.container}>
            
            <View style={styles.headerContainer}>
                <Text style={styles.text}>Header</Text>
            </View>

            <View style={styles.reviewsContainer}>
                <Text style={styles.textsmall}>Reviews</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.text}>Description</Text>
            </View>

            <View style={styles.sportContainer}>
                <Text style={styles.textsmall}>Sports</Text>
            </View>

            <View style={styles.myEventContainer}>
                <Text style={styles.text}>My events</Text>
            </View>

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
      headerContainer: {
        width: '100%',
        height: '20%',
        backgroundColor: 'orange',
        marginTop: 45,
      },
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