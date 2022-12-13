
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
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import SigninBtn from './SigninBtn';
import SignUpBtn from './SignUpBtn';
import DiscoverBtn from './DiscoverBtn';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'

export default function HomeScreen({ navigation }) {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const [signUpFirstname, setSignUpFirstname] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpMail, setSignUpMail] = useState('');

  const [signInMail, setSignInMail] = useState('');
  const [signInPassword, setSignInPassword] = useState(''); 


  const showSigninModal = () => {
    setSignInModal(!signInModal);
  }

  const showSignupModal = () => {
    setSignUpModal(!signUpModal);
  }


  return (
    <View style={styles.container}>

        {/* MODAL FOR SIGN IN */}
      <Modal visible={signInModal} animationType='fade' transparent>
      <KeyboardAvoidingView style={{flex: 1, justifyContent: 'flex-end'}}behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.xmarkContainer}>
              <TouchableOpacity onPress={() => showSigninModal()}>
                <FontAwesomeIcon icon={faXmark} size={26}/>
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput style={styles.inputs} placeholderTextColor="#ccd1e8" onChangeText={ value => {setSignInMail(value)}} value={signInMail} placeholder='Enter your email'/>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput style={styles.inputs} placeholderTextColor="#ccd1e8" onChangeText={ value => {setSignInPassword(value)}} value={signInPassword} placeholder='Enter your password'/>
                <SigninBtn/>
              </View>

          </View>
        </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* MODAL FOR SIGN UP */}
      <Modal visible={signUpModal} animationType='fade' transparent>
      <KeyboardAvoidingView style={{flex: 1, justifyContent: 'flex-end'}}behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.xmarkContainer}>
                <TouchableOpacity onPress={() => showSignupModal()}>
                    <FontAwesomeIcon icon={faXmark} size={26}/>
                </TouchableOpacity>
            </View>
          <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>First name</Text>
              <TextInput style={styles.inputs} placeholderTextColor="#ccd1e8" onChangeText={ value => {setSignUpFirstname(value)}} value={signUpFirstname} placeholder='Enter your first name'/>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput style={styles.inputs} placeholderTextColor="#ccd1e8" onChangeText={ value => {setSignUpMail(value)}} value={signUpMail} placeholder='Enter your email'/>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput style={styles.inputs} placeholderTextColor="#ccd1e8" onChangeText={ value => {setSignUpPassword(value)}} value={signUpPassword} placeholder='Enter your password'/>
              <SignUpBtn/>
            </View>
          </View>
        </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* REST OF THE PAGE */}
      <View style={styles.headerContainer}>

        <View>
        <Image style={styles.image} 
              source={require('../../assets/loginimage.jpg')}/>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to My Sport Pal !</Text>
          <Text style={styles.text}>Only few more steps before meeting your new sport's pal.</Text>
        </View>
      </View>


        <View style={styles.signInContainer}>
            <Text style={styles.subText}>Already have an account ?</Text>
            <SigninBtn showSigninModal={showSigninModal}/>
        </View>

        <View style={styles.signUpContainer} blurRadius={signInModal ? 4 : 0}>
            <Text style={styles.subText}>First time on My Sport Pal ?</Text>
            <View style={styles.doubleBtnContainer}>
                <SignUpBtn showSignupModal={showSignupModal}/>
                <DiscoverBtn/>
            </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  // MODALS STYLE
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    width: '80%',
    minHeight: '25%',
    maxHeight: '75%',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '120%',
    flexShrink: 1,

  },
  inputs: {
    width: '80%',
    height: '10%',
    margin: 20,
    paddingLeft: 10,
    borderBottomColor: '#E74C3C',
    borderBottomWidth: 1,
    fontSize: 16,
  },
  inputLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 15,
  },
  xmarkContainer: {
    width: '100%',
    height: '7%',
    alignItems: 'flex-end'
  },
  // REST OF THE PAGE STYLE
  headerContainer: {
    width: '100%',
    height: '60%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '10%',
    opacity: 0.9,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    position: 'absolute',
    bottom: 30,
    left: 30,

  },
  title: {
    fontSize: 38,
    fontWeight: '700',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontFamily: 'Poppins-Regular',
  },
  text: {
    fontSize: 20,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  subText: {
    fontSize: 20,
    fontFamily: 'Poppins-Light',
  },
  signInContainer: {
    marginTop: 20,
    height: '10%',
    width: '100%',
    alignItems: 'center',
  },
  signUpContainer: {
    marginTop: 20,
    top: 20,
    height: '10%',
    width: '100%',
    alignItems: 'center',
  },
  doubleBtnContainer: {
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    
  }
});
