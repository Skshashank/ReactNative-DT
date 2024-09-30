import React from 'react';
import { Text, StyleSheet ,View} from 'react-native';

interface Styles {
  textStyle: {
    fontSize: number;
  };
}

class ComponentsScreen extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      greeting: 'Shashank',

    };
  }

  render() {
    return (
      <View>
        <Text style = {styles.textStyle}>Getting started with  React Native</Text>
        <Text style={styles.textStyle2}>My name is {this.state.greeting}</Text>       
      </View>
      
    );
  }
}

const styles: Styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  textStyle2:{
    fontSize: 20,
  }
});
export default ComponentsScreen;