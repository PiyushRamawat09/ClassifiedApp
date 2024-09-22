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
import {useNavigation} from '@react-navigation/native';
import AppstatusBar from '../Componant/AppstatusBar';
import GradientText from '../Componant/GradientText';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [secureText_1, setSecureText_1] = useState(true);
  const [iAccept, setIAccept] = useState(false);

  const [isMailFocused, setMailFocused] = useState(false);
  const [isMobileFocused, setMobileFocused] = useState(false);
  const [isFirstNameFocused, setFirstNameFocused] = useState(false);
  const [isLastNameFocused, setLastNameFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const navigation = useNavigation();
  // const { t } = config.useTranslation();
  const handleBackPress = useCallback(() => {
    navigation.goBack();
    return true;
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => backHandler.remove();
  }, [handleBackPress]);

  //----for terms and condition
  const TermsCondition = () => {
    consolepro.consolelog('iam terms');
    navigation.navigate('TermsOfUse', {
      // pagename: t("terms_and_condition_txt"),
      pagename: Lang_chg.terms_and_condition_txt[config.language],
      contentpage: 2,
      user_type: 1,
    });
  };

  //----for PrivacyPolicy
  const PrivacyPolicy = () => {
    consolepro.consolelog('iam privacy');
    navigation.navigate('TermsOfUse', {
      pagename: Lang_chg.privacy_policy_txt[config.language],
      contentpage: 1,
      user_type: 1,
    });
  };

  const createAccount = () => {
    // if (firstName.trim().length <= 0) {
    //   msgProvider.toast(t("emptyFirstname"), "center");
    //   return false;
    // }
    // if (lastName.trim().length <= 0) {
    //   msgProvider.toast(t("emptyLastname"), "center");
    //   return false;
    // }
    // if (email.trim().length <= 0) {
    //   msgProvider.toast(t("emptyEmail"), "center");
    //   return false;
    // }
    // let letters_pas1 = config.emailvalidation;
    // if (letters_pas1.test(email) !== true) {
    //   msgProvider.toast(t('validEmail'), "center");
    //   return false;
    // }
    // if (mobile.trim().length <= 0) {
    //   msgProvider.toast(t("emptyphone"), "center");
    //   return false;
    // }
    // if (mobile.trim().length <= 6) {
    //   msgProvider.toast(t("validPhone"), "center");
    //   return false;
    // }
    // let letters_pas = config.mobilevalidation;
    // if (letters_pas.test(mobile) !== true) {
    //   msgProvider.toast(t('validPhone'), "center");
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
    // if (confirmpassword.trim().length <= 0) {
    //   msgProvider.toast(t("confirmpassword"), "center");
    //   return false;
    // }
    // if (confirmpassword.trim().length <= 5) {
    //   msgProvider.toast(t("confirmpasswordMinLength"), "center");
    //   return false;
    // }
    // if (confirmpassword.trim().length <= 5) {
    //   msgProvider.toast(t("passNotMatch"), "center");
    //   return false;
    // }
    // if (iAccept==false) {
    //   msgProvider.toast(t("acceptTerms"), "center");
    //   return false;
    // }
    // let url = config.baseURL + "signup";
    // var data = new FormData();
    // data.append("name", name);
    // data.append("phone_code", country_code);
    // data.append("mobile", phone_number);
    // data.append("password", password);
    // data.append("user_type", 1);
    // data.append("login_type", this.state.social_type);
    // data.append("device_type", config.device_type);
    // data.append("player_id", player_id_me1);
    // if (this.state.social_type != "app") {
    //   data.append("social_id", this.state.social_id);
    // }
    // consolepro.consolelog("data", data);
    // consolepro.consolelog("url", url);
    //return false
    // apifuntion
    //   .postApi(url, data)
    //   .then((obj) => {
    //     consolepro.consolelog("obj", obj);
    //     if (obj.success == true) {
    //       global.token_key = obj.token;
    //       var user_arr = obj.userDataArray;
    //       var user_id = user_arr.user_id;
    //       localStorage.setItemString("user_id", JSON.stringify(user_id));
    //       localStorage.setItemObject("user_arr", user_arr);
    //       localStorage.setItemString("password", this.state.password);
    //       localStorage.setItemString("mobile", this.state.phone_number);
    //       localStorage.setItemString("country_code", country_code);
    //       localStorage.removeItem("userData");
    //       setTimeout(() => {
    //         firebaseprovider.firebaseUserCreate();
    //         firebaseprovider.getMyInboxAllDataBooking();
    //       }, 1500);
    //       if (this.state.social_type == "app") {
    //         this.props.navigation.navigate("OtpVerification", {
    //           mobileNo: this.state.phone_number,
    //           country_code: country_code,
    //         });
    //       } else {
    //         this.props.navigation.navigate("CreateProfile");
    //       }
    //     } else {
    //       setTimeout(() => {
    //         msgProvider.alert(
    //           msgTitle.information[config.language],
    //           obj.msg[config.language],
    //           false
    //         );
    //         return false;
    //       }, 300);
    //     }
    //   })
    //   .catch((error) => {
    //     consolepro.consolelog("-------- error ------- " + error);
    //   });
    navigation.navigate('OtpVerification');
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
          paddingBottom: (mobileH * 8) / 100,
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
              marginTop: (-mobileH * 4) / 100,
            }}>
            <GradientText
              style={{
                fontSize: (mobileW * 6.5) / 100,
                fontFamily: Font.FontBoldLexend,
                alignSelf: 'center',
                textAlign: 'center',
                color: Colors.darkGreen_color,
              }}>
              {/* {t("letsgetStarted")} */}
              {Lang_chg.letsgetStarted[config.language]}
            </GradientText>

            <Text style={styles.enteredRegister}>
              {/* {t("createAnAccount")} */}
              {Lang_chg.createAnAccount[config.language]}
            </Text>
          </View>

          {/*------- sign in view end --- */}

          {/*------ textInput View start ------- */}

          <View
            style={{
              marginTop: (mobileH * 4) / 100,
            }}>
            {/* First Name  */}
            <InputContainer
              // title={t("first_name_asteric_txt")}
              // placeholder={t("enter_first_name_txt")}
              title={Lang_chg.first_name_asteric_txt[config.language]}
              placeholder={Lang_chg.enter_first_name_txt[config.language]}
              placeholderIcon={localimag.icon_person}
              value={firstName}
              setValue={setFirstName}
              keyboardType="default"
              maxLength={50}
              setFocused={setFirstNameFocused}
              focused={isFirstNameFocused}
            />

            {/* Last Name  */}
            <InputContainer
              // title={t("last_name_asteric_txt")}
              // placeholder={t("enter_last_name_txt")}
              title={Lang_chg.last_name_asteric_txt[config.language]}
              placeholder={Lang_chg.enter_last_name_txt[config.language]}
              placeholderIcon={localimag.icon_person}
              value={lastName}
              setValue={setLastName}
              keyboardType="default"
              maxLength={50}
              setFocused={setLastNameFocused}
              focused={isLastNameFocused}
              containerStyle={{
                marginTop: (mobileH * 2.5) / 100,
              }}
            />

            {/* Email  */}
            <InputContainer
              // title={t("email_txt")}
              // placeholder={t("enterMail")}
              title={Lang_chg.email_txt_1[config.language]}
              placeholder={Lang_chg.enterMail[config.language]}
              placeholderIcon={localimag.icon_mail_grey}
              value={email}
              setValue={setEmail}
              keyboardType="email-address"
              maxLength={100}
              setFocused={setMailFocused}
              focused={isMailFocused}
              containerStyle={{
                marginTop: (mobileH * 2.5) / 100,
              }}
            />

            {/* mobile */}

            <InputContainer
              // title={t("mobile_txt")}
              // placeholder={t("EnterMobile")}
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

            {/* confirm password */}

            <InputContainer
              // title={t("confirm_password_txt")}
              // placeholder={t("enter_confirm_password_txt")}
              title={Lang_chg.confirm_password_txt[config.language]}
              placeholder={Lang_chg.enter_confirm_password_txt[config.language]}
              placeholderIcon={localimag.icon_lock}
              value={confirmpassword}
              setValue={setConfirmPassword}
              secureText={secureText_1}
              setSecureText={setSecureText_1}
              showEyeIcon={true}
              containerStyle={{
                marginTop: (mobileH * 2.5) / 100,
              }}
              maxLength={16}
              setFocused={setConfirmPasswordFocused}
              focused={isConfirmPasswordFocused}
            />
          </View>

          {/* Accept terms and conditions */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: (mobileH * 3) / 100,
            }}>
            <TouchableOpacity
              onPress={() => {
                if (iAccept) {
                  setIAccept(false);
                } else {
                  setIAccept(true);
                }
              }}
              activeOpacity={0.8}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {iAccept == false ? (
                <Image
                  source={localimag.icon_checkBox_empty}
                  style={{
                    width: (mobileW * 6) / 100,
                    height: (mobileW * 6) / 100,
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <Image
                  source={localimag.icon_selected_checkBox}
                  style={{
                    width: (mobileW * 6) / 100,
                    height: (mobileW * 6) / 100,
                    resizeMode: 'contain',
                  }}
                />
              )}

              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 1.5) / 100,
                }}>
                {/* {t("i_accept_txt")} */}
                {Lang_chg.i_accept_txt[config.language]}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} onPress={TermsCondition}>
              <Text
                style={{
                  color: Colors.theme_color,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 1) / 100,
                }}>
                {/* {t("terms_and_condition_txt")} */}
                {Lang_chg.terms_and_condition_txt[config.language]}
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
                marginLeft: (mobileW * 1) / 100,
              }}>
              {/* {t("and_txt")} */}
              {Lang_chg.and_txt[config.language]}
            </Text>

            <TouchableOpacity activeOpacity={0.8} onPress={PrivacyPolicy}>
              <Text
                style={{
                  color: Colors.theme_color,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 1) / 100,
                }}>
                {/* {t("privacy_policy_txt")} */}
                {Lang_chg.privacy_policy_txt[config.language]}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Button View  */}

          <ButtonComponent
            title={Lang_chg.createAccount[config.language]}
            onPress={() => createAccount()}
            btnStyle={{
              marginTop: (mobileH * 4) / 100,
            }}
            active={true}
          />

          {/* ------ already have an account ------- */}

          <View
            style={{
              marginTop: (mobileH * 6) / 100,
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
              {/* {t("already_have_account")} */}
              {Lang_chg.already_have_account[config.language]}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: Colors.createColor,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {/* {t("log_in")} */}
                {Lang_chg.log_in[config.language]}
              </Text>
            </TouchableOpacity>
          </View>

          {/* -------------------------- */}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Signup;

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
    marginTop: (-mobileH * 5) / 100,
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
    lineHeight: (mobileH * 3.3) / 100,
    marginTop: (mobileH * 1) / 100,
  },
});
