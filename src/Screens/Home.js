import {
  BackHandler,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Animated,
  Image,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import SearchContainer from '../Componant/SearchContainer';
import AppstatusBar from '../Componant/AppstatusBar';
import FastImage from 'react-native-fast-image';
import Tabcomponent from '../Componant/Tabcomponent';
import ChizeinComponent from '../Componant/ChizeinComponent';
import HomeCategories from '../Componant/HomeCategories';

const Home = () => {
  const navigation = useNavigation();

  const handleBackPress = useCallback(() => {
    BackHandler.exitApp();
    return true;
  }, []);

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress,
      );
      return () => backHandler.remove();
    }, [handleBackPress, navigation]),
  );

  const [searchText, setSearchText] = useState('');

  const [selectTabe, setSelectTab] = useState(0);
  const [title, setTitle] = useState('');

  // ------------------------------------------

  const ScrollY = useRef(new Animated.Value(0)).current;

  const translateHeader = ScrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -60],
    extrapolate: 'clamp',
  });

  const opacityTitle = ScrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const [tabData, setTabData] = useState([
    {
      id: 0,
      name: 'Chi Zein!',
      status: true,
    },
    {
      id: 1,
      name: 'Women',
      status: false,
    },
    {
      id: 2,
      name: 'Men',
      status: false,
    },
    {
      id: 3,
      name: 'Children',
      status: false,
    },
    {
      id: 4,
      name: 'Home',
      status: false,
    },
    {
      id: 5,
      name: 'High-tech products',
      status: false,
    },
  ]);

  function changeTabStatus(indx) {
    let tab_arr = [...tabData];
    let name;
    for (let i = 0; i < tab_arr.length; i++) {
      tab_arr[i].status = false;
    }

    tab_arr[indx].status = true;
    name = tab_arr[indx].name;
    setTitle(name);
    setSelectTab(indx);
    setTabData(tab_arr);
  }

  return (
    <View style={styles.container}>
      <AppstatusBar />

      <Animated.View
        style={{
          marginTop: -(mobileH * 5) / 100,
          // paddingBottom: (mobileH * 2) / 100,
          // shadowColor: '#000',
          // shadowOffset: {
          //   width: 0,
          //   height: 2,
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 3.84,

          // elevation: 5,
          backgroundColor: Colors.whiteColor,
          transform: [{translateY: translateHeader}],
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}>
        <Animated.View
          style={{
            transform: [{translateY: translateHeader}],
            opacity: opacityTitle,
            paddingHorizontal: (mobileW * 6) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <FastImage
              source={localimag.icon_logo_without_back_1}
              resizeMode={FastImage.resizeMode.contain}
              style={{
                width: (mobileW * 40) / 100,
                height: (mobileW * 40) / 100,
              }}></FastImage>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/*-------------- notification -------------------- */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Notification')}>
                <FastImage
                  source={localimag.icon_bell}
                  resizeMode={FastImage.resizeMode.contain}
                  style={{
                    width: (mobileW * 7) / 100,
                    height: (mobileW * 7) / 100,
                  }}>
                  <View
                    style={{
                      width: (mobileW * 3) / 100,
                      height: (mobileW * 3) / 100,
                      borderRadius: (mobileW * 30) / 100,
                      backgroundColor: Colors.deleteColor,
                      alignSelf: 'flex-end',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: (mobileW * 0.8) / 100,
                    }}>
                    <Text
                      style={{
                        color: Colors.whiteColor,
                        fontSize: (mobileW * 1.8) / 100,
                        fontFamily: Font.FontMediumManrope,
                      }}>
                      9
                    </Text>
                  </View>
                </FastImage>
              </TouchableOpacity>
              {/* -------------------------------- */}

              {/*------------------- Chat ------------------------ */}
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  marginLeft: (mobileW * 2.5) / 100,
                }}
                onPress={() => navigation.navigate('Inbox')}>
                <FastImage
                  source={localimag.icon_header_chat}
                  resizeMode={FastImage.resizeMode.contain}
                  style={{
                    width: (mobileW * 7) / 100,
                    height: (mobileW * 7) / 100,
                  }}>
                  <View
                    style={{
                      width: (mobileW * 3) / 100,
                      height: (mobileW * 3) / 100,
                      borderRadius: (mobileW * 30) / 100,
                      backgroundColor: Colors.deleteColor,
                      alignSelf: 'flex-end',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: (mobileW * 0.8) / 100,
                    }}>
                    <Text
                      style={{
                        color: Colors.whiteColor,
                        fontSize: (mobileW * 1.8) / 100,
                        fontFamily: Font.FontMediumManrope,
                      }}>
                      9
                    </Text>
                  </View>
                </FastImage>
              </TouchableOpacity>
              {/* --------------------------------------------------- */}
            </View>
          </View>

          {/* user name/image container */}
          <View
            style={{
              marginTop:
                config.device_type == 'ios'
                  ? (-mobileH * 6) / 100
                  : (-mobileH * 7) / 100,
            }}></View>
        </Animated.View>

        {/* search bar container */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: (mobileH * 2.2) / 100,
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
          }}>
          <SearchContainer
            searchText={searchText}
            onChangeText={val => setSearchText(val)}
            placeholder={Lang_chg.hi_what_are_you_looking_txt[config.language]}
            containerStyle={{
              width: (mobileW * 71.5) / 100,
            }}
            inputStyle={{
              width: (mobileW * 58) / 100,
            }}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('Categories')}
            activeOpacity={0.8}
            style={{
              marginLeft: (mobileW * 1) / 100,
            }}>
            <Image
              source={localimag.icon_home_category}
              style={{
                width: (mobileW * 16) / 100,
                height: (mobileW * 16) / 100,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>

        {/* ---------------------- */}

        {/*-------------- Tab bar ---------------- */}

        <Tabcomponent tabData={tabData} onPress={changeTabStatus} />

        {/* -------------------------------------- */}
      </Animated.View>

      {/* body */}

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.mainView,
          {
            paddingTop:
              config.device_type == 'ios'
                ? (mobileH * 24) / 100
                : (mobileH * 20.5) / 100,
            paddingBottom: (mobileH * 5) / 100,
          },
        ]}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: ScrollY}}}],
          {
            useNativeDriver: true,
          },
        )}>
        {/* body */}

        {selectTabe == 0 ? (
          <ChizeinComponent />
        ) : (
          <HomeCategories title={title} />
        )}
      </Animated.ScrollView>
    </View>
  );
};

export default React.memo(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    // width: (mobileW * 90) / 100,
    // alignSelf: 'center',
    marginTop: (mobileH * 1) / 100,
    backgroundColor: Colors.whiteColor,
  },
});
