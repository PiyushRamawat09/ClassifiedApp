import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
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

import FastImage from 'react-native-fast-image';

const Advertising = () => {
  const {navigate, goBack} = useNavigation();

  const [listing, setListing] = useState([
    {
      id: 0,
      image: localimag.image_bench,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      featuredDuration: 'Highlight (24hr)',
      timeRemaining: '15:20',
      status: 1,
    },
    {
      id: 1,
      image: localimag.image_white_headphone,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      featuredDuration: 'Featured (3 days)',
      timeRemaining: '15:20:05',
      status: 1,
    },
    {
      id: 2,
      image: localimag.image__brown_headPhone,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 2,
      location: 'Paris',
      featuredDuration: 'Highlight (24hr)',
      timeRemaining: '15:20:05',
      status: 2,
    },
    {
      id: 3,
      image: localimag.image_white_headphone,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      featuredDuration: 'Highlight (24hr)',
      timeRemaining: '15:20:05',
      status: 1,
    },
  ]);

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
          {Lang_chg.myAds_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 10) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      {/* ------------------- Tab Bar ----------------------- */}

      {/* <View
        style={{
          width: (mobileW * 90) / 100,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          height: (mobileH * 7) / 100,
          marginTop: (mobileH * 3) / 100,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setAdvertisingTab(false);
            setListingTab(true);
          }}
          style={{
            width: (mobileW * 40) / 100,
            justifyContent: 'center',
            alignItems: 'center',
            height: (mobileH * 6) / 100,
            borderBottomWidth: 3,
            borderColor: lsitingTab ? Colors.theme_color : Colors.whiteColor,
          }}>
          <Text
            style={{
              fontSize: (mobileW * 4) / 100,
              color: Colors.black_color,
              fontFamily: Font.FontRegular,
            }}>
            {Lang_chg.listing_txt[config.language]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setListingTab(false);
            setAdvertisingTab(true);
          }}
          activeOpacity={0.8}
          style={{
            width: (mobileW * 40) / 100,
            justifyContent: 'center',
            alignItems: 'center',
            height: (mobileH * 6) / 100,
            borderBottomWidth: 3,
            borderColor: advertisingTab
              ? Colors.theme_color
              : Colors.whiteColor,
            marginLeft: (mobileW * 5) / 100,
          }}>
          <Text
            style={{
              fontSize: (mobileW * 4) / 100,
              color: Colors.black_color,
              fontFamily: Font.FontRegular,
            }}>
            {Lang_chg.advertising_options[config.language]}
          </Text>
        </TouchableOpacity>
      </View> */}

      {/* -------------------------- */}

      {/* lsiting View */}

      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={listing}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{
          paddingBottom: (mobileH * 25) / 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        renderItem={({item, index}) => {
          return (
            <View style={{marginTop: (mobileH * 4) / 100}}>
              {/* offer view */}
              <View
                style={{
                  width: (mobileW * 90) / 100,
                  //paddingVertical: (mobileH * 1.5) / 100,
                  borderRadius: (mobileW * 2) / 100,
                  borderWidth: (mobileW * 0.3) / 100,
                  borderColor: Colors.theme_color,
                  borderStyle: 'dotted',
                  // paddingHorizontal: (mobileW * 3) / 100,
                  backgroundColor:
                    item.status == 1 ? Colors.faqBack : '#F3F4F6',
                }}>
                <View
                  style={{
                    paddingHorizontal: (mobileW * 3) / 100,
                    marginTop: (mobileH * 1) / 100,
                  }}>
                  <Text
                    style={{
                      color: Colors.theme_color,
                      fontSize: (mobileW * 3.5) / 100,
                      fontFamily: Font.FontBoldManrope,
                    }}>
                    {item.featuredDuration}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        marginTop: (mobileH * 0.5) / 100,
                      }}>
                      <Text
                        style={{
                          color: Colors.black_color,
                          fontSize: (mobileW * 2.5) / 100,
                          fontFamily: Font.FontBoldManrope,
                        }}>
                        {Lang_chg.remaining_duration_txt[config.language]}
                      </Text>
                    </View>

                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{
                        width: (mobileW * 28) / 100,
                        height: (mobileH * 4) / 100,
                        borderWidth: 1,
                        borderColor: Colors.theme_color,
                        borderRadius: (mobileW * 1.5) / 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: Colors.theme_color,
                          fontSize: (mobileW * 3) / 100,
                          fontFamily: Font.FontBoldManrope,
                        }}>
                        {item.status == 1
                          ? Lang_chg.extend_period_txt[config.language]
                          : Lang_chg.boostAd_txt[config.language]}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {item.status == 1 ? (
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          paddingHorizontal: (mobileW * 2) / 100,
                          paddingVertical: (mobileH * 0.2) / 100,
                          borderRadius: (mobileW * 1) / 100,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: Colors.timeBack,
                        }}>
                        <Text
                          style={{
                            color: Colors.whiteColor,
                            fontSize: (mobileW * 2.6) / 100,
                            fontFamily: Font.FontMediumManrope,
                          }}>
                          {item.timeRemaining}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          width: (mobileW * 1.5) / 100,
                          height: (mobileW * 1.5) / 100,
                          backgroundColor: Colors.theme_color,
                          borderRadius: (mobileW * 30) / 100,
                        }}></View>

                      <Text
                        style={{
                          color: Colors.black_color,
                          fontSize: (mobileW * 2.8) / 100,
                          fontFamily: Font.FontMediumManrope,
                          marginLeft: (mobileW * 1.5) / 100,
                        }}>
                        Completed
                      </Text>
                    </View>
                  )}
                </View>

                {/* list contsiner */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    //width: (mobileW * 90) / 100,
                    height: (mobileH * 20) / 100,
                    backgroundColor: Colors.whiteColor,
                    borderWidth: (mobileW * 0.4) / 100,
                    borderColor: Colors.searchBorderColor,
                    borderBottomRightRadius: (mobileW * 2) / 100,
                    borderBottomLeftRadius: (mobileW * 2) / 100,
                    marginTop: (mobileH * 2) / 100,
                    position: 'relative',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <FastImage
                      source={item.image}
                      style={{
                        width: (mobileW * 40) / 100,
                        height: (mobileH * 20) / 100,
                        position: 'relative',
                        //borderBottomRightRadius: (mobileW * 2) / 100,
                        borderBottomLeftRadius: (mobileW * 2) / 100,
                      }}
                    />

                    <View
                      style={{
                        marginTop: (mobileH * 2) / 100,
                        paddingRight: (mobileW * 4) / 100,
                        marginLeft: (mobileW * 3) / 100,
                        width: (mobileW * 45) / 100,
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
                            fontSize: (mobileW * 3.5) / 100,
                            fontFamily: Font.FontBoldManrope,
                          }}>
                          {item.currency}{' '}
                          <Text
                            style={{
                              color: Colors.skipColor,
                              fontSize: (mobileW * 2.5) / 100,
                              fontFamily: Font.FontMediumManrope,
                            }}>
                            {config.currency}
                          </Text>{' '}
                        </Text>
                      </View>

                      <Text
                        style={{
                          color: Colors.title_color,
                          fontSize: (mobileW * 3.5) / 100,
                          fontFamily: Font.FontBoldManrope,
                          marginTop: (mobileH * 0.5) / 100,
                          lineHeight: (mobileH * 2.8) / 100,
                        }}>
                        {item.title}
                      </Text>

                      <View
                        style={{
                          marginTop: (mobileH * 0.4) / 100,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <FastImage
                            resizeMode={FastImage.resizeMode.contain}
                            source={localimag.icon_location}
                            style={{
                              width: (mobileW * 4) / 100,
                              height: (mobileW * 4) / 100,
                            }}
                          />

                          <Text
                            style={{
                              color: Colors.parisColor,
                              fontSize: (mobileW * 3.3) / 100,
                              fontFamily: Font.FontMediumManrope,
                              marginLeft: (mobileW * 1) / 100,
                            }}>
                            {item.location}
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: (mobileH * 1.5) / 100,
                        }}>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => navigate('Adperformance')}
                          style={{
                            paddingHorizontal: (mobileW * 1.8) / 100,
                            paddingVertical: (mobileH * 0.8) / 100,
                            borderRadius: (mobileW * 1.5) / 100,
                            backgroundColor: Colors.theme_color,
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Image
                            source={localimag.icon_viewPerformance}
                            style={{
                              width: (mobileW * 3.5) / 100,
                              height: (mobileW * 3.5) / 100,
                            }}
                          />
                          <Text
                            style={{
                              color: Colors.whiteColor,
                              fontSize: (mobileW * 2.2) / 100,
                              fontFamily: Font.FontBoldManrope,
                              marginLeft: (mobileW * 1) / 100,
                            }}>
                            {Lang_chg.viewPerformance_txt[config.language]}
                          </Text>
                        </TouchableOpacity>

                        {item.proStatus == 1 && (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: (mobileW * 30) / 100,
                              backgroundColor: Colors.proColor,
                              width: (mobileW * 8) / 100,
                              height: (mobileW * 8) / 100,
                            }}>
                            <Text
                              style={{
                                color: Colors.theme_color,
                                fontSize: (mobileW * 2.2) / 100,
                                fontFamily: Font.FontExtraBoldManrope,
                              }}>
                              {Lang_chg.pro_txt[config.language]}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                {/* ---------------------- */}
              </View>
            </View>
          );
        }}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate('CreateNewAd')}
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          bottom: (mobileH * 6) / 100,
          right: (mobileW * 6) / 100,
          backgroundColor: Colors.theme_color,
          borderRadius: (mobileW * 30) / 100,
          paddingVertical: (mobileH * 2.5) / 100,
          paddingHorizontal: (mobileW * 6) / 100,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={localimag.icon_advertising}
          style={{
            tintColor: Colors.whiteColor,
            height: (mobileW * 4) / 100,
            width: (mobileW * 4) / 100,
          }}
        />

        <Text
          style={{
            color: Colors.whiteColor,
            fontSize: (mobileW * 3.5) / 100,
            fontFamily: Font.FontExtraBoldManrope,
            marginLeft: (mobileW * 2) / 100,
          }}>
          {Lang_chg.createAnewAd_txt[config.language]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Advertising;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    marginTop: (mobileH * 3) / 100,
  },
});
