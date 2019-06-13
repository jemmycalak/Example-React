import React, {Component} from 'react';
import {
    View,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ToastAndroid,
    StyleSheet
} from 'react-native';

export default class MainMenu extends Component{
    render(){
        return(
            <View style={styles.container}></View>
        )
    };
}

const styles = StyleSheet.create({
    container:{
        backgroundColor : 'green',
        flex:1,
        alignItems : 'center',
        justifyContent : 'center'
    }
});