import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialHelperTextBox from "../components/MaterialHelperTextBox";
import MaterialButtonPurple from "../components/MaterialButtonPurple";

function UpdatePassword(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/BGb.png")}
        resizeMode="stretch"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <View style={styles.button2Row}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.button2}
          >
            <Icon name="ios-arrow-back" style={styles.backIcon}></Icon>
          </TouchableOpacity>
          <Text style={styles.updatePasswordText}>Update Password</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileImageContainer}>
          <View style={styles.polyBgStack}>
            <Image
              source={require("../assets/images/poly1.png")}
              resizeMode="contain"
              style={styles.polyBg}
            ></Image>
            <Image
              source={require("../assets/images/profile.png")}
              resizeMode="contain"
              style={styles.profileImage2}
            ></Image>
          </View>
        </View>
        <Text style={styles.aliKayahan}>Ali Kayahan</Text>
        <Text style={styles.eMail}>c.kayahan@wlv.ac.uk</Text>
        <View style={styles.updatePasswordForm}>
          <MaterialHelperTextBox
            textInput1="New Password"
            style={styles.newPasswordContainer}
          ></MaterialHelperTextBox>
          <MaterialHelperTextBox
            textInput1="New Password Again"
            style={styles.passwordInputContainer}
          ></MaterialHelperTextBox>
        </View>
        <MaterialButtonPurple
          text1="Update Password"
          style={styles.updatePasswordButtonContainer}
          onPress={() => props.navigation.navigate("Home")}
        ></MaterialButtonPurple>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(40,34,34,1)"
  },
  background: {
    width: 415,
    height: 736
  },
  background_imageStyle: {},
  button2: {
    width: 10,
    height: 27
  },
  backIcon: {
    color: "rgba(172,80,244,1)",
    fontSize: 27
  },
  updatePasswordText: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "montserrat-500",
    lineHeight: 20,
    marginLeft: 92,
    marginTop: 6
  },
  button: {
    width: 45,
    height: 16,
    marginLeft: 57,
    marginTop: 6
  },
  doneText: {
    color: "rgba(172,80,244,1)",
    fontSize: 16,
    fontFamily: "montserrat-700",
    lineHeight: 16
  },
  button2Row: {
    height: 27,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 16,
    marginRight: 16
  },
  profileImageContainer: {
    width: 159,
    height: 163,
    marginTop: 51,
    marginLeft: 128
  },
  polyBg: {
    top: 3,
    left: 0,
    width: 159,
    height: 159,
    position: "absolute"
  },
  profileImage2: {
    top: 0,
    left: 11,
    width: 138,
    height: 138,
    position: "absolute"
  },
  polyBgStack: {
    width: 159,
    height: 162
  },
  aliKayahan: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "montserrat-regular",
    marginTop: 23,
    marginLeft: 137
  },
  eMail: {
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    fontFamily: "montserrat-300",
    marginTop: 11,
    marginLeft: 109
  },
  updatePasswordForm: {
    width: 343,
    height: 133,
    marginTop: 38,
    marginLeft: 36
  },
  newPasswordContainer: {
    width: 343,
    height: 60
  },
  passwordInputContainer: {
    width: 343,
    height: 60,
    marginTop: 13
  },
  updatePasswordButtonContainer: {
    width: 330,
    height: 56,
    shadowOpacity: 0.2,
    marginTop: 33,
    marginLeft: 43
  }
});

export default UpdatePassword;
