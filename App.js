import React, { useState, useEffect } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import ForgotPass from "./src/screens/ForgotPass";
import GetPremium from "./src/screens/GetPremium";
import Home from "./src/screens/Home";
import HomeConnected from "./src/screens/HomeConnected";
import Login from "./src/screens/Login";
import MyAccount from "./src/screens/MyAccount";
import Register from "./src/screens/Register";
import SelectServer from "./src/screens/SelectServer";
import Splash from "./src/screens/Splash";
import UpdatePassword from "./src/screens/UpdatePassword";
import TermsAndConditions from "./src/screens/TermsAndConditions";

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import {Vibration} from 'react-native';

class Hidden extends React.Component {
  render() {
    return null;
  }
}

const DrawerNavigation = createDrawerNavigator({
  Home: Home,
  HomeConnected: {
    screen: HomeConnected,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  },
  MyAccount: MyAccount,
},{
  drawerBackgroundColor: '#242326',
  contentOptions: {
    activeTintColor: "rgba(102,71,201,1)",
    inactiveTintColor: '#FFF',
  }
});

const StackNavigation = createStackNavigator(
  {
    //Welcome: Welcome,
    Home: DrawerNavigation,
    GetPremium: GetPremium,
    ForgotPass: ForgotPass,
    Login: Login,
    MyAccount: MyAccount,
    Register: Register,
    SelectServer: SelectServer,
    Splash: Splash,
    UpdatePassword: UpdatePassword,
    TermsAndConditions: TermsAndConditions,
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState({});

  const registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      setExpoPushToken(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  };

  const _handleNotification = notification => {
    Vibration.vibrate();
    console.log(notification);
    setNotification(notification);
  };

  const sendPushNotification = async () => {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'My privacy VPN',
      body: 'You are connecting from public WiFi, tap here if you would like to secure your connection.',
      data: { data: '{}' },
      _displayInForeground: true,
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };

  useEffect(() => {
    registerForPushNotificationsAsync();
    _notificationSubscription = Notifications.addListener(_handleNotification);

    setTimeout(() => {
      //sendPushNotification()
      console.log(expoPushToken);
    }, 3000);
  },[])

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "montserrat-700": require("./src/assets/fonts/montserrat-700.ttf"),
      "montserrat-regular": require("./src/assets/fonts/montserrat-regular.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "Roboto": require("./src/assets/fonts/roboto-regular.ttf"),
      "montserrat-500": require("./src/assets/fonts/montserrat-500.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "montserrat-300": require("./src/assets/fonts/montserrat-300.ttf"),
      "montserrat-600": require("./src/assets/fonts/montserrat-600.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;


//Notification Text

/**
 * Token: ExponentPushToken[ufI3rkMuYaHJZSqm_fB0ba]
 * Title: My privacy VPN
 * Subtitle: Security Notification
 * Text: You are connecting from public WiFi, tap here if you would like to secure your connection.
 */