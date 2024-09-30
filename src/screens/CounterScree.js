import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button title="Increment counter" onPress={() => setCount(count + 1)} />
      <Button title="Decrement Counter" onPress={() => setCount(count - 1)} />
      <Text> Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
