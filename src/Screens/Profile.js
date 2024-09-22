import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
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

const Profile = () => {
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

  return (
    <View style={styles.container}>
      <AppstatusBar />
      {/*------------- header -------------- */}

      <View
        style={{
          marginTop: (mobileH * 3) / 100,
        }}>
        <Text
          style={{
            fontSize: (mobileW * 5) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontBoldLexend,
            textAlign: 'center',
          }}>
          {Lang_chg.menu_txt[config.language]}
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.mainView,
          {
            paddingBottom: (mobileH * 10) / 100,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.8}
          // onPress={() => navigation.navigate('PersonalInformation')}
          onPress={() => navigation.navigate('UserProfile')}
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
            <View
              style={{
                width: (mobileW * 18) / 100,
                height: (mobileW * 18) / 100,
                borderRadius: (mobileW * 30) / 100,
                justifyContent: 'center',
                alignItems: 'center',
                // borderWidth: (mobileW * 0.4) / 100,
                // borderColor: Colors.theme_color,
              }}>
              <Image
                source={require('../Icons/Images/image_user_4.jpg')}
                style={{
                  width: (mobileW * 16) / 100,
                  height: (mobileW * 16) / 100,
                  resizeMode: 'contain',
                  borderRadius: (mobileW * 30) / 100,
                }}></Image>
            </View>

            <View
              style={{
                marginLeft: (mobileW * 3) / 100,
              }}>
              <Text
                style={{
                  fontSize: (mobileW * 4.5) / 100,
                  color: Colors.black_color,
                  fontFamily: Font.FontBoldManrope,
                }}>
                Khady Ahmed
              </Text>

              <TouchableOpacity activeOpacity={0.8}>
                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    color: Colors.theme_color,
                    fontFamily: Font.FontMediumManrope,
                    // marginTop: (mobileH * 0.5) / 100,
                    textDecorationLine: 'underline',
                  }}>
                  {Lang_chg.viewProfile_txt[config.language]}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Image
            source={localimag.icon_dropDown}
            style={{
              width: (mobileW * 3.5) / 100,
              height: (mobileW * 3.5) / 100,
              resizeMode: 'contain',
              transform: [{rotate: '270deg'}],
            }}
          />
        </TouchableOpacity>

        {/* <View
          style={{
            marginTop: (mobileH * 2.5) / 100,
            width: (mobileW * 90) / 100,
            borderTopWidth: (mobileW * 0.2) / 100,
            borderBottomWidth: (mobileW * 0.2) / 100,
            borderColor: Colors.borderGrey,
            alignSelf: 'center',
            justifyContent: 'center',
            height: (mobileH * 11) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Followers')}
              style={{
                width: (mobileW * 45) / 100,
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 5) / 100,
                  fontFamily: Font.FontBold,
                }}>
                125
              </Text>
              <Text
                style={{
                  color: Colors.darkGrey,
                  fontSize: (mobileW * 3.8) / 100,
                  fontFamily: Font.FontRegular,
                  marginTop: (mobileH * 1) / 100,
                }}>
                {Lang_chg.followers_txt[config.language]}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                width: (mobileW * 0.2) / 100,
                height: (mobileH * 7.5) / 100,
                backgroundColor: Colors.borderGrey,
              }}></View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('MyListing')}
              style={{
                width: (mobileW * 45) / 100,
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 5) / 100,
                  fontFamily: Font.FontBold,
                }}>
                100
              </Text>
              <Text
                style={{
                  color: Colors.darkGrey,
                  fontSize: (mobileW * 3.8) / 100,
                  fontFamily: Font.FontRegular,
                  marginTop: (mobileH * 1) / 100,
                }}>
                {Lang_chg.total_ads_txt[config.language]}
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* border view */}

        <View
          style={{
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
            height: (mobileH * 0.2) / 100,
            backgroundColor: Colors.btnBorderGrey,
            marginTop: (mobileH * 3) / 100,
          }}></View>

        {/* button view */}

        <View
          style={{
            marginTop: (mobileH * 2.5) / 100,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateMyStore')}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              height: (mobileH * 7) / 100,
              borderRadius: (mobileW * 2) / 100,
              backgroundColor: Colors.theme_color,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: (mobileH * 1) / 100,
              justifyContent: 'center',
            }}>
            <Image
              source={localimag.icon_create_my_store}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>
            <Text
              style={{
                color: Colors.whiteColor,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontMediumManrope,
                marginLeft: (mobileW * 2) / 100,
              }}>
              {Lang_chg.create_my_store[config.language]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('VerifyMyIdentity')}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              height: (mobileH * 7) / 100,
              borderRadius: (mobileW * 2) / 100,
              backgroundColor: Colors.whiteColor,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: (mobileH * 1) / 100,
              justifyContent: 'center',
              borderWidth: (mobileW * 0.2) / 100,
              borderColor: Colors.theme_color,
            }}>
            <Image
              source={localimag.icon_verify_identity}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
                tintColor: Colors.theme_color,
              }}></Image>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontMediumManrope,
                marginLeft: (mobileW * 2) / 100,
              }}>
              {Lang_chg.verifiy_my_identity[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* --------------- Wallet View ------------ */}

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Wallet')}
          style={{
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
            height: (mobileH * 12) / 100,
            borderRadius: (mobileW * 2) / 100,
            backgroundColor: Colors.whiteColor,
            marginTop: (mobileH * 2) / 100,

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: (mobileW * 60) / 100,
                borderRadius: (mobileW * 2) / 100,
                paddingVertical: (mobileH * 1) / 100,
                paddingHorizontal: (mobileW * 3) / 100,
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                }}>
                Balance
              </Text>

              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 6) / 100,
                  fontFamily: Font.FontExtraBoldManrope,
                }}>
                850{' '}
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 4.5) / 100,
                    fontFamily: Font.FontMediumManrope,
                  }}>
                  {config.currency}
                </Text>
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'flex-end',
                  marginRight: (-mobileW * 3) / 100,
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.5) / 100,
                    fontFamily: Font.FontMediumManrope,
                  }}>
                  {Lang_chg.my_wallet_txt[config.language]}
                </Text>

                <Image
                  source={localimag.icon_dropDown}
                  style={{
                    width: (mobileW * 3) / 100,
                    height: (mobileW * 3) / 100,
                    resizeMode: 'contain',
                    transform: [{rotate: '270deg'}],
                    marginLeft: (mobileW * 1.5) / 100,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                marginLeft: (mobileW * 1.2) / 100,
              }}>
              <Image
                source={localimag.icon_walletImgback}
                style={{
                  width: (mobileW * 30) / 100,
                  height: (mobileH * 12) / 100,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>

        {/* ----------------------------------- */}

        <View
          style={{
            marginTop: (mobileH * 3.5) / 100,
          }}>
          {/* persoanl information */}

          {/* <TouchableOpacity
            onPress={() => navigation.navigate('PersonalInformation')}
            activeOpacity={0.8}
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
                source={localimag.icon_personalInformation}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>

              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 3.8) / 100,
                  fontFamily: Font.FontRegular,
                  marginLeft: (mobileW * 4) / 100,
                }}>
                {Lang_chg.personal_information_txt[config.language]}
              </Text>
            </View>

            <Image
              source={localimag.icon_profile_next}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity> */}

          {/* -------------------------- */}

          {/*-------------- My store -------------- */}
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('Mystore')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_myStore}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>

              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 3.8) / 100,
                  fontFamily: Font.FontRegular,
                  marginLeft: (mobileW * 4) / 100,
                }}>
                {Lang_chg.myStore_txt[config.language]}
              </Text>
            </View>

            <Image
              source={localimag.icon_profile_next}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity> */}
          {/* -------------------------------------- */}

          {/*---------------- lsitings ------------- */}

          <TouchableOpacity
            onPress={() => navigation.navigate('MyListing')}
            activeOpacity={0.8}
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
                source={localimag.icon_new}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>

              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 4) / 100,
                }}>
                {Lang_chg.myListings_txt[config.language]}
              </Text>
            </View>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
                transform: [{rotate: '270deg'}],
              }}
            />
          </TouchableOpacity>
          {/* ------------------------------- */}

          {/*---------------- Advertising ------------- */}

          <TouchableOpacity
            onPress={() => navigation.navigate('Advertising')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_advertising}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>

              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 4) / 100,
                }}>
                {Lang_chg.myAds_txt[config.language]}
              </Text>
            </View>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
                transform: [{rotate: '270deg'}],
              }}
            />
          </TouchableOpacity>

          {/* ------------------------------- */}
          {/*---------------- my Favorites listings ------------- */}

          <TouchableOpacity
            onPress={() => navigation.navigate('Favorites')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_heart}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>

              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 4) / 100,
                }}>
                {Lang_chg.myFavourite_listings_txt[config.language]}
              </Text>
            </View>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
                transform: [{rotate: '270deg'}],
              }}
            />
          </TouchableOpacity>
          {/* ------------------------------- */}

          {/*---------------- my Favorites sellers ------------- */}

          <TouchableOpacity
            onPress={() => navigation.navigate('FavouriteSellers')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_favSellers}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>

              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 4) / 100,
                }}>
                {Lang_chg.myFavourite_sellers_txt[config.language]}
              </Text>
            </View>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
                transform: [{rotate: '270deg'}],
              }}
            />
          </TouchableOpacity>
          {/* ------------------------------- */}

          {/*---------------- my Reviews ------------- */}

          <TouchableOpacity
            onPress={() => navigation.navigate('MyReviews')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_myReviews}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>

              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 4) / 100,
                }}>
                {Lang_chg.myReviews_txt[config.language]}
              </Text>
            </View>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
                transform: [{rotate: '270deg'}],
              }}
            />
          </TouchableOpacity>
          {/* ------------------------------- */}

          {/* border */}

          <View
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              height: (mobileH * 0.3) / 100,
              backgroundColor: Colors.borderGrey,
              marginTop: (mobileH * 3) / 100,
            }}></View>

          {/* ------------------------------ */}

          {/*---------------- Language ------------- */}

          <TouchableOpacity
            onPress={() => navigation.navigate('Language')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_language}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>

              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 4) / 100,
                }}>
                {Lang_chg.language_txt[config.language]}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.hourAgoColor,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginRight: (mobileW * 2) / 100,
                }}>
                عربي
              </Text>
              <Image
                source={localimag.icon_dropDown}
                style={{
                  width: (mobileW * 3.5) / 100,
                  height: (mobileW * 3.5) / 100,
                  resizeMode: 'contain',
                  transform: [{rotate: '270deg'}],
                }}
              />
            </View>
          </TouchableOpacity>
          {/* ------------------------------- */}

          {/*---------------- FAQ ------------- */}

          <TouchableOpacity
            onPress={() => navigation.navigate('Faq')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_faq}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>

              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 4) / 100,
                }}>
                {Lang_chg.faq_txt[config.language]}
              </Text>
            </View>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
                transform: [{rotate: '270deg'}],
              }}
            />
          </TouchableOpacity>
          {/* ------------------------------- */}

          {/*---------------- Help and Support ------------- */}

          <TouchableOpacity
            onPress={() => navigation.navigate('HelpAndSupport')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_help_and_supportt}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>

              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 3.8) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 3.5) / 100,
                }}>
                {Lang_chg.help_and_support_txt[config.language]}
              </Text>
            </View>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
                transform: [{rotate: '270deg'}],
              }}
            />
          </TouchableOpacity>
          {/* ------------------------------- */}

          {/*---------------- Interact with application ------------- */}

          <TouchableOpacity
            onPress={() => navigation.navigate('InteractWithApplication')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_privacy_policy}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>

              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 4) / 100,
                }}>
                {Lang_chg.interact_with_application_txt[config.language]}
              </Text>
            </View>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
                transform: [{rotate: '270deg'}],
              }}
            />
          </TouchableOpacity>
          {/* ------------------------------- */}

          {/*---------------- Settings and Information ------------- */}

          <TouchableOpacity
            onPress={() => navigation.navigate('SettingsAndInformation')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 3) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_setting}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>

              <Text
                style={{
                  color: Colors.profileColor,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 4) / 100,
                }}>
                {Lang_chg.settings_and_inforamtion_txt[config.language]}
              </Text>
            </View>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
                transform: [{rotate: '270deg'}],
              }}
            />
          </TouchableOpacity>
          {/* ------------------------------- */}
        </View>
      </ScrollView>

      {/* ---------------------------------- */}
    </View>
  );
};

export default React.memo(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    paddingHorizontal: (mobileW * 5) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 3) / 100,
  },
});
