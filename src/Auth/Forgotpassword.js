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
import InputContainer from '../Componant/InputContainer';
import ButtonComponent from '../Componant/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import AppstatusBar from '../Componant/AppstatusBar';
import GradientText from '../Componant/GradientText';

const Forgotpassword = () => {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState('');
  const [isMobileFocused, setMobileFocused] = useState(false);
  return (
    <View style={styles.container}>
      <AppstatusBar />
      <View style={styles.mainView}>
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

        {/*------ Icon View start ---- -- */}
        <View style={styles.icons_container}>
          <Image
            source={localimag.icon_splash}
            style={styles.splash_icon_style}></Image>
        </View>

        <View
          style={{
            alignItems: 'center',
            marginTop: (-mobileH * 2) / 100,
          }}>
          <GradientText
            style={{
              fontSize: (mobileW * 5.5) / 100,
              fontFamily: Font.FontBoldLexend,
              alignSelf: 'center',
              textAlign: 'center',
              color: Colors.darkGreen_color,
            }}>
            {Lang_chg.forgot_passwordTxt[config.language]}
          </GradientText>

          <View
            style={{
              marginTop: (mobileH * 3) / 100,
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
          </View>

          {/* Button View  */}

          <ButtonComponent
            title={Lang_chg.send_txt[config.language]}
            onPress={() => navigation.navigate('ForgotOtpVerify')}
            btnStyle={{
              marginTop: (mobileH * 4) / 100,
            }}
            active={true}
          />
        </View>
      </View>
    </View>
  );
};

export default Forgotpassword;

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
    // marginTop: (-mobileH * 3) / 100,
  },
  splash_icon_style: {
    resizeMode: 'contain',
    width: (mobileW * 75) / 100,
    height: (mobileW * 45) / 100,
  },
  forgotStyles: {
    color: Colors.black_color,
    fontSize: (mobileW * 4.5) / 100,
    fontFamily: Font.FontBoldLexend,
  },
});
