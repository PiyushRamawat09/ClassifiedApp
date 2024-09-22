import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import {FlatList} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import ButtonComponent from '../Componant/ButtonComponent';
import AppstatusBar from '../Componant/AppstatusBar';
// import {useTranslation} from 'react-i18next';

const OnboardScreen = () => {
  // const { t } = config.useTranslation();
  // const {t} = useTranslation();

  const [slides, setSlides] = useState([
    {
      key: 1,
      image: localimag.icons_onboard_1,
      title: 'Find the Products',
      description:
        'Lorem ipsum dolor sit amet consectetur. Et ut eu iaculis condimentum. Quis imperdiet orci porta ut augue.',
      status: false,
    },
    {
      key: 2,
      image: localimag.icons_onboard_2,
      title: 'Chat with Owner',
      description:
        'Lorem ipsum dolor sit amet consectetur. Et ut eu iaculis condimentum. Quis imperdiet orci porta ut augue.',
      status: false,
    },
    {
      key: 3,
      image: localimag.icons_onboard_3,
      title: 'Find Store',
      description:
        'Lorem ipsum dolor sit amet consectetur. Et ut eu iaculis condimentum. Quis imperdiet orci porta ut augue.',
      status: false,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();
  const flatListRef = useRef(null);

  const scrollToNextItem = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
    setCurrentIndex(nextIndex);
  };

  const handleBackPress = useCallback(() => {
    navigation.goBack();
    return true;
  }, []);

  useFocusEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => backHandler.remove();
  }, [handleBackPress, navigation]);

  const Indicator = ({slides, currentIndex}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          // marginTop: (mobileH * 2) / 100,
          position: 'absolute',
          alignSelf: 'center',
          bottom:
            config.device_type == 'ios'
              ? (mobileH * 32) / 100
              : (mobileH * 38.5) / 100,
        }}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={{
              height: (mobileW * 2) / 100,
              width:
                currentIndex === index
                  ? (mobileW * 8) / 100
                  : (mobileW * 2) / 100,
              borderRadius: (mobileW * 30) / 100,
              backgroundColor:
                currentIndex === index
                  ? Colors.theme_color
                  : Colors.deactiveIndicator,
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppstatusBar />
      {/* content view */}
      <View>
        <FlatList
          ref={flatListRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={slides}
          keyExtractor={item => item.key}
          pagingEnabled={true}
          scrollEnabled={false}
          renderItem={({item, index}) => {
            return (
              <View>
                <Image
                  source={item.image}
                  style={{
                    width: mobileW,
                    height: (mobileH * 58) / 100,
                  }}></Image>

                <View
                  style={{
                    marginTop:
                      config.device_type == 'ios'
                        ? (mobileH * 3.5) / 100
                        : (mobileH * 6.5) / 100,
                    width: (mobileW * 90) / 100,
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: Colors.black_color,
                      fontSize: (mobileW * 6) / 100,
                      fontFamily: Font.FontBoldLexend,
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      marginTop: (mobileH * 1) / 100,
                      fontSize: (mobileW * 4.3) / 100,
                      color: Colors.darkGrey,
                      textAlign: 'center',
                      fontFamily: Font.FontMediumManrope,
                      lineHeight: (mobileH * 2.8) / 100,
                    }}>
                    {item.description}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>

      <Indicator slides={slides} currentIndex={currentIndex} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop:
            config.device_type == 'ios'
              ? (mobileH * 4) / 100
              : (mobileH * 8) / 100,
          width: (mobileW * 85) / 100,
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('LoginWith')}>
          <Text
            style={{
              color: Colors.skipColor,
              fontSize: (mobileW * 4) / 100,
              fontFamily: Font.FontBoldManrope,
            }}>
            {/* {t('skip_txt')} */}
            {Lang_chg.skip_txt[config.language]}
          </Text>
        </TouchableOpacity>

        {currentIndex !== slides.length - 1 ? (
          <TouchableOpacity activeOpacity={0.8} onPress={scrollToNextItem}>
            <Image
              source={localimag.icon_next}
              style={{
                width: (mobileW * 15) / 100,
                height: (mobileW * 15) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        ) : (
          <ButtonComponent
            // title={t("get_started_txt")}
            title={Lang_chg.get_started_txt[config.language]}
            onPress={() => navigation.navigate('LoginWith')}
            btnStyle={{
              width: (mobileW * 40) / 100,
              height: (mobileH * 6.5) / 100,
            }}
            active={true}
          />
        )}
      </View>
    </View>
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
});
