import React, {useEffect, useState} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LogBox, Image, Text, View, Keyboard} from 'react-native';

// dont change auth page start---
import Splash from '../Screens/Splash';
import Login from '../Auth/login';
import OtpVerification from '../Auth/OtpVerification';
import Forgotpassword from '../Auth/Forgotpassword';
import TermsOfUse from '../Auth/TermsOfUse';
import PrivacyPolicy from '../Auth/PrivacyPolicy';
import Signup from '../Auth/Signup';

import Home from '../Screens/Home';
import SelectLanguage from '../Screens/SelectLanguage';
import OnboardScreen from '../Screens/OnboardScreen';
import LoginWith from '../Screens/LoginWith';

import ForgotOtpVerify from '../Auth/ForgotOtpVerify';
import ChangePassword from '../Auth/ChangePassword';

import Stores from '../Screens/Stores';
import Sell from '../Screens/Sell';
import Inbox from '../Screens/Inbox';
import Profile from '../Screens/Profile';
import StoriesDetails from '../Screens/StoriesDetails';
import ViewAllCategories from '../Screens/ViewAllCategories';
import ProductDetails from '../Screens/ProductDetails';
import ChatScreen from '../Screens/ChatScreen';
import ReportUser from '../Screens/ReportUser';
import ViewAll from '../Screens/ViewAll';
import PersonalInformation from '../Screens/PersonalInformation';
import Favorites from '../Screens/Favorites';
import Language from '../Screens/Language';
import InteractWithApplication from '../Screens/InteractWithApplication';
import HelpAndSupport from '../Screens/HelpAndSupport';
import SettingsAndInformation from '../Screens/SettingsAndInformation';
import DeleteAccount from '../Auth/DeleteAccount';
import ContactUs from '../Screens/ContactUs';
import Faq from '../Screens/Faq';
import Advertising from '../Screens/Advertising';
import MyListing from '../Screens/MyListing';
import Wallet from '../Screens/Wallet';
import VerifyMyIdentity from '../Screens/VerifyMyIdentity';
import Notification from '../Screens/Notification';
import StoreDetails from '../Screens/StoreDetails';
import ViewAllStores from '../Screens/ViewAllStores';
import ViewAllStories from '../Screens/ViewAllStories';
import UploadSelfie from '../Screens/UploadSelfie';
import UploadDocument from '../Screens/UploadDocument';
import CreateMyStore from '../Screens/CreateMyStore';
import CreateMyStore_step_1 from '../Screens/CreateMyStore_step_1';
import CreateMyStore_step_2 from '../Screens/CreateMyStore_step_2';
import BuySubscription from '../Screens/BuySubscription';
import Mystore from '../Screens/Mystore';
import StoreProfile from '../Screens/StoreProfile';
import ManageMyStore from '../Screens/ManageMyStore';
import SubscriptionHistory from '../Screens/SubscriptionHistory';
import SellStep_2 from '../Screens/SellStep_2';
import SellStep_3 from '../Screens/SellStep_3';
import SellStep_4 from '../Screens/SellStep_4';
import SellStep_5 from '../Screens/SellStep_5';
import Congratulations from '../Screens/Congratulations';
import Followers from '../Screens/Followers';
import Categories from '../Screens/Categories';

import Review from '../Screens/Review';
import RateNow from '../Screens/RateNow';
import Cart from '../Screens/Cart';

import CreateListing from '../Screens/CreateListing';
import Adperformance from '../Screens/Adperformance';
import FavouriteSellers from '../Screens/FavouriteSellers';
import MyReviews from '../Screens/MyReviews';
import CreateNewAd from '../Screens/CreateNewAd';
import newAdStep_2 from '../Screens/newAdStep_2';
import LiveChat from '../Screens/LiveChat';

import UserDetail from '../Screens/UserDetail';
import UserProfile from '../Screens/UserProfile';

import NotificationPreferences from '../Screens/NotificationPreferences';

import {localimag} from './Localimage';
import {Colors, Font, mobileH, mobileW} from './utilslib/Utils';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomSellIcon = ({focused}) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      console.log('84 open keyboard');
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      console.log('84 hide keyboard');
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    !keyboardStatus && (
      <View
        style={{
          position: 'absolute',
          bottom: (mobileH * 1.6) / 100,
          height: (mobileW * 13.5) / 100,
          width: (mobileW * 13.5) / 100,
          borderRadius: (mobileW * 30) / 100,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
          backgroundColor: Colors.whiteColor,
        }}>
        <Image
          source={localimag.icon_sell_active}
          style={{
            height: (mobileW * 14.5) / 100,
            width: (mobileW * 14.5) / 100,
            borderRadius: (mobileW * 30) / 100,
          }}
        />
      </View>
    )
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let title;

          switch (route.name) {
            case 'Home':
              iconName = focused
                ? localimag.icon_home_active
                : localimag.icon_home_deactive;
              break;
            case 'Stores':
              iconName = focused
                ? localimag.icon_footer_store_active
                : localimag.icon_footer_store_deactive;
              break;
            case 'CreateListing':
              return <CustomSellIcon focused={focused} />;
            // break;
            case 'Cart':
              iconName = focused
                ? localimag.icon_store_active
                : localimag.icon_store_deactive;
              break;
            case 'Profile':
              iconName = focused
                ? localimag.icon_menu_active
                : localimag.icon_menu_deactive;
              break;
          }

          return (
            <Image
              source={iconName}
              style={{
                height: (mobileW * 6) / 100,
                width: (mobileW * 6) / 100,
                resizeMode: 'contain',
              }}
            />
          );
        },
        tabBarActiveTintColor: Colors.theme_color,
        tabBarInactiveTintColor: Colors.deactiveColor,
        tabBarLabel: ({focused, color}) => {
          switch (route.name) {
            case 'Home':
              title = 'Home';
              break;
            case 'Stores':
              title = 'Stores';
              break;
            case 'CreateListing':
              title = '';
              break;
            case 'Cart':
              title = 'Cart';
              break;
            case 'Profile':
              title = 'Menu';
              break;
          }

          return (
            <>
              {title != '' && (
                <Text
                  style={{
                    color: focused ? Colors.theme_color : Colors.footerDeactive,
                    fontSize: (mobileW * 3) / 100,
                    marginBottom: (mobileH * 1.5) / 100,
                    marginTop: (mobileH * 1) / 100,
                    fontFamily: Font.FontBoldManrope,
                  }}>
                  {title}
                </Text>
              )}
            </>
          );
        },
      })}
      tabBarOptions={{
        style: {
          height: (mobileH * 9) / 100,
          padding: (mobileW * 1) / 100,
          paddingTop: (mobileH * 2) / 100,
        },
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Stores" component={Stores} />
      <Tab.Screen name="CreateListing" component={CreateListing} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function Routenavigation(navigation) {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Require cycle:']);
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpVerification"
        component={OtpVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgotpassword"
        component={Forgotpassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsOfUse"
        component={TermsOfUse}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="SelectLanguage"
        component={SelectLanguage}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="OnboardScreen"
        component={OnboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginWith"
        component={LoginWith}
        options={{headerShown: false, gestureEnabled: false}}
      />

      <Stack.Screen
        name="ForgotOtpVerify"
        component={ForgotOtpVerify}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="StoriesDetails"
        component={StoriesDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewAllCategories"
        component={ViewAllCategories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReportUser"
        component={ReportUser}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ViewAll"
        component={ViewAll}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InteractWithApplication"
        component={InteractWithApplication}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HelpAndSupport"
        component={HelpAndSupport}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingsAndInformation"
        component={SettingsAndInformation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DeleteAccount"
        component={DeleteAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Faq" component={Faq} options={{headerShown: false}} />
      <Stack.Screen
        name="Advertising"
        component={Advertising}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyListing"
        component={MyListing}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyMyIdentity"
        component={VerifyMyIdentity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StoreDetails"
        component={StoreDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewAllStores"
        component={ViewAllStores}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewAllStories"
        component={ViewAllStories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadSelfie"
        component={UploadSelfie}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadDocument"
        component={UploadDocument}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateMyStore"
        component={CreateMyStore}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateMyStore_step_1"
        component={CreateMyStore_step_1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateMyStore_step_2"
        component={CreateMyStore_step_2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BuySubscription"
        component={BuySubscription}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mystore"
        component={Mystore}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StoreProfile"
        component={StoreProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ManageMyStore"
        component={ManageMyStore}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SubscriptionHistory"
        component={SubscriptionHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sell"
        component={Sell}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SellStep_2"
        component={SellStep_2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SellStep_3"
        component={SellStep_3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SellStep_4"
        component={SellStep_4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SellStep_5"
        component={SellStep_5}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Congratulations"
        component={Congratulations}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Followers"
        component={Followers}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RateNow"
        component={RateNow}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Adperformance"
        component={Adperformance}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FavouriteSellers"
        component={FavouriteSellers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyReviews"
        component={MyReviews}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateNewAd"
        component={CreateNewAd}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="newAdStep_2"
        component={newAdStep_2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LiveChat"
        component={LiveChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserDetail"
        component={UserDetail}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="NotificationPreferences"
        component={NotificationPreferences}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
