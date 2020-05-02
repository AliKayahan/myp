import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function MyAccount(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/BGb.png")}
        resizeMode="stretch"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <View style={styles.button3Row}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.button3}
          >
            <IoniconsIcon
              name="ios-arrow-back"
              style={styles.backIcon}
            ></IoniconsIcon>
          </TouchableOpacity>
          <Text style={styles.myAccountText}>My Account</Text>
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
        <View style={styles.group}>
          <View style={styles.divider1}></View>
          <View style={styles.renewsOnContainer}>
            <View style={styles.renewsOn2Row}>
              <Text style={styles.renewsOn2}>Renews on</Text>
              <Text style={styles.renewsOnDate}>05.05.2021</Text>
            </View>
          </View>
          <View style={styles.divider2}></View>
          <View style={styles.subTypeContainer}>
            <View style={styles.subscriptionTypeRow}>
              <Text style={styles.subscriptionType}>Subscription Type</Text>
              <View style={styles.planTypeContainer}>
                <Text style={styles.free}>Free</Text>
              </View>
            </View>
          </View>
          <View style={styles.divider3}></View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("UpdatePassword")}
            style={styles.button2}
          >
            <View style={styles.updatePassword2Row}>
              <Text style={styles.updatePassword2}>Update Password</Text>
              <EntypoIcon name="chevron-right" style={styles.icon}></EntypoIcon>
            </View>
          </TouchableOpacity>
          <View style={styles.divider4}></View>
        </View>
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
  button3: {
    width: 10,
    height: 27
  },
  backIcon: {
    color: "rgba(172,80,244,1)",
    fontSize: 27
  },
  myAccountText: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "montserrat-500",
    lineHeight: 20,
    marginLeft: 111,
    marginTop: 6
  },
  button: {
    width: 45,
    height: 16,
    marginLeft: 96,
    marginTop: 6
  },
  doneText: {
    color: "rgba(172,80,244,1)",
    fontSize: 16,
    fontFamily: "montserrat-700",
    lineHeight: 16
  },
  button3Row: {
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
  group: {
    width: 375,
    height: 225,
    justifyContent: "space-around",
    marginTop: 13,
    marginLeft: 20
  },
  divider1: {
    width: 375,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.13
  },
  renewsOnContainer: {
    top: 48,
    left: 0,
    width: 374,
    height: 16,
    position: "absolute",
    flexDirection: "row"
  },
  renewsOn2: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular"
  },
  renewsOnDate: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    marginLeft: 205
  },
  renewsOn2Row: {
    height: 16,
    flexDirection: "row",
    flex: 1
  },
  divider2: {
    width: 375,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.13
  },
  subTypeContainer: {
    top: 104,
    left: 0,
    width: 370,
    height: 18,
    position: "absolute",
    flexDirection: "row"
  },
  subscriptionType: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular"
  },
  planTypeContainer: {
    width: 105,
    height: 18,
    marginLeft: 123
  },
  free: {
    color: "rgba(255,193,7,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    marginLeft: 67
  },
  subscriptionTypeRow: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  divider3: {
    width: 375,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.13
  },
  button2: {
    top: 153,
    left: 0,
    width: 373,
    height: 42,
    position: "absolute",
    flexDirection: "row"
  },
  updatePassword2: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    marginTop: 7
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 202
  },
  updatePassword2Row: {
    height: 30,
    flexDirection: "row",
    flex: 1
  },
  divider4: {
    width: 375,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.13
  }
});

export default MyAccount;
