import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import AppstatusBar from '../Componant/AppstatusBar';
import {useNavigation} from '@react-navigation/native';

const HelpAndSupport = () => {
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
            fontSize: (mobileW * 5) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontBoldLexend,
          }}>
          {Lang_chg.help_and_support_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 5) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      <View style={styles.mainView}>
        {/*---------------- contact us ------------- */}

        <TouchableOpacity
          onPress={() => navigate('ContactUs')}
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
              source={localimag.icon_contact_us}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.6) / 100,
                fontFamily: Font.FontMediumManrope,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.Contactus[config.language]}
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

        {/*---------------- Live chat ------------- */}

        <TouchableOpacity
          onPress={() =>
            navigate('LiveChat', {
              name: 'Chizein',
              image: localimag.icon_liveChat,
              user_id: 0,
            })
          }
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
              source={localimag.icon_live_chat}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.6) / 100,
                fontFamily: Font.FontMediumManrope,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.live_chat_txt[config.language]}
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

export default HelpAndSupport;

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
