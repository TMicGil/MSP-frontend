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

  export default function HomeScreen({navigation}) {
    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/background.jpg')}>
        <View style={styles.container}>
            
            <View style={styles.headerContainer}>
                <Text style={styles.text}>Header</Text>
                <TouchableOpacity style={styles.messageBtn} onPress={() => navigation.navigate('MessageScreen')}>
                    <Text style={styles.textsmall}>MESSAGES</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.mapContainer}>
                <Text style={styles.text}>Map</Text>
            </View>

            <View style={styles.todayContainer}>
                <Text style={styles.textsmall}>Today in Nice</Text>
            </View>

            <View style={styles.searchContainer}>
                <Text style={styles.textsmall}>Search a sport</Text>
            </View>

            <View style={styles.listEventContainer}>
                <Text style={styles.text}>List of events</Text>
                <TouchableOpacity style={styles.joinBtn} onPress={() => navigation.navigate('Event')}>
                    <Text style={styles.textsmall}>JOIN</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.proposeContainer}>
                <TouchableOpacity style={styles.proposeBtn} onPress={() => navigation.navigate('MyEvent')}>
                    <Text style={styles.textsmall}>PROPOSE AN EVENT</Text>
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
      profileImg: {
      },
      mapContainer: {
        width: '100%',
        height: '30%',
        backgroundColor: 'yellow'
      },
      todayContainer: {
        width: '100%',
        height: '4%',
        backgroundColor: 'red',
      },
      searchContainer: {
        width: '100%',
        height: '7%',
        backgroundColor: 'lightgrey',
      },
      listEventContainer: {
        width: '100%',
        height: '27%',
        backgroundColor: 'skyblue',
      },
      proposeContainer: {
        width: '80%',
        height: '10%',
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
    // BUTTON
    joinBtn: {
      backgroundColor: 'orange',
      height: '20%',
      width: '30%',
    },
    proposeBtn: {
      backgroundColor: 'orange',
      height: '50%',
      width: '100%',
    },
    messageBtn: {
      backgroundColor: 'pink',
      height: '50%',
      width: '50%',
    },
    //   TEXT
    text: {
        fontSize: 40
    },
    textsmall: {
        fontSize: 20
    },
  })