import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

const ColorCounter =  ({title,onIncrease,onDecrease}) => {
    // console.log(props);
    return (
        <View>
          <Text>{title}</Text>
          <Button onPress = {()=> onIncrease()} title = {`More ${title}`} />
          <Button onPress = {()=> onDecrease()}title = {`Less ${title}`} />
        </View>
    )
}
const styles = StyleSheet.create({});

export default ColorCounter;