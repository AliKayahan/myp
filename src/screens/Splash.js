import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";

function Splash(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg2.png")}
        resizeMode="stretch"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={styles.button}
        >
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.logo}
          ></Image>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar barStyle="light-content"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: 415,
    height: 736
  },
  background_imageStyle: {},
  button: {
    width: 200,
    height: 200,
    marginTop: 268,
    marginLeft: 107
  },
  logo: {
    width: 200,
    height: 200
  }
});

export default Splash;
