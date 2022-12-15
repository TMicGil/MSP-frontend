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
                <Text style={styles.text}>My messages</Text>
            </View>

            <View style={styles.subHeaderContainer}>
                <Text style={styles.textsmall}>Search a message -- input</Text>
            </View>

            <View style={styles.generalMessagesContainer}>
                <View style={styles.messageContainer}>
                    <View style={styles.userInfoContainer}>
                        <View style={styles.image}></View>
                        <Text style={styles.textsmallname}>Name</Text>
                    </View>

                    <View style={styles.messageContentContainer}>
                        <Text style={styles.textsmall}>SALUT JOHN AU FAIT POUR CE SOIR SUPER SI ON PEUT....</Text>
                    </View>
                </View>

                <View style={styles.messageContainer}>
                    <View style={styles.userInfoContainer}>
                        <View style={styles.image}></View>
                        <Text style={styles.textsmallname}>Name</Text>
                    </View>

                    <View style={styles.messageContentContainer}>
                        <Text style={styles.textsmall}>SALUT JOHN AU FAIT POUR CE SOIR SUPER SI ON PEUT....</Text>
                    </View>

                </View>

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
    subHeaderContainer: {
        width: '100%',
        height: '8%',
        backgroundColor: 'skyblue',
    },
    generalMessagesContainer: {
        width: '90%',
        marginVertical: 10,
        borderWidth: 2,
        height: '78%',
        justifyContent: 'flex-start',
    },
    messageContainer: {
        margin: 8,
        height: '20%',
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        height: '30%',
    },
    messageContentContainer: {
        backgroundColor: 'white',
        marginTop: 4,
    },
    image: {
        width: '10%',
        height: '100%',
        borderRadius: '50%',
        marginRight: 8,
        backgroundColor: 'orange'
    },
          //   TEXT
    text: {
        fontSize: 40
    },
    textsmall: {
        fontSize: 20
    },
    textsmallname: {
        backgroundColor: 'white',
        fontSize: 20
    },
     
  })