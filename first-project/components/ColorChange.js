import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function ColorChange({ color, onIncrease, onDecrease }) {
  return (
    <View style={styles.main}>
      <Button title={`${color} decrease`} onPress={() => onDecrease()} />
      <Text style={styles.title}>{color}</Text>
      <Button title={`${color} increase`} onPress={() => onIncrease()} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: "auto",
    marginBottom: 30,
    marginTop: 30,
  },
  title: {
    marginHorizontal: 10,
    fontSize: 18,
  },
});
