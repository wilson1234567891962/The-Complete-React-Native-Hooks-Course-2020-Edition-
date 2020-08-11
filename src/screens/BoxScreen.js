import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const BoxScreen = () => {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Current Count </Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
      viewStyle: {
          borderWidth: 3,
          borderColor: 'black'
      },
      textStyle: {
        borderWidth: 2,
        borderColor: 'red',
        margin: 20
      }
  });
  
  export default BoxScreen;
  