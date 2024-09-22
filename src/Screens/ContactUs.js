import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
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
import InputContainer from '../Componant/InputContainer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ButtonComponent from '../Componant/ButtonComponent';
import {position} from 'native-base/lib/typescript/theme/styled-system';

const ContactUs = () => {
  const {navigate, goBack} = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMailFocused, setMailFocused] = useState(false);
  const [isNameFocused, setNameFocused] = useState(false);
  const [isMessageFocused, setMessageFocused] = useState(false);
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
          {Lang_chg.Contactus[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 10) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: (mobileH * 10) / 100,
        }}>
        <View style={styles.mainView}>
          <View>
            <Text
              style={{
                fontSize: (mobileW * 4.3) / 100,
                color: Colors.black_color,
                fontFamily: Font.FontBoldManrope,
              }}>
              {Lang_chg.get_in_touch[config.language]}
            </Text>
            <Text
              style={{
                fontSize: (mobileW * 3.5) / 100,
                color: Colors.darkGrey,
                fontFamily: Font.FontMediumManrope,
                marginTop: (mobileH * 1) / 100,
              }}>
              {Lang_chg.we_are_here[config.language]}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: (mobileH * 3) / 100,
            alignSelf: 'center',
          }}>
          {/* Name  */}
          {/* <InputContainer
            title={Lang_chg.name_txt[config.language]}
            placeholder={Lang_chg.EnterName[config.language]}
            placeholderIcon={localimag.icon_person}
            value={name}
            setValue={setName}
            keyboardType="default"
            maxLength={100}
            setFocused={setNameFocused}
            focused={isNameFocused}
          /> */}

          {/* Email  */}
          {/* <InputContainer
            title={Lang_chg.email_txt[config.language]}
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
          /> */}

          {/* Message */}

          <View
            style={{
              width: (mobileW * 90) / 100,
              height: (mobileH * 25) / 100,
              backgroundColor: Colors.inputBackground,
              borderColor: isMessageFocused
                ? Colors.darkGreen_color
                : Colors.darkGrey,
              borderWidth: (mobileW * 0.2) / 100,
              borderRadius: (mobileW * 3) / 100,
              paddingVertical: (mobileH * 2) / 100,
              paddingHorizontal: (mobileW * 6) / 100,
              marginTop: (mobileH * 1) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.3) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.message_asteric_txt[config.language]}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: (mobileH * 1.5) / 100,
              }}>
              <Image
                source={localimag.icon_message}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                  tintColor: isMessageFocused
                    ? Colors.darkGreen_color
                    : Colors.darkGrey,
                }}
              />

              <TextInput
                multiline={true}
                placeholderTextColor={Colors.darkGrey}
                returnKeyLabel="done"
                returnKeyType="done"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                value={message}
                keyboardType="default"
                onFocus={() => setMessageFocused(true)}
                onBlur={() => setMessageFocused(false)}
                style={{
                  width: (mobileW * 73) / 100,
                  marginLeft: (mobileW * 3) / 100,
                  color: Colors.black_color,
                  fontFamily: Font.FontMediumManrope,
                  fontSize: (mobileW * 3.3) / 100,
                  height: (mobileH * 18) / 100,
                  textAlignVertical: 'top',
                  paddingTop: 0,
                }}
                placeholder={Lang_chg.enter_message_txt[config.language]}
                onChangeText={val => setMessage(val)}
                maxLength={250}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <ButtonComponent
        title={Lang_chg.submit_txt[config.language]}
        onPress={() => goBack()}
        btnStyle={{
          //marginTop: (mobileH * 6) / 100,
          position: 'absolute',
          bottom: (mobileH * 20) / 100,
        }}
        active={true}
      />
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 4) / 100,
  },
});
