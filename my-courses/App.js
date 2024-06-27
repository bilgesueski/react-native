import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import CourseInput from "./components/CourseInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const startModal = () => {
    setModalIsVisible(true);
  };
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Button title="Add Course" color="red" onPress={startModal} />
        <CourseInput visible={modalIsVisible} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
});
