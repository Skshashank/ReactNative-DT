import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import LoginDetails from '../components/LoginDetails';

class LoginScreen extends React.Component {
    render(){
        return (
            <View>
                <LoginDetails email = "beach.email.com" LoginImage = {require('../../assets/beach.jpg')} />
                <LoginDetails email = "mountain.email.com" LoginImage = {require('../../assets/mountain.jpg')} />
                <Text>Login Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default LoginScreen;