import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AppstatusBar from '../Componant/AppstatusBar';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import {useNavigation} from '@react-navigation/native';

const InteractWithApplication = () => {
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
          {Lang_chg.interact_with_application_txt[config.language]}
        </Text>

        <View style={{}}></View>
      </View>
      {/* ----------------------------- */}

      <View style={styles.mainView}>
        {/*---------------- rate app ------------- */}

        <TouchableOpacity
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
              source={localimag.icon_rate_app}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.6) / 100,
                fontFamily: Font.FontBoldManrope,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.rate_app[config.language]}
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

        {/*---------------- share app ------------- */}

        <TouchableOpacity
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
              source={localimag.icon_share}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.6) / 100,
                fontFamily: Font.FontBoldManrope,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.share_app[config.language]}
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

export default InteractWithApplication;

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
