import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
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
import ButtonComponent from '../Componant/ButtonComponent';
import {useNavigation} from '@react-navigation/native';

const CreateNewAd = () => {
  const [myStore, setMyStore] = useState(true);
  const [listingStatus, setListingStatus] = useState(false);

  const navigation = useNavigation();
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
            width: (mobileW * 10) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      <View style={styles.mainView}>
        <Text
          style={{
            color: Colors.theme_color,
            fontSize: (mobileW * 6) / 100,
            fontFamily: Font.FontExtraBoldLexend,
            textAlign: 'center',
            width: (mobileW * 60) / 100,
            alignSelf: 'center',
          }}>
          {Lang_chg.boostSuccessOnChizein_txt[config.language]}
        </Text>

        <View
          style={{
            marginTop: (mobileH * 3) / 100,
            paddingHorizontal: (mobileW * 5) / 100,
          }}>
          <Text
            style={{
              color: Colors.listingColor,
              fontSize: (mobileW * 4) / 100,
              fontFamily: Font.FontExtraBoldManrope,
              textAlign: 'center',
              lineHeight: (mobileH * 3.3) / 100,
            }}>
            {Lang_chg.chooseYourPromotingStrategy_txt[config.language]}
          </Text>
        </View>

        <View
          style={{
            marginTop: (mobileH * 4) / 100,
          }}>
          {/*---------------- Promote my store -------------- */}

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setListingStatus(false);
              setMyStore(true);
            }}
            style={{
              //marginTop: (mobileH * 4) / 100,
              width: (mobileW * 85) / 100,
              alignSelf: 'center',
              backgroundColor: myStore
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
                  source={localimag.icon_publishInStore}
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
                      fontSize: (mobileW * 3.6) / 100,
                      fontFamily: Font.FontBoldLexend,
                    }}>
                    {Lang_chg.promoteMyStore_txt[config.language]}
                  </Text>
                  <Text
                    style={{
                      color: Colors.darkGrey,
                      fontSize: (mobileW * 2.7) / 100,
                      fontFamily: Font.FontMediumManrope,
                    }}>
                    {Lang_chg.attractMoreCustomers_txt[config.language]}
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
                    myStore
                      ? localimag.icon_activeRadio
                      : localimag.icon_deactiveRadio
                  }
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                  }}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          {/* -------------------------------------------------- */}

          {/* -------------- Promote a listing ------------ */}
          <View
            style={{
              marginTop: (mobileH * 1.5) / 100,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setMyStore(false);
                setListingStatus(true);
              }}
              style={{
                width: (mobileW * 85) / 100,
                alignSelf: 'center',
                backgroundColor: listingStatus
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
                    source={localimag.icon_privateIndividual}
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
                        fontSize: (mobileW * 3.6) / 100,
                        fontFamily: Font.FontBoldLexend,
                      }}>
                      {Lang_chg.promoteAListing_txt[config.language]}
                    </Text>
                    <Text
                      style={{
                        color: Colors.darkGrey,
                        fontSize: (mobileW * 2.7) / 100,
                        fontFamily: Font.FontMediumManrope,
                      }}>
                      {Lang_chg.boostTheVisibility_txt[config.language]}
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
                      listingStatus
                        ? localimag.icon_activeRadio
                        : localimag.icon_deactiveRadio
                    }
                    style={{
                      width: (mobileW * 5) / 100,
                      height: (mobileW * 5) / 100,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          {/* ----------------------------------------------------------- */}
        </View>
      </View>

      <ButtonComponent
        title={Lang_chg.continue_txt[config.language]}
        onPress={() =>
          navigation.navigate('newAdStep_2', {
            pageStatus: myStore ? 1 : 2,
          })
        }
        btnStyle={{
          position: 'absolute',
          bottom: (mobileH * 8) / 100,
          width: (mobileW * 85) / 100,
        }}
        active={true}
      />
    </View>
  );
};

export default CreateNewAd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    marginTop: (mobileH * 10) / 100,
  },
});
