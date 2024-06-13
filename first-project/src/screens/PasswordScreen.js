import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

export default function PasswordScreen() {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.main}>
      <Text>Enter your password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 6 ? (
        <Text>Your password must be 6 characters at least!</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 20,
    gap: 10,
  },
  input: {
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
  },
});
