import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialSearchBarWithBackground1 from "../components/MaterialSearchBarWithBackground1";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Svg, { Ellipse } from "react-native-svg";

function SelectServer(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/BGb.png")}
        resizeMode="stretch"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <View style={styles.backIconRow}>
          <TouchableOpacity
                onPress={() => props.navigation.goBack()}
              >
              <IoniconsIcon
                name="ios-arrow-back"
                style={styles.backIcon}
              ></IoniconsIcon>
          </TouchableOpacity>
          <Text style={styles.serverLocation}>Server Location</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
        <MaterialSearchBarWithBackground1
          style={styles.materialSearchBarWithBackground1}
        ></MaterialSearchBarWithBackground1>
        <View style={styles.freeLocTextContainer}>
          <View style={styles.free2Row}>
            <Text style={styles.free2}>Free</Text>
            <Text style={styles.locationText}>Location</Text>
          </View>
        </View>
        <View style={styles.locationBarContainer}>
          <View style={styles.connectionBannerBg}>
            <View style={styles.usFlagCircRow}>
              <Image
                source={require("../assets/images/usflagcirc.png")}
                resizeMode="contain"
                style={styles.usFlagCirc}
              ></Image>
              <Text style={styles.newyorkNy}>Newyork, NY</Text>
              <MaterialCommunityIconsIcon
                name="signal-cellular-2"
                style={styles.connectionStrength}
              ></MaterialCommunityIconsIcon>
              <MaterialCommunityIconsIcon
                name="check-circle"
                style={styles.connectionTick}
              ></MaterialCommunityIconsIcon>
            </View>
          </View>
        </View>
        <View style={styles.premiumBannerContainer}>
          <View style={styles.premBannerBg}>
            <View style={styles.diamondImageRow}>
              <Image
                source={require("../assets/images/diamond3.png")}
                resizeMode="contain"
                style={styles.diamondImage}
              ></Image>
              <View style={styles.premTextContainer}>
                <Text style={styles.getPremiumToday}>Get Premium Today</Text>
                <Text style={styles.freePlan}>Free Plan</Text>
              </View>
              <Text style={styles.update}>UPDATE</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.premBadgeGroup}>
          <View style={styles.freeLocTextContainer1}>
            <View style={styles.premium2Row}>
              <Text style={styles.premium2}>Premium</Text>
              <Text style={styles.locationText2}>Locations</Text>
            </View>
          </View>
          <View style={styles.freeLocTextContainer1Filler}></View>
          <View style={styles.lockBadge}>
            <View style={styles.lockContainerRow}>
              <View style={styles.lockContainer}>
                <View style={styles.rect}>
                  <FeatherIcon name="lock" style={styles.icon2}></FeatherIcon>
                </View>
              </View>
              <Text style={styles.locked}>Locked</Text>
            </View>
          </View>
        </View>
        <View style={styles.londonRowGroup}>
          <View style={styles.ukContainerRow}>
            <View style={styles.ukContainer}>
              <View style={styles.ukFlagRow}>
                <Image
                  source={require("../assets/images/united-kingdom.png")}
                  resizeMode="contain"
                  style={styles.ukFlag}
                ></Image>
                <Text style={styles.london2}>London</Text>
              </View>
            </View>
            <MaterialCommunityIconsIcon
              name="signal-cellular-3"
              style={styles.londonSignal}
            ></MaterialCommunityIconsIcon>
            <Svg viewBox="0 0 21.87 21.87" style={styles.londonCheck}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(0,0,0,0.29)"
                stroke="rgba(74,74,74,1)"
                cx={11}
                cy={11}
                rx={10}
                ry={10}
              ></Ellipse>
            </Svg>
          </View>
        </View>
        <View style={styles.divider1}></View>
        <View style={styles.swedenContainer}>
          <View style={styles.sweSubContainerRow}>
            <View style={styles.sweSubContainer}>
              <View style={styles.sweFlagRow}>
                <Image
                  source={require("../assets/images/sweden.png")}
                  resizeMode="contain"
                  style={styles.sweFlag}
                ></Image>
                <Text style={styles.sweText}>Sweden</Text>
              </View>
            </View>
            <MaterialCommunityIconsIcon
              name="signal-cellular-3"
              style={styles.sweSignal}
            ></MaterialCommunityIconsIcon>
            <Svg viewBox="0 0 21.87 21.87" style={styles.sweCheck}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(0,0,0,0.29)"
                stroke="rgba(74,74,74,1)"
                cx={11}
                cy={11}
                rx={10}
                ry={10}
              ></Ellipse>
            </Svg>
          </View>
        </View>
        <View style={styles.divider2}></View>
        <View style={styles.ausContainer}>
          <View style={styles.ausSubContainerRow}>
            <View style={styles.ausSubContainer}>
              <View style={styles.ausFlagRow}>
                <Image
                  source={require("../assets/images/australia.png")}
                  resizeMode="contain"
                  style={styles.ausFlag}
                ></Image>
                <Text style={styles.ausText}>Melbourne</Text>
              </View>
            </View>
            <MaterialCommunityIconsIcon
              name="signal-cellular-3"
              style={styles.ausCon2}
            ></MaterialCommunityIconsIcon>
            <Svg viewBox="0 0 21.87 21.87" style={styles.ausCheck}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(0,0,0,0.29)"
                stroke="rgba(74,74,74,1)"
                cx={11}
                cy={11}
                rx={10}
                ry={10}
              ></Ellipse>
            </Svg>
          </View>
        </View>
        <View style={styles.divider3}></View>
        <View style={styles.singaporeContainer}>
          <View style={styles.sinSubContainerRow}>
            <View style={styles.sinSubContainer}>
              <View style={styles.sinFlagRow}>
                <Image
                  source={require("../assets/images/singapore.png")}
                  resizeMode="contain"
                  style={styles.sinFlag}
                ></Image>
                <Text style={styles.sinText}>Singapore</Text>
              </View>
            </View>
            <MaterialCommunityIconsIcon
              name="signal-cellular-2"
              style={styles.sinSignal}
            ></MaterialCommunityIconsIcon>
            <Svg viewBox="0 0 21.87 21.87" style={styles.sinCheck}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(0,0,0,0.29)"
                stroke="rgba(74,74,74,1)"
                cx={11}
                cy={11}
                rx={10}
                ry={10}
              ></Ellipse>
            </Svg>
          </View>
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
  backIcon: {
    color: "rgba(172,80,244,1)",
    fontSize: 27,
    height: 27,
    width: 10
  },
  serverLocation: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "montserrat-500",
    lineHeight: 20,
    marginLeft: 93,
    marginTop: 6
  },
  button: {
    width: 45,
    height: 16,
    marginLeft: 77,
    marginTop: 6
  },
  doneText: {
    color: "rgba(172,80,244,1)",
    fontSize: 16,
    fontFamily: "montserrat-700",
    lineHeight: 16
  },
  backIconRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 16,
    marginRight: 16
  },
  materialSearchBarWithBackground1: {
    width: 375,
    height: 56,
    backgroundColor: "rgba(0,0,0,0.32)",
    marginTop: 23,
    marginLeft: 20
  },
  freeLocTextContainer: {
    width: 138,
    height: 16,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 20
  },
  free2: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "montserrat-700",
    lineHeight: 20
  },
  locationText: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "montserrat-regular",
    lineHeight: 20,
    marginLeft: 5
  },
  free2Row: {
    height: 16,
    flexDirection: "row",
    flex: 1
  },
  locationBarContainer: {
    width: 369,
    height: 48,
    marginTop: 25,
    marginLeft: 23
  },
  connectionBannerBg: {
    width: 369,
    height: 48,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    flexDirection: "row"
  },
  usFlagCirc: {
    width: 26,
    height: 26
  },
  newyorkNy: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "montserrat-700",
    lineHeight: 20,
    marginLeft: 17,
    marginTop: 6
  },
  connectionStrength: {
    color: "rgba(172,80,244,1)",
    fontSize: 28,
    height: 28,
    width: 28,
    marginLeft: 93
  },
  connectionTick: {
    color: "rgba(76,217,100,1)",
    fontSize: 28,
    height: 28,
    width: 28,
    marginLeft: 5
  },
  usFlagCircRow: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 20,
    marginTop: 10
  },
  premiumBannerContainer: {
    width: 375,
    height: 55,
    marginTop: 26,
    marginLeft: 20
  },
  premBannerBg: {
    width: 375,
    height: 55,
    backgroundColor: "rgba(253,214,52,1)",
    borderRadius: 6,
    flexDirection: "row"
  },
  diamondImage: {
    width: 37,
    height: 37
  },
  premTextContainer: {
    width: 164,
    height: 33,
    marginLeft: 10,
    marginTop: 3
  },
  getPremiumToday: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "montserrat-600",
    lineHeight: 16
  },
  freePlan: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginTop: 1
  },
  update: {
    color: "rgba(172,80,244,1)",
    fontSize: 15,
    fontFamily: "montserrat-600",
    lineHeight: 16,
    marginLeft: 67,
    marginTop: 11
  },
  diamondImageRow: {
    height: 37,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 11,
    marginTop: 8
  },
  divider: {
    width: 375,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.13,
    marginTop: 22,
    marginLeft: 20
  },
  premBadgeGroup: {
    width: 375,
    height: 32,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 20
  },
  freeLocTextContainer1: {
    width: 203,
    height: 16,
    flexDirection: "row",
    marginTop: 8
  },
  premium2: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "montserrat-700",
    lineHeight: 20
  },
  locationText2: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "montserrat-regular",
    lineHeight: 20,
    marginLeft: 4
  },
  premium2Row: {
    height: 16,
    flexDirection: "row",
    flex: 1,
    marginRight: 5
  },
  freeLocTextContainer1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  lockBadge: {
    width: 102,
    height: 32,
    flexDirection: "row"
  },
  lockContainer: {
    width: 36,
    height: 32
  },
  rect: {
    width: 36,
    height: 32,
    backgroundColor: "rgba(253,214,52,1)",
    borderRadius: 10
  },
  icon2: {
    color: "rgba(144,19,254,1)",
    fontSize: 19,
    height: 19,
    width: 19,
    marginTop: 6,
    marginLeft: 9
  },
  locked: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginLeft: 8,
    marginTop: 8
  },
  lockContainerRow: {
    height: 32,
    flexDirection: "row",
    flex: 1
  },
  londonRowGroup: {
    width: 360,
    height: 26,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 26
  },
  ukContainer: {
    width: 102,
    height: 26,
    flexDirection: "row"
  },
  ukFlag: {
    width: 26,
    height: 26
  },
  london2: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginLeft: 14,
    marginTop: 5
  },
  ukFlagRow: {
    height: 26,
    flexDirection: "row",
    flex: 1
  },
  londonSignal: {
    color: "rgba(144,19,254,1)",
    fontSize: 26,
    marginLeft: 199
  },
  londonCheck: {
    width: 22,
    height: 22,
    marginLeft: 11,
    marginTop: 2
  },
  ukContainerRow: {
    height: 26,
    flexDirection: "row",
    flex: 1
  },
  divider1: {
    width: 375,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.13,
    marginTop: 20,
    marginLeft: 20
  },
  swedenContainer: {
    width: 360,
    height: 26,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 27
  },
  sweSubContainer: {
    width: 114,
    height: 26,
    flexDirection: "row"
  },
  sweFlag: {
    width: 26,
    height: 26
  },
  sweText: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginLeft: 13,
    marginTop: 5
  },
  sweFlagRow: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 1
  },
  sweSignal: {
    color: "rgba(253,214,52,1)",
    fontSize: 26,
    marginLeft: 187
  },
  sweCheck: {
    width: 22,
    height: 22,
    marginLeft: 11,
    marginTop: 2
  },
  sweSubContainerRow: {
    height: 26,
    flexDirection: "row",
    flex: 1
  },
  divider2: {
    width: 375,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.13,
    marginTop: 25,
    marginLeft: 20
  },
  ausContainer: {
    width: 360,
    height: 26,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 27
  },
  ausSubContainer: {
    width: 145,
    height: 26,
    flexDirection: "row"
  },
  ausFlag: {
    width: 26,
    height: 26
  },
  ausText: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginLeft: 14,
    marginTop: 5
  },
  ausFlagRow: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: 17
  },
  ausCon2: {
    color: "rgba(144,19,254,1)",
    fontSize: 26,
    marginLeft: 156
  },
  ausCheck: {
    width: 22,
    height: 22,
    marginLeft: 11,
    marginTop: 2
  },
  ausSubContainerRow: {
    height: 26,
    flexDirection: "row",
    flex: 1
  },
  divider3: {
    width: 375,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.13,
    marginTop: 25,
    marginLeft: 20
  },
  singaporeContainer: {
    width: 360,
    height: 26,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 27
  },
  sinSubContainer: {
    width: 133,
    height: 26,
    flexDirection: "row"
  },
  sinFlag: {
    width: 26,
    height: 26
  },
  sinText: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginLeft: 14,
    marginTop: 5
  },
  sinFlagRow: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: 11
  },
  sinSignal: {
    color: "rgba(144,19,254,1)",
    fontSize: 26,
    marginLeft: 168
  },
  sinCheck: {
    width: 22,
    height: 22,
    marginLeft: 11,
    marginTop: 2
  },
  sinSubContainerRow: {
    height: 26,
    flexDirection: "row",
    flex: 1
  }
});

export default SelectServer;
