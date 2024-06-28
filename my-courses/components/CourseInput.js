import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function CourseInput({ visible, onAddCourse, onCancel }) {
  const [enteredCourseText, setEnteredCourseText] = useState("");

  const addCourseHandler = () => {
    onAddCourse(enteredCourseText);
    setEnteredCourseText("");
  };
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/ekshi.jpeg")} />
        <TextInput
          style={styles.textInput}
          placeholder="Add New Course"
          value={enteredCourseText}
          onChangeText={(text) => setEnteredCourseText(text)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#081D56" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" color="#BDD3C7" onPress={addCourseHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#D6B5EE",
    borderColor: "#D6B5EE",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
