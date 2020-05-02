import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialButtonPink from "../components/MaterialButtonPink";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";

function HomeConnected(props) {
  return (
    <View style={styles.container}>
      <View style={styles.connectedBackgroundStack}>
        <ImageBackground
          source={require("../assets/images/bgcon.png")}
          resizeMode="stretch"
          style={styles.connectedBackground}
          imageStyle={styles.connectedBackground_imageStyle}
        >
          <View style={styles.logoHorizontalRow}>
            <Image
              source={require("../assets/images/logohor2.png")}
              resizeMode="stretch"
              style={styles.logoHorizontal}
            ></Image>
            <TouchableOpacity
              onPress={() => props.navigation.toggleDrawer()}
            >
                <MaterialCommunityIconsIcon
                  name="backburger"
                  style={styles.menuIcon}
                ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.freeConnectionTextRow}>
            <Text style={styles.freeConnectionText}>Free Connection</Text>
            <MaterialButtonPink
              text1="GET PREMIUM"
              button1="GetPremium"
              style={styles.getPremiumButtonContainer}
              onPress={() => props.navigation.navigate("GetPremium")}
            ></MaterialButtonPink>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SelectServer")}
            style={styles.button3}
          >
            <TouchableOpacity style={styles.selectLocationButton2}>
              <View style={styles.usFlagTwo1Row}>
                <Image
                  source={require("../assets/images/us.png")}
                  resizeMode="contain"
                  style={styles.usFlagTwo1}
                ></Image>
                <View style={styles.locationCountryColumn}>
                  <Text style={styles.locationCountry}>USA</Text>
                  <Text style={styles.connectionLocation}>Newyork</Text>
                </View>
                <FontAwesomeIcon
                  name="circle"
                  style={styles.connectionIndicator}
                ></FontAwesomeIcon>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.group9}>
            <View style={styles.group7Row}>
              <View style={styles.group7}>
                <View style={styles.downloadIndicatorRow}>
                  <View style={styles.downloadIndicator}>
                    <View style={styles.downloadBox}>
                      <SimpleLineIconsIcon
                        name="cloud-download"
                        style={styles.downloadIcon}
                      ></SimpleLineIconsIcon>
                    </View>
                  </View>
                  <View style={styles.group4}>
                    <Text style={styles.download2}>Download</Text>
                    <Text style={styles.myPrivacyTextHolder}>224,45 kb/s</Text>
                  </View>
                </View>
              </View>
              <View style={styles.group8}>
                <View style={styles.uploadIndicatorRow}>
                  <View style={styles.uploadIndicator}>
                    <View style={styles.uploadBox}>
                      <SimpleLineIconsIcon
                        name="cloud-upload"
                        style={styles.uploadIcon}
                      ></SimpleLineIconsIcon>
                    </View>
                  </View>
                  <View style={styles.group5}>
                    <View style={styles.group6}>
                      <Text style={styles.upload2}>Upload</Text>
                      <Text style={styles.myPrivacyTextHolder2}>135,50 kb/s</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button2}
          >
            <View style={styles.group2}>
              <ImageBackground
                source={require("../assets/images/connect-ac1.png")}
                resizeMode="contain"
                style={styles.disconnectButton}
                imageStyle={styles.disconnectButton_imageStyle}
              >
                <Text style={styles.stopText}>STOP</Text>
                <Text style={styles.connectionTimeCounter}>00:23:02</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.locationsSliderContainer1}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={
              styles.locationsSliderContainer1_contentContainerStyle
            }
          >
            <View style={styles.slideOne2Row}>
              <View style={styles.slideOne2}>
                <Image
                  source={require("../assets/images/us.png")}
                  resizeMode="contain"
                  style={styles.usFlagOne}
                ></Image>
                <Text style={styles.unitedStatesText}>United States</Text>
                <View style={styles.group3}>
                  <View style={styles.iconRow}>
                    <MaterialCommunityIconsIcon
                      name="check-circle"
                      style={styles.icon}
                    ></MaterialCommunityIconsIcon>
                    <Text style={styles.connectText}>Connected</Text>
                  </View>
                </View>
              </View>
              <View style={styles.slideTwoContainer}>
                <View style={styles.slideTwo2}>
                  <Image
                    source={require("../assets/images/ger.png")}
                    resizeMode="contain"
                    style={styles.germanFlag}
                  ></Image>
                  <Text style={styles.germanyText}>Germany</Text>
                  <Text style={styles.connectTwo}>Connect</Text>
                </View>
              </View>
              <View style={styles.slideThreeContainer}>
                <View style={styles.slideThree2}>
                  <Image
                    source={require("../assets/images/us.png")}
                    resizeMode="contain"
                    style={styles.usFlagTwo2}
                  ></Image>
                  <Text style={styles.usText}>United States</Text>
                  <Text style={styles.connectThreeText}>Connect</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <StatusBar
        animated={false}
        barStyle="light-content"
        hidden={false}
      ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  connectedBackground: {
    top: 0,
    left: 0,
    width: 415,
    height: 736,
    position: "absolute"
  },
  connectedBackground_imageStyle: {},
  logoHorizontal: {
    width: 218,
    height: 35
  },
  menuIcon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginLeft: 136,
    marginTop: 2
  },
  logoHorizontalRow: {
    height: 35,
    flexDirection: "row",
    marginTop: 34,
    marginLeft: 16,
    marginRight: 15
  },
  freeConnectionText: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    fontFamily: "montserrat-regular",
    marginTop: 8
  },
  getPremiumButtonContainer: {
    width: 138,
    height: 30,
    marginLeft: 122
  },
  freeConnectionTextRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 16,
    marginRight: 14
  },
  button3: {
    width: 151,
    height: 46,
    marginTop: 227,
    marginLeft: 133
  },
  selectLocationButton2: {
    width: 151,
    height: 46,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 16
  },
  usFlagTwo1: {
    width: 44,
    height: 29
  },
  locationCountry: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "montserrat-regular"
  },
  connectionLocation: {
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    fontFamily: "roboto-regular"
  },
  locationCountryColumn: {
    width: 47,
    marginLeft: 8,
    marginTop: 1,
    marginBottom: 2
  },
  connectionIndicator: {
    color: "rgba(76,217,100,1)",
    fontSize: 15,
    overflow: "visible",
    height: 15,
    width: 13,
    marginLeft: 19,
    marginTop: 6
  },
  usFlagTwo1Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 9,
    marginRight: 11
  },
  group9: {
    width: 354,
    height: 33,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 31
  },
  group7: {
    width: 109,
    height: 33,
    flexDirection: "row"
  },
  downloadIndicator: {
    width: 33,
    height: 33
  },
  downloadBox: {
    width: 33,
    height: 33,
    backgroundColor: "rgba(0,0,0,0.44)",
    borderRadius: 9
  },
  downloadIcon: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 20,
    height: 20,
    width: 20,
    marginTop: 7,
    marginLeft: 7
  },
  group4: {
    width: 71,
    height: 32,
    marginLeft: 5,
    marginTop: 1
  },
  download2: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-regular",
    lineHeight: 16
  },
  myPrivacyTextHolder: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    lineHeight: 16
  },
  downloadIndicatorRow: {
    height: 33,
    flexDirection: "row",
    flex: 1
  },
  group8: {
    width: 109,
    height: 33,
    flexDirection: "row",
    marginLeft: 136
  },
  uploadIndicator: {
    width: 33,
    height: 33
  },
  uploadBox: {
    width: 33,
    height: 33,
    backgroundColor: "rgba(0,0,0,0.44)",
    borderRadius: 9
  },
  uploadIcon: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 20,
    height: 20,
    width: 20,
    marginTop: 7,
    marginLeft: 7
  },
  group5: {
    width: 71,
    height: 32,
    marginLeft: 5
  },
  group6: {
    width: 71,
    height: 32
  },
  upload2: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-regular",
    lineHeight: 16
  },
  myPrivacyTextHolder2: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    lineHeight: 16
  },
  uploadIndicatorRow: {
    height: 33,
    flexDirection: "row",
    flex: 1
  },
  group7Row: {
    height: 33,
    flexDirection: "row",
    flex: 1
  },
  button2: {
    width: 219,
    height: 219,
    marginTop: 11,
    marginLeft: 98
  },
  group2: {
    width: 219,
    height: 219
  },
  disconnectButton: {
    width: 219,
    height: 219
  },
  disconnectButton_imageStyle: {},
  stopText: {
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    fontFamily: "roboto-700",
    marginTop: 109,
    marginLeft: 94
  },
  connectionTimeCounter: {
    color: "rgba(77,77,77,1)",
    fontSize: 12,
    fontFamily: "roboto-regular",
    marginTop: 6,
    marginLeft: 87
  },
  locationsSliderContainer1: {
    top: 162,
    left: 6,
    width: 487,
    height: 142,
    position: "absolute",
    overflow: "hidden",
    flexDirection: "row"
  },
  locationsSliderContainer1_contentContainerStyle: {
    width: 2433,
    height: 142
  },
  slideOne2: {
    width: 179,
    height: 121,
    backgroundColor: "rgba(255,255,255,1)",
    elevation: 30,
    borderRadius: 16,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  usFlagOne: {
    width: 49,
    height: 32,
    marginTop: 11,
    marginLeft: 10
  },
  unitedStatesText: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-regular",
    marginTop: 11,
    marginLeft: 10
  },
  group3: {
    width: 87,
    height: 15,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 10
  },
  icon: {
    color: "rgba(76,217,100,1)",
    fontSize: 15
  },
  connectText: {
    color: "rgba(76,217,100,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginLeft: 3,
    marginTop: 3
  },
  iconRow: {
    height: 15,
    flexDirection: "row",
    flex: 1
  },
  slideTwoContainer: {
    width: 179,
    height: 121,
    backgroundColor: "rgba(255,255,255,0)",
    marginLeft: 14
  },
  slideTwo2: {
    width: 179,
    height: 121,
    backgroundColor: "rgba(98,75,172,0.59)",
    elevation: 30,
    borderRadius: 16,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  germanFlag: {
    width: 49,
    height: 32,
    marginTop: 13,
    marginLeft: 14
  },
  germanyText: {
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    fontFamily: "montserrat-regular",
    marginTop: 12,
    marginLeft: 14
  },
  connectTwo: {
    color: "rgba(253,214,52,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginTop: 26,
    marginLeft: 112
  },
  slideThreeContainer: {
    width: 179,
    height: 121,
    marginLeft: 13,
    marginTop: 2
  },
  slideThree2: {
    width: 179,
    height: 121,
    backgroundColor: "rgba(98,75,172,0.59)",
    elevation: 30,
    borderRadius: 16,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  usFlagTwo2: {
    width: 49,
    height: 32,
    marginTop: 11,
    marginLeft: 10
  },
  usText: {
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    fontFamily: "montserrat-regular",
    marginTop: 12,
    marginLeft: 10
  },
  connectThreeText: {
    color: "rgba(253,214,52,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginTop: 26,
    marginLeft: 108
  },
  slideOne2Row: {
    height: 123,
    flexDirection: "row",
    flex: 1,
    marginRight: -87,
    marginLeft: 10,
    marginTop: 11
  },
  connectedBackgroundStack: {
    width: 493,
    height: 736
  }
});

export default HomeConnected;
