import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import AppstatusBar from '../Componant/AppstatusBar';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import ButtonComponent from '../Componant/ButtonComponent';

const newAdStep_2 = () => {
  const navigation = useNavigation();

  const [planArr, setPlanarr] = useState([
    {
      id: 0,
      icon: localimag.icon_greenStar,
      title: 'Highlight',
      subhead: 'Propel your ad to the top of the results',
      duration: '24h',
      originalPrice: '50',
      discountPrice: '40',
      status: false,
    },
    {
      id: 1,
      icon: localimag.icon_upArrow,
      title: 'Feature',
      subhead: 'Triple your sales chances in 72 hours',
      duration: '3 days',
      originalPrice: '100',
      discountPrice: '80',
      status: true,
    },
    {
      id: 2,
      icon: localimag.icon_thunder,
      title: 'Feature',
      subhead: 'A week at the top of searches',
      duration: '7 days',
      originalPrice: '180',
      discountPrice: '150',
      status: false,
    },
  ]);

  const [storePlanArr, setStorePlanarr] = useState([
    {
      id: 0,
      icon: localimag.icon_greenStar,
      title: 'Promote for (24h)',
      subhead: '24 hours to attract new customers',
      duration: '24h',
      originalPrice: '50',
      discountPrice: '40',
      status: false,
    },
    {
      id: 1,
      icon: localimag.icon_upArrow,
      title: 'Promote for 3 days',
      subhead: 'Three days to stand out from the crowd',
      duration: '3 days',
      originalPrice: '100',
      discountPrice: '80',
      status: true,
    },
    {
      id: 2,
      icon: localimag.icon_thunder,
      title: 'Promote for 7 days',
      subhead: 'Your store in the spotlight all week long',
      duration: '7 days',
      originalPrice: '180',
      discountPrice: '150',
      status: false,
    },
  ]);

  const selectPlan = index => {
    let new_arr = [...planArr];
    for (let i = 0; i < new_arr.length; i++) {
      new_arr[i].status = false;
    }

    new_arr[index].status = true;

    setPlanarr(new_arr);
  };

  const selectPlan_2 = index => {
    let new_arr = [...storePlanArr];
    for (let i = 0; i < new_arr.length; i++) {
      new_arr[i].status = false;
    }

    new_arr[index].status = true;

    setStorePlanarr(new_arr);
  };

  const {params} = useRoute();

  return (
    <View style={styles.container}>
      <AppstatusBar />

      {/*--------------------  header -------------- */}
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
          }}>
          {Lang_chg.createAnewAd_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 5) / 100,
          }}></View>
      </View>
      {/* -------------------------------------------- */}

      {/* promote listing */}

      {params?.pageStatus == 2 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[
            styles.mainView,
            {
              paddingBottom: (mobileH * 5) / 100,
              marginTop: (mobileH * 5) / 100,
            },
          ]}>
          <Text
            style={{
              color: Colors.theme_color,
              fontSize: (mobileW * 6) / 100,
              fontFamily: Font.FontExtraBoldLexend,
              textAlign: 'center',
            }}>
            {Lang_chg.boostYourListing_txt[config.language]}
          </Text>

          <View
            style={{
              paddingHorizontal: (mobileW * 5) / 100,
              marginTop: (mobileH * 1) / 100,
              width: (mobileW * 65) / 100,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: Colors.listingColor,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontExtraBoldManrope,
                textAlign: 'center',
                lineHeight: (mobileH * 3.3) / 100,
              }}>
              {Lang_chg.standOutFromTheCowd_txt[config.language]}
            </Text>
          </View>

          <View
            style={{
              marginTop: (mobileH * 2.8) / 100,
            }}>
            {planArr.map((item, index) => (
              <View
                key={index.toString()}
                style={{
                  marginTop: (mobileH * 1) / 100,
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    selectPlan(index);
                  }}
                  style={{
                    width: (mobileW * 90) / 100,
                    alignSelf: 'center',
                    backgroundColor: item.status
                      ? Colors.yellow_dark_color
                      : Colors.cardbackground,
                    borderRadius: (mobileW * 2) / 100,
                    height: (mobileH * 10.5) / 100,
                    paddingHorizontal: (mobileW * 3) / 100,
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={item.icon}
                        style={{
                          width: (mobileW * 6) / 100,
                          height: (mobileW * 6) / 100,
                        }}
                      />

                      <View
                        style={{
                          marginLeft: (mobileW * 2.5) / 100,
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
                              fontSize: (mobileW * 3.8) / 100,
                              fontFamily: Font.FontExtraBoldManrope,
                              width: (mobileW * 52) / 100,
                            }}>
                            {item.title}
                          </Text>

                          {item.discountPrice != '' && (
                            <Text
                              style={{
                                color: Colors.theme_color,
                                fontSize: (mobileW * 3.5) / 100,
                                fontFamily: Font.FontExtraBoldManrope,
                              }}>
                              {`${item.discountPrice} ${config.currency}`}
                            </Text>
                          )}
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              color: Colors.darkGrey,
                              fontSize: (mobileW * 2.5) / 100,
                              fontFamily: Font.FontBoldManrope,
                              width: (mobileW * 52) / 100,
                            }}>
                            {item.subhead}
                          </Text>

                          {item.originalPrice != '' && (
                            <Text
                              style={{
                                color: Colors.darkGrey,
                                fontSize: (mobileW * 3) / 100,
                                fontFamily: Font.FontMediumManrope,
                                textDecorationLine: 'line-through',
                              }}>
                              {item.originalPrice} {config.currency}
                            </Text>
                          )}
                        </View>
                      </View>
                    </View>

                    <TouchableOpacity
                      activeOpacity={1}
                      style={{
                        marginRight: (mobileW * 1) / 100,
                      }}>
                      <Image
                        source={
                          item.status
                            ? localimag.icon_activeRadio
                            : localimag.icon_deactiveRadio
                        }
                        style={{
                          width: (mobileW * 6) / 100,
                          height: (mobileW * 6) / 100,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[
            styles.mainView,
            {
              paddingBottom: (mobileH * 5) / 100,
              marginTop: (mobileH * 5) / 100,
            },
          ]}>
          <Text
            style={{
              color: Colors.theme_color,
              fontSize: (mobileW * 6) / 100,
              fontFamily: Font.FontExtraBoldLexend,
              textAlign: 'center',
            }}>
            {Lang_chg.promoteMyStore_txt[config.language]}
          </Text>

          <View
            style={{
              paddingHorizontal: (mobileW * 5) / 100,
              marginTop: (mobileH * 1) / 100,
            }}>
            <Text
              style={{
                color: Colors.listingColor,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontExtraBoldManrope,
                textAlign: 'center',
                lineHeight: (mobileH * 3.3) / 100,
              }}>
              {Lang_chg.increaseMyVisisbility_txt[config.language]}
            </Text>
          </View>

          <View
            style={{
              marginTop: (mobileH * 2.8) / 100,
            }}>
            {storePlanArr.map((item, index) => (
              <View
                key={index.toString()}
                style={{
                  marginTop: (mobileH * 1) / 100,
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    selectPlan_2(index);
                  }}
                  style={{
                    width: (mobileW * 90) / 100,
                    alignSelf: 'center',
                    backgroundColor: item.status
                      ? Colors.yellow_dark_color
                      : Colors.cardbackground,
                    borderRadius: (mobileW * 2) / 100,
                    height: (mobileH * 10.5) / 100,
                    paddingHorizontal: (mobileW * 3) / 100,
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={item.icon}
                        style={{
                          width: (mobileW * 6) / 100,
                          height: (mobileW * 6) / 100,
                        }}
                      />

                      <View
                        style={{
                          marginLeft: (mobileW * 2.5) / 100,
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
                              fontSize: (mobileW * 3.8) / 100,
                              fontFamily: Font.FontExtraBoldManrope,
                              width: (mobileW * 50) / 100,
                            }}>
                            {item.title}
                          </Text>

                          <Text
                            style={{
                              color: Colors.theme_color,
                              fontSize: (mobileW * 3.5) / 100,
                              fontFamily: Font.FontExtraBoldManrope,
                            }}>
                            {`${item.originalPrice} ${config.currency}`}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              color: Colors.darkGrey,
                              fontSize: (mobileW * 2.5) / 100,
                              fontFamily: Font.FontBoldManrope,
                              width: (mobileW * 52) / 100,
                            }}>
                            {item.subhead}
                          </Text>

                          {/* {item.originalPrice != '' && (
                          <Text
                            style={{
                              color: Colors.darkGrey,
                              fontSize: (mobileW * 3) / 100,
                              fontFamily: Font.FontMediumManrope,
                              textDecorationLine: 'line-through',
                            }}>
                            {item.originalPrice} {config.currency}
                          </Text>
                        )} */}
                        </View>
                      </View>
                    </View>

                    <TouchableOpacity
                      activeOpacity={1}
                      style={{
                        marginRight: (mobileW * 1) / 100,
                      }}>
                      <Image
                        source={
                          item.status
                            ? localimag.icon_activeRadio
                            : localimag.icon_deactiveRadio
                        }
                        style={{
                          width: (mobileW * 6) / 100,
                          height: (mobileW * 6) / 100,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      )}

      {/* btn view */}
      <View
        style={{
          marginTop: (mobileH * 5) / 100,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: (mobileH * 8) / 100,
          alignSelf: 'center',
        }}>
        <ButtonComponent
          onPress={() => navigation.goBack()}
          title={Lang_chg.back_txt[config.language]}
          btnStyle={{
            width: (mobileW * 30) / 100,
            borderRadius: (mobileW * 2) / 100,
            height: (mobileH * 7) / 100,
            borderColor: Colors.blockBorderColor,
          }}
          txtStyle={{
            color: Colors.blockBorderColor,
          }}
          active={false}
        />

        <ButtonComponent
          onPress={() => {}}
          title={Lang_chg.continue_txt[config.language]}
          btnStyle={{
            width: (mobileW * 58) / 100,
            borderRadius: (mobileW * 2) / 100,
            height: (mobileH * 7) / 100,
            marginLeft: (mobileW * 2) / 100,
          }}
          active={true}
        />
      </View>
    </View>
  );
};

export default newAdStep_2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 2) / 100,
  },
});
