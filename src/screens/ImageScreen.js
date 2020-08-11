import React from "react";
import { StyleSheet, View } from "react-native";
import ImageDetail from "../ComponentsScreen/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score="9"/>
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} />
      <ImageDetail title="Moauntain" imageSource={require('../../assets/mountain.jpg')}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
