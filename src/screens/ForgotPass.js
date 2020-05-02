import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";
import MaterialHelperTextBox from "../components/MaterialHelperTextBox";
import MaterialButtonPurple from "../components/MaterialButtonPurple";

function ForgotPass(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg2.png")}
        resizeMode="stretch"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Welcome")}
          style={styles.button2}
        >
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.logo}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.forgotPasswordText}>FORGOT PASSWORD</Text>
        <MaterialHelperTextBox
          textInput1="E-mail"
          style={styles.emailInputContainer}
        ></MaterialHelperTextBox>
        <MaterialButtonPurple
          text1="Reset Password"
          style={styles.resetPasswordContainer}
          onPress={() => props.navigation.navigate("Home")}
        ></MaterialButtonPurple>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Register")}
          style={styles.button}
        >
          <View style={styles.needAnAccountTextRow}>
            <Text style={styles.needAnAccountText}>Need an account?</Text>
            <Text style={styles.createAccountText}>Create Account</Text>
          </View>
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
  button2: {
    width: 139,
    height: 139,
    marginTop: 6,
    marginLeft: 138
  },
  logo: {
    width: 139,
    height: 139
  },
  forgotPasswordText: {
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "montserrat-regular",
    marginTop: 9,
    marginLeft: 90
  },
  emailInputContainer: {
    width: 343,
    height: 60,
    marginTop: 32,
    marginLeft: 36
  },
  resetPasswordContainer: {
    width: 330,
    height: 56,
    shadowOpacity: 0.2,
    marginTop: 33,
    marginLeft: 43
  },
  button: {
    width: 282,
    height: 16,
    flexDirection: "row",
    marginTop: 319,
    marginLeft: 67
  },
  needAnAccountText: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16
  },
  createAccountText: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-700",
    lineHeight: 16,
    marginLeft: 6
  },
  needAnAccountTextRow: {
    height: 16,
    flexDirection: "row",
    flex: 1
  }
});

export default ForgotPass;
