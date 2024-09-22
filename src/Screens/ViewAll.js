import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
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
import SearchContainer from '../Componant/SearchContainer';
import Cardcontainer from '../Componant/Cardcontainer';
import ButtonComponent from '../Componant/ButtonComponent';
import {useSelector} from 'react-redux';

const ViewAll = () => {
  const {params} = useRoute();
  const {navigate, goBack} = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [listStatus, setListStatus] = useState(1);
  const [listing_1, setListing_1] = useState([
    {
      id: 0,
      image: require('../Icons/Images/icon_computer.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      discount: true,
    },
    {
      id: 1,
      image: require('../Icons/Images/icon_purse.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      discount: false,
    },
    {
      id: 2,
      image: require('../Icons/Images/icon_computer.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      discount: false,
    },
    {
      id: 3,
      image: require('../Icons/Images/icon_purse.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 2,
      location: 'Paris',
      discount: true,
    },
    {
      id: 4,
      image: require('../Icons/Images/icon_computer.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      discount: true,
    },
    {
      id: 5,
      image: require('../Icons/Images/icon_purse.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      discount: false,
    },
    {
      id: 6,
      image: require('../Icons/Images/icon_purse.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 2,
      location: 'Paris',
      discount: true,
    },
  ]);

  const [filterVisible, setFilterVisible] = useState(false);

  // const categoriesFilter = useSelector(
  //   state => state.home.homeData?.categories,
  // );
  const [categoriesFilter, setCategoriesFilter] = useState([
    {
      id: 0,
      category: "Women's Fashion",
      icon: localimag.icon_women_dress,
      save: false,
    },
    {
      id: 1,
      category: 'For Men',
      icon: localimag.icon_men_dress,
      save: false,
    },
    {
      id: 2,
      category: 'Cars',
      icon: localimag.icon_car,
      save: false,
    },
    {
      id: 3,
      category: 'Electronics',
      icon: localimag.icon_elect,
      save: false,
    },
  ]);

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
      {/* header Container */}
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
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              justifyContent: 'space-between',
              opacity: opacityTitle,
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
              {params?.pageName}
            </Text>

            <View style={{width: (mobileW * 10) / 100}}></View>
          </Animated.View>

          {/* search container */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: (mobileH * 2.5) / 100,
            }}>
            <SearchContainer
              searchText={searchText}
              onChangeText={val => setSearchText(val)}
              placeholder={Lang_chg.serach_txt[config.language]}
              containerStyle={{
                width: (mobileW * 70) / 100,
              }}
              inputStyle={{
                width: (mobileW * 58) / 100,
              }}
            />
            <TouchableOpacity
              onPress={() => setFilterVisible(true)}
              activeOpacity={0.8}
              style={{
                marginLeft: (mobileW * 1.5) / 100,
              }}>
              <Image
                source={localimag.icon_filter}
                style={{
                  width: (mobileW * 15) / 100,
                  height: (mobileW * 15) / 100,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

      {/* -------------- */}

      {/* filter modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={filterVisible}
        onRequestClose={() => {
          consolepro.consolelog('backkac');
          setFilterVisible(false);
        }}>
        <TouchableOpacity
          onPress={() => setFilterVisible(false)}
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#00000090',
          }}>
          <View
            style={{
              position: 'absolute',
              bottom: mobileH * 0,
              height:
                params?.type === 2
                  ? (mobileH * 78) / 100
                  : (mobileH * 60) / 100,
              width: mobileW,
              backgroundColor: Colors.whiteColor,
              alignSelf: 'center',
              borderTopRightRadius: (mobileW * 7) / 100,
              borderTopLeftRadius: (mobileW * 7) / 100,
            }}>
            <TouchableOpacity
              onPress={() => setFilterVisible(false)}
              style={{
                width: (mobileW * 22) / 100,
                height: (mobileH * 0.4) / 100,
                borderRadius: (mobileW * 30) / 100,
                backgroundColor: Colors.modalTabColor,
                alignSelf: 'center',
                marginTop: (mobileH * 1.5) / 100,
              }}></TouchableOpacity>

            <View
              style={{
                marginTop: (mobileH * 4) / 100,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 5) / 100,
                  fontFamily: Font.FontBoldLexend,
                }}>
                {Lang_chg.filter_txt[config.language]}
              </Text>
            </View>

            <View
              style={{
                width: (mobileW * 90) / 100,
                alignSelf: 'center',
                marginTop: (mobileH * 2) / 100,
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 4) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.product_categories[config.language]}
              </Text>

              {/* categories  */}
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={categoriesFilter}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                  marginTop: (mobileH * 3) / 100,
                }}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{
                        paddingHorizontal: (mobileW * 4) / 100,
                        paddingVertical: (mobileH * 1.5) / 100,
                        borderWidth: (mobileW * 0.3) / 100,
                        borderColor: Colors.theme_color,
                        borderRadius: (mobileW * 30) / 100,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight:
                          index != categoriesFilter.length - 1
                            ? (mobileW * 2) / 100
                            : null,

                        backgroundColor: item.status
                          ? Colors.theme_color
                          : Colors.whiteColor,
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
                        }}
                      />

                      <Text
                        style={{
                          color: item.status
                            ? Colors.whiteColor
                            : Colors.theme_color,
                          fontSize: (mobileW * 4) / 100,
                          fontFamily: Font.FontBold,
                          marginLeft: (mobileW * 0.8) / 100,
                        }}>
                        {item.category}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />

              <View
                style={{
                  width: (mobileW * 90) / 100,
                  height: (mobileH * 0.2) / 100,
                  backgroundColor: Colors.borderGrey,
                  marginTop: (mobileH * 2.5) / 100,
                  alignSelf: 'center',
                }}></View>

              {/* locations */}
              <View
                style={{
                  marginTop: (mobileH * 3) / 100,
                }}>
                <Text
                  style={{
                    color: Colors.profileColor,
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontBoldManrope,
                  }}>
                  {Lang_chg.location_txt[config.language]}
                </Text>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    width: (mobileW * 90) / 100,
                    borderWidth: (mobileW * 0.3) / 100,
                    borderColor: Colors.chatBack,
                    borderRadius: (mobileW * 2) / 100,
                    marginTop: (mobileH * 1.8) / 100,
                    paddingHorizontal: (mobileW * 3) / 100,
                    height: (mobileH * 7) / 100,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: Colors.black_color,
                      fontFamily: Font.FontMediumManrope,
                      fontSize: (mobileW * 3.5) / 100,
                    }}>
                    {Lang_chg.location_txt[config.language]}
                  </Text>

                  <Image
                    source={localimag.icon_profile_next}
                    style={{
                      width: (mobileW * 5) / 100,
                      height: (mobileW * 5) / 100,
                      resizeMode: 'contain',
                    }}></Image>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: (mobileW * 90) / 100,
                  height: (mobileH * 0.2) / 100,
                  backgroundColor: Colors.borderGrey,
                  marginTop: (mobileH * 2.5) / 100,
                  alignSelf: 'center',
                }}></View>

              {/* Ratings */}

              <View
                style={{
                  marginTop: (mobileH * 5) / 100,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ButtonComponent
                  onPress={() => {
                    setFilterVisible(false);
                  }}
                  title={Lang_chg.reset_all[config.language]}
                  btnStyle={{
                    width: (mobileW * 42) / 100,
                    borderRadius: (mobileW * 2) / 100,
                    height: (mobileH * 7) / 100,
                  }}
                  active={false}
                />

                <ButtonComponent
                  onPress={() => {
                    setFilterVisible(false);
                  }}
                  title={Lang_chg.apply_txt[config.language]}
                  btnStyle={{
                    width: (mobileW * 42) / 100,
                    borderRadius: (mobileW * 2) / 100,
                    height: (mobileH * 7) / 100,
                    marginLeft: (mobileW * 4) / 100,
                  }}
                  active={true}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

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
        {/* Listing View */}

        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 4.5) / 100,
                fontFamily: Font.FontExtraBoldManrope,
              }}>
              {Lang_chg.listing_txt[config.language]}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                // onPress={() => setListStatus(1)}
              >
                <Image
                  source={localimag.icon_green_list}
                  style={{
                    width: (mobileW * 7) / 100,
                    height: (mobileW * 7) / 100,
                    resizeMode: 'contain',
                    tintColor:
                      listStatus == 1 ? Colors.theme_color : Colors.darkGrey,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                // onPress={() => setListStatus(2)}
                activeOpacity={0.8}
                style={{
                  marginLeft: (mobileW * 3) / 100,
                }}>
                <Image
                  source={localimag.icon_grey_box}
                  style={{
                    width: (mobileW * 7) / 100,
                    height: (mobileW * 7) / 100,
                    resizeMode: 'contain',
                    tintColor:
                      listStatus == 2 ? Colors.theme_color : Colors.darkGrey,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Category list  */}
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={listing_1}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 1) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View style={{}}>
                {index !== listing_1.length - 1 ? (
                  <Cardcontainer
                    image={item.image}
                    pro_status={item.proStatus}
                    currency={item.currency}
                    title={item.title}
                    location={item.location}
                    containerStyle={{
                      marginTop: (mobileH * 2.5) / 100,
                      width: (mobileW * 42) / 100,
                      marginHorizontal: (mobileW * 2) / 100,
                    }}
                    imageContainer={{
                      width: (mobileW * 42) / 100,
                    }}
                    Onpress={() =>
                      navigate('ProductDetails', {
                        userType: index % 2 != 0 ? 1 : 2,
                      })
                    }
                    discount={item.discount}
                    dicountPrice={`1500`}
                    discountPercent={`20`}
                  />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      marginTop: (mobileH * 2) / 100,
                    }}>
                    <Image
                      source={localimag.icon_down}
                      style={{
                        width: (mobileW * 15) / 100,
                        height: (mobileW * 15) / 100,
                        resizeMode: 'contain',
                      }}></Image>
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      </Animated.ScrollView>
    </View>
  );
};

export default ViewAll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 1.5) / 100,
  },
});
