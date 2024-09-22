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
} from '../Provider/utilslib/Utils';
import {useNavigation, useRoute} from '@react-navigation/native';
import InputContainer from '../Componant/InputContainer';
import ButtonComponent from '../Componant/ButtonComponent';
import AppstatusBar from '../Componant/AppstatusBar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ChangePassword = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [isCurrentPasswordFocused, setCurentPasswordFocused] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const [secureText_1, setSecureText_1] = useState(true);
  const [secureText_2, setSecureText_2] = useState(true);

  const [currentPassword, setCurrentPassword] = useState('');

  const {params} = useRoute();

  const handleBackPress = useCallback(() => {
    params?.status === 2
      ? navigation.navigate('SettingsAndInformation')
      : navigation.navigate('Login');
    return true;
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => {
      backHandler.remove();
    };
  }, [handleBackPress]);

  return (
    <View style={styles.container}>
      <AppstatusBar />
      <View style={styles.mainView}>
        {/* header */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 5) / 100,
          }}>
          <TouchableOpacity
            onPress={() =>
              params?.status === 2
                ? navigation.navigate('SettingsAndInformation')
                : navigation.navigate('Login')
            }
            activeOpacity={0.8}
            style={{
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

          <Text style={styles.headerTextStyle}>
            {Lang_chg.changepassword_txt[config.language]}
          </Text>
        </View>

        {/* -------------- */}

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingBottom: (mobileH * 5) / 100,
          }}>
          <View
            style={{
              marginTop: (mobileH * 4) / 100,
            }}>
            {/* Current Password */}

            {params?.status === 2 && (
              <InputContainer
                title={Lang_chg.current_password_txt[config.language]}
                placeholder={
                  Lang_chg.enter_current_password_txt[config.language]
                }
                placeholderIcon={localimag.icon_lock}
                value={currentPassword}
                setValue={setCurrentPassword}
                secureText={secureText_2}
                setSecureText={setSecureText_2}
                showEyeIcon={true}
                containerStyle={{
                  marginTop: (mobileH * 2.5) / 100,
                }}
                maxLength={16}
                setFocused={setCurentPasswordFocused}
                focused={isCurrentPasswordFocused}
              />
            )}

            {/* new password */}

            <InputContainer
              title={Lang_chg.new_password_txt[config.language]}
              placeholder={Lang_chg.enter_new_password_txt[config.language]}
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

            {/* confirm new password */}

            <InputContainer
              title={Lang_chg.confirm_new_password_txt[config.language]}
              placeholder={
                Lang_chg.enter_confirm_new_password_txt[config.language]
              }
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

            {/* Button View  */}

            <ButtonComponent
              title={Lang_chg.changepassword_txt[config.language]}
              onPress={() =>
                params?.status === 2
                  ? navigation.navigate('SettingsAndInformation')
                  : navigation.navigate('Login')
              }
              btnStyle={{
                marginTop: (mobileH * 5) / 100,
              }}
              active={true}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
  },
  headerTextStyle: {
    color: Colors.black_color,
    fontSize: (mobileW * 5) / 100,
    fontFamily: Font.FontBoldLexend,
    marginLeft: (mobileW * 17) / 100,
  },
});
