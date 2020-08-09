import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  console.log(props);
  
  return (
    <View>
      <Text style={styles.text}>2232332</Text>
      <Button
        title="Go to componentes Demo"
        onPress={() => {
          props.navigation.navigate('List')
        }}
      />
      <TouchableOpacity  onPress={() => {
          console.log("Fue ejecutado");
        }}>
        <Text>go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
