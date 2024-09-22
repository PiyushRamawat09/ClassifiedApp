import {
  BackHandler,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Colors,
  mobileW,
  localimag,
  Font,
  Lang_chg,
  config,
  mobileH,
  consolepro,
  msgProvider,
} from '../Provider/utilslib/Utils';

import InputContainer from '../Componant/InputContainer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ButtonComponent from '../Componant/ButtonComponent';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AppstatusBar from '../Componant/AppstatusBar';
import GradientText from '../Componant/GradientText';

const login = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [isMobileFocused, setMobileFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  // const { t } = config.useTranslation();

  const navigation = useNavigation();

  const handleBackPress = useCallback(() => {
    navigation.navigate('LoginWith');
    return true;
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      console.log('Adding BackHandler listener');
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress,
      );

      return () => {
        console.log('Removing BackHandler listener');
        backHandler.remove();
      };
    }, [handleBackPress]),
  );

  const loginButton = () => {
    // if (email.trim().length <= 0) {
    //   msgProvider.toast(t("emptyEmail"), "center");
    //   return false;
    // }
    // let letters_pas1 = config.emailvalidation;
    // if (letters_pas1.test(email) !== true) {
    //   msgProvider.toast(t('validEmail'), "center");
    //   return false;
    // }
    // if (password.trim().length <= 0) {
    //   msgProvider.toast(t("emptyPassword"), "center");
    //   return false;
    // }
    // if (password.trim().length <= 5) {
    //   msgProvider.toast(t("passwordMinLength"), "center");
    //   return false;
    // }
    navigation.navigate('Home');
    consolepro.consolelog('hello');
  };
  return (
    <View style={styles.container}>
      <AppstatusBar />
      {/* keyboardAware View */}
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: (mobileH * 3) / 100,
        }}>
        <View style={styles.mainView}>
          {/*------ Icon View start ---- -- */}
          <View style={styles.icons_container}>
            <Image
              source={localimag.icon_splash}
              style={styles.splash_icon_style}></Image>
          </View>
          {/*------ Icon View end ---- -- */}

          {/* ------ sign in view start ----- */}

          <View
            style={{
              alignItems: 'center',
              marginTop: (-mobileH * 2.5) / 100,
            }}>
            <GradientText
              style={{
                fontSize: (mobileW * 6.5) / 100,
                fontFamily: Font.FontBoldLexend,
                alignSelf: 'center',
                textAlign: 'center',
                color: Colors.darkGreen_color,
              }}>
              {/* {t("log_in")} */}
              {Lang_chg.log_in[config.language]}
            </GradientText>

            <Text style={styles.enteredRegister}>
              {/* {t("enter_registered_account_txt")} */}
              {Lang_chg.enter_registered_account_txt[config.language]}
            </Text>
          </View>

          {/*------- sign in view end --- */}

          {/*------ textInput View start ------- */}

          <View
            style={{
              marginTop: (mobileH * 2.5) / 100,
            }}>
            {/* Phone Number  */}
            <InputContainer
              // title={t("email_txt")}
              // placeholder={t("enterMail")}
              title={Lang_chg.mobile_txt[config.language]}
              placeholder={Lang_chg.EnterMobile[config.language]}
              placeholderIcon={localimag.icon_mobile}
              value={mobile}
              setValue={setMobile}
              keyboardType="number-pad"
              maxLength={15}
              setFocused={setMobileFocused}
              focused={isMobileFocused}
              containerStyle={{
                marginTop: (mobileH * 2.5) / 100,
              }}
            />

            {/* password */}
            <InputContainer
              // title={t("password_txt")}
              // placeholder={t("enter_password_txt")}
              title={Lang_chg.password_txt[config.language]}
              placeholder={Lang_chg.enter_password_txt[config.language]}
              placeholderIcon={localimag.icon_lock}
              value={password}
              setValue={setPassword}
              secureText={secureText}
              setSecureText={setSecureText}
              showEyeIcon={true}
              containerStyle={{
                marginTop: (mobileH * 2.5) / 100,
              }}
              maxLength={16}
              setFocused={setPasswordFocused}
              focused={isPasswordFocused}
            />
          </View>
          {/*------ textInput View end ------- */}

          {/* forgotpassword View start */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Forgotpassword')}
            activeOpacity={0.8}
            style={{
              marginTop: (mobileH * 3) / 100,
              alignSelf: 'flex-end',
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              {/* {t("forgot_password_txt")} */}
              {Lang_chg.forgot_password_txt[config.language]}
            </Text>
          </TouchableOpacity>
          {/* forgotpassword View end */}

          {/* Button View  */}

          <ButtonComponent
            // title={t("log_in")}
            title={Lang_chg.log_in[config.language]}
            onPress={() => loginButton()}
            btnStyle={{
              marginTop: (mobileH * 4) / 100,
            }}
            active={true}
          />
          {/* ---------------------------- */}

          {/* ------ dont have an account ------- */}

          <View
            style={{
              marginTop: (mobileH * 12) / 100,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              {/* {t("dont_have_an_acc")} */}
              {Lang_chg.dont_have_an_acc[config.language]}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{
                  color: Colors.createColor,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {/* {" " + t("createAccount")} */}
                {Lang_chg.createAccount[config.language]}
              </Text>
            </TouchableOpacity>
          </View>

          {/* -------------------------- */}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default login;

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
    marginTop: (-mobileH * 1) / 100,
  },
  splash_icon_style: {
    resizeMode: 'contain',
    width: (mobileW * 75) / 100,
    height: (mobileW * 45) / 100,
  },
  enteredRegister: {
    color: Colors.darkGrey,
    fontSize: (mobileW * 4) / 100,
    fontFamily: Font.FontMediumManrope,
    textAlign: 'center',
    lineHeight:
      config.device_type == 'ios'
        ? (mobileH * 2.8) / 100
        : (mobileH * 3.5) / 100,
    marginTop: (mobileH * 1.5) / 100,
  },
});
