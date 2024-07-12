import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function BlogPostForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View style={styles.main}>
      <Text style={styles.label}>Enter the title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter the content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <TouchableOpacity
        style={styles.buttonMain}
        onPress={() => onSubmit(title, content)}
      >
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    padding: 5,
    fontSize: 16,
    marginBottom: 15,
  },
  buttonMain: {
    padding: 30,
  },
  buttonView: {
    backgroundColor: "#BDD3C7",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "#081D56",
    fontSize: 18,
  },
});
