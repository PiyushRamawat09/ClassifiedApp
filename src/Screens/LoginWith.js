import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import ButtonComponent from '../Componant/ButtonComponent';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AppstatusBar from '../Componant/AppstatusBar';

const LoginWith = () => {
  const navigation = useNavigation();

  const handleBackPress = useCallback(() => {
    navigation.navigate('SelectLanguage');
    return true;
  }, []);

  useFocusEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => backHandler.remove();
  }, [handleBackPress, navigation]);

  // const { t } = config.useTranslation();
  return (
    <View style={styles.container}>
      <AppstatusBar />
      <View style={styles.mainView}>
        <View style={styles.icons_container}>
          <Image
            source={localimag.icon_logo_without_back}
            style={styles.splash_icon_style}></Image>
        </View>

        {/*--------------- button view --------------- */}
        <View
          style={{
            // flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'space-between',
            marginTop:
              config.device_type == 'ios'
                ? (-mobileH * 12) / 100
                : (-mobileH * 10) / 100,
          }}>
          <ButtonComponent
            onPress={() => navigation.navigate('Login')}
            // title={t("log_in")}
            title={Lang_chg.log_in[config.language]}
            btnStyle={{
              width: (mobileW * 90) / 100,
              borderRadius: (mobileW * 50) / 100,
            }}
            active={true}
          />
          <View style={{ marginTop: mobileW * 5 / 100 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Signup')
              }}
              style={[
                {
                  width: (mobileW * 90) / 100,
                  alignSelf: 'center',
                  backgroundColor: Colors.whiteColor,
                  // marginTop: (mobileH * 4) / 100,
                  height: (mobileH * 7) / 100,
                  borderRadius: (mobileW * 50) / 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: Colors.buttoncolor,
                  borderWidth: (mobileW * 0.3) / 100,
                },
              ]}>
              <Text
                style={[
                  {
                    color: Colors.buttoncolor,
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontMediumManrope,
                  },
                ]}>
                {Lang_chg.signup_txt[config.language]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ------------------------ */}
        {/* continue without login */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            alignSelf: 'center',
            marginTop: (mobileH * 7) / 100,
          }}>
          <Text
            style={{
              color: Colors.buttoncolor,
              fontSize: (mobileW * 4) / 100,
              fontFamily: Font.FontMediumManrope,
            }}>
            {/* {t("contiueWithoutLogin")} */}
            {Lang_chg.contiueWithoutLogin[config.language]}

          </Text>

          <View
            style={{
              backgroundColor: Colors.buttoncolor,
              marginTop: (mobileH * 0.4) / 100,
              height: (mobileW * 0.4) / 100,
            }}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginWith;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
  },
  icons_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash_icon_style: {
    resizeMode: 'contain',
    width: (mobileW * 65) / 100,
    height: (mobileH * 50) / 100,
  },
});
