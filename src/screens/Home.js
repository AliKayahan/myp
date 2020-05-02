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

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.disconnectedBackgroundStack}>
        <ImageBackground
          source={require("../assets/images/black-bg1.png")}
          resizeMode="stretch"
          style={styles.disconnectedBackground}
          imageStyle={styles.disconnectedBackground_imageStyle}
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
                style={{...styles.button, ...styles.getPremiumButtonContainer}}
                onPress={() => props.navigation.navigate("GetPremium")}
              ></MaterialButtonPink>
          </View>
          <TouchableOpacity
            style={styles.selectLocationButtonContainer}
            onPress={() => props.navigation.navigate("SelectServer")}
          >
            <View style={styles.selectLocationButton2}>
              <View style={styles.placesIconRow}>
                <MaterialCommunityIconsIcon
                  name="map-marker-outline"
                  style={styles.placesIcon}
                ></MaterialCommunityIconsIcon>
                <Text style={styles.selectLocationText}>Select Location</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("HomeConnected")}
            style={styles.startButtonContainer}
          >
            <Image
              source={require("../assets/images/connect-dc.png")}
              resizeMode="contain"
              style={styles.startButton2}
            ></Image>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.locationsSliderContainer}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={
              styles.locationsSliderContainer_contentContainerStyle
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
                <Text style={styles.connectText}>Connect</Text>
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
                    style={styles.usFlagTwo}
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
  disconnectedBackground: {
    top: 0,
    left: 0,
    width: 416,
    height: 736,
    position: "absolute"
  },
  disconnectedBackground_imageStyle: {},
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
    marginRight: 16
  },
  freeConnectionText: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    fontFamily: "montserrat-regular",
    marginTop: 8
  },
  button: {
    width: 136,
    height: 30,
    marginLeft: 123
  },
  getPremiumButtonContainer: {
    width: 136,
    height: 30
  },
  freeConnectionTextRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 16,
    marginRight: 16
  },
  selectLocationButtonContainer: {
    width: 151,
    height: 46,
    marginTop: 227,
    marginLeft: 132
  },
  selectLocationButton2: {
    width: 151,
    height: 46,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 16,
    flexDirection: "row"
  },
  placesIcon: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    height: 20,
    width: 20
  },
  selectLocationText: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    marginLeft: 4,
    marginTop: 4
  },
  placesIconRow: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 8,
    marginTop: 12
  },
  startButtonContainer: {
    width: 219,
    height: 219,
    marginTop: 82,
    marginLeft: 98
  },
  startButton2: {
    width: 219,
    height: 219
  },
  locationsSliderContainer: {
    top: 162,
    left: 6,
    width: 487,
    height: 142,
    position: "absolute",
    overflow: "hidden",
    flexDirection: "row"
  },
  locationsSliderContainer_contentContainerStyle: {
    width: 2433,
    height: 142
  },
  slideOne2: {
    width: 179,
    height: 121,
    backgroundColor: "rgba(77,77,77,1)",
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
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    fontFamily: "montserrat-regular",
    marginTop: 11,
    marginLeft: 10
  },
  connectText: {
    color: "rgba(253,214,52,1)",
    fontSize: 12,
    fontFamily: "montserrat-700",
    marginTop: 27,
    marginLeft: 108
  },
  slideTwoContainer: {
    width: 179,
    height: 121,
    marginLeft: 14
  },
  slideTwo2: {
    width: 179,
    height: 121,
    backgroundColor: "rgba(77,77,77,1)",
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
    backgroundColor: "rgba(77,77,77,1)",
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
  usFlagTwo: {
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
  disconnectedBackgroundStack: {
    width: 493,
    height: 736
  }
});

export default Home;
