import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonPurple(props) {
  return (
    <TouchableOpacity
        onPress={props.onPress}
      /* Conditional navigation not supported at the moment */ style={[
        styles.container,
        props.style
      ]}
    >
      <Text style={styles.caption}>{props.text1 || "BUTTON"}</Text>
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
  caption: {
    color: "rgba(102,71,201,1)",
    fontSize: 18,
    fontFamily: "montserrat-700"
  }
});

export default MaterialButtonPurple;
