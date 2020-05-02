import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialSearchBarWithBackground(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <TouchableOpacity style={styles.leftIconButton}>
          <MaterialCommunityIconsIcon
            name="arrow-left"
            style={styles.leftIcon2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <View style={styles.inputStyleStack}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#ffffff"
            style={styles.inputStyle}
          ></TextInput>
          <TouchableOpacity style={styles.rightIconButton}>
            <MaterialCommunityIconsIcon
              name="close"
              style={styles.rightIcon2}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    padding: 4,
    elevation: 3,
    borderRadius: 6,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  rect1: {
    backgroundColor: "rgba(202,149,149,0)",
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  leftIconButton: {
    padding: 11,
    marginLeft: 5,
    marginTop: 5
  },
  leftIcon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 24
  },
  inputStyle: {
    top: 0,
    left: 0,
    width: 263,
    height: 48,
    color: "#FFFFFF",
    position: "absolute",
    alignSelf: "flex-start",
    paddingRight: 5,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  rightIconButton: {
    top: 1,
    position: "absolute",
    alignItems: "center",
    right: 0,
    padding: 11
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 24
  },
  inputStyleStack: {
    width: 298,
    height: 48,
    marginLeft: 28,
    marginTop: 4
  }
});

export default MaterialSearchBarWithBackground;
