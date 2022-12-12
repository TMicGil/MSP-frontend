import {
    StyleSheet,
    Text,
    TouchableOpacity,
  } from 'react-native';

  export default function SigninBtn(props) {
    return (
        <TouchableOpacity onPress={() => props.showSigninModal()} style={styles.button} activeOpacity={0.8}>
        <Text style={styles.textButton}>Sign in</Text>
        </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
        width: '80%',
        marginTop: 10,
        backgroundColor: '#E74C3C',
        borderRadius: 10,
      },
      textButton: {
        color: '#ffffff',
        height: 30,
        fontWeight: '600',
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
      },
  })