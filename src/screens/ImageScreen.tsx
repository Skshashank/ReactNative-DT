import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetails from '../components/ImageDetails';

class ImageScreen extends React.Component {
  render() {
    return (
      <View>
        <ImageDetails
          title="Forest"
          imageSource={require('../../assets/forest.jpg')}
          imageScore={9}
        />
        <ImageDetails
          title="Beach"
          imageSource={require('../../assets/beach.jpg')}
          imageScore="7"
        />
        <ImageDetails
          title="Mountain"
          imageSource={require('../../assets/mountain.jpg')}
          imageScore="4"
        />
        <ImageDetails title="Sea" imageScore="0" />
        <Text>ImageScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default ImageScreen;