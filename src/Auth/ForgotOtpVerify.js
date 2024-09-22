import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  Colors,
  mobileW,
  localimag,
  Font,
  Lang_chg,
  config,
  mobileH,
} from '../Provider/utilslib/Utils';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ButtonComponent from '../Componant/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';
import CountDown from 'react-native-countdown-component';
import AppstatusBar from '../Componant/AppstatusBar';
import GradientText from '../Componant/GradientText';

const ForgotOtpVerify = () => {
  const [otp, setOtp] = useState('');
  const [showbtn, setShowBtn] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AppstatusBar />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: (mobileH * 8) / 100,
        }}>
        <View style={styles.mainView}>
          {/* back icon */}

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={{
              marginTop: (mobileH * 5) / 100,
              width: (mobileW * 7) / 100,
            }}>
            <Image
              source={localimag.icon_goback}
              style={{
                width: (mobileW * 6) / 100,
                height: (mobileW * 6) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              Keyboard.dismiss();
            }}
            style={{flex: 1}}>
            {/*------ Icon View start ---- -- */}
            <View style={styles.icons_container}>
              <Image
                source={localimag.icon_splash}
                style={styles.splash_icon_style}></Image>
            </View>

            <View
              style={{
                alignItems: 'center',
                marginTop: (-mobileH * 4) / 100,
              }}>
              <GradientText
                style={{
                  fontSize: (mobileW * 6) / 100,
                  fontFamily: Font.FontBoldLexend,
                  alignSelf: 'center',
                  textAlign: 'center',
                  color: Colors.darkGreen_color,
                }}>
                {Lang_chg.OtpVerification[config.language]}
              </GradientText>
              <Text style={styles.enteredRegister}>
                {Lang_chg.we_sent_a_code_txt[config.language]}
              </Text>

              <OTPTextView
                handleTextChange={text => {
                  setOtp(text);
                }}
                containerStyle={{
                  width: (mobileW * 90) / 100,
                  marginTop: (mobileH * 4) / 100,
                }}
                textInputStyle={{
                  borderRadius: (mobileW * 2) / 100,
                  borderWidth: (mobileW * 0.3) / 100,
                  width: (mobileW * 12) / 100,
                  color: Colors.black_color,
                  alignSelf: 'center',
                  height: (mobileW * 12) / 100,
                }}
                inputCount={6}
                inputCellLength={1}
                tintColor={Colors.theme_color}
                offTintColor={Colors.offTintColor}
              />

              {/* Button View  */}

              <ButtonComponent
                title={Lang_chg.verify_txt[config.language]}
                onPress={() =>
                  navigation.navigate('ChangePassword', {
                    status: 1,
                  })
                }
                btnStyle={{
                  marginTop: (mobileH * 5) / 100,
                }}
                active={true}
              />

              {/* ------ didnt receive an otp------- */}

              {showbtn == false ? (
                <CountDown
                  until={60 * 2}
                  size={(mobileW * 3.3) / 100}
                  onFinish={() => {
                    setShowBtn(true);
                  }}
                  digitStyle={{backgroundColor: Colors.whiteColor}}
                  digitTxtStyle={{color: Colors.redColor}}
                  timeLabelStyle={{color: Colors.time_lable_color, fontSize: 1}}
                  timeToShow={['M', 'S']}
                  timeLabels={{m: '', s: ''}}
                  showSeparator={true}
                  separatorStyle={{color: Colors.redColor}}
                  style={{
                    marginTop: (mobileH * 3) / 100,
                  }}
                />
              ) : (
                <View
                  style={{
                    marginTop: (mobileH * 6) / 100,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: Colors.didnt_recieve_it_Color,
                      fontSize: (mobileW * 3.5) / 100,
                      fontFamily: Font.FontMediumManrope,
                    }}>
                    {Lang_chg.didnt_recieve_it_txt[config.language]}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    // onPress={() => navigation.navigate('Login')}
                  >
                    <Text
                      style={{
                        color: Colors.resend_otp_color,
                        fontSize: (mobileW * 3.5) / 100,
                        fontFamily: Font.FontBoldManrope,
                      }}>
                      {Lang_chg.resend_otp_txt[config.language]}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}
                style={{
                  alignSelf: 'center',
                  marginTop: (mobileH * 2) / 100,
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.3) / 100,
                    fontFamily: Font.FontBoldManrope,
                    textDecorationLine: 'underline',
                  }}>
                  {Lang_chg.change_mobileNumber_txt[config.language]}
                </Text>
              </TouchableOpacity>

              {/* -------------------------- */}
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForgotOtpVerify;

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
    // marginTop: (mobileH * 5) / 100,
  },
  splash_icon_style: {
    resizeMode: 'contain',
    width: (mobileW * 75) / 100,
    height: (mobileW * 45) / 100,
  },
  enteredRegister: {
    color: Colors.otpColor,
    fontSize: (mobileW * 3.8) / 100,
    fontFamily: Font.FontMediumManrope,
    textAlign: 'center',
    lineHeight: (mobileH * 2.6) / 100,
    marginTop: (mobileH * 1.5) / 100,
  },
  otpStyles: {
    color: Colors.black_color,
    fontSize: (mobileW * 4.5) / 100,
    fontFamily: Font.FontBold,
  },
});
