import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
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
import ButtonComponent from '../Componant/ButtonComponent';
import {position} from 'native-base/lib/typescript/theme/styled-system';

const Language = () => {
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
          {Lang_chg.language_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 10) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      <View style={styles.mainView}>
        {/* select language view */}

        <View
          style={{
            alignItems: 'center',
            marginTop: (mobileH * 3) / 100,
          }}>
          <Text
            style={{
              color: Colors.selectLanguageColor,
              fontSize: (mobileW * 6) / 100,
              fontFamily: Font.FontBoldManrope,
            }}>
            {Lang_chg.change_language[config.language]}
          </Text>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 3.7) / 100,
              fontFamily: Font.FontMediumManrope,
              marginTop: (mobileH * 1) / 100,
              textAlign: 'center',
              lineHeight: (mobileH * 3) / 100,
            }}>
            Lorem ipsum dolor sit amet consectetur. Et ut eu iaculis
            condimentum.
          </Text>
        </View>

        {/* ------------------- */}

        {/* Button view */}

        <View
          style={{
            marginTop: (mobileH * 5.5) / 100,
          }}>
          <ButtonComponent
            title={Lang_chg.english_txt[config.language]}
            // onPress={() => goBack()}
            active={true}
          />

          <ButtonComponent
            title={Lang_chg.arabic_txt[config.language]}
            // onPress={() => navigation.navigate('Login')}
            btnStyle={{
              marginTop: (mobileH * 3) / 100,
            }}
            active={false}
          />
          <ButtonComponent
            title={Lang_chg.french_txt[config.language]}
            // onPress={() => navigation.navigate('Login')}
            btnStyle={{
              marginTop: (mobileH * 3) / 100,
            }}
            active={false}
          />
        </View>
      </View>

      <ButtonComponent
        title={Lang_chg.confirm_txt[config.language]}
        onPress={() => goBack()}
        btnStyle={{
          marginTop: (mobileH * 4) / 100,
          position: 'absolute',
          bottom: (mobileH * 8) / 100,
        }}
        active={true}
      />
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    marginTop: (mobileH * 6) / 100,
  },
});
