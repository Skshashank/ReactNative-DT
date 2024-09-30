import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Styles {
  container: {
    flex: 1;
  };
}

class ListScreen extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      friends: [
        { name: "Shashank", age:"23", key: '1'},
        { name: "Rahul", age:"25", key: '2'},
        { name: "Chahul", age:"28", key: '3'},
        { name: "Ravi", age:"22", key: '4'},
        { name: "Rohan", age:"26", key: '5'},
        { name: "Amit", age:"24", key: '6'},
        { name: "Saurabh", age:"27", key: '7'},
        { name: "Ankit", age:"29", key: '8'},
        { name: "Vivek", age:"21", key: '9'},
        { name: "Raj", age:"30", key: '10'}
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        

        
        <FlatList
        horizontal
          showsHorizontalScrollIndicator = {false}
          data={this.state.friends}
          keyExtractor ={(item)=> item.key.toString()}
          renderItem={({ item }) => (
            <Text style = {styles.textStyle}>
              {item.name} - Age {item.age}
              </Text>
          )}
        />
       
      </View>
    );
  }
}

const styles: Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    marginVertical: 30,
    marginHorizontal: 10
  }
});

export default ListScreen;