import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DesignScreen() {
  return (
    <View>
      <View style={{ width: 50, height: 50, backgroundColor: "red" }}></View>
      <View
        style={{ width: 100, height: 100, backgroundColor: "green" }}
      ></View>
      <View style={{ width: 150, height: 150, backgroundColor: "blue" }}></View>

      <View style={styles.mainView}>
        <Text style={styles.mainTextOne}>1</Text>
        <Text style={styles.mainTextTwo}>2</Text>
        <Text style={styles.mainTextThree}>3</Text>
      </View>

      {/* <View style={{ width: "100%", height: "100%" }}>
        <View style={{ width: "25%", height: "25%", backgroundColor: "red" }} />
        <View
          style={{
            width: "25%",
            height: "25%",
            backgroundColor: "blue",
            position: "absolute",
            right: 0,
            top: 0,
          }}
        />
        <View
          style={{
            width: "25%",
            height: "25%",
            backgroundColor: "green",
            position: "absolute",
            left: 0,
            bottom: 0,
          }}
        />
        <View
          style={{
            width: "25%",
            height: "25%",
            backgroundColor: "yellow",
            position: "absolute",
            right: 0,
            bottom: 0,
          }}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderColor: "green",
    margin: 20,
    borderRadius: 20,
    // alignItems: "center",
    // justifyContent: "center",
    height: 400,
  },
  mainTextOne: {
    borderWidth: 2,
    borderColor: "pink",
    margin: 30,
    padding: 20,
    borderRadius: 10,
    // flex: 4, // %40 yer kaplar
    alignSelf: "center",
    // position: "absolute",
    // left: 20,
    // bottom: 20,
    // bottom: 0,
    // left: 0,
    // top: 0,
    // right: 0,
  },
  mainTextTwo: {
    borderWidth: 2,
    borderColor: "pink",
    margin: 30,
    padding: 20,
    borderRadius: 10,
    // flex: 5, // %50 yer kaplar
    alignSelf: "flex-start",
  },
  mainTextThree: {
    borderWidth: 2,
    borderColor: "pink",
    margin: 30,
    padding: 20,
    borderRadius: 10,
    // flex: 1, // %10 yer kaplar
    alignSelf: "flex-end",
  },
});

// alignitems'in default olarak strech özelliği var
// mobilde flex-direction otomatik column'dur. (web-row)
