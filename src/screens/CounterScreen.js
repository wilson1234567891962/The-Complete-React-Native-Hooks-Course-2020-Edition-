import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const plusOrRest = (item, action) => {
  return { ...item, counter: item.counter + action.count  };
};

const CounterScreen = () => {
  const [item, dispatch] =  useReducer(plusOrRest, { counter: 0  });
  const { counter } = item;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ count: 1 })
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ count: -1 })
        }}
      />
      <Text>Current Count: {item.counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
