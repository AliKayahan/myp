import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Text
} from "react-native";
import MaterialHelperTextBox from "../components/MaterialHelperTextBox";
import MaterialButtonPurple from "../components/MaterialButtonPurple";
import Icon from "react-native-vector-icons/MaterialIcons";

function Register(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg2.png")}
        resizeMode="stretch"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Welcome")}
          style={styles.logoButton}
        >
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.logo}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
        <View style={styles.regitrationFormContainer}>
          <MaterialHelperTextBox
            textInput1="Name"
            style={styles.nameInputContainer}
          ></MaterialHelperTextBox>
          <MaterialHelperTextBox
            textInput1="E-mail"
            style={styles.emailInputContainer}
          ></MaterialHelperTextBox>
          <MaterialHelperTextBox
            textInput1="Password"
            style={styles.passwordInputContainer}
          ></MaterialHelperTextBox>
        </View>
        <MaterialButtonPurple
          text1="Sign Up"
          style={styles.signUpButtonContainer}
          onPress={() => props.navigation.navigate("Register")}
        ></MaterialButtonPurple>
        <View style={styles.checkBoxIconRow}>
          <Icon name="check-box" style={styles.checkBoxIcon}></Icon>
          <Text style={styles.iAgreeWithText}>I agree with</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("TermsAndConditions")}
            style={styles.button2}
          >
            <Text style={styles.termsAndConditionsText}>
              Terms and Conditions
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={styles.button}
        >
          <View style={styles.definitionTextRow}>
            <Text style={styles.definitionText}>Already have an account?</Text>
            <Text style={styles.signInText}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
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
  logoButton: {
    width: 139,
    height: 139,
    marginTop: 6,
    marginLeft: 138
  },
  logo: {
    width: 139,
    height: 139
  },
  createAccountText: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "montserrat-regular",
    marginTop: 9,
    marginLeft: 113
  },
  regitrationFormContainer: {
    width: 343,
    height: 205,
    justifyContent: "space-between",
    marginTop: 33,
    marginLeft: 36
  },
  nameInputContainer: {
    width: 343,
    height: 60
  },
  emailInputContainer: {
    width: 343,
    height: 60
  },
  passwordInputContainer: {
    width: 343,
    height: 60
  },
  signUpButtonContainer: {
    width: 330,
    height: 56,
    shadowOpacity: 0.2,
    marginTop: 34,
    marginLeft: 43
  },
  checkBoxIcon: {
    color: "rgba(253,214,52,1)",
    fontSize: 28,
    height: 28,
    width: 28
  },
  iAgreeWithText: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    lineHeight: 18,
    marginLeft: 9,
    marginTop: 5
  },
  button2: {
    width: 153,
    height: 18,
    marginLeft: 4,
    marginTop: 5
  },
  termsAndConditionsText: {
    color: "rgba(253,214,52,1)",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    lineHeight: 18
  },
  checkBoxIconRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 66,
    marginRight: 72
  },
  button: {
    width: 269,
    height: 16,
    flexDirection: "row",
    marginTop: 122,
    marginLeft: 73
  },
  definitionText: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16
  },
  signInText: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-700",
    lineHeight: 16,
    marginLeft: 5
  },
  definitionTextRow: {
    height: 16,
    flexDirection: "row",
    flex: 1
  }
});

export default Register;
