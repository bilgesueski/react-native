import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import CourseInput from "./components/CourseInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [courses, setCourses] = useState([]);

  const startModal = () => {
    setModalIsVisible(true);
  };
  const endModal = () => {
    setModalIsVisible(false);
  };

  const addCourse = (courseTitle) => {
    setCourses((currentCourses) => [
      ...currentCourses,
      { text: courseTitle, id: Math.random().toString() },
    ]);
    endModal();
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Button title="Add Course" color="#D6B5EE" onPress={startModal} />
        <CourseInput
          visible={modalIsVisible}
          onAddCourse={addCourse}
          onCancel={endModal}
        />
        <View>
          <FlatList
            data={courses}
            renderItem={({ item }) => (
              <View style={styles.courseItem}>
                <Text style={styles.courseText}>{item.text}</Text>
              </View>
            )}
          />
        </View>
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
  courseItem: {
    backgroundColor: "#BDD3C7",
    margin: 8,
    borderRadius: 8,
  },
  courseText: {
    padding: 8,
    color: "#3961EE",
  },
});
