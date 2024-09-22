import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
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

import {useNavigation, useRoute} from '@react-navigation/native';
import StarRating from 'react-native-star-rating';
import {useSelector, useDispatch} from 'react-redux';
import Cardcontainer from '../Componant/Cardcontainer';
import {likeDislike} from '../Redux/Slice/HomeSlice';

const ProductDetails = () => {
  const navigation = useNavigation();
  const [slides, setSlides] = useState([
    {
      key: 1,
      image: require('../Icons/Images/image_redIphone.jpg'),
      status: false,
    },
    {
      key: 2,
      image: require('../Icons/Images/image__brown_headPhone.jpg'),
      status: false,
    },
    {
      key: 3,
      image: require('../Icons/Images/image_blackCamera.jpg'),
      status: false,
    },
    {
      key: 4,
      image: require('../Icons/Images/image_blackCamera.jpg'),
      status: false,
    },
  ]);

  const {params} = useRoute();

  const [userType, setUserType] = useState(params?.userType);

  const [tags, setTags] = useState([
    {
      id: 0,
      tag: 'High-tech products',
      icon: localimag.icon_new,
      status: true,
    },
    {
      id: 1,
      tag: 'Camera',
      icon: localimag.icon_camera,
      status: false,
    },
  ]);

  const dispatch = useDispatch();

  const save_unsave = (index, arrayName) => {
    dispatch(likeDislike({arrayName, index}));
  };

  const featured = useSelector(state => state.home.homeData?.featured);

  return (
    <View style={styles.container}>
      <AppstatusBar />

      {/* header */}

      <View
        style={{
          marginTop: (mobileH * 3) / 100,
          width: (mobileW * 90) / 100,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: (mobileW * 8) / 100,
            width: (mobileW * 8) / 100,
            alignItems: 'center',
            justifyContent: 'center',
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

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: (mobileW * 8) / 100,
            width: (mobileW * 8) / 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={localimag.icon_share}
            style={{
              height: (mobileW * 6) / 100,
              width: (mobileW * 6) / 100,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.mainView,
          {
            paddingBottom: (mobileH * 5) / 100,
          },
        ]}>
        {/* Image view  */}
        <View
          style={{
            marginTop: (mobileH * 1.5) / 100,
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
          }}>
          <Image
            source={require('../Icons/Images/image_redIphone.jpg')}
            style={{
              width: (mobileW * 90) / 100,
              height: (mobileH * 32) / 100,
              borderRadius: (mobileW * 3) / 100,
            }}
          />

          <View
            style={{
              marginTop: (mobileH * 1.5) / 100,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {slides.map((item, index) => (
              <Image
                key={`${index}`}
                source={item.image}
                style={{
                  width: (mobileW * 20) / 100,
                  height: (mobileH * 10) / 100,
                  borderRadius: (mobileW * 3) / 100,
                  marginRight: (mobileW * 3.3) / 100,
                }}
              />
            ))}
          </View>
        </View>

        {/* ----------------- */}

        <View
          style={{
            marginTop: (mobileH * 2) / 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              paddingHorizontal: (mobileW * 2.5) / 100,
              height: (mobileH * 3.5) / 100,
              borderRadius: (mobileW * 1) / 100,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: (mobileW * 2.5) / 100,
              backgroundColor: Colors.lightYellow,
            }}>
            <Image
              source={localimag.icon_right}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3) / 100,
                fontFamily: Font.FontMediumManrope,
                marginLeft: (mobileW * 1.5) / 100,
              }}>
              {Lang_chg.deliverAvailable_txt[config.language]}
            </Text>
          </View>

          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={localimag.icon_favouriteproduct}
              style={{
                height: (mobileW * 8) / 100,
                width: (mobileW * 8) / 100,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: (mobileH * 2) / 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: Colors.theme_color,
              fontSize: (mobileW * 6) / 100,
              fontFamily: Font.FontBoldManrope,
            }}>
            {`350`}{' '}
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {config.currency}
            </Text>
          </Text>

          {userType == 2 && (
            <View
              style={{
                paddingHorizontal: (mobileW * 2.5) / 100,
                height: (mobileH * 3.5) / 100,
                borderRadius: (mobileW * 1) / 100,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.lightthemeColor,
              }}>
              <Image
                source={localimag.icon_proHome}
                style={{
                  width: (mobileW * 4) / 100,
                  height: (mobileW * 4) / 100,
                  resizeMode: 'contain',
                }}></Image>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3.3) / 100,
                  fontFamily: Font.FontExtraBoldManrope,
                  marginLeft: (mobileW * 1.5) / 100,
                }}>
                {Lang_chg.pro_txt[config.language]}
              </Text>
            </View>
          )}
        </View>

        <View
          style={{
            marginTop: (mobileH * 1) / 100,
          }}>
          <Text
            style={{
              color: Colors.title_color,
              fontSize: (mobileW * 4.6) / 100,
              fontFamily: Font.FontExtraBoldManrope,
              lineHeight: (mobileH * 2.8) / 100,
            }}>
            Lenovo I7 11h Gen GTX 1650
          </Text>

          {/* tags */}

          <View
            style={{
              marginTop: (mobileH * 2.5) / 100,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {tags.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    paddingHorizontal: (mobileW * 3.5) / 100,
                    paddingVertical: (mobileH * 0.8) / 100,
                    borderRadius: (mobileW * 3) / 100,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight:
                      index != tags.length - 1 ? (mobileW * 2) / 100 : null,

                    backgroundColor: Colors.tagbackColor,
                  }}>
                  <Image
                    source={item.icon}
                    style={{
                      width: (mobileW * 3.5) / 100,
                      height: (mobileW * 3.5) / 100,
                      resizeMode: 'contain',
                      tintColor: Colors.theme_color,
                    }}></Image>

                  <Text
                    style={{
                      color: Colors.black_color,
                      fontSize: (mobileW * 3) / 100,
                      fontFamily: Font.FontBoldManrope,
                      marginLeft: (mobileW * 2) / 100,
                    }}>
                    {item.tag}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          {/* ------- */}

          {/* published */}

          <Text
            style={{
              color: Colors.skipColor,
              fontSize: (mobileW * 3) / 100,
              fontFamily: Font.FontMediumManrope,
              marginTop: (mobileH * 1.5) / 100,
            }}>
            Published June 21, 2024
          </Text>

          {/* product condition */}

          <View
            style={{
              marginTop: (mobileH * 2) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              {Lang_chg.product_condition_txt[config.language]}
            </Text>

            <Text
              style={{
                color: Colors.darkGrey,
                fontSize: (mobileW * 3) / 100,
                fontFamily: Font.FontMediumManrope,
                lineHeight: (mobileH * 2.5) / 100,
                marginTop: (mobileH * 0.6) / 100,
                textAlign: 'justify',
              }}>
              New
            </Text>
          </View>

          {/* description */}

          <View
            style={{
              marginTop: (mobileH * 2) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              {Lang_chg.description_txt[config.language]}
            </Text>

            <Text
              style={{
                color: Colors.darkGrey,
                fontSize: (mobileW * 3) / 100,
                fontFamily: Font.FontMediumManrope,
                lineHeight: (mobileH * 2.5) / 100,
                marginTop: (mobileH * 0.6) / 100,
                textAlign: 'justify',
              }}>
              Rhoncus tellus id morbi risus diam tellus risus. Sollicitudin
              habitant eget viverra nisi nisl eu ac. Vitae diam eget quis
              feugiat senectus. Sit porta eu pellentesque nullam ac ut pharetra
              dignissim augue.
            </Text>
          </View>

          {/* ----------- */}

          <View
            style={{
              marginTop: (mobileH * 2) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              {Lang_chg.location_txt[config.language]}
            </Text>

            <Text
              style={{
                color: Colors.darkGrey,
                fontSize: (mobileW * 3) / 100,
                fontFamily: Font.FontMediumManrope,
                lineHeight: (mobileH * 2.5) / 100,
                marginTop: (mobileH * 0.6) / 100,
                textAlign: 'justify',
              }}>
              Paris
            </Text>

            <Image
              source={require('../Icons/image_map.png')}
              style={{
                width: (mobileW * 90) / 100,
                height: (mobileH * 20) / 100,
                borderRadius: (mobileW * 3.5) / 100,
                marginTop: (mobileH * 1.5) / 100,
              }}></Image>
          </View>

          {/* ---------------- */}

          {/* user profile */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              userType == 2
                ? navigation.navigate('StoreDetails')
                : navigation.navigate('UserDetail')
            }
            style={{
              marginTop: (mobileH * 2.3) / 100,
              width: (mobileW * 90) / 100,
              borderWidth: (mobileW * 0.2) / 100,
              borderColor: Colors.borderGrey,
              alignSelf: 'center',
              justifyContent: 'center',
              height: (mobileH * 10) / 100,
              borderRadius: (mobileW * 2.5) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
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
                {userType == 1 ? (
                  <>
                    <Image
                      source={require('../Icons/Images/image_user_1.jpg')}
                      style={{
                        width: (mobileW * 15) / 100,
                        height: (mobileW * 15) / 100,
                        borderRadius: (mobileW * 30) / 100,
                      }}></Image>
                    <Text
                      style={{
                        color: Colors.black_color,
                        fontSize: (mobileW * 4) / 100,
                        fontFamily: Font.FontExtraBoldManrope,
                        marginLeft: (mobileW * 2) / 100,
                      }}>
                      {`Leslie Flores`}
                    </Text>
                  </>
                ) : (
                  <>
                    <Image
                      source={require('../Icons/Images/image_store_3.jpg')}
                      style={{
                        width: (mobileW * 15) / 100,
                        height: (mobileW * 15) / 100,
                        borderRadius: (mobileW * 30) / 100,
                      }}></Image>
                    <Text
                      style={{
                        color: Colors.black_color,
                        fontSize: (mobileW * 4) / 100,
                        fontFamily: Font.FontExtraBoldManrope,
                        marginLeft: (mobileW * 2) / 100,
                      }}>
                      {`Oasis Boutique`}
                    </Text>
                  </>
                )}

                <Image
                  source={localimag.icon_verified}
                  style={{
                    width: (mobileW * 4.5) / 100,
                    height: (mobileW * 4.5) / 100,
                    borderRadius: (mobileW * 30) / 100,
                    marginLeft: (mobileW * 2) / 100,
                  }}></Image>
              </View>

              <Image
                source={localimag.icon_explore}
                style={{
                  width: (mobileW * 4) / 100,
                  height: (mobileW * 4) / 100,
                  resizeMode: 'contain',
                  tintColor: '#797B79',
                }}></Image>
            </View>
          </TouchableOpacity>

          {/* ------ */}

          {/* verified id / follow view */}

          <View
            style={{
              marginTop: (mobileH * 1.6) / 100,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: (mobileW * 50) / 100,
                height: (mobileH * 3.5) / 100,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: (mobileW * 30) / 100,
                backgroundColor: '#C7E0C9',
                justifyContent: 'space-between',
                paddingHorizontal: (mobileW * 3) / 100,
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3.3) / 100,
                  fontFamily: Font.FontMediumManrope,
                }}>
                {Lang_chg.verified_id_txt[config.language]}
              </Text>

              <Image
                source={localimag.icon_verified_id}
                style={{
                  width: (mobileW * 4) / 100,
                  height: (mobileW * 4) / 100,
                  resizeMode: 'contain',
                }}></Image>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                paddingHorizontal: (mobileW * 3) / 100,
                height: (mobileH * 3.8) / 100,
                borderWidth: (mobileW * 0.3) / 100,
                borderColor: Colors.theme_color,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: (mobileW * 1.5) / 100,
              }}>
              <Image
                source={localimag.icon_verifieduser}
                style={{
                  width: (mobileW * 4) / 100,
                  height: (mobileW * 4) / 100,
                  resizeMode: 'contain',
                }}></Image>
              <Text
                style={{
                  color: Colors.theme_color,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontBoldManrope,
                  marginLeft: (mobileW * 2) / 100,
                }}>
                {Lang_chg.follow_txt[config.language]}
              </Text>
            </TouchableOpacity>
          </View>

          {/* ------------------------ */}

          <View
            style={{
              marginTop: (mobileH * 2) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_location}
                resizeMode="contain"
                style={{
                  width: (mobileW * 3) / 100,
                  height: (mobileW * 3) / 100,
                  tintColor: Colors.black_color,
                }}
              />

              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 2.8) / 100,
                  fontFamily: Font.FontBoldManrope,
                  marginLeft: (mobileW * 1) / 100,
                }}>
                Paris
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Review')}
              style={{
                width: (mobileW * 35) / 100,
              }}>
              <StarRating
                containerStyle={{
                  width: (mobileW * 18) / 100,
                  marginTop: (mobileH * 1) / 100,
                }}
                fullStar={localimag.icon_active_star}
                halfStar={localimag.icon_halfStar}
                emptyStar={localimag.icon_deactive_star}
                maxStars={5}
                starSize={(mobileW * 5) / 100}
                rating={5}
                starStyle={{
                  marginRight: (mobileW * 2) / 100,
                }}
                disabled={true}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: Colors.darkGrey,
                fontSize: (mobileW * 2.5) / 100,
                fontFamily: Font.FontMediumManrope,
                marginLeft: (mobileW * 1) / 100,
                marginTop: (mobileH * 1) / 100,
              }}>
              Account Created 02/11/2024
            </Text>
          </View>

          {/* Report listing */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              alignSelf: 'center',
              marginTop: (mobileH * 3.5) / 100,
              marginBottom: (mobileH * 1) / 100,
              width: (mobileW * 42) / 100,
              height: (mobileH * 4) / 100,
              borderColor: Colors.modalTabColor,
              borderWidth: (mobileW * 0.2) / 100,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: (mobileW * 2) / 100,
              justifyContent: 'center',
            }}>
            <Image
              source={localimag.icon_report}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
                tintColor: Colors.deleteColor,
              }}></Image>

            <Text
              style={{
                color: Colors.modalTabColor,
                fontSize: (mobileW * 3) / 100,
                fontFamily: Font.FontBoldManrope,
                marginLeft: (mobileW * 1.5) / 100,
              }}>
              {Lang_chg.report_this_listing[config.language]}
            </Text>
          </TouchableOpacity>

          {/* border view */}

          <View
            style={{
              width: (mobileW * 90) / 100,
              height: (mobileH * 0.2) / 100,
              backgroundColor: Colors.borderGrey,
              marginTop: (mobileH * 3) / 100,
            }}></View>

          {/* -------------------- */}

          {/* Relevant products */}

          <View
            style={{
              marginTop: (mobileH * 2) / 100,
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
                {Lang_chg.relevantProducts_txt[config.language]}
              </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                // onPress={() =>
                //   navigation.navigate('ViewAll', {
                //     pageName: Lang_chg.featured_txt[config.language],
                //   })
                // }
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: Colors.skipColor,
                      fontSize: (mobileW * 3.5) / 100,
                      fontFamily: Font.FontMediumManrope,
                    }}>
                    {Lang_chg.see_all_txt[config.language]}
                  </Text>

                  <Image
                    source={localimag.icon_explore}
                    style={{
                      width: (mobileW * 3.5) / 100,
                      height: (mobileW * 3.5) / 100,
                      resizeMode: 'contain',
                      tintColor: '#797B79',
                      marginLeft: (mobileW * 1.5) / 100,
                    }}></Image>
                </View>
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
                      marginTop: (mobileH * 2.5) / 100,
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
                        // Onpress={() => navigation.navigate('ProductDetails')}
                        saveStatus={item.save}
                        saveunsave={() => save_unsave(index, 'featured')}
                        discount={item.discount}
                        dicountPrice={`1500`}
                        discountPercent={`20`}
                      />
                    ) : (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        // onPress={() =>
                        //   navigation.navigate('ViewAll', {
                        //     pageName: Lang_chg.featured_txt[config.language],
                        //   })
                        // }
                      >
                        <Image
                          source={localimag.icon_next}
                          resizeMode="contain"
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
        </View>
      </ScrollView>

      {/* button view */}

      {userType == 1 && (
        <View
          style={{
            width: mobileW,
            alignSelf: 'center',
            paddingVertical:
              config.device_type == 'ios'
                ? (mobileH * 1.5) / 100
                : (mobileH * 2) / 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.whiteColor,
            borderTopWidth: (mobileW * 0.4) / 100,
            borderColor: Colors.btnBorderGrey,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 30) / 100,
              alignSelf: 'center',
              height: (mobileH * 7) / 100,
              borderRadius: (mobileW * 2) / 100,
              backgroundColor: Colors.yellow_dark_color,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: (mobileH * 0.5) / 100,
              justifyContent: 'center',
            }}>
            <Image
              source={localimag.icon_contact_us}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 4.5) / 100,
                fontFamily: Font.FontBoldManrope,
                marginLeft: (mobileW * 1.5) / 100,
              }}>
              {Lang_chg.call_txt[config.language]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ChatScreen', {
                name: 'Leslie Flores',
                image: require('../Icons/Images/image_user_1.jpg'),
              })
            }
            activeOpacity={0.8}
            style={{
              width: (mobileW * 55) / 100,
              alignSelf: 'center',
              height: (mobileH * 7) / 100,
              borderRadius: (mobileW * 2) / 100,
              backgroundColor: Colors.theme_color,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: (mobileH * 0.5) / 100,
              justifyContent: 'center',
              marginLeft: (mobileW * 3) / 100,
            }}>
            <Image
              source={localimag.icon_chatGrey}
              style={{
                width: (mobileW * 6) / 100,
                height: (mobileW * 6) / 100,
                resizeMode: 'contain',
                tintColor: Colors.whiteColor,
              }}></Image>
            <Text
              style={{
                color: Colors.whiteColor,
                fontSize: (mobileW * 4.5) / 100,
                fontFamily: Font.FontBoldManrope,
                marginLeft: (mobileW * 1.5) / 100,
              }}>
              {Lang_chg.chat_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {userType == 2 && (
        <View
          style={{
            width: mobileW,
            alignSelf: 'center',
            paddingVertical:
              config.device_type == 'ios'
                ? (mobileH * 1.5) / 100
                : (mobileH * 2) / 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.whiteColor,
            borderTopWidth: (mobileW * 0.4) / 100,
            borderColor: Colors.btnBorderGrey,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 30) / 100,
              alignSelf: 'center',
              height: (mobileH * 7) / 100,
              borderRadius: (mobileW * 2.5) / 100,
              backgroundColor: Colors.whiteColor,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: (mobileH * 0.5) / 100,
              justifyContent: 'center',
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.theme_color,
            }}>
            <Image
              source={localimag.icon_chatGrey}
              style={{
                width: (mobileW * 6) / 100,
                height: (mobileW * 6) / 100,
                resizeMode: 'contain',
                tintColor: Colors.theme_color,
              }}></Image>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 4.5) / 100,
                fontFamily: Font.FontBoldManrope,
                marginLeft: (mobileW * 1.5) / 100,
              }}>
              {Lang_chg.chat_txt[config.language]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() =>
            //   navigation.navigate('ChatScreen', {
            //     name: 'Leslie Flores',
            //     image: require('../Icons/Images/image_user_1.jpg'),
            //   })
            // }
            activeOpacity={0.8}
            style={{
              width: (mobileW * 55) / 100,
              alignSelf: 'center',
              height: (mobileH * 7) / 100,
              borderRadius: (mobileW * 2) / 100,
              backgroundColor: Colors.theme_color,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: (mobileH * 0.5) / 100,
              justifyContent: 'center',
              marginLeft: (mobileW * 3) / 100,
            }}>
            <Image
              source={localimag.icon_addToCart}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>
            <Text
              style={{
                color: Colors.whiteColor,
                fontSize: (mobileW * 4.5) / 100,
                fontFamily: Font.FontBoldManrope,
                marginLeft: (mobileW * 1.5) / 100,
              }}>
              {Lang_chg.add_to_cart_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ProductDetails;

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
