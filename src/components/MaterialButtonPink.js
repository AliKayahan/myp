import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

function MaterialButtonPink(props) {
  return (
    <TouchableOpacity
        onPress={props.onPress}
      /* Conditional navigation not supported at the moment */ style={[
        styles.container,
        props.style
      ]}
    >
      <Text style={styles.buttonText}>{props.text1 || "BUTTON"}</Text>
      <Image
        source={require("../assets/images/diamond3.png")}
        resizeMode="contain"
        style={styles.diamond}
      ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(253,214,52,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 6,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  buttonText: {
    color: "rgba(0,0,0,1)",
    paddingLeft: 14,
    fontSize: 12,
    fontFamily: "montserrat-700"
  },
  diamond: {
    top: 5,
    left: 7,
    width: 20,
    height: 18,
    position: "absolute"
  }
});

export default MaterialButtonPink;
