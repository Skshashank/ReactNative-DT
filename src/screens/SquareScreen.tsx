import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT =15;

const SquareScreen =  () => {
    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);
    console.log(red)
    return (
        <View>
          <Text> Square Screen App</Text>
          <ColorCounter
          onIncrease = {() => setRed(red+COLOR_INCREMENT)}
          onDecrease = {() => setRed(red-1)}
          title = "Red"
          />
          <ColorCounter 
          onIncrease = {() => setGreen(green+COLOR_INCREMENT)}
          onDecrease = {() => setGreen(green-1)}
          title = "Green"
          />
          <ColorCounter 
          onIncrease = {() => setBlue(blue+ COLOR_INCREMENT
          )}
          onDecrease = {() => setBlue(blue-1)}
          title ="Blue"
          />
          <View style = {{height:150,width:150,backgroundColor: `rgb(${red},${green},${blue})`}}/>
        </View>
    )
}
const styles = StyleSheet.create({});

export default SquareScreen