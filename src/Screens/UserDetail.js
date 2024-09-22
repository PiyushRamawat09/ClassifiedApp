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

const UserDetail = () => {
  const navigation = useNavigation();

  const [listing_1, setListing_1] = useState([
    {
      id: 0,
      image: localimag.image_bench,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      discount: false,
    },
    {
      id: 1,
      image: localimag.image_christmas,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      discount: false,
    },
    {
      id: 2,
      image: localimag.image_christmas,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      discount: false,
    },
    {
      id: 3,
      image: localimag.image_white_headphone,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      discount: false,
    },
    {
      id: 4,
      image: localimag.image_white_headphone,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      discount: false,
    },
    {
      id: 5,
      image: localimag.image_bench,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      discount: false,
    },
    {
      id: 6,
      image: localimag.image_christmas,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      discount: false,
    },
  ]);

  return (
    <View style={styles.container}>
      <AppstatusBar />

      {/* header */}

      <View
        style={{
          marginTop: (mobileH * 3) / 100,
          width: (mobileW * 90) / 100,
          alignSelf: 'center',
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
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.mainView,
          {
            paddingBottom: (mobileH * 15) / 100,
            marginTop: (mobileH * 3) / 100,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 22) / 100,
              height: (mobileW * 22) / 100,
              borderRadius: (mobileW * 30) / 100,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.whiteColor,

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,

              elevation: 8,
            }}>
            <Image
              source={require('../Icons/Images/image_user_4.jpg')}
              style={{
                width: (mobileW * 20) / 100,
                height: (mobileW * 20) / 100,
                resizeMode: 'contain',
                borderRadius: (mobileW * 30) / 100,
              }}></Image>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={localimag.icon_shareUserProfile}
              style={{
                width: (mobileW * 8) / 100,
                height: (mobileW * 8) / 100,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 1.5) / 100,
          }}>
          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 4) / 100,
              fontFamily: Font.FontExtraBoldManrope,
              marginLeft: (mobileW * 2) / 100,
            }}>
            {`Leslie Flores`}
          </Text>

          <Image
            source={localimag.icon_verified}
            style={{
              width: (mobileW * 4.5) / 100,
              height: (mobileW * 4.5) / 100,
              borderRadius: (mobileW * 30) / 100,
              marginLeft: (mobileW * 2) / 100,
            }}></Image>
        </View>

        <View
          style={{
            marginTop: (mobileH * 1.5) / 100,
          }}>
          <View
            style={{
              width: (mobileW * 45) / 100,
              height: (mobileH * 2.5) / 100,
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
                fontSize: (mobileW * 3) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.verified_id_txt[config.language]}
            </Text>

            <Image
              source={localimag.icon_deliveryAvailable}
              style={{
                width: (mobileW * 4) / 100,
                height: (mobileW * 4) / 100,
                resizeMode: 'contain',
              }}></Image>
          </View>

          <View
            style={{
              marginTop: (mobileH * 1) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Review')}
                style={{
                  width: (mobileW * 26) / 100,
                }}>
                <StarRating
                  containerStyle={{
                    width: (mobileW * 14) / 100,
                    marginTop: (mobileH * 1) / 100,
                  }}
                  fullStar={localimag.icon_active_star}
                  halfStar={localimag.icon_halfStar}
                  emptyStar={localimag.icon_deactive_star}
                  maxStars={5}
                  starSize={(mobileW * 4.5) / 100}
                  rating={5}
                  starStyle={{
                    marginRight: (mobileW * 1) / 100,
                  }}
                  disabled={true}
                />
              </TouchableOpacity>

              <Text
                style={{
                  color: Colors.title_color,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontBoldManrope,
                  marginTop: (mobileH * 1) / 100,
                  marginLeft: (mobileW * 1.5) / 100,
                }}>
                {`(5.0)`}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: (mobileH * 2) / 100,
              }}>
              <Image
                source={localimag.icon_location}
                resizeMode="contain"
                style={{
                  width: (mobileW * 3.5) / 100,
                  height: (mobileW * 3.5) / 100,
                  tintColor: Colors.black_color,
                }}
              />

              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 1) / 100,
                }}>
                Paris
              </Text>
            </View>

            <Text
              style={{
                color: Colors.darkGrey,
                fontSize: (mobileW * 2.8) / 100,
                fontFamily: Font.FontMediumManrope,
                marginLeft: (mobileW * 1) / 100,
                marginTop: (mobileH * 1) / 100,
              }}>
              Account Created 02/11/2024
            </Text>
          </View>

          <View
            style={{
              marginTop: (mobileH * 2.5) / 100,
              flexDirection: 'row',
              alignItems: 'center',
              //   justifyContent: 'space-around',
            }}>
            {/* Follow */}
            <TouchableOpacity
              // onPress={() => navigation.navigate('')}
              activeOpacity={0.8}
              style={{
                width: (mobileW * 42) / 100,
                alignSelf: 'center',
                height: (mobileH * 6) / 100,
                borderRadius: (mobileW * 1.5) / 100,
                backgroundColor: Colors.whiteColor,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: Colors.theme_color,
              }}>
              <Image
                source={localimag.icon_follow}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>
              <Text
                style={{
                  color: Colors.theme_color,
                  fontSize: (mobileW * 4) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 2) / 100,
                }}>
                {Lang_chg.follow_txt[config.language]}
              </Text>
            </TouchableOpacity>

            {/* call */}
            <TouchableOpacity
              // onPress={() => navigation.navigate('')}
              activeOpacity={0.8}
              style={{
                width: (mobileW * 42) / 100,
                alignSelf: 'center',
                height: (mobileH * 6) / 100,
                borderRadius: (mobileW * 1.5) / 100,
                backgroundColor: Colors.theme_color,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: (mobileW * 3) / 100,
              }}>
              <Image
                source={localimag.icon_contact_us}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                  tintColor: Colors.whiteColor,
                }}></Image>
              <Text
                style={{
                  color: Colors.whiteColor,
                  fontSize: (mobileW * 4) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 2) / 100,
                }}>
                {Lang_chg.call_txt[config.language]}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: (mobileH * 3) / 100,
              width: (mobileW * 90) / 100,
              borderTopWidth: (mobileW * 0.2) / 100,
              borderBottomWidth: (mobileW * 0.2) / 100,
              borderColor: Colors.borderGrey,
              alignSelf: 'center',
              justifyContent: 'center',
              height: (mobileH * 10.5) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: (mobileW * 45) / 100,
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 5.3) / 100,
                    fontFamily: Font.FontBoldManrope,
                  }}>
                  125
                </Text>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3) / 100,
                    fontFamily: Font.FontMediumManrope,
                  }}>
                  {Lang_chg.followers_txt[config.language]}
                </Text>
              </View>
              <View
                style={{
                  width: (mobileW * 0.2) / 100,
                  height: (mobileH * 7) / 100,
                  backgroundColor: Colors.borderGrey,
                }}></View>
              <View
                style={{
                  width: (mobileW * 45) / 100,
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 5.3) / 100,
                    fontFamily: Font.FontBoldManrope,
                  }}>
                  100
                </Text>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3) / 100,
                    fontFamily: Font.FontMediumManrope,
                    // marginTop: (mobileH * 0.5) / 100,
                  }}>
                  {Lang_chg.total_ads_txt[config.language]}
                </Text>
              </View>
            </View>
          </View>
        </View>

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
      </ScrollView>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    // width: (mobileW * 90) / 100,
    paddingHorizontal: (mobileW * 5) / 100,
    // alignSelf: 'center',
    marginTop: (mobileH * 1) / 100,
    backgroundColor: Colors.whiteColor,
    // flex: 1,
  },
});
