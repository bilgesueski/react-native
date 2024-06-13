import { StyleSheet, Text, View, Button } from "react-native";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

//state == {count:0}
//action=={type:'increment' || type:'decrement' ,payload}

export default function CounterScreen2() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View style={styles.container}>
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      />
      <Text style={styles.text}>Counter: {state.count}</Text>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});
