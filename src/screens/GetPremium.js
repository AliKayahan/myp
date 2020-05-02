import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function GetPremium(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
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
              <IoniconsIcon
                name="ios-arrow-back"
                style={styles.backIcon}
              ></IoniconsIcon>
            </TouchableOpacity>
            <Text style={styles.getPremiumHead}>Get Premium</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Home")}
              style={styles.button}
            >
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.premPromoText}>
            Subscribe now to get these great{"\n"}features on your device now!
          </Text>
          <View style={styles.benefitsRow1}>
            <View style={styles.polyRow1Stack}>
              <View style={styles.polyRow1}>
                <Image
                  source={require("../assets/images/poly.png")}
                  resizeMode="stretch"
                  style={styles.polyBg1}
                ></Image>
                <Image
                  source={require("../assets/images/poly.png")}
                  resizeMode="stretch"
                  style={styles.polyBg2}
                ></Image>
                <Image
                  source={require("../assets/images/poly.png")}
                  resizeMode="stretch"
                  style={styles.polyBg3}
                ></Image>
              </View>
              <Image
                source={require("../assets/images/connect5.png")}
                resizeMode="contain"
                style={styles.devicesImage}
              ></Image>
              <Image
                source={require("../assets/images/sp31.png")}
                resizeMode="contain"
                style={styles.locationImage}
              ></Image>
              <Image
                source={require("../assets/images/sp11.png")}
                resizeMode="contain"
                style={styles.fastImage}
              ></Image>
              <Text style={styles.fasterConnection}>
                Faster {"\n"}Connection
              </Text>
              <Text style={styles.subTextContainer}>Connect{"\n"}Multi Devices</Text>
              <Text style={styles.multipleLocations}>
                Multiple{"\n"}Locations
              </Text>
            </View>
          </View>
          <View style={styles.benefitsRow2}>
            <View style={styles.polyRow2Stack}>
              <View style={styles.polyRow2}>
                <Image
                  source={require("../assets/images/poly.png")}
                  resizeMode="stretch"
                  style={styles.polyBg4}
                ></Image>
                <Image
                  source={require("../assets/images/poly.png")}
                  resizeMode="stretch"
                  style={styles.polyBg5}
                ></Image>
              </View>
              <SimpleLineIconsIcon
                name="bubbles"
                style={styles.chatImage}
              ></SimpleLineIconsIcon>
              <Image
                source={require("../assets/images/sp21.png")}
                resizeMode="contain"
                style={styles.secureImage}
              ></Image>
              <Text style={styles.subTextContainer3}>
                Military Grade{"\n"}Encryption
              </Text>
              <Text style={styles.subTextContainer5}>7/24 Phone{"\n"}Support</Text>
            </View>
          </View>
          <View style={styles.checkBoxIconRow}>
            <MaterialIconsIcon
              name="check-box"
              style={styles.checkBoxIcon}
            ></MaterialIconsIcon>
            <View style={styles.textContainer}>
              <View style={styles.iAgreeWithTextRow}>
                <Text style={styles.iAgreeWithText}>I agree with</Text>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate("TermsAndConditions")
                  }
                  style={styles.button3}
                >
                  <Text style={styles.termsAndConditionsText}>
                    Terms and Conditions
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.planSlider}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.planSlider_contentContainerStyle}
            contentOffset={{x: 120, y: 0}}
          >
            <View style={styles.plan3GroupContainerRow}>
              <View style={styles.plan3GroupContainer}>
                <View style={styles.plan2Card2}>
                  <Text style={styles.planName2}>1 Month</Text>
                  <Image
                    source={require("../assets/images/bluediamond.png")}
                    resizeMode="contain"
                    style={styles.blueDiamondS}
                  ></Image>
                  <View style={styles.priceTag2}>
                    <View style={styles.poundsign2Row}>
                      <Text style={styles.poundsign2}>£</Text>
                      <Text style={styles.price3}>12.99</Text>
                    </View>
                  </View>
                  <Text style={styles.month1}>month</Text>
                </View>
              </View>
              <View style={styles.plan2GroupContainer}>
                <View style={styles.plan2Card}>
                  <MaterialCommunityIconsIcon
                    name="checkbox-marked-circle"
                    style={styles.choiceBadge}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.planName}>12 Months</Text>
                  <Image
                    source={require("../assets/images/purpy.png")}
                    resizeMode="contain"
                    style={styles.purpleDiamondS}
                  ></Image>
                  <View style={styles.priceTag}>
                    <View style={styles.poundsignRow}>
                      <Text style={styles.poundsign}>£</Text>
                      <Text style={styles.price2}>8.99</Text>
                    </View>
                  </View>
                  <Text style={styles.month}>month</Text>
                  <FontAwesomeIcon
                    name="star"
                    style={styles.selected}
                  ></FontAwesomeIcon>
                </View>
              </View>
              <View style={styles.plan4GroupContainer}>
                <View style={styles.plan2Card22}>
                  <Text style={styles.planName22}>6 Months</Text>
                  <Image
                    source={require("../assets/images/pinkdiamond.png")}
                    resizeMode="contain"
                    style={styles.pinky}
                  ></Image>
                  <View style={styles.priceTag22}>
                    <View style={styles.poundsign22Row}>
                      <Text style={styles.poundsign22}>£</Text>
                      <Text style={styles.price32}>9.99</Text>
                    </View>
                  </View>
                  <Text style={styles.month6}>month</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(40,34,34,1)"
  },
  background: {
    top: 0,
    left: 105,
    width: 415,
    height: 736,
    position: "absolute"
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
  getPremiumHead: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "montserrat-500",
    lineHeight: 20,
    marginLeft: 103,
    marginTop: 6
  },
  button: {
    width: 45,
    height: 16,
    marginLeft: 88,
    marginTop: 6
  },
  doneText: {
    color: "rgba(172,80,244,1)",
    fontSize: 16,
    fontFamily: "montserrat-700",
    lineHeight: 16,
  },
  button2Row: {
    height: 27,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 16,
    marginRight: 16
  },
  premPromoText: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 22,
    textAlign: "center",
    marginTop: 25,
    marginLeft: 5
  },
  benefitsRow1: {
    width: 361,
    height: 130,
    marginTop: 14,
    marginLeft: 27
  },
  polyRow1: {
    top: 0,
    left: 0,
    width: 361,
    height: 107,
    position: "absolute",
    flexDirection: "row",
    opacity: 0.6,
    justifyContent: "space-between"
  },
  polyBg1: {
    width: 107,
    height: 107
  },
  polyBg2: {
    width: 107,
    height: 107
  },
  polyBg3: {
    width: 107,
    height: 107
  },
  devicesImage: {
    top: 23,
    left: 150,
    width: 60,
    height: 60,
    position: "absolute"
  },
  locationImage: {
    top: 23,
    left: 277,
    width: 60,
    height: 60,
    position: "absolute"
  },
  fastImage: {
    top: 23,
    left: 22,
    width: 60,
    height: 60,
    position: "absolute"
  },
  fasterConnection: {
    left: 5,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    bottom: 0,
    fontSize: 12,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    textAlign: "center"
  },
  subTextContainer: {
    left: 140,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    bottom: 0,
    fontSize: 12,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    textAlign: "center"
  },
  multipleLocations: {
    top: 97,
    left: 278,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    textAlign: "center"
  },
  polyRow1Stack: {
    width: 361,
    height: 130
  },
  benefitsRow2: {
    width: 257,
    height: 123,
    marginTop: 10,
    marginLeft: 73
  },
  polyRow2: {
    top: 0,
    left: 0,
    width: 257,
    height: 107,
    position: "absolute",
    flexDirection: "row",
    opacity: 0.6,
    justifyContent: "space-between"
  },
  polyBg4: {
    width: 107,
    height: 107
  },
  polyBg5: {
    width: 107,
    height: 107
  },
  chatImage: {
    top: 21,
    left: 170,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 65
  },
  secureImage: {
    top: 23,
    left: 23,
    width: 60,
    height: 60,
    position: "absolute"
  },
  subTextContainer3: {
    top: 91,
    left: 10,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    textAlign: "center"
  },
  subTextContainer5: {
    top: 91,
    left: 167,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    textAlign: "center"
  },
  polyRow2Stack: {
    width: 257,
    height: 123
  },
  checkBoxIcon: {
    color: "rgba(253,214,52,1)",
    fontSize: 28,
    height: 28,
    width: 28
  },
  textContainer: {
    width: 245,
    height: 18,
    flexDirection: "row",
    marginLeft: 9,
    marginTop: 5
  },
  iAgreeWithText: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    lineHeight: 18
  },
  button3: {
    width: 153,
    height: 18,
    marginLeft: 4
  },
  termsAndConditionsText: {
    color: "rgba(253,214,52,1)",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    lineHeight: 18
  },
  iAgreeWithTextRow: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 5
  },
  checkBoxIconRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 276,
    marginLeft: 66,
    marginRight: 67
  },
  planSlider: {
    top: 424,
    left: 0,
    width: 608,
    height: 247,
    position: "absolute",
    overflow: "hidden",
    flexDirection: "row"
  },
  planSlider_contentContainerStyle: {
    width: 838,
    height: 247
  },
  plan3GroupContainer: {
    width: 179,
    height: 227,
    marginTop: 1
  },
  plan2Card2: {
    width: 179,
    height: 227,
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
  planName2: {
    color: "rgba(0,0,0,1)",
    fontSize: 17,
    fontFamily: "montserrat-500",
    lineHeight: 16,
    marginTop: 39,
    marginLeft: 56
  },
  blueDiamondS: {
    width: 54,
    height: 54,
    marginTop: 15,
    marginLeft: 63
  },
  priceTag2: {
    width: 79,
    height: 24,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 50
  },
  poundsign2: {
    color: "rgba(172,80,244,1)",
    fontSize: 16,
    fontFamily: "montserrat-500",
    lineHeight: 16
  },
  price3: {
    color: "rgba(172,80,244,1)",
    fontSize: 32,
    fontFamily: "montserrat-500",
    lineHeight: 32,
    marginLeft: 2,
    marginTop: 8
  },
  poundsign2Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  month1: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginTop: 20,
    marginLeft: 62
  },
  plan2GroupContainer: {
    width: 179,
    height: 227,
    marginLeft: 41
  },
  plan2Card: {
    width: 179,
    height: 227,
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
  choiceBadge: {
    color: "rgba(76,217,100,1)",
    fontSize: 25,
    height: 25,
    width: 25,
    marginTop: 9,
    marginLeft: 143
  },
  planName: {
    color: "rgba(0,0,0,1)",
    fontSize: 17,
    fontFamily: "montserrat-500",
    lineHeight: 16,
    marginTop: 5,
    marginLeft: 46
  },
  purpleDiamondS: {
    width: 64,
    height: 64,
    marginTop: 10,
    marginLeft: 56
  },
  priceTag: {
    width: 79,
    height: 24,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 49
  },
  poundsign: {
    color: "rgba(172,80,244,1)",
    fontSize: 16,
    fontFamily: "montserrat-500",
    lineHeight: 16
  },
  price2: {
    color: "rgba(172,80,244,1)",
    fontSize: 32,
    fontFamily: "montserrat-500",
    lineHeight: 32,
    marginLeft: 2,
    marginTop: 8
  },
  poundsignRow: {
    height: 32,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  month: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginTop: 20,
    marginLeft: 61
  },
  selected: {
    color: "rgba(255,193,7,1)",
    fontSize: 25,
    height: 25,
    width: 23,
    marginTop: 2,
    marginLeft: 15
  },
  plan4GroupContainer: {
    width: 179,
    height: 227,
    marginLeft: 39,
    marginTop: 1
  },
  plan2Card22: {
    width: 179,
    height: 227,
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
  planName22: {
    color: "rgba(0,0,0,1)",
    fontSize: 17,
    fontFamily: "montserrat-500",
    lineHeight: 16,
    marginTop: 39,
    marginLeft: 49
  },
  pinky: {
    width: 64,
    height: 64,
    marginTop: 11,
    marginLeft: 58
  },
  priceTag22: {
    width: 79,
    height: 24,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 50
  },
  poundsign22: {
    color: "rgba(172,80,244,1)",
    fontSize: 16,
    fontFamily: "montserrat-500",
    lineHeight: 16
  },
  price32: {
    color: "rgba(172,80,244,1)",
    fontSize: 32,
    fontFamily: "montserrat-500",
    lineHeight: 32,
    marginLeft: 2,
    marginTop: 8
  },
  poundsign22Row: {
    height: 32,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  month6: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    marginTop: 20,
    marginLeft: 62
  },
  plan3GroupContainerRow: {
    height: 228,
    flexDirection: "row",
    flex: 1,
    marginRight: -19,
    paddingLeft: 120,
    marginTop: 10
  },
  backgroundStack: {
    width: 608,
    height: 736,
    marginLeft: -105
  }
});

export default GetPremium;
