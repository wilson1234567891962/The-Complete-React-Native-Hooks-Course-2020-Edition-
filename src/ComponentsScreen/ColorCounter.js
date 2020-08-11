import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={ `Ingrease ${color}`} />
      <Button title={ `Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
