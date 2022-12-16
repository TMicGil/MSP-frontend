import {
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";
  import { useEffect, useState } from 'react';
  import { useDispatch, useSelector } from "react-redux";
  import { userGeoLocation } from "../../reducers/user";
  import MapView, { Marker } from "react-native-maps";
  import * as Location from 'expo-location';
  import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
  import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
  import { eventGeoLocation } from "../../reducers/location";


  export default function HomeScreen({navigation}) {

    const [hasPermission, setHasPermission] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);


    console.log('user reducer :', user)

    const [currentPosition, setCurrentPosition] = useState(null);
    const [searchFilter, setSearchFilter] = useState('');
    const [eventData, setEventData] = useState([])

    useEffect(() => {
      (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
  
        if (status === 'granted') {
          Location.watchPositionAsync({ distanceInterval: 10 },
            (location) => {
              const position = {latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.03, longitudeDelta: 0.007}
              setCurrentPosition(position);
              dispatch(userGeoLocation({latitude: position.latitude, longitude: position.longitude, latitudeDelta: 0.03, longitudeDelta: 0.007}))
            });
        }
      })();
    }, []);

// GET ALL EVENTS FROM DATABASE
    useEffect(() =>{
      fetch("https://msp-backend.vercel.app/events/all")
      .then(response => response.json())
      .then(data => {
        const realData = data.events.map((event) => {
          console.log('user :',event.user, 'sport :', event.sport);
          const eventInformation = { userId: event.user, sport: event.sport, date: event.date.slice(5, 10), hour: event.hour, latitude: event.latitude, longitude: event.longitude}
          dispatch(eventGeoLocation(eventInformation))
          return eventInformation
        })
        setEventData(realData)
        setHasPermission(true);
      }
      )
    }, []);

    if (!hasPermission) {
      return <View><Text>Loading...</Text></View>
    } 
    
// CREATE THE MARKERS WITH PROPS FROM THE DATABASE
    const eachEvent = eventData.map((data, i) => {
      return <Marker key={i} coordinate={{ latitude: data.latitude, longitude: data.longitude }} title={data.userId[0].firstname} description={data.sport} />
    })


// CREATE THE LIST WITH PROPS FROM THE DATABASE
    const eachEventList = eventData.map((data, i) => {
      return <View key={i} style={styles.eventContainer}>
      <View style={styles.starContainer}>
          <FontAwesomeIcon
          icon={faStar}
          size={22}
            />
      </View>
      <Text style={styles.eventListInfo}>{data.userId[0].firstname}</Text>
      <Text style={styles.eventListInfo}>{data.sport}</Text>
      <Text style={styles.eventListInfo}>{data.hour}</Text>

        <TouchableOpacity style={styles.joinBtn} onPress={() => navigation.navigate('Event')}>
          <Text style={styles.joinText}>LOOK</Text>
        </TouchableOpacity>

    </View>
    })

    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/background.jpg')}>
        <View style={styles.container}>
            {/* HEADER ------ */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={styles.userInfoContainer}>
                    <View style={styles.image}></View>
                    <View style={styles.userInfo}>
                      <Text style={styles.textsmallname}>{user.firstname}</Text>
                      <Text style={styles.textsmallname}>City</Text>
                    </View>
                </View>
                </TouchableOpacity>

                <View style={styles.messageContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('MessageScreen')}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size={35}
                    />
                  </TouchableOpacity>
                </View>
            </View>
            {/* MAP ------- */}
            <View style={styles.mapContainer}>
                <MapView style={styles.map} region={currentPosition}>
                    {currentPosition && <Marker coordinate={currentPosition} title={user.firstname} description="Your position" pinColor="blue" />}
                    {eachEvent}
                </MapView>
            </View>
            {/* TODAY IN NICE */}
            <View style={styles.todayContainer}>
                <Text style={styles.todayText}>Today in Nice :</Text>
            </View>
            {/* SEARCH BAR  */}
            <View style={styles.searchContainer}>
                <TextInput
                style={styles.inputs}
                placeholder="🔍 Search activity by sport or level"
                placeholderTextColor="#ccd1e8"
                onChangeText={(value) => {
                  setSearchFilter(value);
                }}
                value={searchFilter}/>
            </View>
            {/* LIST OF EVENTS */}
            <View style={styles.listEventContainer}>

              {eachEventList}


            </View>
            {/* PROPOSE ACTIVITY */}
            <View style={styles.proposeContainer}>
                <TouchableOpacity style={styles.proposeBtn} onPress={() => navigation.navigate('MyEvent')}>
                    <Text style={styles.proposeText}>PROPOSE AN ACTIVITY</Text>
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
      // HEADER ------------
      headerContainer: {
        width: '100%',
        height: '10%',
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
      width: '35%',
      height: '100%',
      borderRadius: '50%',
      marginRight: 8,
      backgroundColor: 'orange'
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
      messageContainer: {
        backgroundColor: 'white',
        height: '70%',
        width: '18%',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      // MAP --------- 
      mapContainer: {
        width: '97%',
        height: '35%',
        borderWidth: 2,
        borderColor: '#E74C3C',
        borderRadius: 10,
      },
      map: {
        flex: 1,
        borderRadius: 10,
      },
      // TODAY -------
      todayContainer: {
        width: '97%',
        height: '4%',
        marginVertical: 5,
      },
      todayText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 23,    
        textShadowColor: "white",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 20,
      },
      // SEARCH -------
      searchContainer: {
        width: '97%',
        height: '7%',
        justifyContent: 'center',
      },
      inputs: {
        width: "80%",
        height: "10%",
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16,
        height: '80%',
        backgroundColor: 'white',
        paddingLeft: 10,
      },
      // LIST OF EVENTS -------
      listEventContainer: {
        width: '97%',
        padding: 5,
        height: '27%',
        backgroundColor: 'white',
        borderRadius: 20,
      },
      eventContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginVertical: 5,
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#E74C3C',

      },
      eventListInfo: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
      },
      starContainer: {
        backgroundColor: 'white',
        borderRadius: '50%',
        height: '100%',
        width: '8%',
        alignItems: 'center',

      },
      joinBtn: {
        backgroundColor: '#E74C3C',
        height: '100%',
        width: '20%',
        borderRadius: 20,
        alignItems: 'center',
      },
      joinText: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 20,
        fontFamily: "Poppins-Medium",
      },
      // PROPOSE ACTIVITY
      proposeContainer: {
        width: '80%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      proposeBtn: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "70%",
        backgroundColor: "#E74C3C",
        borderRadius: 20,
      },
      proposeText: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 25,
        fontFamily: "Poppins-Light",
      },
    // BUTTON


    //   TEXT
    text: {
        fontSize: 40
    },
    textsmall: {
        fontSize: 20
    },
  })