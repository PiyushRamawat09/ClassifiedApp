import {TouchableOpacity, View, Text, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
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
import Cardcontainer from '../Componant/Cardcontainer';
import ListingView from '../Componant/ListingView';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {likeDislike} from '../Redux/Slice/HomeSlice';

const ChizeinComponent = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const featured = useSelector(state => state.home.homeData?.featured);
  const stories = useSelector(state => state.home.homeData?.stories);
  const inspired = useSelector(state => state.home.homeData?.inspired);
  const popular = useSelector(state => state.home.homeData?.popular);
  const urgent = useSelector(state => state.home.homeData?.urgent);
  const nearBy = useSelector(state => state.home.homeData?.nearBy);
  const listing = useSelector(state => state.home.homeData?.listing);
  const listing_1 = useSelector(state => state.home.homeData?.listing_1);

  const [slides, setSlides] = useState([
    {
      key: 1,
      title: 'ChiZein, a new way of online shopping!',
      status: false,
    },
    {
      key: 2,
      title: 'ChiZein, a new way of online shopping!',
      status: false,
    },
    {
      key: 3,
      title: 'ChiZein, a new way of online shopping!',
      status: false,
    },
  ]);

  const [listStatus, setListStatus] = useState(1);

  const save_unsave = (index, arrayName) => {
    dispatch(likeDislike({arrayName, index}));
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / slideSize);
    setCurrentIndex(index);
  };

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
              ? (mobileH * 3) / 100
              : (mobileH * 2) / 100,
        }}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={{
              height: (mobileW * 1) / 100,
              width: (mobileW * 7) / 100,
              borderRadius: (mobileW * 30) / 100,
              backgroundColor:
                currentIndex === index
                  ? Colors.theme_color
                  : Colors.deactiveIndicator,
              marginHorizontal: (mobileW * 0.7) / 100,
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <View
      style={{
        width: (mobileW * 90) / 100,
        alignSelf: 'center',
      }}>
      {/* ------ Featured View ---------------------- */}
      <View
        style={{
          marginTop: (mobileH * 3.5) / 100,
        }}>
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
            {Lang_chg.featured_txt[config.language]}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ViewAll', {
                pageName: Lang_chg.featured_txt[config.language],
              })
            }>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.view_all_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Card */}

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={featured}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 1) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: (mobileH * 2) / 100,
                  marginLeft:
                    index != 0 ? (mobileW * 3) / 100 : (mobileW * 1) / 100,
                }}>
                {index !== featured.length - 1 ? (
                  <Cardcontainer
                    image={item.image}
                    pro_status={item.proStatus}
                    currency={item.currency}
                    title={item.title}
                    location={item.location}
                    Onpress={() =>
                      navigation.navigate('ProductDetails', {
                        userType: index % 2 != 0 ? 1 : 2,
                      })
                    }
                    saveStatus={item.save}
                    saveunsave={() => save_unsave(index, 'featured')}
                    discount={item.discount}
                    dicountPrice={`1500`}
                    discountPercent={`20`}
                  />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('ViewAll', {
                        pageName: Lang_chg.featured_txt[config.language],
                      })
                    }>
                    <FastImage
                      source={localimag.icon_next}
                      resizeMode={FastImage.resizeMode.contain}
                      style={{
                        width: (mobileW * 15) / 100,
                        height: (mobileW * 15) / 100,
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      </View>

      {/* Learn and discover  */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: (mobileH * 0.5) / 100,
        }}>
        <Text
          style={{
            color: Colors.black_color,
            fontSize: (mobileW * 4.5) / 100,
            fontFamily: Font.FontExtraBoldManrope,
          }}>
          {Lang_chg.learn_and_discover_txt[config.language]}
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ViewAllStories')}>
          <Text
            style={{
              color: Colors.theme_color,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontMediumManrope,
            }}>
            {Lang_chg.view_all_txt[config.language]}
          </Text>
        </TouchableOpacity>
      </View>

      {/* card view */}

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={stories}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('StoriesDetails')}
              keyExtractor={item => `${item.id}`}
              style={{
                width: (mobileW * 78) / 100,
                height: (mobileH * 16) / 100,
                backgroundColor: Colors.whiteColor,
                borderWidth: (mobileW * 0.5) / 100,
                borderColor: Colors.searchBorderColor,
                borderRadius: (mobileW * 3) / 100,
                paddingHorizontal: (mobileW * 1.8) / 100,
                paddingVertical: (mobileH * 0.8) / 100,
                marginTop: (mobileH * 2) / 100,
                position: 'relative',
                marginRight:
                  index != stories.length - 1 ? (mobileW * 2.5) / 100 : null,
              }}>
              <TouchableOpacity
                style={{
                  width: (mobileW * 5.5) / 100,
                  height: (mobileW * 5.5) / 100,
                  position: 'absolute',
                  top: 8,
                  right: (mobileW * 1) / 100,
                  marginRight: (mobileW * 2.5) / 100,
                  justifyContent: 'center',
                  alignItems: 'center',

                  // shadowOffset: {
                  //   width: 0,
                  //   height: 2,
                  // },
                  // shadowOpacity: 0.25,
                  // shadowRadius: 2.84,

                  // elevation: 5,
                  // backgroundColor: '#00000010',
                }}
                activeOpacity={0.8}>
                <FastImage
                  resizeMode={FastImage.resizeMode.contain}
                  source={localimag.icon_removeWishlist}
                  style={{
                    width: (mobileW * 5.5) / 100,
                    height: (mobileW * 5.5) / 100,
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <FastImage
                  source={item.image}
                  style={{
                    width: (mobileW * 28) / 100,
                    height: (mobileH * 14) / 100,
                    borderRadius: (mobileW * 1.5) / 100,
                  }}
                />
                <View
                  style={{
                    marginLeft: (mobileW * 2) / 100,
                    marginTop: (mobileW * 1) / 100,
                    width: (mobileW * 46) / 100,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={localimag.icon_newspaperIcon}
                      resizeMode="contain"
                      style={{
                        width: (mobileW * 3.5) / 100,
                        height: (mobileW * 3.5) / 100,
                      }}
                    />

                    <Text
                      numberOfLines={1}
                      style={{
                        color: Colors.theme_color,
                        fontSize: (mobileW * 3.5) / 100,
                        fontFamily: Font.FontBoldManrope,
                        marginLeft: (mobileW * 1) / 100,
                      }}>
                      {Lang_chg.news_txt[config.language]}
                    </Text>
                  </View>

                  <Text
                    numberOfLines={3}
                    style={{
                      color: Colors.black_color,
                      fontSize: (mobileW * 3.5) / 100,
                      fontFamily: Font.FontBoldManrope,
                      width: (mobileW * 35.5) / 100,
                      lineHeight: (mobileH * 2.5) / 100,
                    }}>
                    {item.title}
                  </Text>

                  <Text
                    style={{
                      color: Colors.hourAgoColor,
                      fontSize: (mobileW * 2.4) / 100,
                      fontFamily: Font.FontBoldManrope,
                      lineHeight: (mobileH * 2.5) / 100,
                    }}>
                    {item.time}
                  </Text>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: (mobileW * 18) / 100,
                      height: (mobileH * 3.8) / 100,
                      backgroundColor: Colors.yellow_dark_color,
                      borderRadius: (mobileW * 1) / 100,
                      alignSelf: 'flex-end',
                      paddingHorizontal: (mobileW * 3) / 100,
                      // marginRight: (mobileW * 1) / 100,
                      position: 'absolute',
                      bottom: (mobileH * 0.5) / 100,
                      right: (mobileW * 3) / 100,
                    }}>
                    <Text
                      style={{
                        color: Colors.explore_color,
                        fontSize: (mobileW * 2.8) / 100,
                        fontFamily: Font.FontBoldManrope,
                      }}>
                      {Lang_chg.explore_txt[config.language]}
                    </Text>
                    <FastImage
                      source={localimag.icon_explore}
                      resizeMode={FastImage.resizeMode.contain}
                      style={{
                        width: (mobileW * 2.8) / 100,
                        height: (mobileW * 2.8) / 100,
                        marginLeft: (mobileW * 0.8) / 100,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {/* ------------------- */}

      {/* Categories View */}
      {/* <View
            style={{
              marginTop: (mobileH * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 4.9) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.categories_txt[config.language]}
              </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('ViewAllCategories', {
                    type: 1,
                  })
                }>
                <Text
                  style={{
                    color: Colors.theme_color,
                    fontSize: (mobileW * 3.8) / 100,
                    fontFamily: Font.FontMediumManrope,
                  }}>
                  {Lang_chg.view_all_txt[config.language]}
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={categories}
              keyExtractor={item => `${item.id}`}
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
                      marginTop: (mobileH * 2.5) / 100,
                      marginRight:
                        index != categories.length - 1
                          ? (mobileW * 2) / 100
                          : null,
                    }}>
                    <FastImage
                      resizeMode={FastImage.resizeMode.contain}
                      source={item.icon}
                      style={{
                        width: (mobileW * 5) / 100,
                        height: (mobileW * 5) / 100,
                      }}
                    />

                    <Text
                      style={{
                        color: Colors.theme_color,
                        fontSize: (mobileW * 4) / 100,
                        fontFamily: Font.FontBoldManrope,
                        marginLeft: (mobileW * 0.8) / 100,
                      }}>
                      {item.category}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View> */}

      {/* ------------------------------ */}

      {/* Carousel */}
      <View
        style={{
          marginTop: (mobileH * 2) / 100,
          position: 'relative',
        }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={slides}
          keyExtractor={item => item.key}
          pagingEnabled={true}
          onScroll={onScroll}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={`${index}`}
                activeOpacity={0.8}
                style={{
                  paddingVertical: (mobileH * 1) / 100,
                  borderRadius: (mobileW * 4) / 100,
                  marginBottom: (mobileH * 3) / 100,
                  backgroundColor: Colors.whiteColor,
                  marginRight: (mobileW * 2) / 100,
                }}>
                <FastImage
                  style={{
                    width: (mobileW * 88.5) / 100,
                    height: (mobileW * 35) / 100,
                    position: 'relative',
                    borderRadius: (mobileW * 2.5) / 100,
                  }}
                  source={localimag.icon_banner}>
                  <View
                    style={{
                      marginTop: (mobileH * 2) / 100,
                      marginLeft: (mobileW * 4) / 100,
                    }}>
                    <Text
                      style={{
                        color: Colors.whiteColor,
                        fontSize: (mobileW * 5.5) / 100,
                        fontFamily: Font.FontBoldManrope,
                        width: (mobileW * 50) / 100,
                        lineHeight: (mobileH * 4) / 100,
                      }}>
                      {item.title}
                    </Text>
                  </View>

                  {/* <TouchableOpacity
                      activeOpacity={0.8}
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: (mobileW * 20) / 100,
                        height:
                          config.device_type == 'ios'
                            ? (mobileH * 3) / 100
                            : (mobileH * 4) / 100,
                        backgroundColor: Colors.whiteColor,
                        borderRadius: (mobileW * 1) / 100,
                        paddingHorizontal: (mobileW * 2) / 100,
                        marginLeft: (mobileW * 5) / 100,
                        position: 'absolute',
                        bottom: (mobileH * 2.5) / 100,
                      }}>
                      <Text
                        style={{
                          color: Colors.theme_color,
                          fontSize: (mobileW * 3) / 100,
                          fontFamily: Font.FontBoldManrope,
                        }}>
                        {Lang_chg.shopNow_txt[config.language]}
                      </Text>
                    </TouchableOpacity> */}
                </FastImage>
              </TouchableOpacity>
            );
          }}
        />

        <Indicator slides={slides} currentIndex={currentIndex} />
      </View>

      {/* ------------------- */}

      {/* inspired View */}
      <View style={{}}>
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
            {Lang_chg.inspired_by_searches[config.language]}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ViewAll', {
                pageName: Lang_chg.inspired_by_searches[config.language],
              })
            }>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.view_all_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Card */}

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={inspired}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 1) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: (mobileH * 2) / 100,
                  marginLeft:
                    index != 0 ? (mobileW * 3) / 100 : (mobileW * 1) / 100,
                }}>
                {index !== inspired.length - 1 ? (
                  <Cardcontainer
                    image={item.image}
                    pro_status={item.proStatus}
                    currency={item.currency}
                    title={item.title}
                    location={item.location}
                    Onpress={() =>
                      navigation.navigate('ProductDetails', {
                        userType: index % 2 != 0 ? 1 : 2,
                      })
                    }
                    saveStatus={item.save}
                    saveunsave={() => save_unsave(index, 'inspired')}
                    discount={item.discount}
                    dicountPrice={`1500`}
                    discountPercent={`20`}
                  />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('ViewAll', {
                        pageName:
                          Lang_chg.inspired_by_searches[config.language],
                      })
                    }>
                    <FastImage
                      source={localimag.icon_next}
                      resizeMode={FastImage.resizeMode.contain}
                      style={{
                        width: (mobileW * 15) / 100,
                        height: (mobileW * 15) / 100,
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      </View>

      {/* Fashion & Accessories */}

      <View
        style={{
          marginTop: (mobileH * 1.5) / 100,
        }}>
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
            {Lang_chg.fashion_and_acc_txt[config.language]}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ViewAll', {
                pageName: Lang_chg.fashion_and_acc_txt[config.language],
              })
            }>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.view_all_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Card */}

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={urgent}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 1) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: (mobileH * 2) / 100,
                  marginLeft:
                    index != 0 ? (mobileW * 3) / 100 : (mobileW * 1) / 100,
                }}>
                {index !== urgent.length - 1 ? (
                  <Cardcontainer
                    image={item.image}
                    pro_status={item.proStatus}
                    currency={item.currency}
                    title={item.title}
                    location={item.location}
                    Onpress={() =>
                      navigation.navigate('ProductDetails', {
                        userType: index % 2 != 0 ? 1 : 2,
                      })
                    }
                    saveStatus={item.save}
                    saveunsave={() => save_unsave(index, 'urgent')}
                    discount={item.discount}
                    dicountPrice={`1500`}
                    discountPercent={`20`}
                  />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('ViewAll', {
                        pageName: Lang_chg.fashion_and_acc_txt[config.language],
                      })
                    }>
                    <FastImage
                      source={localimag.icon_next}
                      resizeMode={FastImage.resizeMode.contain}
                      style={{
                        width: (mobileW * 15) / 100,
                        height: (mobileW * 15) / 100,
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      </View>

      {/* For men */}

      <View
        style={{
          marginTop: (mobileH * 1.5) / 100,
        }}>
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
            {Lang_chg.for_men_txt[config.language]}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ViewAll', {
                pageName: Lang_chg.for_men_txt[config.language],
              })
            }>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.view_all_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Card */}

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popular}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 1) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: (mobileH * 2) / 100,
                  marginLeft:
                    index != 0 ? (mobileW * 3) / 100 : (mobileW * 1) / 100,
                }}>
                {index !== popular.length - 1 ? (
                  <Cardcontainer
                    image={item.image}
                    pro_status={item.proStatus}
                    currency={item.currency}
                    title={item.title}
                    location={item.location}
                    Onpress={() =>
                      navigation.navigate('ProductDetails', {
                        userType: index % 2 != 0 ? 1 : 2,
                      })
                    }
                    saveStatus={item.save}
                    saveunsave={() => save_unsave(index, 'popular')}
                    discount={item.discount}
                    dicountPrice={`1500`}
                    discountPercent={`20`}
                  />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('ViewAll', {
                        pageName: Lang_chg.for_men_txt[config.language],
                      })
                    }>
                    <FastImage
                      source={localimag.icon_next}
                      resizeMode={FastImage.resizeMode.contain}
                      style={{
                        width: (mobileW * 15) / 100,
                        height: (mobileW * 15) / 100,
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      </View>

      {/* High-tech products */}

      <View
        style={{
          marginTop: (mobileH * 1.5) / 100,
        }}>
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
            {Lang_chg.high_tech_products_txt[config.language]}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ViewAll', {
                pageName: Lang_chg.high_tech_products_txt[config.language],
              })
            }>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.view_all_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Card */}

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nearBy}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 1) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: (mobileH * 2) / 100,
                  marginLeft:
                    index != 0 ? (mobileW * 3) / 100 : (mobileW * 1) / 100,
                }}>
                {index !== nearBy.length - 1 ? (
                  <Cardcontainer
                    image={item.image}
                    pro_status={item.proStatus}
                    currency={item.currency}
                    title={item.title}
                    location={item.location}
                    Onpress={() =>
                      navigation.navigate('ProductDetails', {
                        userType: index % 2 != 0 ? 1 : 2,
                      })
                    }
                    saveStatus={item.save}
                    saveunsave={() => save_unsave(index, 'nearBy')}
                    discount={item.discount}
                    dicountPrice={`1500`}
                    discountPercent={`20`}
                  />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('ViewAll', {
                        pageName:
                          Lang_chg.high_tech_products_txt[config.language],
                      })
                    }>
                    <FastImage
                      source={localimag.icon_next}
                      resizeMode={FastImage.resizeMode.contain}
                      style={{
                        width: (mobileW * 15) / 100,
                        height: (mobileW * 15) / 100,
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      </View>

      {/* Listing View */}

      <View
        style={{
          marginTop: (mobileH * 1.5) / 100,
        }}>
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
            {Lang_chg.recent_listing_txt[config.language]}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setListStatus(1)}>
              <FastImage
                tintColor={
                  listStatus == 1 ? Colors.theme_color : Colors.darkGrey
                }
                resizeMode={FastImage.resizeMode.contain}
                source={localimag.icon_green_list}
                style={{
                  width: (mobileW * 7) / 100,
                  height: (mobileW * 7) / 100,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setListStatus(2)}
              activeOpacity={0.8}
              style={{
                marginLeft: (mobileW * 3) / 100,
              }}>
              <FastImage
                tintColor={
                  listStatus == 2 ? Colors.theme_color : Colors.darkGrey
                }
                source={localimag.icon_grey_box}
                resizeMode={FastImage.resizeMode.contain}
                style={{
                  width: (mobileW * 7) / 100,
                  height: (mobileW * 7) / 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {listStatus == 1 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={listing}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 1) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View style={{}}>
                {index !== listing.length - 1 ? (
                  <ListingView
                    image={item.image}
                    pro_status={item.proStatus}
                    currency={item.currency}
                    title={item.title}
                    location={item.location}
                    showFav={true}
                    showListingStatus={false}
                    saveStatus={item.save}
                    saveunsave={() => save_unsave(index, 'listing')}
                    threeDots={false}
                    discount={item.discount}
                    dicountPrice={`1500`}
                    discountPercent={`20`}
                    containerStyle={{
                      marginTop: (mobileH * 2) / 100,
                    }}
                    subContainerStyle={{
                      marginTop: (mobileH * 2) / 100,
                    }}
                  />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      marginTop: (mobileH * 2) / 100,
                    }}>
                    <FastImage
                      source={localimag.icon_down}
                      resizeMode={FastImage.resizeMode.contain}
                      style={{
                        width: (mobileW * 15) / 100,
                        height: (mobileW * 15) / 100,
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      )}

      {listStatus == 2 && (
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
                    saveStatus={item.save}
                    saveunsave={() => save_unsave(index, 'listing_1')}
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
                    <FastImage
                      source={localimag.icon_down}
                      resizeMode={FastImage.resizeMode.contain}
                      style={{
                        width: (mobileW * 15) / 100,
                        height: (mobileW * 15) / 100,
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default React.memo(ChizeinComponent);
