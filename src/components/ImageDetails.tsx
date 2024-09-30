import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

class ImageDetails extends React.Component{
   
    render() {
        // console.log(this.props);
        return (
            <View  >
                <Image source = {this.props.imageSource}/>
                <Text>
                    {this.props.title}
                </Text>
                <Text>
                    Image Score - {this.props.imageScore}
                </Text>
               
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    // container:{
    //     flexDirection: 'column',
    // }
    
})

export default ImageDetails;