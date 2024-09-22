import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
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

const UserProfile = () => {
  const {navigate, goBack} = useNavigation();

  const [featuredAd, setFeaturedAd] = useState([
    {
      id: 0,
      name: Lang_chg.followers_txt[config.language],
      count: 125,
    },
    {
      id: 1,
      name: Lang_chg.following_txt[config.language],
      count: 125,
    },
    {
      id: 2,
      name: Lang_chg.total_ads_txt[config.language],
      count: 100,
    },
  ]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLasttName] = useState('');
  const [mobile, setMobile] = useState('');

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
          {Lang_chg.menu_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 10) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.mainView,
          {
            paddingBottom: (mobileH * 10) / 100,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../Icons/Images/image_user_1.jpg')}
            style={{
              width: (mobileW * 16) / 100,
              height: (mobileW * 16) / 100,
              borderRadius: (mobileW * 30) / 100,
            }}></Image>
          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 4) / 100,
              fontFamily: Font.FontBoldManrope,
              marginLeft: (mobileW * 2) / 100,
            }}>
            {`Khady Ahmed`}
          </Text>

          <Image
            source={localimag.icon_verified}
            style={{
              width: (mobileW * 4.5) / 100,
              height: (mobileW * 4.5) / 100,
              borderRadius: (mobileW * 30) / 100,
              marginLeft: (mobileW * 2) / 100,
            }}></Image>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 3) / 100,
          }}>
          {featuredAd.map((item, index) => (
            <View
              key={index.toString()}
              style={{
                width: (mobileW * 28) / 100,
                height: (mobileH * 12) / 100,
                borderColor: Colors.btnBorderGrey,
                borderWidth: 1,
                borderRadius: (mobileW * 2) / 100,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight:
                  index != featuredAd.length - 1 ? (mobileW * 3) / 100 : null,
              }}>
              <Text
                style={{
                  color: Colors.theme_color,
                  fontSize: (mobileW * 5.3) / 100,
                  fontFamily: Font.FontExtraBoldManrope,
                }}>
                {item.count}
              </Text>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3) / 100,
                  fontFamily: Font.FontMediumManrope,
                }}>
                {item.name}
              </Text>
            </View>
          ))}
        </View>

        {/* first name */}
        <View
          style={{
            marginTop: (mobileH * 3) / 100,
          }}>
          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 4) / 100,
              fontFamily: Font.FontBoldManrope,
            }}>
            {Lang_chg.first_name_txt[config.language]}
          </Text>

          <TextInput
            placeholderTextColor={Colors.darkGrey}
            returnKeyLabel="done"
            returnKeyType="done"
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            value={firstName}
            keyboardType="default"
            style={{
              width: (mobileW * 90) / 100,
              color: Colors.black_color,
              fontFamily: Font.FontMediumManrope,
              fontSize: (mobileW * 3.3) / 100,
              borderBottomColor: Colors.btnBorderGrey,
              borderBottomWidth: (mobileW * 0.2) / 100,
              paddingLeft: 0,
              paddingTop: 0,
              paddingBottom: (mobileH * 1) / 100,
            }}
            placeholder={Lang_chg.enter_first_name_txt[config.language]}
            onChangeText={val => setFirstName(val)}
            maxLength={50}
          />
        </View>

        {/* --------------- */}

        {/* last name */}
        <View
          style={{
            marginTop: (mobileH * 3) / 100,
          }}>
          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 4) / 100,
              fontFamily: Font.FontBoldManrope,
            }}>
            {Lang_chg.last_name_txt[config.language]}
          </Text>

          <TextInput
            placeholderTextColor={Colors.darkGrey}
            returnKeyLabel="done"
            returnKeyType="done"
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            value={lastName}
            keyboardType="default"
            style={{
              width: (mobileW * 90) / 100,
              color: Colors.black_color,
              fontFamily: Font.FontMediumManrope,
              fontSize: (mobileW * 3.3) / 100,
              borderBottomColor: Colors.btnBorderGrey,
              borderBottomWidth: (mobileW * 0.2) / 100,
              paddingLeft: 0,
              paddingTop: 0,
              paddingBottom: (mobileH * 1) / 100,
            }}
            placeholder={Lang_chg.enter_last_name_txt[config.language]}
            onChangeText={val => setLasttName(val)}
            maxLength={50}
          />
        </View>
        {/* --------------- */}

        {/* phone number */}
        <View
          style={{
            marginTop: (mobileH * 3) / 100,
          }}>
          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 4) / 100,
              fontFamily: Font.FontBoldManrope,
            }}>
            {Lang_chg.phone_number_txt[config.language]}
          </Text>

          <TextInput
            placeholderTextColor={Colors.darkGrey}
            returnKeyLabel="done"
            returnKeyType="done"
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            value={mobile}
            keyboardType="number-pad"
            style={{
              width: (mobileW * 90) / 100,
              color: Colors.black_color,
              fontFamily: Font.FontMediumManrope,
              fontSize: (mobileW * 3.3) / 100,
              borderBottomColor: Colors.btnBorderGrey,
              borderBottomWidth: (mobileW * 0.2) / 100,
              paddingLeft: 0,
              paddingTop: 0,
              paddingBottom: (mobileH * 1) / 100,
            }}
            placeholder={Lang_chg.enter_phone_number_txt[config.language]}
            onChangeText={val => setMobile(val)}
            maxLength={15}
          />
        </View>
        {/* --------------- */}
      </ScrollView>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    paddingHorizontal: (mobileW * 5) / 100,
    marginTop: (mobileH * 4) / 100,
  },
});
