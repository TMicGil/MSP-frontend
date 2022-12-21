import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";
  import { useCallback, useEffect, useState } from "react";
  import { useSelector } from "react-redux";
  import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
  import { faStar } from "@fortawesome/free-solid-svg-icons";
  import { useFocusEffect } from "@react-navigation/native";
  
  export default function UserScreen({ navigation }) {
    const goprofile = useSelector((state) => state.goprofile.value);

    const [hasPermission, setHasPermission] = useState(false);

    const [events, setEvents] = useState([]);
    const [participate, setParticipate] = useState([])

// FETCH TO GET ALL EVENTS AND PARTICIPATE RELATED TO THE USER CLICKED
    useFocusEffect(
      useCallback(() => {
        fetch(`https://msp-backend.vercel.app/users/${goprofile.token}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.userInfo.ev)
            if (data.result) {
                setEvents(data.userInfo.events)
                setParticipate(data.userInfo.participate)
            }
            setHasPermission(true);

        })
    }, []))

    if (!hasPermission) {
        return <View><Text>Loading...</Text></View>
      } 

    // MAP TO GET AND DISPLAY ALL THE SPORT SELECTED IN THE REDUCER
    const eachUserSport = goprofile.sport.map((sport, i) => {
      return (
        <Text key={i} style={styles.eachTextSport}>
          {sport}
        </Text>
      );
    });
  
    // GET THE USER's AGE FOR HEADER
    const getAge = (stringDate) => {
      const today = new Date();
      const birthDate = new Date(stringDate);
      const yearsDifference = today.getFullYear() - birthDate.getFullYear();
      if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
          today.getDate() < birthDate.getDate())
      ) {
        return yearsDifference - 1;
      }
      return yearsDifference;
    };
  
    // .MAP TO GET AND DISPLAY ALL THE EVENTS CREATED BY THE USER
    const eachUserEvent = events.map((event, i) => {
      return (
        <View key={i} style={styles.eachEventContainer}>
          <Text style={styles.eventText}>{event.date.slice(5, 10)}</Text>
          <Text style={styles.eventText}>{event.sport}</Text>
          <Text style={styles.eventText}>{event.hour.slice(11, 16)}</Text>
        </View>
      );
    });
  
    // .MAP TO GET AND DISPLAY ALL THE PARTICIPATION OF THE USER
    const eachUserParticipate = participate.map((event, i) => {
      return (
        <View key={i} style={styles.eachEventContainer}>
          <Text style={styles.eventText}>{event.date.slice(5, 10)}</Text>
          <Text style={styles.eventText}>{event.sport}</Text>
          <Text style={styles.eventText}>{event.hour.slice(11, 16)}</Text>
        </View>
      );
    }); 
  
    // BACK UP IF NO EVENTS CREATED OR NO PARTICIPATION
    let noEvents = (
      <View style={styles.eachEventContainer}>
        <Text style={styles.eventText}>No events ongoing!</Text>
      </View>
    );
  
    let noParticipate = (
      <View style={styles.eachEventContainer}>
        <Text style={styles.eventText}>No participation ongoing!</Text>
      </View>
    );
  
    // PAGE >>>>>>>>>
    return (
      <ImageBackground
        style={styles.imgBackground}
        source={require("../../assets/background.jpg")}
      >
        <View style={styles.container}>
          {/* HEADER */}
          <View style={styles.headerContainer}>
            <View style={styles.userInfoContainer}>
              <View style={styles.image}></View>
              <View style={styles.userInfo}>
                <Text style={styles.textsmallname}>{goprofile.username}</Text>
                <Text style={styles.textsmallinfo}>City</Text>
                <Text style={styles.textsmallinfo}>
                  {getAge(goprofile.dateOfBirth)} years old
                </Text>
                <Text style={styles.textsmallinfo}>{goprofile.level}</Text>
              </View>
            </View>
          </View>
          {/* REVIEWS */}
          <View style={styles.reviewsContainer}>
            <View style={styles.starsContainer}>
              <FontAwesomeIcon icon={faStar} size={20} />
              <FontAwesomeIcon icon={faStar} size={20} />
              <FontAwesomeIcon icon={faStar} size={20} />
            </View>
            <Text>See all reviews</Text>
          </View>
          {/* DESCRIPTION */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{goprofile.description}</Text>
          </View>
          {/* SPORTS */}
          <View style={styles.sportContainer}>
            <Text style={styles.textTitle}>Sports :</Text>
            <View style={styles.mySports}>{eachUserSport}</View>
          </View>
          {/* MY EVENTS */}
          <View style={styles.myEventContainer}>
            <Text style={styles.textTitle}>{goprofile.username}'s events :</Text>
            <View style={styles.listOfEvents}>
            {eachUserEvent.length === 0 ? noEvents : eachUserEvent}
            </View>
          </View>
          {/* PARTICIPATE TO */}
          <View style={styles.eventContainer}>
            <Text style={styles.textTitle}>Participate to</Text>
            <View style={styles.listOfEvents}>
            {eachUserParticipate.length === 0
              ? noParticipate
              : eachUserParticipate}
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    imgBackground: {
      height: "100%",
      width: "100%",
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    // HEADER
    headerContainer: {
      width: "100%",
      height: "20%",
      marginTop: 45,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    userInfoContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
      height: "80%",
    },
    image: {
      width: "43%",
      height: "100%",
      borderRadius: "50%",
      marginRight: 8,
      backgroundColor: "orange",
    },
    userInfo: {
      flexDirection: "column",
    },
    textsmallname: {
      backgroundColor: "white",
      fontSize: 20,
      marginBottom: 4,
      fontFamily: "Poppins-SemiBold",
      color: "#E74C3C",
    },
    textsmallinfo: {
      backgroundColor: "white",
      fontSize: 15,
      marginBottom: 4,
      paddingLeft: 20,
      fontFamily: "Poppins-Regular",
      color: "#E74C3C",
    },
    // REVIEWS
    reviewsContainer: {
      width: "100%",
      height: "4%",
      paddingHorizontal: 40,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "lightgrey",
    },
    starsContainer: {
      flexDirection: "row",
      marginRight: 15,
    },
    // DESCRIPTION
    descriptionContainer: {
      width: "97%",
      height: "17%",
      flexDirection: "column",
      alignItems: "center",
    },
    descriptionText: {
      width: 350,
      height: "90%",
      borderColor: "#E74C3C",
      borderWidth: 1,
      borderRadius: 10,
      fontSize: 16,
      backgroundColor: "white",
      paddingHorizontal: 10,
      fontFamily: "Poppins-Regular",
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
      width: "100%",
      height: "10%",
      flexDirection: "column",
      alignItems: "center",
    },
    mySports: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    eachTextSport: {
      fontFamily: "Poppins-Medium",
      fontSize: 20,
      color: "#E74C3C",
      backgroundColor: "white",
      borderWidth: 2,
      borderColor: "#E74C3C",
      borderRadius: 15,
      paddingHorizontal: 8,
      marginHorizontal: 6,
    },
    // EVENT
    myEventContainer: {
      width: "100%",
      height: "18%",
    },
    eventContainer: {
      width: "100%",
      height: "18%",
    },
    listOfEvents: {
      padding: 10,
    },
    eachEventContainer: {
      backgroundColor: "#E74C3C",
      paddingVertical: 3,
      paddingHorizontal: 15,
      marginBottom: 3,
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: 10,
    },
    //   TEXT
    textTitle: {
      fontFamily: "Poppins-Medium",
      fontSize: 26,
      backgroundColor: "white",
    },
    textTitleSml: {
      fontFamily: "Poppins-Medium",
      fontSize: 20,
      backgroundColor: "white",
    },
    eventText: {
      fontFamily: "Poppins-Regular",
      fontSize: 15,
      color: "white",
    },
  });
  