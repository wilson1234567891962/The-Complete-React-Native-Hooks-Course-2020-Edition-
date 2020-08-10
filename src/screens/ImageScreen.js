import React from "react";
import { StyleSheet, View } from "react-native";
import ImageDetail from "../ComponentsScreen/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest"/>
      <ImageDetail title="Beach"/>
      <ImageDetail title="Moauntain" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
