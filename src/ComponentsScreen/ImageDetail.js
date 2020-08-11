import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource}></Image>
      <Text>{props.title}</Text>
      <Text>Image Score --- {props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
