import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
type Props = {};
*/

export default class Register extends Component{
  //setNavigation  
  static navigationOptions = {
    title : 'Register'
  }

  //make a constructor to bind value inputed
  constructor(props){
    super(props)
    this.state = {
      TextName : '',
      TextPhone : '',
      TextEmail : '',
      TextPassword : ''
    }
  }

  //make a function
  DoValidData = () =>{
    const{TextName} = this.state;
    const{TextPhone} = this.state;
    const{TextEmail} = this.state;
    const{TextPassword} = this.state;

    if (TextName == "" || TextPhone == ""|| TextEmail == ""|| TextPassword==""){
      this.ShowAlert("Silahkan lengkapi data anda terlebih dahulu.")
      return
    }

    //run function
    this.DoRegister(TextName, TextPhone, TextEmail, TextPassword);
  }

  DoRegister = (name, phone, email, pass) => {

    fetch('http://192.168.43.117:8000/api/v1/account', {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name : name,
        phone : phone,
        email : email,
        password : pass
      })
    }).then((response) => response.json())
      .then((responseJSON) =>{
        console.log("response ", responseJSON);
        this.ShowAlert("Registrasi berhasil")
        
      })
      .catch((error) => {
        consolse.log("response error ",error);
      })
  }

  ShowAlert = (msg) =>{
    Alert.alert(msg);
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>Welcome to Calak Mania</Text>

        <TextInput
          onChangeText = {TextInputValue => this.setState({TextName: TextInputValue})}
          placeholder = 'Name'
          underlineColorAndroid = 'transparent'
          keyboardType = 'name-phone-pad'
          style = {styles.TextInputStyle}
        />
        <TextInput
          onChangeText = {TextInputValue => this.setState({TextPhone: TextInputValue})}
          placeholder = 'Handphone'
          underlineColorAndroid = 'transparent'
          keyboardType = 'number-pad'
          style = {styles.TextInputStyle}
        />

        <TextInput
          onChangeText = {TextInputValue => this.setState({TextEmail: TextInputValue})}
          placeholder = 'Email'
          underlineColorAndroid = 'transparent'
          style = {styles.TextInputStyle}
        />

        <TextInput
          onChangeText = {TextInputValue => this.setState({TextPassword: TextInputValue})}
          placeholder = 'Password'
          underlineColorAndroid = 'transparent'
          secureTextEntry = {true}
          style = {styles.TextInputStyle}
        />

        <TouchableOpacity
          activeOpacity = {.4}
          style = {styles.TouchAbleStyle}
          onPress = {this.DoValidData}>
          <Text style = {styles.TextButtonStyle}>Register</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

//SetAllStyle
const styles = StyleSheet.create({
  nav :{
    backgroundColor: '#00BCD4'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  TextInputStyle:{
    textAlign: 'left',
    marginBottom: 10,
    width: '65%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#00BCD4'
  },
  TouchAbleStyle:{
    textAlign : 'center',
    padding : 10,
    width: '65%',
    backgroundColor: '#00BCD4',
    marginTop: 20,
    borderRadius: 5
  },
  TextButtonStyle:{
    color: '#FFF',
    textAlign: 'center'
  }
});