import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';

const CartView = ({
  cartData = [],
  shareWithSellerFunc = () => {},
  cancelShareFunc = () => {},
  showCartBag,
}) => {
  return (
    <FlatList
      data={cartData}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => (
        <View
          style={{
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
            paddingVertical: (mobileH * 1) / 100,
            borderColor: Colors.cartBorderColor,
            borderRadius: (mobileW * 3) / 100,
            borderWidth: (mobileW * 0.3) / 100,
            marginTop: (mobileH * 3) / 100,
            backgroundColor: Colors.whiteColor,
          }}>
          <View>
            {/* product detail/count view */}

            <FlatList
              data={item.productArr}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({item: ChildItem, index: childIndex}) => (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: childIndex != 0 ? (mobileH * 1.5) / 100 : null,
                      alignSelf: 'center',
                      backgroundColor: item.shareStatus
                        ? Colors.shareWithSellerback
                        : Colors.whiteColor,
                      borderRadius: (mobileW * 2) / 100,
                    }}>
                    <Image
                      source={ChildItem.image}
                      style={{
                        width: (mobileW * 27) / 100,
                        height: (mobileH * 13.5) / 100,
                        borderRadius: (mobileW * 1.5) / 100,
                      }}
                    />

                    <View
                      style={{
                        marginLeft: (mobileW * 2) / 100,
                        marginTop: (mobileH * 0.5) / 100,
                      }}>
                      {/*---------- delete view --------------*/}
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: (mobileW * 54) / 100,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Image
                            source={localimag.icon_deliveryAvailable}
                            style={{
                              width: (mobileW * 3.5) / 100,
                              height: (mobileW * 3.5) / 100,
                              resizeMode: 'contain',
                            }}
                          />

                          <Text
                            style={{
                              color: Colors.profileColor,
                              fontFamily: Font.FontMediumManrope,
                              fontSize: (mobileW * 2.8) / 100,
                              marginLeft: (mobileW * 1) / 100,
                            }}>
                            {Lang_chg.deliveryIsAvailable_txt[config.language]}
                          </Text>
                        </View>

                        {/* delete btn */}

                        <TouchableOpacity
                          activeOpacity={0.8}
                          style={{
                            marginRight: (mobileW * 3) / 100,
                            marginTop: (mobileH * 0.5) / 100,
                          }}>
                          <Image
                            source={localimag.icon_deleteCart}
                            style={{
                              width: (mobileW * 5) / 100,
                              height: (mobileW * 5) / 100,
                            }}
                          />
                        </TouchableOpacity>
                      </View>

                      {/* ------------------------ */}

                      <Text
                        numberOfLines={1}
                        style={{
                          color: Colors.black_color,
                          fontSize: (mobileW * 3) / 100,
                          fontFamily: Font.FontBoldManrope,
                          marginTop: (mobileH * 0.5) / 100,
                        }}>
                        {ChildItem.title}
                      </Text>

                      {/* --------------Location--------------- */}

                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: (mobileH * 0.5) / 100,
                        }}>
                        <Image
                          source={localimag.icon_location}
                          style={{
                            width: (mobileW * 3.5) / 100,
                            height: (mobileW * 3.5) / 100,
                            resizeMode: 'contain',
                          }}
                        />

                        <Text
                          style={{
                            color: Colors.profileColor,
                            fontFamily: Font.FontMediumManrope,
                            fontSize: (mobileW * 2.8) / 100,
                            marginLeft: (mobileW * 1) / 100,
                          }}>
                          {ChildItem.location}
                        </Text>
                      </View>

                      {/* -------------------- increament/decreament view ------------------- */}

                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: (mobileH * 1) / 100,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            style={{
                              width: (mobileW * 6) / 100,
                              height: (mobileW * 6) / 100,
                              borderColor: Colors.black_color,
                              borderWidth: (mobileW * 0.2) / 100,
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: Colors.whiteColor,
                              borderRadius: (mobileW * 1) / 100,
                            }}>
                            {/* <Image
                                source={localimag.icon_removePromo}
                                style={{
                                  width: (mobileW * 3) / 100,
                                  height: (mobileW * 3) / 100,
                                }}
                              /> */}

                            <Text
                              style={{
                                color: Colors.black_color,
                                fontFamily: Font.FontMediumManrope,
                                fontSize: (mobileW * 3.3) / 100,
                              }}>
                              -
                            </Text>
                          </TouchableOpacity>

                          <View
                            style={{
                              width: (mobileW * 12) / 100,
                              borderColor: Colors.black_color,
                              borderWidth: (mobileW * 0.2) / 100,
                              marginLeft: (mobileW * 1.5) / 100,
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: (mobileH * 3) / 100,
                              borderRadius: (mobileW * 1) / 100,
                              backgroundColor: Colors.whiteColor,
                            }}>
                            <Text
                              style={{
                                color: Colors.black_color,
                                fontFamily: Font.FontMediumManrope,
                                fontSize: (mobileW * 3.3) / 100,
                              }}>
                              {ChildItem.count}
                            </Text>
                          </View>

                          <TouchableOpacity
                            activeOpacity={0.8}
                            style={{
                              width: (mobileW * 6) / 100,
                              height: (mobileW * 6) / 100,
                              borderColor: Colors.black_color,
                              borderWidth: (mobileW * 0.2) / 100,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: (mobileW * 1) / 100,
                              marginLeft: (mobileW * 1.5) / 100,
                              backgroundColor: Colors.whiteColor,
                            }}>
                            <Text
                              style={{
                                color: Colors.black_color,
                                fontFamily: Font.FontMediumManrope,
                                fontSize: (mobileW * 3.3) / 100,
                              }}>
                              +
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <Text
                          style={{
                            color: Colors.black_color,
                            fontSize: (mobileW * 3.5) / 100,
                            fontFamily: Font.FontBoldManrope,
                            marginRight: (mobileW * 3) / 100,
                          }}>
                          {ChildItem.price}{' '}
                          <Text
                            style={{
                              color: Colors.profileColor,
                              fontSize: (mobileW * 2.5) / 100,
                              fontFamily: Font.FontMediumManrope,
                            }}>
                            {config.currency}
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>

                  {/* ------------------- */}

                  {/*------------ border ---------------- */}
                  {childIndex != item.productArr.length - 1 && (
                    <View
                      style={{
                        width: (mobileW * 85) / 100,
                        alignSelf: 'center',
                        height: (mobileH * 0.3) / 100,
                        backgroundColor: Colors.containerBorderColor,
                        marginTop: (mobileH * 1.5) / 100,
                      }}></View>
                  )}
                </>
              )}
            />

            {/* --------Total View------------------ */}

            <View
              style={{
                width: (mobileW * 85) / 100,
                alignSelf: 'center',
                borderRadius: (mobileW * 1) / 100,
                backgroundColor: Colors.totalBackgroundColor,
                paddingHorizontal: (mobileW * 3) / 100,
                paddingVertical: (mobileH * 1.5) / 100,
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
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontExtraBoldManrope,
                  }}>
                  {`${Lang_chg.total_txt[config.language]} : `}
                </Text>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontExtraBoldManrope,
                  }}>
                  {item.total}{' '}
                  <Text
                    style={{
                      color: Colors.profileColor,
                      fontSize: (mobileW * 3.5) / 100,
                      fontFamily: Font.FontExtraBoldManrope,
                    }}>
                    {config.currency}
                  </Text>
                </Text>
              </View>
            </View>

            {/* ----------------share view--------------------- */}

            <View
              style={{
                height: (mobileH * 17) / 100,
                borderColor: Colors.skipColor,
                borderWidth: (mobileW * 0.2) / 100,
                marginTop: (mobileH * 2) / 100,
                borderRadius: (mobileW * 3) / 100,
                marginHorizontal: (mobileW * 2.5) / 100,
                backgroundColor: item.shareStatus
                  ? Colors.shareWithSellerback
                  : Colors.whiteColor,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: (mobileH * 2) / 100,
                  paddingHorizontal: (mobileW * 3) / 100,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.userImage}
                    style={{
                      width: (mobileW * 12) / 100,
                      height: (mobileW * 12) / 100,
                      borderRadius: (mobileW * 30) / 100,
                    }}></Image>
                  <Text
                    style={{
                      color: Colors.black_color,
                      fontSize: (mobileW * 3.5) / 100,
                      fontFamily: Font.FontExtraBoldManrope,
                      marginLeft: (mobileW * 2) / 100,
                    }}>
                    {item.userName}
                  </Text>

                  <Image
                    source={localimag.icon_verified}
                    style={{
                      width: (mobileW * 5) / 100,
                      height: (mobileW * 5) / 100,
                      borderRadius: (mobileW * 30) / 100,
                      marginLeft: (mobileW * 2) / 100,
                    }}></Image>
                </View>

                {showCartBag && (
                  <Image
                    source={localimag.icon_cartbag}
                    style={{
                      width: (mobileW * 5) / 100,
                      height: (mobileW * 5) / 100,
                      resizeMode: 'contain',
                      tintColor: '#797B79',
                    }}></Image>
                )}
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: (mobileW * 3) / 100,
                  marginTop: (mobileH * 1) / 100,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => shareWithSellerFunc(index)}
                  activeOpacity={0.8}
                  style={{
                    width: (mobileW * 36) / 100,
                    alignSelf: 'center',
                    height: (mobileH * 6) / 100,
                    borderRadius: (mobileW * 2) / 100,
                    backgroundColor: Colors.theme_color,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: (mobileH * 0.5) / 100,
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={localimag.icon_shareWithSeller}
                    style={{
                      width: (mobileW * 5) / 100,
                      height: (mobileW * 5) / 100,
                      resizeMode: 'contain',
                      tintColor: Colors.whiteColor,
                    }}></Image>
                  <Text
                    style={{
                      color: Colors.whiteColor,
                      fontSize: (mobileW * 3) / 100,
                      fontFamily: Font.FontMediumManrope,
                      marginLeft: (mobileW * 1.5) / 100,
                    }}>
                    {Lang_chg.shareWithSeller_txt[config.language]}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => cancelShareFunc(item.shareStatus)}
                  activeOpacity={0.8}
                  style={{
                    width: (mobileW * 36) / 100,
                    alignSelf: 'center',
                    height: (mobileH * 6) / 100,
                    borderRadius: (mobileW * 2) / 100,
                    backgroundColor: Colors.whiteColor,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: (mobileH * 0.5) / 100,
                    justifyContent: 'center',
                    borderColor: item.shareStatus
                      ? Colors.deleteColor
                      : Colors.skipColor,
                    borderWidth: (mobileW * 0.2) / 100,
                  }}>
                  <Image
                    source={localimag.icon_cancelShare}
                    style={{
                      width: (mobileW * 5) / 100,
                      height: (mobileW * 5) / 100,
                      resizeMode: 'contain',
                      tintColor: item.shareStatus
                        ? Colors.deleteColor
                        : Colors.skipColor,
                    }}
                  />
                  <Text
                    style={{
                      color: item.shareStatus
                        ? Colors.deleteColor
                        : Colors.skipColor,
                      fontSize: (mobileW * 3) / 100,
                      fontFamily: Font.FontBoldManrope,
                      marginLeft: (mobileW * 1.5) / 100,
                    }}>
                    {Lang_chg.cancelSharing_txt[config.language]}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* ------------------------ */}
          </View>
        </View>
      )}
    />
  );
};

export default React.memo(CartView);

const styles = StyleSheet.create({});
