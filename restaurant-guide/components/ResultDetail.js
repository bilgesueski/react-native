import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Star - {result.review_count} Review
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
  },
  name: {
    fontWeight: "bold",
  },
});
