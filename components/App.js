import React, {Component} from 'react';
import {
    // Platform,
    StyleSheet,
    // Text,
    View,
    // Image
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import Splash from './view/Splash'
import Register from './view/Register'
import Login from './view/Login'
import MainMenu from './view/MainMenu'

const Navigation = StackNavigator({
    Splash:{
        screen : Splash,
    },
    Register :{
        screen : Register, 
    },
    Login :{
        screen : Login,
    },
    MainMenu :{
        screen:MainMenu
    }
})
export default Navigation;
