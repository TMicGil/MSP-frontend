import {
    Image,
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";
  import MapView, { Marker } from "react-native-maps";
  import { useSelector } from "react-redux";
  import { useState, useEffect } from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
  import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
  

  export default function EventScreen({navigation}) {
    const [hasPermission, setHasPermission] = useState(false);
    const [eventPosition, setEventPosition] = useState(null);

    const event = useSelector((state) => state.event.value);


  // USE EFFECT FOR GETTING THE COORDINATE (FOR THE MARKER) OF THE EVENT
    useEffect(() => {
        const position = {latitude: event.latitude, longitude: event.longitude, latitudeDelta: 0.03, longitudeDelta: 0.007}
        setEventPosition(position);
        setHasPermission(true);
    }, [])

    if (!hasPermission) {
      return <View><Text>Loading...</Text></View>
    } 

  // PAGE >>>>>>>>>>>
    return (
        <ImageBackground style={styles.imgBackground} source={require('../../assets/background.jpg')}>
        <View style={styles.container}>
            
{/* HEADER */}
            <View style={styles.headerContainer}>
                <View style={styles.userInfoContainer}>
                    <View style={styles.image}></View>
                    <View style={styles.userInfo}>
                      <Text style={styles.textsmallname}>{event.username}</Text>
                    </View>
                </View>

                <View style={styles.reviewsContainer}>
                <View style={styles.starsContainer}>
                  <FontAwesomeIcon icon={faStar} size={18}/>
                  <FontAwesomeIcon icon={faStar} size={18}/>
                  <FontAwesomeIcon icon={faStar} size={18}/>
                </View>
                <Text>See all reviews</Text>
            </View>
            </View>
{/* MAP */}
            <View style={styles.mapContainer}>
                <MapView style={styles.map} region={eventPosition}>
                    <Marker coordinate={eventPosition} title={event.username} description={event.sport} pinColor="orange" />
                </MapView>
            </View>
{/* EVENT INFO (SPORT, DATE) */}
            <View style={styles.informationContainer}>
                <Text style={styles.infoText}>{event.sport}</Text>
                <Text style={styles.infoText}>{event.date} - {event.hour}</Text>
            </View>
{/* ADDRESS */}
            <View style={styles.addressContainer}>
                <FontAwesomeIcon icon={faLocationDot} size={22}/>
                <Text style={styles.addressText}>{event.address}</Text>
            </View>
{/* DESCRIPTION */}
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>{event.description}</Text>
            </View>
{/* BTN STAR AND CONFIRM */}
            <View style={styles.buttonContainer}>

              <TouchableOpacity style={styles.confirmBtn}>
                <FontAwesomeIcon style={styles.textButton} icon={faStar} size={26}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.confirmBtn}>
                <Text style={styles.textButton}>CONFIRM</Text>
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
      // HEADER
      headerContainer: {
        width: '100%',
        height: '12%',
        marginTop: 45,
        paddingLeft: 10,
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
        reviewsContainer: {
          flexDirection: 'row',
          },
          starsContainer: {
            flexDirection: 'row',
          },
      // MAP
      mapContainer: {
        width: '97%',
        height: '30%',
        borderWidth: 2,
        borderColor: '#E74C3C',
        borderRadius: 10,
      },
      map: {
        flex: 1,
        borderRadius: 10,
      },
      // 
      informationContainer: {
        width: '100%',
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
      },
      // 
      addressContainer: {
        width: '100%',
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
      },
      // 
      descriptionContainer: {
        width: '100%',
        height: '22%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
      },
      descriptionText: {
        width: 350,
        height: "95%",
        borderColor: "#E74C3C",
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        fontFamily: 'Poppins-Regular'
      },
      // 
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '8%',
        paddingHorizontal: 20,
      },
      confirmBtn: {
        alignItems: "center",
        justifyContent: "center",
        width: "30%",
        height: "85%",
        backgroundColor: "#E74C3C",
        borderRadius: 10,
      },
      textButton: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 16,
        fontFamily: "Poppins-Regular",
      },
    //   TEXT
    infoText: {
      fontFamily: 'Poppins-Medium',
      fontSize: 23,    
      backgroundColor: 'white',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 20,
    },
    addressText: {
      fontFamily: 'Poppins-Medium',
      fontSize: 17,    
      backgroundColor: 'white',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 20,
      marginLeft: 8,
      textDecorationLine: 'underline',
    },
    text: {
        fontSize: 40
    },
    textsmall: {
        fontSize: 20
    },
  })