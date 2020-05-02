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

function TermsAndConditions(props) {
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
          <Text style={styles.termsAndConditionsText}>
            Terms and Conditions
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.termsAndConditionsText1}>Our Privacy Policy</Text>
        <Text style={styles.privacyText}>
          At My Privacy VPN, accessible from https://myprivacyvpn.com, one of
          our main priorities is the privacy of our visitors. This Privacy
          Policy document contains types of information that is collected and
          recorded by My Privacy VPN and how we use it. If you have additional
          questions or require more information about our Privacy Policy, do not
          hesitate to contact us.
        </Text>
        <Text style={styles.termsAndConditionsText2}>Log Files</Text>
        <Text style={styles.privacyText1}>
          My Privacy VPN follows a standard procedure of using log files. These
          files log visitors when they visit websites. All hosting companies do
          this and a part of hosting services&#39; analytics. The information
          collected by log files include internet protocol (IP) addresses,
          browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not
          linked to any information that is personally identifiable. The purpose
          of the information is for analyzing trends, administering the site,
          tracking users&#39; movement on the website, and gathering demographic
          information.
        </Text>
        <Text style={styles.termsAndConditionsText3}>Consent</Text>
        <Text style={styles.privacyText2}>
          By using our app, you hereby consent to our Privacy Policy and agree
          to its Terms and Conditions.
        </Text>
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
  termsAndConditionsText: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "montserrat-500",
    lineHeight: 20,
    marginLeft: 55,
    marginTop: 6
  },
  button: {
    width: 45,
    height: 16,
    marginLeft: 51,
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
  termsAndConditionsText1: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-700",
    lineHeight: 16,
    marginTop: 33,
    marginLeft: 21
  },
  privacyText: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    lineHeight: 20,
    marginTop: 23,
    marginLeft: 21
  },
  termsAndConditionsText2: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-700",
    lineHeight: 16,
    marginTop: 26,
    marginLeft: 21
  },
  privacyText1: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    lineHeight: 20,
    marginTop: 23,
    marginLeft: 21
  },
  termsAndConditionsText3: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-700",
    lineHeight: 16,
    marginTop: 21,
    marginLeft: 21
  },
  privacyText2: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    lineHeight: 20,
    marginTop: 23,
    marginLeft: 21
  }
});

export default TermsAndConditions;
