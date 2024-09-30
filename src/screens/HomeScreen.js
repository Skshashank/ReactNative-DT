import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen222</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      {/* <Button onPress={() => console.log("helloaaa")} title="Go to List Dmo" /> */}
      <TouchableOpacity onPress={() => navigation.navigate("ListScreen")}>
        <Text>Go zto List Demo</Text>
      </TouchableOpacity>

      <Button
        onPress={() => navigation.navigate("ImageScreen")}
        title="Navigate to ImageScreen"
      />
      <Button
        onPress={() => navigation.navigate("LoginScreen")}
        title="Navigation to Login Screen"
      />

      <Button
        title="Navigate to Counter Screen"
        onPress={() => navigation.navigate("CounterScreen")}
      />

      <Button
        title="Navigate to Color Screen"
        onPress={() => navigation.navigate("ColorScreen")}
      />

      <Button
        onPress={() => navigation.navigate("SquareScreen")}
        title="Navigate to Square Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
