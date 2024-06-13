import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="My Courses"
        onPress={() => navigation.navigate("My Courses")}
      />
      <Button
        title="My Course Informations"
        onPress={() => navigation.navigate("My Course Informations")}
      />
      <Button
        title="Counter Page"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Counter Page created with useReducer"
        onPress={() => navigation.navigate("Counter2")}
      />
      <Button
        title="Colorful Box Page"
        onPress={() => navigation.navigate("Colorful Box")}
      />
      <Button
        title="Colorful Box Page created with useReducer"
        onPress={() => navigation.navigate("Colorful Box2")}
      />
      <Button
        title="Password Screen"
        onPress={() => navigation.navigate("Password Screen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 50,
  },
});
