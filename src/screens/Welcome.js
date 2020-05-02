import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialButtonPurple from "../components/MaterialButtonPurple";

function Welcome(props) {
  const [slide, setSlide] = useState({x: 0, y:0});


  const slideIt = () => {
    if(slide.x < 201)
      setSlide({x: slide.x+200, y:0}); 
    else
      setSlide({x:0, y:0});
  }

  useEffect(() => {
    setTimeout(slideIt, 3000);
  }, [slide])

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg2.png")}
        resizeMode="stretch"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.logo1}
        ></Image>
        <View style={styles.centerEllipseStack}>
          <Svg viewBox="0 0 188.46 188.46" style={styles.centerEllipse}>
            <Ellipse
              strokeWidth={1}
              fill="rgba(75,55,204,0.69)"
              cx={94}
              cy={94}
              rx={94}
              ry={94}
            ></Ellipse>
          </Svg>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
              contentOffset={slide}
            >
              <View style={styles.fastBannerRow}>
                <View style={styles.fastBanner}>
                  <Image
                    source={require("../assets/images/sp1.png")}
                    resizeMode="contain"
                    style={styles.fastImage}
                  ></Image>
                  <View style={styles.fastTextGroupContainer}>
                    <View style={styles.fastestTextContainer}>
                      <Text style={styles.fastHeadline}>The Fastest VPN</Text>
                      <Text style={styles.theFastestVpn}>
                        The fastest VPN that gives{"\n"}you the native
                        connection{"\n"}experience.
                      </Text>
                      <View style={styles.splashIndicator3Row}>
                        <FontAwesomeIcon
                          name="circle"
                          style={styles.splashIndicator3}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                          name="circle"
                          style={styles.splashIndicator2}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                          name="circle"
                          style={styles.splashIndicator1}
                        ></FontAwesomeIcon>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.securityBanner}>
                  <Image
                    source={require("../assets/images/sp2.png")}
                    resizeMode="contain"
                    style={styles.secureImage}
                  ></Image>
                  <View style={styles.secureTextGroupContainer}>
                    <View style={styles.secureTextContainer}>
                      <Text style={styles.securityTitle}>Top Security</Text>
                      <Text style={styles.securityText}>
                        With AES 256 encryption{"\n"}enjoy with the safest
                        browsing experience.
                      </Text>
                      <View style={styles.splashIndicator4Row}>
                        <FontAwesomeIcon
                          name="circle"
                          style={styles.splashIndicator4}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                          name="circle"
                          style={styles.splashIndicator5}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                          name="circle"
                          style={styles.splashIndicator6}
                        ></FontAwesomeIcon>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.multiLocationBanner}>
                  <Image
                    source={require("../assets/images/sp3.png")}
                    resizeMode="contain"
                    style={styles.locationImage}
                  ></Image>
                  <View style={styles.multiTextGroupContainer}>
                    <View style={styles.multiTextContainer}>
                      <Text style={styles.multiLocationTitle}>
                        Multi Location
                      </Text>
                      <Text style={styles.multiLocationText}>
                        From Europe to US you can choose from plenty of
                        different locations.
                      </Text>
                      <View style={styles.splashIndicator7Row}>
                        <FontAwesomeIcon
                          name="circle"
                          style={styles.splashIndicator7}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                          name="circle"
                          style={styles.splashIndicator8}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                          name="circle"
                          style={styles.splashIndicator9}
                        ></FontAwesomeIcon>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <MaterialButtonPurple
          text1="Sign Up"
          button1="Register"
          style={styles.signUpButtonContainer1}
          onPress={() => props.navigation.navigate("Register")}
        ></MaterialButtonPurple>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={styles.singinButtonContainer}
        >
          <View style={styles.definitionTextRow}>
            <Text style={styles.definitionText}>Already have an account?</Text>
            <Text style={styles.signInText}>Sign In</Text>
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
  logo1: {
    width: 139,
    height: 139,
    marginTop: 6,
    marginLeft: 138
  },
  centerEllipse: {
    top: 0,
    left: 6,
    width: 188,
    height: 188,
    position: "absolute",
    opacity: 0.55
  },
  scrollArea: {
    top: 1,
    left: 0,
    width: 200,
    height: 370,
    position: "absolute",
    flexDirection: "row"
  },
  scrollArea_contentContainerStyle: {
    width: 600,
    height: 370
  },
  fastBanner: {
    width: 200,
    height: 342
  },
  fastImage: {
    width: 200,
    height: 200
  },
  fastTextGroupContainer: {
    width: 180,
    height: 107,
    marginTop: 35,
    marginLeft: 10
  },
  fastestTextContainer: {
    width: 180,
    height: 107
  },
  fastHeadline: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "montserrat-700",
    marginLeft: 13
  },
  theFastestVpn: {
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    textAlign: "center",
    marginTop: 15
  },
  splashIndicator3: {
    color: "rgba(255,255,255,1)",
    fontSize: 6,
    height: 6,
    width: 5
  },
  splashIndicator2: {
    color: "rgba(255,255,255,0.3)",
    fontSize: 6,
    height: 6,
    width: 5,
    marginLeft: 11
  },
  splashIndicator1: {
    color: "rgba(255,255,255,0.3)",
    fontSize: 6,
    height: 6,
    width: 5,
    marginLeft: 12
  },
  splashIndicator3Row: {
    height: 6,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 71,
    marginRight: 71
  },
  securityBanner: {
    width: 200,
    height: 342
  },
  secureImage: {
    width: 200,
    height: 200
  },
  secureTextGroupContainer: {
    width: 180,
    height: 107,
    marginTop: 35,
    marginLeft: 10
  },
  secureTextContainer: {
    width: 180,
    height: 107
  },
  securityTitle: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "montserrat-700",
    marginLeft: 32
  },
  securityText: {
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    textAlign: "center",
    marginTop: 15
  },
  splashIndicator4: {
    color: "rgba(255,255,255,0.3)",
    fontSize: 6,
    height: 6,
    width: 5
  },
  splashIndicator5: {
    color: "rgba(255,255,255,1)",
    fontSize: 6,
    height: 6,
    width: 5,
    marginLeft: 11
  },
  splashIndicator6: {
    color: "rgba(255,255,255,0.3)",
    fontSize: 6,
    height: 6,
    width: 5,
    marginLeft: 12
  },
  splashIndicator4Row: {
    height: 6,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 71,
    marginRight: 71
  },
  multiLocationBanner: {
    width: 200,
    height: 342
  },
  locationImage: {
    width: 200,
    height: 200
  },
  multiTextGroupContainer: {
    width: 180,
    height: 107,
    marginTop: 35,
    marginLeft: 10
  },
  multiTextContainer: {
    width: 180,
    height: 107
  },
  multiLocationTitle: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "montserrat-700",
    marginLeft: 22
  },
  multiLocationText: {
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    fontFamily: "montserrat-regular",
    lineHeight: 16,
    textAlign: "center",
    marginTop: 15
  },
  splashIndicator7: {
    color: "rgba(255,255,255,0.3)",
    fontSize: 6,
    height: 6,
    width: 5
  },
  splashIndicator8: {
    color: "rgba(255,255,255,0.3)",
    fontSize: 6,
    height: 6,
    width: 5,
    marginLeft: 11
  },
  splashIndicator9: {
    color: "rgba(255,255,255,1)",
    fontSize: 6,
    height: 6,
    width: 5,
    marginLeft: 12
  },
  splashIndicator7Row: {
    height: 6,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 71,
    marginRight: 71
  },
  fastBannerRow: {
    height: 342,
    flexDirection: "row",
    flex: 1,
    marginRight: -400
  },
  centerEllipseStack: {
    width: 200,
    height: 371,
    marginTop: 29,
    marginLeft: 107
  },
  signUpButtonContainer1: {
    width: 330,
    height: 56,
    shadowOpacity: 0.2,
    marginTop: 51,
    marginLeft: 43
  },
  singinButtonContainer: {
    width: 269,
    height: 16,
    flexDirection: "row",
    marginTop: 24,
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

export default Welcome;
