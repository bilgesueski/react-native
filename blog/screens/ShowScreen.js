import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

export default function ShowScreen({ route }) {
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.content}>{blogPost.title}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Content</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  container: {
    borderWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
    borderRadius: 30,
    alignItems: "center",
    width: "80%",
    backgroundColor: "#BDD3C7",
  },
  title: {
    fontSize: 24,
    color: "#081D56",
    padding: 8,
  },
  content: {
    fontSize: 18,
    color: "#081D56",
  },
});
