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
import Icon from "react-native-vector-icons/MaterialIcons";

function Login(props) {
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
          style={styles.logoButton}
        >
          <Image
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.logo}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.welcomeText}>WELCOME</Text>
        <View style={styles.signInFormContainer}>
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
          text1="Sign In"
          style={styles.singInButtonContainer}
          onPress={() => props.navigation.navigate("Home")}
        ></MaterialButtonPurple>
        <View style={styles.groupRow}>
          <View style={styles.group}>
            <View style={styles.checkBoxRow}>
              <Icon name="check-box" style={styles.checkBox}></Icon>
              <Text style={styles.rememberMeText2}>Remember me</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ForgotPass")}
            style={styles.forgotPasswordButton}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
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
  welcomeText: {
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "montserrat-regular",
    marginTop: 9,
    marginLeft: 147
  },
  signInFormContainer: {
    width: 343,
    height: 133,
    marginTop: 32,
    marginLeft: 36
  },
  emailInputContainer: {
    width: 343,
    height: 60
  },
  passwordInputContainer: {
    width: 343,
    height: 60,
    marginTop: 13
  },
  singInButtonContainer: {
    width: 330,
    height: 56,
    shadowOpacity: 0.2,
    marginTop: 33,
    marginLeft: 43
  },
  group: {
    width: 142,
    height: 28,
    flexDirection: "row"
  },
  checkBox: {
    color: "rgba(253,214,52,1)",
    fontSize: 28
  },
  rememberMeText2: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    lineHeight: 18,
    marginLeft: 6,
    marginTop: 5
  },
  checkBoxRow: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  forgotPasswordButton: {
    width: 132,
    height: 18,
    marginLeft: 50,
    marginTop: 5
  },
  forgotPasswordText: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "montserrat-700",
    lineHeight: 18
  },
  groupRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 48,
    marginRight: 43
  },
  button: {
    width: 282,
    height: 16,
    flexDirection: "row",
    marginTop: 192,
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

export default Login;
