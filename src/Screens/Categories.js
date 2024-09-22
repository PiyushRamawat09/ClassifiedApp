import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import AppstatusBar from '../Componant/AppstatusBar';
import SearchContainer from '../Componant/SearchContainer';
import {
  Colors,
  config,
  consolepro,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import {useNavigation, useRoute} from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState([
    {
      id: 0,
      category: "Women's fashion",
      icon: localimag.icon_women_dress,
      status: true,
    },
    {
      id: 1,
      category: 'For men',
      icon: localimag.icon_men_dress,
      status: false,
    },
    {
      id: 2,
      category: 'Children',
      icon: localimag.icon_kid,
      status: false,
    },
    {
      id: 3,
      category: 'Home',
      icon: localimag.icon_categoryHome,
      status: false,
    },
    {
      id: 4,
      category: 'Health and beauty',
      icon: localimag.icon_healthBeauty,
      status: false,
    },
    {
      id: 5,
      category: 'High-tech',
      icon: localimag.icon_cellPhone,
      status: false,
    },
    {
      id: 6,
      category: 'Sports and Leisure',
      icon: localimag.icon_sportsLeisure,
      status: false,
    },
    {
      id: 7,
      category: 'Miscellaneous',
      icon: localimag.icon_miscelleneous,
      status: false,
    },
  ]);

  const selectCategory = indx => {
    let categorie_arr = [...categories];
    consolepro.consolelog('categorie_arr', categorie_arr);
    consolepro.consolelog('indx', indx);

    for (let i = 0; i < categorie_arr.length; i++) {
      categorie_arr[i].status = false;
    }

    categorie_arr[indx].status = true;

    setCategories(categorie_arr);

    navigation.navigate('ViewAllCategories', {
      type: 1,
    });

    consolepro.consolelog('categories 123', categories);
  };

  // -----------------------------------

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

  return (
    <View style={styles.container}>
      <AppstatusBar />

      {/* header */}
      <Animated.View
        style={{
          backgroundColor: Colors.whiteColor,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,

          paddingBottom: (mobileH * 1.5) / 100,
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
          <Animated.View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: (mobileW * 5) / 100,
              opacity: opacityTitle,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
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
                textAlign: 'center',
              }}>
              {Lang_chg.categories_txt[config.language]}
            </Text>

            <View style={{width: (mobileW * 5) / 100}}></View>
          </Animated.View>

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
              placeholder={Lang_chg.serach_txt[config.language]}
              containerStyle={{
                marginTop: (mobileH * 0.5) / 100,
              }}
              inputStyle={{
                width: (mobileW * 77) / 100,
              }}
            />
          </View>
        </View>
      </Animated.View>

      {/* ---------------- */}

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.mainView,
          {
            paddingTop: (mobileH * 19) / 100,
            paddingBottom: (mobileH * 5) / 100,
          },
        ]}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: ScrollY}}}],
          {
            useNativeDriver: true,
          },
        )}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          {categories.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => selectCategory(index)}
                activeOpacity={0.8}
                style={{
                  paddingHorizontal: (mobileW * 5) / 100,
                  paddingVertical: (mobileH * 1.5) / 100,
                  borderWidth: (mobileW * 0.3) / 100,
                  borderColor: Colors.theme_color,
                  borderRadius: (mobileW * 30) / 100,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight:
                    index != categories.length - 1 ? (mobileW * 2) / 100 : null,

                  backgroundColor: item.status
                    ? Colors.theme_color
                    : Colors.whiteColor,
                  marginTop: (mobileH * 2) / 100,
                }}>
                <Image
                  source={item.icon}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                    tintColor: item.status
                      ? Colors.whiteColor
                      : Colors.theme_color,
                  }}></Image>

                <Text
                  style={{
                    color: item.status ? Colors.whiteColor : Colors.theme_color,
                    fontSize: (mobileW * 3) / 100,
                    fontFamily: Font.FontBoldManrope,
                    marginLeft: (mobileW * 0.8) / 100,
                  }}>
                  {item.category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Categories;

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
