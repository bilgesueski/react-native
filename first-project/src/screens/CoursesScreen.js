import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

export default function CoursesScreen() {
  const courses = [
    { name: "Angular", id: 1 },
    { name: "Bootstrap", id: 2 },
    { name: "C", id: 3 },
    { name: "React Native", id: 4 },
    { name: "JavaScript", id: 5 },
  ];
  return (
    <View>
      <FlatList
        data={courses}
        /*
        Bu ikisi aynı şeyi ifade eder yatayda oluşan scroll barı gizler
        horizontal={true}
        showsHorizontalScrollIndicator= {false} 
        */
        keyExtractor={(item) => item.id} // listedeki her bir elemanın farklı olduğunu göstermek için.
        renderItem={({ item }) => {
          return <Text style={styles.list}>{item.name} </Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    fontSize: 20,
    backgroundColor: "pink",
    marginVertical: 10,
    padding: 20,
  },
});
