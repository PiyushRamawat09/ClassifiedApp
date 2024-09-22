import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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

const SellStep_4 = () => {
  const navigation = useNavigation();

  const selectPlan = index => {
    let new_arr = [...planArr];
    for (let i = 0; i < new_arr.length; i++) {
      new_arr[i].status = false;
    }

    new_arr[index].status = true;

    setPlanarr(new_arr);
  };

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
    {
      id: 3,
      icon: localimag.icon_menugrey,
      title: 'Not now, maybe later',
      subhead: 'Add your item at no extra cost',
      duration: '',
      originalPrice: '',
      discountPrice: '',
      status: false,
    },
  ]);

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
          {Lang_chg.createListing_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 5) / 100,
          }}></View>
      </View>
      {/* -------------------------------------------- */}

      <View
        style={{
          marginTop: (mobileH * 2) / 100,
          alignSelf: 'center',
        }}>
        <Image
          source={localimag.icon_listing_step_4}
          style={{
            width: (mobileW * 65) / 100,
            height: (mobileH * 8) / 100,
            resizeMode: 'contain',
          }}
        />
      </View>

      {/* ----------------------------------------*/}

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
            {Lang_chg.standOut_txt[config.language]}
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
                            fontFamily: Font.FontBoldManrope,
                            width: (mobileW * 52) / 100,
                          }}>
                          {item.title}
                        </Text>

                        {item.discountPrice != '' && (
                          <Text
                            style={{
                              color: Colors.theme_color,
                              fontSize: (mobileW * 3.5) / 100,
                              fontFamily: Font.FontBoldManrope,
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

        {/* btn view */}
        <View
          style={{
            marginTop: (mobileH * 5) / 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
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
            onPress={() => {
              navigation.navigate('SellStep_5');
            }}
            title={Lang_chg.confirm_and_continue_txt[config.language]}
            btnStyle={{
              width: (mobileW * 58) / 100,
              borderRadius: (mobileW * 2) / 100,
              height: (mobileH * 7) / 100,
              marginLeft: (mobileW * 2) / 100,
            }}
            active={true}
          />
        </View>
        {/* -------------- */}

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            alignSelf: 'center',
            marginTop: (mobileH * 2) / 100,
          }}>
          <Text
            style={{
              fontSize: (mobileW * 3) / 100,
              color: Colors.draftColor,
              fontFamily: Font.FontMediumManrope,
            }}>
            {Lang_chg.save_for_later_txt[config.language]}
          </Text>

          <View
            style={{
              backgroundColor: Colors.draftColor,
              marginTop: (mobileH * 0.1) / 100,
              height: (mobileW * 0.3) / 100,
            }}></View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SellStep_4;

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
