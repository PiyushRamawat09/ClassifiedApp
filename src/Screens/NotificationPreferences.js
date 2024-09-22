import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  BackHandler,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import AppstatusBar from '../Componant/AppstatusBar';
import {
  Colors,
  config,
  consolepro,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import {useNavigation} from '@react-navigation/native';
import {Switch} from 'react-native-paper';
import ButtonComponent from '../Componant/ButtonComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const NotificationPreferences = () => {
  const handleBackPress = useCallback(() => {
    goBack();
    return true;
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [handleBackPress]);

  const {navigate, goBack, replace} = useNavigation();
  const [listinActivityToggle, setListinActivityToggle] = useState(true);
  const [followedShopsToggle, setFollowedShopsToggle] = useState(false);
  const [pramotionsToggle, setPramotionsToggle] = useState(false);
  const [recommendationsToggle, setRecommendationsToggle] = useState(true);
  const [transactionToggle, setTransactionToggle] = useState(true);
  const [chizeinNewsToggle, setChizeinNewsToggle] = useState(true);
  const [accountAndSecurityToggle, setAccountAndSecurityToggle] =
    useState(true);

  const listinActivitySwitchToggle = () => {
    setListinActivityToggle(prev => !prev);
  };
  const followedShopsToggleSwitchToggle = () => {
    setFollowedShopsToggle(prev => !prev);
  };
  const pramotionsToggleSwitchToggle = () => {
    setPramotionsToggle(prev => !prev);
  };
  const recommendationsToggleSwitchToggle = () => {
    setRecommendationsToggle(prev => !prev);
  };
  const transactionToggleSwitchToggle = () => {
    setTransactionToggle(prev => !prev);
  };
  const chizeinNewsToggleSwitchToggle = () => {
    setChizeinNewsToggle(prev => !prev);
  };
  const accountAndSecurityToggleSwitchToggle = () => {
    setAccountAndSecurityToggle(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <AppstatusBar />
      {/*---------- header------------ */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: (mobileW * 90) / 100,
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginTop: (mobileH * 3) / 100,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: (mobileW * 6) / 100,
            width: (mobileW * 6) / 100,
          }}
          onPress={() => goBack()}>
          <Image
            source={localimag.icon_goback}
            style={{
              height: (mobileW * 6) / 100,
              width: (mobileW * 6) / 100,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: (mobileW * 5) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontBoldLexend,
          }}>
          {Lang_chg.notification_preference_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 5) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}
      <KeyboardAwareScrollView
        contentContainerStyle={{paddingBottom: (mobileW * 10) / 100}}>
        <View style={styles.mainView}>
          {/*---------------- Listing Activity ------------- */}
          <View
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              marginTop: (mobileH * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 4.2) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.Listing_Activity[config.language]}
              </Text>
              <Switch
                trackColor={{
                  false: Colors.placeholder_color,
                  true: Colors.placeholder_color,
                }}
                thumbColor={
                  listinActivityToggle ? Colors.theme_color : Colors.white_color
                }
                onValueChange={() => {
                  listinActivitySwitchToggle();
                }}
                style={{
                  transform:
                    config.device_type == 'ios'
                      ? [{scaleX: 0.6}, {scaleY: 0.6}]
                      : [{scaleX: 0.9}, {scaleY: 0.9}],
                }}
                value={listinActivityToggle}></Switch>
            </View>
            <Text
              style={{
                color: Colors.profileColor,
                marginTop: (mobileW * 2) / 100,
                fontSize: (mobileW * 3.2) / 100,
                fontFamily: Font.FontRegularManrope,
              }}>
              {Lang_chg.Comments_and_reviews[config.language]}
            </Text>
          </View>
          <View
            style={{
              width: (mobileW * 90) / 100,
              marginTop: (mobileW * 3) / 100,
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: Colors.btnBorderGrey,
            }}></View>
          {/*---------------- Followed_shops ------------- */}
          <View
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              marginTop: (mobileW * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 4.2) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.Followed_shops[config.language]}
              </Text>
              <Switch
                trackColor={{
                  false: Colors.placeholder_color,
                  true: Colors.placeholder_color,
                }}
                thumbColor={
                  followedShopsToggle ? Colors.theme_color : Colors.white_color
                }
                onValueChange={() => {
                  followedShopsToggleSwitchToggle();
                }}
                style={{
                  transform:
                    config.device_type == 'ios'
                      ? [{scaleX: 0.6}, {scaleY: 0.6}]
                      : [{scaleX: 0.9}, {scaleY: 0.9}],
                }}
                value={followedShopsToggle}></Switch>
            </View>
            <Text
              style={{
                color: Colors.profileColor,
                marginTop: (mobileW * 2) / 100,
                fontSize: (mobileW * 3.2) / 100,
                fontFamily: Font.FontRegularManrope,
              }}>
              {Lang_chg.New_listings[config.language]}
            </Text>
          </View>

          <View
            style={{
              width: (mobileW * 90) / 100,
              marginTop: (mobileW * 3) / 100,
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: Colors.btnBorderGrey,
            }}></View>
          {/*---------------- Promotions_and_special ------------- */}
          <View
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              marginTop: (mobileW * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 4.2) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.Promotions_and_special[config.language]}
              </Text>
              <Switch
                trackColor={{
                  false: Colors.placeholder_color,
                  true: Colors.placeholder_color,
                }}
                thumbColor={
                  pramotionsToggle ? Colors.theme_color : Colors.white_color
                }
                onValueChange={() => {
                  pramotionsToggleSwitchToggle();
                }}
                style={{
                  transform:
                    config.device_type == 'ios'
                      ? [{scaleX: 0.6}, {scaleY: 0.6}]
                      : [{scaleX: 0.9}, {scaleY: 0.9}],
                }}
                value={pramotionsToggle}></Switch>
            </View>
            <Text
              style={{
                color: Colors.profileColor,
                marginTop: (mobileW * 2) / 100,
                fontSize: (mobileW * 3.2) / 100,
                fontFamily: Font.FontRegularManrope,
              }}>
              {Lang_chg.Promotions_on_subscription[config.language]}
            </Text>
          </View>
          <View
            style={{
              width: (mobileW * 90) / 100,
              marginTop: (mobileW * 3) / 100,
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: Colors.btnBorderGrey,
            }}></View>
          {/*---------------- Recommendations_and_discoveries ------------- */}
          <View
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              marginTop: (mobileW * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 4.2) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.Recommendations_and_discoveries[config.language]}
              </Text>
              <Switch
                trackColor={{
                  false: Colors.placeholder_color,
                  true: Colors.placeholder_color,
                }}
                thumbColor={
                  recommendationsToggle
                    ? Colors.theme_color
                    : Colors.white_color
                }
                onValueChange={() => {
                  recommendationsToggleSwitchToggle();
                }}
                style={{
                  transform:
                    config.device_type == 'ios'
                      ? [{scaleX: 0.6}, {scaleY: 0.6}]
                      : [{scaleX: 0.9}, {scaleY: 0.9}],
                }}
                value={recommendationsToggle}></Switch>
            </View>
            <Text
              style={{
                color: Colors.profileColor,
                marginTop: (mobileW * 2) / 100,
                fontSize: (mobileW * 3.2) / 100,
                fontFamily: Font.FontRegularManrope,
              }}>
              {Lang_chg.Personalized_listing[config.language]}
            </Text>
          </View>

          <View
            style={{
              width: (mobileW * 90) / 100,
              marginTop: (mobileW * 3) / 100,
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: Colors.btnBorderGrey,
            }}></View>
          {/*---------------- Transactions_and_payments ------------- */}
          <View
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              marginTop: (mobileW * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 4.2) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.Transactions_and_payments[config.language]}
              </Text>
              <Switch
                trackColor={{
                  false: Colors.placeholder_color,
                  true: Colors.placeholder_color,
                }}
                thumbColor={
                  transactionToggle ? Colors.theme_color : Colors.white_color
                }
                onValueChange={() => {
                  transactionToggleSwitchToggle();
                }}
                style={{
                  transform:
                    config.device_type == 'ios'
                      ? [{scaleX: 0.6}, {scaleY: 0.6}]
                      : [{scaleX: 0.9}, {scaleY: 0.9}],
                }}
                value={transactionToggle}></Switch>
            </View>
            <Text
              style={{
                color: Colors.profileColor,
                marginTop: (mobileW * 2) / 100,
                fontSize: (mobileW * 3.2) / 100,
                fontFamily: Font.FontRegularManrope,
              }}>
              {Lang_chg.Payment_confirmations[config.language]}
            </Text>
          </View>

          <View
            style={{
              width: (mobileW * 90) / 100,
              marginTop: (mobileW * 3) / 100,
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: Colors.btnBorderGrey,
            }}></View>
          {/*---------------- ChiZein_news ------------- */}
          <View
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              marginTop: (mobileW * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 4.2) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.ChiZein_news[config.language]}
              </Text>
              <Switch
                trackColor={{
                  false: Colors.placeholder_color,
                  true: Colors.placeholder_color,
                }}
                thumbColor={
                  chizeinNewsToggle ? Colors.theme_color : Colors.white_color
                }
                onValueChange={() => {
                  chizeinNewsToggleSwitchToggle();
                }}
                style={{
                  transform:
                    config.device_type == 'ios'
                      ? [{scaleX: 0.6}, {scaleY: 0.6}]
                      : [{scaleX: 0.9}, {scaleY: 0.9}],
                }}
                value={chizeinNewsToggle}></Switch>
            </View>
            <Text
              style={{
                color: Colors.profileColor,
                marginTop: (mobileW * 2) / 100,
                fontSize: (mobileW * 3.2) / 100,
                fontFamily: Font.FontRegularManrope,
              }}>
              {Lang_chg.New_app_feature[config.language]}
            </Text>
          </View>

          <View
            style={{
              width: (mobileW * 90) / 100,
              marginTop: (mobileW * 3) / 100,
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: Colors.btnBorderGrey,
            }}></View>
          {/*---------------- Account_and_Security ------------- */}
          <View
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              marginTop: (mobileW * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 4.2) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.Account_and_Security[config.language]}
              </Text>
              <Switch
                trackColor={{
                  false: Colors.placeholder_color,
                  true: Colors.placeholder_color,
                }}
                thumbColor={
                  accountAndSecurityToggle
                    ? Colors.theme_color
                    : Colors.white_color
                }
                onValueChange={() => {
                  accountAndSecurityToggleSwitchToggle();
                }}
                style={{
                  transform:
                    config.device_type == 'ios'
                      ? [{scaleX: 0.6}, {scaleY: 0.6}]
                      : [{scaleX: 0.9}, {scaleY: 0.9}],
                }}
                value={accountAndSecurityToggle}></Switch>
            </View>
            <Text
              style={{
                color: Colors.profileColor,
                marginTop: (mobileW * 2) / 100,
                fontSize: (mobileW * 3.2) / 100,
                fontFamily: Font.FontRegularManrope,
              }}>
              {Lang_chg.Suspicious_logins[config.language]}
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default NotificationPreferences;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    flex: 1,
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 3) / 100,
    paddingHorizontal: (mobileW * 1) / 100,
  },
});
