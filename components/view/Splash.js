import React, {Component} from 'react';
import {
    // Paltform,
    StyleSheet,
    Text,
    View,
    Image
}from 'react-native';

//import for redux
import {connect} from 'react-redux';

//import for action to state
import {SetLogin, SetLogout} from '../src/actions';

class Splash extends Component{
    //set non header toolbar
    static navigationOptions = {
        header : null
    }

    //setTime splash
    componentWillMount(){
        setTimeout(()=>{

            // this.props.SetLogin();
            console.log("reduxIslogin:", this.props.StateManagement.IsLogin);

            if(this.props.StateManagement.IsLogin){
                this.props.navigation.replace('MainMenu');
            }else{
                // this.props.navigation.navigate('Login');  //go to other page without exit current page
                this.props.navigation.replace('Login');  //go to other page and exit current page
            }
        }, 2000);
    }

    render() {
        return(
            <View style={styles.container}>
                
                <Image style={styles.logo}
                    source={require('../images/logo.png')}></Image>
                <Text style={styles.title}> Welcome to Calak Mania</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
        justifyContent : 'center',
        alignItems : 'center',
        flex: 1,
    }, 
    title:{
        fontSize: 25,
        color: 'white',
        marginTop: 20,
    },
    logo :{
        width:128,
        height: 70,
    }
});


//set for redux
function mapStateToProps(state){
    return {
        //get it from index reducers
        StateManagement : state.StateManagement
    }
}
export default connect(mapStateToProps, {SetLogin, SetLogout})(Splash);