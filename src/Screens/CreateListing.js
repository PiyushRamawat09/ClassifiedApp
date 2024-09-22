import {StyleSheet, Text, View, Image} from 'react-native';
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
import {TouchableOpacity} from 'react-native-gesture-handler';
import ButtonComponent from '../Componant/ButtonComponent';
import {useNavigation} from '@react-navigation/native';

const CreateListing = () => {
  const [storeStatus, setStoreStatus] = useState(true);
  const [privateStaus, setPrivateStatus] = useState(false);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AppstatusBar />

      {/* --------------header--------- */}
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
          {Lang_chg.createListing_txt[config.language]}
        </Text>
      </View>

      {/* ---------------------------*/}

      <View style={styles.mainView}>
        <Text
          style={{
            color: Colors.theme_color,
            fontSize: (mobileW * 6) / 100,
            fontFamily: Font.FontExtraBoldLexend,
            textAlign: 'center',
          }}>
          {Lang_chg.chooseWhereTo_txt[config.language]}
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
            {Lang_chg.youHaveTheOption_txt[config.language]}
          </Text>
        </View>

        <View
          style={{
            marginTop: (mobileH * 4) / 100,
          }}>
          {/*---------------- Publish in my store -------------- */}

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setPrivateStatus(false);
              setStoreStatus(true);
            }}
            style={{
              //marginTop: (mobileH * 4) / 100,
              width: (mobileW * 85) / 100,
              alignSelf: 'center',
              backgroundColor: storeStatus
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
                      fontSize: (mobileW * 3.8) / 100,
                      fontFamily: Font.FontBoldManrope,
                    }}>
                    {Lang_chg.publishInMyStore_txt[config.language]}
                  </Text>
                  <Text
                    style={{
                      color: Colors.darkGrey,
                      fontSize: (mobileW * 2.5) / 100,
                      fontFamily: Font.FontBoldManrope,
                    }}>
                    {Lang_chg.listingWillbeVisisble_txt[config.language]}
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
                    storeStatus
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

          {/* -------------- Publish as private individual ------------ */}
          <View
            style={{
              marginTop: (mobileH * 1.5) / 100,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setStoreStatus(false);
                setPrivateStatus(true);
              }}
              style={{
                width: (mobileW * 85) / 100,
                alignSelf: 'center',
                backgroundColor: privateStaus
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
                        fontSize: (mobileW * 3.8) / 100,
                        fontFamily: Font.FontBoldManrope,
                      }}>
                      {Lang_chg.publishAsPrivate_txt[config.language]}
                    </Text>
                    <Text
                      style={{
                        color: Colors.darkGrey,
                        fontSize: (mobileW * 2.5) / 100,
                        fontFamily: Font.FontBoldManrope,
                      }}>
                      {Lang_chg.lsitSeparatedFromStore_txt[config.language]}
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
                      privateStaus
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
        title={Lang_chg.start_txt[config.language]}
        onPress={() => navigation.navigate('Sell')}
        btnStyle={{
          position: 'absolute',
          bottom: (mobileH * 7) / 100,
          width: (mobileW * 85) / 100,
        }}
        active={true}
      />
    </View>
  );
};

export default CreateListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    marginTop: (mobileH * 5) / 100,
    backgroundColor: Colors.whiteColor,
    alignItems: 'center',
    paddingHorizontal: (mobileW * 5) / 100,
  },
});
