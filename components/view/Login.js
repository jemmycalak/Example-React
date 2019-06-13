import React, {Component} from 'react';
import {
    Platform,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Alert,
    ToastAndroid, 
    ActivityIndicator
} from 'react-native';
import {styles} from './styles/styles';
//set redux
import {connect} from 'react-redux';
import {SetLogin, SetLogout} from '../src/actions';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            Email : '',
            Password : '',

            isLoading : false
        }
    }

    static navigationOptions = {
        header: null
    }

    GoRegister = () =>{
        this.props.navigation.navigate('Register');
    }

    GoLogin = () =>{
        // this.ShowLoad()

        const{Email} = this.state;
        const{Password} = this.state;


        if (Email == '' || Password == ''){
            this.ShowAlert("Email or Password must be entry")
            return
        }
        this.Dologin(Email, Password)
    }

    Dologin = (email, password) => {
        console.log(email, password);

        fetch('http://192.168.43.117:8000/api/v1/account/login', {
            method : 'POST',
            headers :{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'apikey':'apikey'
            },
            body: JSON.stringify({
                'email':email,
                'password':password
            })
        })
        .then((response) => response.json())
        .then((response) =>{
            console.log("Response :", response);
            const { status, token, message } = response;
            console.log(status, token)
            if(status === 'success') {
                this.props.SetLogin(token);
                this.ShowToast("Login sukses, Welcome !");
                this.props.navigation.replace('MainMenu');
                
            } else {
                // fail login.
                this.ShowAlert("Login gagal "+message);
            }
            
        })
        .catch((error) =>{
            console.log("Response error ", error);
        })
    }

    ShowAlert = (msg)=>{
        Alert.alert(msg);
    }

    ShowToast = (msg) =>{
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    }

    ShowLoad = () =>{
        this.state.isLoading = true;
    }

    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.styleIndicator}>
                    <ActivityIndicator size="large" animating ={true} style={[{height:80}]}/>
                </View>
            )
        }

        return (
            <View style={styles.container}>
            
                <Text style={styles.text}>Welcome to Calak Mania</Text>

                <TextInput
                    style={styles.textInput}
                    placeholder='Email'
                    underlineColorAndroid='transparent'
                    keyboardType='email-address'
                    onChangeText={TextInputValue => this.setState({Email : TextInputValue})}/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Password'
                    underlineColorAndroid = 'transparent'
                    secureTextEntry = {true}
                    onChangeText={TextInputValue => this.setState({Password : TextInputValue})}/>
                
                <View style={styles.layRegister}>
                    <Text style={styles.textRegister}
                        onPress={this.GoRegister}>Belum punya account ?</Text>
                    <Text style={styles.textRegister}
                        onPress={this.ShowToast}>Lupa Password ?</Text>
                </View>

                <TouchableOpacity
                    activeOpacity = {.4}
                    style={styles.btLogin}
                    onPress = {this.GoLogin}>
                    <Text style = {styles.textBotton}>Login</Text>
                </TouchableOpacity>
            
            </View>
        )
    }
}

//set for redux
function mapStateToProps(state){
    return{ 
        StateManagement : state.StateManagement
    }
}
export default connect(mapStateToProps, {SetLogin})(Login);