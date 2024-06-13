import { StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CoursesScreen from "./src/screens/CoursesScreen";
import CoursesInformationScreen from "./src/screens/CoursesInformationScreen";
import CounterScreen from "./src/screens/CounterScreen";
import BoxScreen from "./src/screens/BoxScreen";
import CounterScreen2 from "./src/screens/CounterScreen2";
import BoxScreen2 from "./src/screens/BoxScreen2";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="My Courses" component={CoursesScreen} />
        <Stack.Screen
          name="My Course Informations"
          component={CoursesInformationScreen}
        />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Counter2" component={CounterScreen2} />
        <Stack.Screen name="Colorful Box" component={BoxScreen} />
        <Stack.Screen name="Colorful Box2" component={BoxScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
