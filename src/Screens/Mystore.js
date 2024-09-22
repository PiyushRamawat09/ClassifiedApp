import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AppstatusBar from '../Componant/AppstatusBar';
import {useNavigation} from '@react-navigation/native';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';

const Mystore = () => {
  const {navigate, goBack} = useNavigation();
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
            fontSize: (mobileW * 6) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontBold,
          }}>
          {Lang_chg.myStore_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 5) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      <View style={styles.mainView}>
        {/*---------------- Store profile ------------- */}

        <TouchableOpacity
          onPress={() => navigate('StoreProfile')}
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: (mobileH * 3) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={localimag.icon_myStore}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.8) / 100,
                fontFamily: Font.FontRegular,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.store_profile_txt[config.language]}
            </Text>
          </View>

          <Image
            source={localimag.icon_profile_next}
            style={{
              width: (mobileW * 5) / 100,
              height: (mobileW * 5) / 100,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>
        {/* ------------------------------- */}

        {/*---------------- Manage my store ------------- */}

        <TouchableOpacity
          onPress={() => navigate('ManageMyStore')}
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: (mobileH * 4) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={localimag.icon_manage_store}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.8) / 100,
                fontFamily: Font.FontRegular,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.manage_my_store_txt[config.language]}
            </Text>
          </View>

          <Image
            source={localimag.icon_profile_next}
            style={{
              width: (mobileW * 5) / 100,
              height: (mobileW * 5) / 100,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>

        {/* ------------------------------- */}

        {/*---------------- My Subscription ------------- */}

        <TouchableOpacity
          onPress={() => navigate('SubscriptionHistory')}
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: (mobileH * 4) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={localimag.icon_mySusbcription}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.8) / 100,
                fontFamily: Font.FontRegular,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.My_subscription_txt[config.language]}
            </Text>
          </View>

          <Image
            source={localimag.icon_profile_next}
            style={{
              width: (mobileW * 5) / 100,
              height: (mobileW * 5) / 100,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>

        {/* ------------------------------- */}
      </View>
    </View>
  );
};

export default Mystore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 3) / 100,
    paddingHorizontal: (mobileW * 1) / 100,
  },
});
