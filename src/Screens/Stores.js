import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
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
import AppstatusBar from '../Componant/AppstatusBar';
import SearchContainer from '../Componant/SearchContainer';
import FastImage from 'react-native-fast-image';
import Tabcomponent from '../Componant/Tabcomponent';
import StoreCategories from '../Componant/StoreCategories';
import ChizeinStores from '../Componant/ChizeinStores';

const Stores = () => {
  const navigation = useNavigation();

  const handleBackPress = useCallback(() => {
    navigation.navigate('Home');
    return true;
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }, [handleBackPress]),
  );

  const [searchText, setSearchText] = useState('');

  // ------------------------------------

  const ScrollY = useRef(new Animated.Value(0)).current;

  const translateHeader = ScrollY.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
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
  const [selectTabe, setSelectTab] = useState(0);
  const [title, setTitle] = useState('');

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

      {/* header */}
      <Animated.View
        style={{
          // shadowColor: '#000',
          // shadowOffset: {
          //   width: 0,
          //   height: 2,
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 3.84,

          // elevation: 5,
          backgroundColor: Colors.whiteColor,

          // paddingBottom: (mobileH * 1.5) / 100,
          marginBottom: (mobileH * 1) / 100,

          transform: [{translateY: translateHeader}],

          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}>
        <View
          style={{
            marginTop: (mobileH * 3) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: (mobileW * 5) / 100,
            }}>
            <View
              style={{
                width: (mobileW * 6) / 100,
              }}></View>
            <Animated.Text
              style={{
                fontSize: (mobileW * 5) / 100,
                color: Colors.black_color,
                fontFamily: Font.FontBoldLexend,
                textAlign: 'center',
                opacity: opacityTitle,
              }}>
              {Lang_chg.stores_txt[config.language]}
            </Animated.Text>

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

          {/* search container */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: (mobileH * 2) / 100,
            }}>
            <SearchContainer
              searchText={searchText}
              onChangeText={val => setSearchText(val)}
              placeholder={Lang_chg.find_a_store[config.language]}
              containerStyle={{}}
              inputStyle={{}}
            />

            {/* <TouchableOpacity
              onPress={() => setModalVisible(true)}
              activeOpacity={0.8}
              style={{
                marginLeft: (mobileW * 3) / 100,
              }}>
              <Image
                source={localimag.icon_filter}
                style={{
                  width: (mobileW * 15) / 100,
                  height: (mobileW * 15) / 100,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity> */}
          </View>

          {/*-------------- Tab bar ---------------- */}

          <Tabcomponent
            tabData={tabData}
            onPress={changeTabStatus}
            containerStyle={{
              marginTop: (mobileH * 1.5) / 100,
            }}
          />

          {/* -------------------------------------- */}
        </View>
      </Animated.View>

      {/* -------- */}

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.mainView,
          {
            paddingTop: (mobileH * 21.5) / 100,
            paddingBottom: (mobileH * 5) / 100,
          },
        ]}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: ScrollY}}}],
          {
            useNativeDriver: true,
          },
        )}>
        {selectTabe == 0 ? <ChizeinStores /> : <StoreCategories />}
      </Animated.ScrollView>
    </View>
  );
};

export default React.memo(Stores);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    marginTop: (mobileH * 1) / 100,
    backgroundColor: Colors.whiteColor,
  },
});
