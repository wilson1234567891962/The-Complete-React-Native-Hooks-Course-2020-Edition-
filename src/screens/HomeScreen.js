import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  console.log(props);
  
  return (
    <View>
      <Button
        title="Go to componentes Demo"
        onPress={() => {
          props.navigation.navigate('List')
        }}
      />
       <Button
        title="Go to componentes ImageCreen"
        onPress={() => {
          props.navigation.navigate('ImageCreen')
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
