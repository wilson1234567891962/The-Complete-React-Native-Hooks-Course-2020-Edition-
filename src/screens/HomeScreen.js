import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  return (
    <View>
      <Button
        title="Go to componentes Demo"
        onPress={() => {
          props.navigation.navigate("List");
        }}
      />
      <Button
        title="Go to componentes ImageCreen"
        onPress={() => {
          props.navigation.navigate("ImageCreen");
        }}
      />
      <Button
        title="Go to componentes Counter"
        onPress={() => {
          props.navigation.navigate("CounterScreen");
        }}
      />
      <Button
        title="Go to componentes SquareScreen"
        onPress={() => {
          props.navigation.navigate("SquareScreen");
        }}
      />
      <Button
        title="Go to componentes Color"
        onPress={() => {
          props.navigation.navigate("ColorScreen");
        }}
      />
      <Button
        title="Go to componentes TextScreen"
        onPress={() => {
          props.navigation.navigate("TextScreen");
        }}
      />
      <Button
        title="Go to componentes BoxScreen"
        onPress={() => {
          props.navigation.navigate("BoxScreen");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
