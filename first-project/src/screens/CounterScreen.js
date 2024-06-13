import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useState } from "react";

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Button color="red" title="-" onPress={() => setCounter(counter - 1)} />
      <Text style={styles.text}>Counter: {counter}</Text>
      <Button title="+" onPress={() => setCounter(counter + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});
