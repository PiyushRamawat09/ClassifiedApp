import {BackHandler, Image, StyleSheet, Text, View, Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  localStorage,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import ButtonComponent from '../Componant/ButtonComponent';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AppstatusBar from '../Componant/AppstatusBar';
import {language_set} from '../Provider/Language_provider';

const SelectLanguage = () => {
  const navigation = useNavigation();
  const [english, setEnglish] = useState(true);
  const [arabic, setArabic] = useState(false);
  const [french, setFrench] = useState(false);
  // const { t } = config.useTranslation();

  const handleBackPress = useCallback(() => {
    BackHandler.exitApp();
    return true;
  }, []);

  useFocusEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => backHandler.remove();
  }, [handleBackPress, navigation]);

  const SetLanguage = index => {
    // if (index != 1) {
    //   config.textalign = 'left';
    //   localStorage.setItemObject('language', 0);
    //   config.language = 0;
    // } else {
    //   console.log('index44',index)
    //   config.textalign = 'right';
    //   localStorage.setItemObject('language', 1);
    //   config.language = 1;
    // }
    // language_set(index);
    // if (index == 0) {
    //   langCode = 'en';
    // } else {
    //   langCode = 'ar';
    // }
    // localStorage.setItemString('languageCode', langCode);
  };

  return (
    <View style={styles.container}>
      <AppstatusBar />
      <View style={styles.mainView}>
        {/* icon view */}
        <View style={styles.icons_container}>
          <Image
            source={localimag.icon_logo_without_back}
            style={styles.splash_icon_style}></Image>
        </View>

        {/* select language view */}

        <View
          style={{
            alignItems: 'center',
            marginTop: (-mobileH * 3) / 100,
          }}>
          <Text
            style={{
              color: Colors.selectLanguageColor,
              fontSize: (mobileW * 6) / 100,
              fontFamily: Font.FontBoldLexend,
            }}>
            {Lang_chg.select_language[config.language]}
          </Text>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 4) / 100,
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
            // title={t("english_txt")}
            title={Lang_chg.english_txt[config.language]}
            active={english}
            onPress={() => {
              setArabic(false);
              setFrench(false);
              setEnglish(true);
              SetLanguage(0);
              // config.i18next.changeLanguage('en');
              navigation.navigate('OnboardScreen');
            }}
          />

          <ButtonComponent
            // title={t("arabic_txt")}
            title={Lang_chg.arabic_txt[config.language]}
            onPress={() => {
              setEnglish(false);
              setFrench(false);
              setArabic(true);
              SetLanguage(1);
              // config.i18next.changeLanguage('ar');
              // navigation.navigate('OnboardScreen');
            }}
            active={arabic}
            btnStyle={{
              marginTop: (mobileH * 3) / 100,
            }}
          />

          <ButtonComponent
            // title={t("french_txt")}
            title={Lang_chg.french_txt[config.language]}
            onPress={() => {
              setEnglish(false);
              setArabic(false);
              setFrench(true);
              SetLanguage(2);
              // config.i18next.changeLanguage('fr');
              // navigation.navigate('OnboardScreen');
            }}
            active={french}
            btnStyle={{
              marginTop: (mobileH * 3) / 100,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SelectLanguage;

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
    height: (mobileH * 35) / 100,
  },
});
