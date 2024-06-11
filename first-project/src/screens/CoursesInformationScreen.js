import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Information from "../../components/Information";

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
      <Information
        title="Angular Course" // title props
        imageSource={require("../../assets/angular.jpg")} // imageSource props
        // desc props
        desc="Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps. The architecture of an Angular application relies on certain fundamental concepts."
      />
      <Information
        title="Bootstrap Course"
        imageSource={require("../../assets/bootstrap5.png")}
        desc="Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components."
      />
      <Information
        title="C Programming Course"
        imageSource={require("../../assets/c.png")}
        desc="C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions."
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
