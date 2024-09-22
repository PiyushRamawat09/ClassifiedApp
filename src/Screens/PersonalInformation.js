import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import AppstatusBar from '../Componant/AppstatusBar';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  mobileH,
  mobileW,
  localimag,
} from '../Provider/utilslib/Utils';
import {useNavigation} from '@react-navigation/native';
import InputField from '../Componant/InputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const PersonalInformation = () => {
  const {navigate, goBack} = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [residence, setResidence] = useState('');
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(false);
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
          {Lang_chg.personal_information_txt[config.language]}
        </Text>

        <View></View>
      </View>
      {/* ----------------------------- */}

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: (mobileH * 10) / 100,
        }}>
        {/* upload profile view */}
        <View
          style={{
            marginTop: (mobileH * 5) / 100,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 25) / 100,
              height: (mobileW * 25) / 100,
              alignSelf: 'center',
            }}>
            <Image
              source={localimag.icon_userplaceHolder}
              style={{
                width: (mobileW * 25) / 100,
                height: (mobileW * 25) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              color: Colors.black_color,
              marginTop: (mobileH * 1.5) / 100,
            }}>
            {Lang_chg.upload_profile_picture[config.language]}
          </Text>

          <View
            style={{
              backgroundColor: Colors.black_color,
              marginTop: (mobileH * 0.2) / 100,
              height: (mobileW * 0.3) / 100,
            }}></View>
        </View>

        {/* ---------------- */}

        <View style={styles.mainView}>
          {/* first Name */}
          <InputField
            title={Lang_chg.first_name_txt[config.language]}
            placeholder={Lang_chg.enter_first_name_txt[config.language]}
            value={firstName}
            setValue={setFirstName}
            keyboardType="default"
            maxLength={50}
          />

          {/* Last Name */}

          <InputField
            title={Lang_chg.last_name_txt[config.language]}
            placeholder={Lang_chg.enter_last_name_txt[config.language]}
            value={lastName}
            setValue={setLastName}
            keyboardType="default"
            maxLength={50}
            inputContainerStyle={{
              marginTop: (mobileH * 3) / 100,
            }}
          />

          {/* ----------- Gender ------------------ */}

          <View
            style={{
              marginTop: (mobileH * 3) / 100,
            }}>
            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBold,
              }}>
              {Lang_chg.gender_txt[config.language]}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: (mobileH * 1.8) / 100,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setFemale(false);
                  setMale(true);
                }}
                activeOpacity={0.8}
                style={{
                  width: (mobileW * 43.5) / 100,
                  height: (mobileH * 6) / 100,
                  borderWidth: (mobileW * 0.2) / 100,
                  borderColor: male ? Colors.theme_color : Colors.chatBack,
                  justifyContent: 'center',
                  borderRadius: (mobileW * 2) / 100,
                  paddingHorizontal: (mobileW * 3) / 100,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 3.5) / 100,
                    color: male ? Colors.theme_color : Colors.darkGrey,
                    fontFamily: Font.FontRegular,
                  }}>
                  {Lang_chg.male_txt[config.language]}
                </Text>

                <Image
                  source={
                    male
                      ? localimag.icon_activeRadio
                      : localimag.icon_deactiveRadio
                  }
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setMale(false);
                  setFemale(true);
                }}
                activeOpacity={0.8}
                style={{
                  width: (mobileW * 43.5) / 100,
                  height: (mobileH * 6) / 100,
                  borderWidth: (mobileW * 0.2) / 100,
                  borderColor: female ? Colors.theme_color : Colors.chatBack,
                  justifyContent: 'center',
                  borderRadius: (mobileW * 2) / 100,
                  marginLeft: (mobileW * 3) / 100,
                  paddingHorizontal: (mobileW * 3) / 100,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 3.5) / 100,
                    color: female ? Colors.theme_color : Colors.darkGrey,
                    fontFamily: Font.FontRegular,
                  }}>
                  {Lang_chg.female_txt[config.language]}
                </Text>
                <Image
                  source={
                    female
                      ? localimag.icon_activeRadio
                      : localimag.icon_deactiveRadio
                  }
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Phone Numner*/}

          <InputField
            title={Lang_chg.phone_number_txt[config.language]}
            placeholder={Lang_chg.enter_phone_number_txt[config.language]}
            value={mobile}
            setValue={setMobile}
            keyboardType="number-pad"
            maxLength={15}
            inputContainerStyle={{
              marginTop: (mobileH * 3) / 100,
            }}
          />

          {/*Email*/}

          <InputField
            title={Lang_chg.email_txt_1[config.language]}
            placeholder={Lang_chg.enterMail[config.language]}
            value={email}
            setValue={setEmail}
            keyboardType="email-address"
            maxLength={100}
            inputContainerStyle={{
              marginTop: (mobileH * 3) / 100,
            }}
          />

          {/* place of residence */}

          <InputField
            title={Lang_chg.place_of_residence_txt[config.language]}
            placeholder={Lang_chg.enter_place_of_residence[config.language]}
            value={residence}
            setValue={setResidence}
            keyboardType="default"
            maxLength={100}
            inputContainerStyle={{
              marginTop: (mobileH * 3) / 100,
            }}
          />

          <TouchableOpacity
            onPress={() => goBack()}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              height: (mobileH * 7) / 100,
              borderRadius: (mobileW * 2) / 100,
              backgroundColor: Colors.theme_color,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: (mobileH * 7) / 100,
              justifyContent: 'center',
            }}>
            <Image
              source={localimag.icon_edit}
              style={{
                width: (mobileW * 4.5) / 100,
                height: (mobileW * 4.5) / 100,
                resizeMode: 'contain',
              }}></Image>
            <Text
              style={{
                color: Colors.whiteColor,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontRegular,
                marginLeft: (mobileW * 2) / 100,
              }}>
              {Lang_chg.edit_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default PersonalInformation;

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
