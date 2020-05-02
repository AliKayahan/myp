import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialHelperTextBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder={props.textInput1 || "Input"}
        placeholderTextColor="rgba(102,71,201,1)"
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  inputStyle: {
    width: 330,
    height: 60,
    backgroundColor: "rgba(255,255,255,0.8)",
    color: "rgba(102,71,201,1)",
    alignSelf: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 8,
    borderRadius: 6,
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16
  }
});

export default MaterialHelperTextBox;
