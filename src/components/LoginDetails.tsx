import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

class LoginDetails extends React.Component {
    render(){
        // console.log(this.props);
        return (
            <View style={styles.container}>
                <Image source = {this.props.LoginImage} style={styles.image}/>
                <Text>{this.props.email}</Text>
                <Text>Login Details</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden'
    }
})

export default LoginDetails;