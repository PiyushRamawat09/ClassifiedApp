import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
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

const Adperformance = () => {
  const [overAll, setOverAll] = useState(true);
  const [genderBased, setGenderBased] = useState(false);

  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [all, setAll] = useState(true);

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
          {Lang_chg.adPerformance_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 10) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      <View
        style={{
          width: (mobileW * 80) / 100,
          alignSelf: 'center',
          marginTop: (mobileH * 5) / 100,
        }}>
        <Text
          style={{
            color: Colors.listingColor,
            fontSize: (mobileW * 4) / 100,
            fontFamily: Font.FontBoldManrope,
            textAlign: 'center',
          }}>
          Lorem ipsum dolor sit amet consectetur. Duis morbi vivamus ut id.
          Lacus ultrices phasellus cursus faucibus at in ut.
        </Text>
      </View>

      {/* ------buttons----------------- */}

      <View
        style={{
          width: (mobileW * 90) / 100,
          alignSelf: 'center',
          marginTop: (mobileH * 3) / 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setGenderBased(false);
              setOverAll(true);
            }}
            activeOpacity={0.8}
            style={{
              height: (mobileH * 6.5) / 100,
              width: (mobileW * 40) / 100,
              borderRadius: (mobileW * 30) / 100,
              backgroundColor: overAll ? '#F1F8F1' : Colors.whiteColor,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: (mobileW * 0.2) / 100,
              borderColor: overAll ? Colors.theme_color : Colors.darkGrey,
            }}>
            <Text
              style={{
                color: overAll ? Colors.theme_color : Colors.darkGrey,
                fontSize: (mobileW * 3) / 100,
                fontFamily: Font.FontExtraBoldManrope,
              }}>
              {Lang_chg.overAllkeys_txt[config.language]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setOverAll(false);
              setGenderBased(true);
            }}
            activeOpacity={0.8}
            style={{
              height: (mobileH * 6.5) / 100,
              width: (mobileW * 40) / 100,
              borderRadius: (mobileW * 30) / 100,
              backgroundColor: genderBased ? '#F1F8F1' : Colors.whiteColor,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: (mobileW * 3) / 100,
              borderWidth: (mobileW * 0.2) / 100,
              borderColor: genderBased ? Colors.theme_color : Colors.darkGrey,
            }}>
            <Text
              style={{
                color: genderBased ? Colors.theme_color : Colors.darkGrey,
                fontSize: (mobileW * 3) / 100,
                fontFamily: Font.FontExtraBoldManrope,
              }}>
              {Lang_chg.genderBased_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ---------------------------- */}

      {genderBased && (
        <View
          style={{
            width: (mobileW * 80) / 100,
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 3) / 100,
          }}>
          {/* All */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setMale(false);
              setFemale(false);
              setAll(true);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={
                all ? localimag.icon_activeRadio : localimag.icon_deactiveRadio
              }
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                color: all ? Colors.theme_color : Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
                marginLeft: (mobileW * 3) / 100,
              }}>
              {Lang_chg.all_txt[config.language]}
            </Text>
          </TouchableOpacity>

          {/* Male */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setAll(false);
              setFemale(false);
              setMale(true);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={
                male ? localimag.icon_activeRadio : localimag.icon_deactiveRadio
              }
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                color: male ? Colors.theme_color : Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
                marginLeft: (mobileW * 3) / 100,
              }}>
              {Lang_chg.male_txt[config.language]}
            </Text>
          </TouchableOpacity>

          {/* female */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setAll(false);
              setMale(false);
              setFemale(true);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={
                female
                  ? localimag.icon_activeRadio
                  : localimag.icon_deactiveRadio
              }
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                color: female ? Colors.theme_color : Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
                marginLeft: (mobileW * 3) / 100,
              }}>
              {Lang_chg.female_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* =================================== */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={{
          paddingBottom: (mobileH * 10) / 100,
        }}>
        {/* views */}
        <View
          style={{
            marginTop: (mobileH * 4) / 100,
            width: (mobileW * 90) / 100,
            height: (mobileH * 25) / 100,
            alignSelf: 'center',
            backgroundColor: Colors.whiteColor,
            borderRadius: (mobileW * 1.5) / 100,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
          }}>
          <View
            style={{
              flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 2) / 100,
              paddingHorizontal: (mobileW * 5) / 100,
            }}>
            <View>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 6.5) / 100,
                  fontFamily: Font.FontExtraBoldManrope,
                }}>
                200{' '}
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.5) / 100,
                    fontFamily: Font.FontBoldManrope,
                  }}>
                  {Lang_chg.views_txt[config.language]}
                </Text>
              </Text>

              <Text
                style={{
                  color: Colors.darkGrey,
                  fontSize: (mobileW * 3) / 100,
                  fontFamily: Font.FontMediumManrope,
                  width: (mobileW * 40) / 100,
                  marginTop: (mobileH * 1) / 100,
                }}>
                {Lang_chg.totalNumberOfAdImp_txt[config.language]}
              </Text>
            </View>

            <Image
              source={localimag.icon_views}
              style={{
                width: (mobileW * 12) / 100,
                height: (mobileW * 12) / 100,
                marginTop: (mobileH * 1) / 100,
              }}
            />
          </View>

          <Image
            source={localimag.icon_viewsGraph}
            style={{
              width: (mobileW * 90) / 100,
              height: (mobileH * 14) / 100,
              marginTop: (mobileH * 1.5) / 100,
            }}
          />
        </View>

        {/* clicks */}
        <View
          style={{
            marginTop: (mobileH * 3) / 100,
            width: (mobileW * 90) / 100,
            height: (mobileH * 25) / 100,
            alignSelf: 'center',
            backgroundColor: Colors.whiteColor,
            borderRadius: (mobileW * 1.5) / 100,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
          }}>
          <View
            style={{
              flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 2) / 100,
              paddingHorizontal: (mobileW * 5) / 100,
            }}>
            <View>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 6.5) / 100,
                  fontFamily: Font.FontExtraBoldManrope,
                }}>
                200{' '}
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.5) / 100,
                    fontFamily: Font.FontBoldManrope,
                  }}>
                  {Lang_chg.clicks_txt[config.language]}
                </Text>
              </Text>

              <Text
                style={{
                  color: Colors.darkGrey,
                  fontSize: (mobileW * 3) / 100,
                  fontFamily: Font.FontMediumManrope,
                  width: (mobileW * 30) / 100,
                  marginTop: (mobileH * 1) / 100,
                }}>
                {Lang_chg.totalNumberOfClicks_txt[config.language]}
              </Text>
            </View>
            <Image
              source={localimag.icon_clicks}
              style={{
                width: (mobileW * 12) / 100,
                height: (mobileW * 12) / 100,
                marginTop: (mobileH * 1) / 100,
              }}
            />
          </View>

          <Image
            source={localimag.icon_clikcsgraph}
            style={{
              width: (mobileW * 90) / 100,
              height: (mobileH * 14) / 100,
              marginTop: (mobileH * 1.5) / 100,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Adperformance;

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
