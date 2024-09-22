import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
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
import {useNavigation} from '@react-navigation/native';
import ButtonComponent from '../Componant/ButtonComponent';
import StarRating from 'react-native-star-rating';
import ProgressBarComponent from '../Componant/ProgressBarComponent';

const MyReviews = () => {
  const navigation = useNavigation();

  const [reviewData, setReviewData] = useState([
    {
      id: 0,
      rating: '5',
      comment:
        'You all have been really great. This is the only place I get all of my Indian outfits from. Thank you so much for everything',
      name: 'Anthony Jonas',
      date: 'June 21, 2024 08:00 AM',
      img: require('../Icons/Images/image_user_3.jpg'),
    },
    {
      id: 1,
      rating: '5',
      comment:
        'You all have been really great. This is the only place I get all of my Indian outfits from. Thank you so much for everything',
      name: 'Abraham Nicole',
      date: 'June 21, 2024 08:00 AM',
      img: require('../Icons/Images/image_user_6.jpg'),
    },
    {
      id: 2,
      rating: '5',
      comment:
        'You all have been really great. This is the only place I get all of my Indian outfits from. Thank you so much for everything',
      name: 'David Miller',
      date: 'June 21, 2024 08:00 AM',
      img: require('../Icons/Images/image_user_5.jpg'),
    },
    {
      id: 3,
      rating: '5',
      comment:
        'You all have been really great. This is the only place I get all of my Indian outfits from. Thank you so much for everything',
      name: 'Sophia Miller',
      date: 'June 21, 2024 08:00 AM',
      img: require('../Icons/Images/image_user_3.jpg'),
    },
  ]);

  return (
    <View style={styles.container}>
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

        <Text
          style={{
            fontSize: (mobileW * 5) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontBoldLexend,
            textAlign: 'center',
          }}>
          {Lang_chg.customerReviews_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 8) / 100,
          }}></View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.mainView,
          {
            paddingBottom: (mobileH * 15) / 100,
          },
        ]}>
        {/* Rating View */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 3) / 100,
          }}>
          <View
            style={{
              alignItems: 'center',
              width: (mobileW * 30) / 100,
            }}>
            <Text
              style={{
                fontSize: (mobileW * 15) / 100,
                color: Colors.black_color,
                fontFamily: Font.FontMediumManrope,
              }}>
              5.0
            </Text>

            <StarRating
              containerStyle={{}}
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

            <Text
              style={{
                fontSize: (mobileW * 2.6) / 100,
                color: Colors.darkGrey,
                fontFamily: Font.FontMediumManrope,
                marginTop: (mobileH * 1) / 100,
              }}>
              56 Ratings
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              width: (mobileW * 59.5) / 100,
              marginLeft: (mobileW * 2) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: (mobileW * 1.5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.darkGrey,
                  }}>
                  5
                </Text>

                <Image
                  source={localimag.icon_active_star}
                  style={{
                    width: (mobileW * 3) / 100,
                    height: (mobileW * 3) / 100,
                    resizeMode: 'contain',
                    marginLeft: (mobileW * 0.5) / 100,
                  }}
                />
              </View>

              <ProgressBarComponent progressValue={80} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: (mobileH * 1.2) / 100,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: (mobileW * 1.5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.darkGrey,
                  }}>
                  4
                </Text>

                <Image
                  source={localimag.icon_active_star}
                  style={{
                    width: (mobileW * 3) / 100,
                    height: (mobileW * 3) / 100,
                    resizeMode: 'contain',
                    marginLeft: (mobileW * 0.5) / 100,
                  }}
                />
              </View>

              <ProgressBarComponent progressValue={40} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: (mobileH * 1.2) / 100,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: (mobileW * 1.5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.darkGrey,
                  }}>
                  3
                </Text>

                <Image
                  source={localimag.icon_active_star}
                  style={{
                    width: (mobileW * 3) / 100,
                    height: (mobileW * 3) / 100,
                    resizeMode: 'contain',
                    marginLeft: (mobileW * 0.5) / 100,
                  }}
                />
              </View>

              <ProgressBarComponent progressValue={30} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: (mobileH * 1.2) / 100,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: (mobileW * 1.5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.darkGrey,
                  }}>
                  2
                </Text>

                <Image
                  source={localimag.icon_active_star}
                  style={{
                    width: (mobileW * 3) / 100,
                    height: (mobileW * 3) / 100,
                    resizeMode: 'contain',
                    marginLeft: (mobileW * 0.5) / 100,
                  }}
                />
              </View>

              <ProgressBarComponent progressValue={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: (mobileH * 1.2) / 100,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: (mobileW * 1.5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.darkGrey,
                  }}>
                  1
                </Text>

                <Image
                  source={localimag.icon_active_star}
                  style={{
                    width: (mobileW * 3) / 100,
                    height: (mobileW * 3) / 100,
                    resizeMode: 'contain',
                    marginLeft: (mobileW * 0.5) / 100,
                  }}
                />
              </View>

              <ProgressBarComponent progressValue={0} />
            </View>
          </View>
        </View>

        {/* ------------------------ */}

        {/* boder */}

        <View
          style={{
            width: (mobileW * 90) / 100,
            height: (mobileH * 0.1) / 100,
            backgroundColor: Colors.unfilledColor,
            alignSelf: 'center',
            marginVertical: (mobileH * 3) / 100,
          }}></View>

        {/* -------------------- */}

        <FlatList
          data={reviewData}
          keyExtractor={(item, index) => `${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          renderItem={({item, index}) => (
            <View style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <StarRating
                    containerStyle={{
                      width: (mobileW * 18) / 100,
                    }}
                    fullStar={localimag.icon_active_star}
                    halfStar={localimag.icon_halfStar}
                    emptyStar={localimag.icon_deactive_star}
                    maxStars={5}
                    starSize={(mobileW * 3) / 100}
                    rating={5}
                    starStyle={{
                      marginRight: (mobileW * 0.5) / 100,
                    }}
                    disabled={true}
                  />

                  <Text
                    style={{
                      color: Colors.title_color,
                      fontSize: (mobileW * 2.5) / 100,
                      fontFamily: Font.FontBoldManrope,
                      marginLeft: (mobileW * 0.5) / 100,
                    }}>
                    {`(${item.rating}.0)`}
                  </Text>
                </View>

                {/* report and share */}

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={localimag.icon_reply}
                      style={{
                        width: (mobileW * 3.5) / 100,
                        height: (mobileW * 3.5) / 100,
                      }}
                    />

                    <Text
                      style={{
                        color: Colors.black_color,
                        fontSize: (mobileW * 3) / 100,
                        fontFamily: Font.FontMediumManrope,
                        marginLeft: (mobileW * 1) / 100,
                      }}>
                      {Lang_chg.reply_txt[config.language]}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: (mobileW * 3.5) / 100,
                    }}>
                    <Image
                      source={localimag.icon_report_comment}
                      style={{
                        width: (mobileW * 3.5) / 100,
                        height: (mobileW * 3.5) / 100,
                      }}
                    />

                    <Text
                      style={{
                        color: Colors.black_color,
                        fontSize: (mobileW * 3) / 100,
                        fontFamily: Font.FontMediumManrope,
                        marginLeft: (mobileW * 1) / 100,
                      }}>
                      {Lang_chg.report_txt[config.language]}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3.8) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginTop: (mobileH * 1) / 100,
                  lineHeight: (mobileH * 2.8) / 100,
                }}>
                {item.comment}
              </Text>

              <View
                style={{
                  marginTop: (mobileH * 1) / 100,
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
                    source={item.img}
                    style={{
                      width: (mobileW * 7) / 100,
                      height: (mobileW * 7) / 100,
                      borderRadius: (mobileW * 30) / 100,
                    }}
                  />

                  <Text
                    style={{
                      color: Colors.deactiveColor,
                      fontSize: (mobileW * 3.3) / 100,
                      fontFamily: Font.FontBoldManrope,
                      marginLeft: (mobileW * 3) / 100,
                    }}>
                    {item.name}
                  </Text>
                </View>

                <Text
                  style={{
                    color: Colors.skipColor,
                    fontSize: (mobileW * 2.5) / 100,
                    fontFamily: Font.FontMediumManrope,
                    marginLeft: (mobileW * 3) / 100,
                  }}>
                  {item.date}
                </Text>
              </View>

              {index != reviewData.length - 1 && (
                <View
                  style={{
                    width: (mobileW * 90) / 100,
                    height: (mobileH * 0.1) / 100,
                    backgroundColor: Colors.unfilledColor,
                    alignSelf: 'center',
                    marginVertical: (mobileH * 3) / 100,
                  }}></View>
              )}
            </View>
          )}
        />
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: mobileH * 0,
          height: (mobileH * 10) / 100,
          width: mobileW,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: (mobileW * 5) / 100,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
          backgroundColor: Colors.whiteColor,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../Icons/Images/image_user_3.jpg')}
            style={{
              width: (mobileW * 7) / 100,
              height: (mobileW * 7) / 100,
              borderRadius: (mobileW * 30) / 100,
            }}
          />

          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 3.3) / 100,
              fontFamily: Font.FontBoldManrope,
              marginLeft: (mobileW * 3) / 100,
            }}>
            {Lang_chg.replyTo_txt[config.language]}{' '}
            <Text
              style={{
                color: Colors.reviewPersonColor,
                fontSize: (mobileW * 3.3) / 100,
                fontFamily: Font.FontBoldManrope,
                marginLeft: (mobileW * 3) / 100,
              }}>
              Sophia Miller
            </Text>
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.8}>
          <Image
            source={localimag.icon_goToChat}
            style={{
              width: (mobileW * 12) / 100,
              height: (mobileW * 12) / 100,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyReviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    marginTop: (mobileH * 1) / 100,
  },
});
