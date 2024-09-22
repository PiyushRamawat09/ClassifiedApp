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

const SellStep_2 = () => {
  const navigation = useNavigation();
  const [addPhotos, setAddPhotos] = useState(false);

  const [freeStatus, setFreeStatus] = useState(false);
  const [buyStatus, setBuyStatus] = useState(true);

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
          source={localimag.icon_listing_step_2}
          style={{
            width: (mobileW * 65) / 100,
            height: (mobileH * 8) / 100,
            resizeMode: 'contain',
          }}
        />
      </View>
      {/* -----------------------------------*/}

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.mainView,
          {
            paddingBottom: (mobileH * 8) / 100,
          },
        ]}>
        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
            marginTop: (mobileH * 2) / 100,
          }}>
          <Text
            style={{
              color: Colors.profileColor,
              fontFamily: Font.FontBold,
              fontSize: (mobileW * 3.8) / 100,
            }}>
            {`${Lang_chg.add_photos_upto_20_txt[config.language]} : `}{' '}
            <Text
              style={{
                color: Colors.theme_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.8) / 100,
              }}>
              50 {config.currency}
            </Text>
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setAddPhotos(prev => !prev)}>
            <Image
              source={
                addPhotos
                  ? localimag.icon_selected_checkBox
                  : localimag.icon_checkBox_empty
              }
              style={{
                width: (mobileW * 6) / 100,
                height: (mobileW * 6) / 100,
                resizeMode: 'contain',
                tintColor: !addPhotos ? Colors.darkGrey : null,
              }}
            />
          </TouchableOpacity>
        </View> */}

        <View
          style={{
            marginTop: (mobileH * 2) / 100,
          }}>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 3) / 100,
              fontFamily: Font.FontMediumManrope,
              lineHeight: (mobileH * 2.5) / 100,
            }}>
            {Lang_chg.take_clear_photos_txt[config.language]}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              marginTop: (mobileH * 2) / 100,
            }}>
            <View
              style={{
                width: (mobileW * 90) / 100,
                height: (mobileH * 32) / 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: (mobileW * 1) / 100,
                borderColor: Colors.imageContainerBorderColor,
                borderWidth: (mobileW * 0.7) / 100,
                backgroundColor: Colors.imagebackGroundColor,
              }}>
              <Image
                source={localimag.icon_upload_image_icon}
                style={{
                  width: (mobileW * 28) / 100,
                  height: (mobileW * 28) / 100,
                }}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              marginTop: (mobileH * 2) / 100,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity activeOpacity={0.8} style={{}}>
              <View
                style={{
                  width: (mobileW * 28) / 100,
                  height: (mobileH * 8) / 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: (mobileW * 1) / 100,
                  borderColor: Colors.imageContainerBorderColor,
                  borderWidth: (mobileW * 0.7) / 100,
                  backgroundColor: Colors.imagebackGroundColor,
                }}>
                <Image
                  source={localimag.icon_upload_image_icon}
                  style={{
                    width: (mobileW * 8) / 100,
                    height: (mobileW * 8) / 100,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{}}>
              <View
                style={{
                  width: (mobileW * 28) / 100,
                  height: (mobileH * 8) / 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: (mobileW * 1) / 100,
                  borderColor: Colors.imageContainerBorderColor,
                  borderWidth: (mobileW * 0.7) / 100,
                  backgroundColor: Colors.imagebackGroundColor,
                }}>
                <Image
                  source={localimag.icon_upload_image_icon}
                  style={{
                    width: (mobileW * 8) / 100,
                    height: (mobileW * 8) / 100,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{}}>
              <View
                style={{
                  width: (mobileW * 28) / 100,
                  height: (mobileH * 8) / 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: (mobileW * 0.7) / 100,
                  borderColor: Colors.imageContainerBorderColor,
                  borderRadius: (mobileW * 1) / 100,
                  backgroundColor: Colors.imagebackGroundColor,
                }}>
                <Image
                  source={localimag.icon_upload_image_icon}
                  style={{
                    width: (mobileW * 8) / 100,
                    height: (mobileW * 8) / 100,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* -------------------------------- */}

          <View
            style={{
              marginTop: (mobileH * 2.8) / 100,
            }}>
            {/*---------------- add upto 3 photos -------------- */}

            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => {

              // }}
              style={{
                //marginTop: (mobileH * 4) / 100,
                width: (mobileW * 90) / 100,
                alignSelf: 'center',
                backgroundColor: freeStatus
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
                    source={localimag.icon_addUptoThree}
                    style={{
                      width: (mobileW * 6) / 100,
                      height: (mobileW * 6) / 100,
                    }}
                  />

                  <View
                    style={{
                      marginLeft: (mobileW * 2.5) / 100,
                    }}>
                    <Text
                      style={{
                        color: Colors.black_color,
                        fontSize: (mobileW * 3.8) / 100,
                        fontFamily: Font.FontBoldManrope,
                      }}>
                      {Lang_chg.addUptoThree_txt[config.language]}
                    </Text>
                    <Text
                      style={{
                        color: Colors.darkGrey,
                        fontSize: (mobileW * 2.5) / 100,
                        fontFamily: Font.FontBoldManrope,
                      }}>
                      {Lang_chg.continueForFree_txt[config.language]}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    marginRight: (mobileW * 3) / 100,
                  }}>
                  <Image
                    source={
                      freeStatus
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

            {/* -------------------------------------------------- */}

            {/* -------------- add upto 10 photos ------------ */}
            <View
              style={{
                marginTop: (mobileH * 1.5) / 100,
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                // onPress={() => {

                // }}
                style={{
                  width: (mobileW * 90) / 100,
                  alignSelf: 'center',
                  backgroundColor: buyStatus
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
                      source={localimag.icon_addUptoTen}
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
                            width: (mobileW * 49.5) / 100,
                          }}>
                          {Lang_chg.addUptoTen_txt[config.language]}
                        </Text>
                        <Text
                          style={{
                            color: Colors.theme_color,
                            fontSize: (mobileW * 3.8) / 100,
                            fontFamily: Font.FontBoldManrope,
                          }}>
                          40 {config.currency}
                        </Text>
                      </View>

                      <Text
                        style={{
                          color: Colors.darkGrey,
                          fontSize: (mobileW * 2.5) / 100,
                          fontFamily: Font.FontBoldManrope,
                        }}>
                        {Lang_chg.buyersLoveDetails_txt[config.language]}
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    activeOpacity={1}
                    style={{
                      marginRight: (mobileW * 3) / 100,
                    }}>
                    <Image
                      source={
                        buyStatus
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
            {/* ----------------------------------------------------------- */}
          </View>

          {/* btn view */}
          <View
            style={{
              marginTop:
                config.device_type == 'ios'
                  ? (mobileH * 5.5) / 100
                  : (mobileH * 5) / 100,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ButtonComponent
              onPress={() => navigation.goBack()}
              title={Lang_chg.back_txt[config.language]}
              btnStyle={{
                width: (mobileW * 30) / 100,
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
                navigation.navigate('SellStep_3');
              }}
              title={Lang_chg.next_txt[config.language]}
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

          {/* <TouchableOpacity
            activeOpacity={0.8}
            style={{
              alignSelf: 'center',
              marginTop: (mobileH * 2) / 100,
            }}>
            <Text
              style={{
                fontSize: (mobileW * 3.5) / 100,
                color: Colors.draftColor,
                fontFamily: Font.FontRegular,
              }}>
              {Lang_chg.save_as_draft_txt[config.language]}
            </Text>

            <View
              style={{
                backgroundColor: Colors.draftColor,
                marginTop: (mobileH * 0.1) / 100,
                height: (mobileW * 0.3) / 100,
              }}></View>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default SellStep_2;

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
