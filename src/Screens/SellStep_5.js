import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  TextInput,
  Keyboard,
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

const SellStep_5 = () => {
  const navigation = useNavigation();

  const [addPromo, setAddPromo] = useState(false);
  const [promoModal, setPromoModal] = useState(false);

  const [promoCode, setPromoCode] = useState('');

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

      {/* Chat Modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={promoModal}
        onRequestClose={() => {
          consolepro.consolelog('backkac');
          setPromoModal(false);
        }}>
        <TouchableOpacity
          onPress={() => setPromoModal(false)}
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#00000090',
          }}>
          <View
            style={{
              paddingHorizontal: (mobileW * 5) / 100,
              backgroundColor: Colors.whiteColor,
              alignSelf: 'center',
              borderRadius: (mobileW * 2) / 100,
              width: (mobileW * 90) / 100,
              height: (mobileH * 40) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBoldLexend,
                textAlign: 'center',
                marginTop: (mobileH * 4) / 100,
              }}>
              {Lang_chg.promoCode_txt[config.language]}
            </Text>

            <View
              style={{
                marginTop: (mobileH * 5) / 100,
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3.5) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                Add a promo code
              </Text>

              <TextInput
                placeholderTextColor={Colors.darkGrey}
                returnKeyLabel="done"
                returnKeyType="done"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                value={promoCode}
                keyboardType={'default'}
                style={{
                  width: (mobileW * 80) / 100,
                  color: Colors.black_color,
                  fontFamily: Font.FontMediumManrope,
                  fontSize: (mobileW * 3.3) / 100,
                  borderWidth: (mobileW * 0.3) / 100,
                  borderColor: Colors.profileColor,
                  marginTop: (mobileH * 1) / 100,
                  paddingHorizontal: (mobileW * 3) / 100,
                  height: (mobileH * 6.5) / 100,
                  borderRadius: (mobileW * 2) / 100,
                }}
                placeholder={Lang_chg.promoCode_txt[config.language]}
                onChangeText={val => setPromoCode(val)}
              />

              <ButtonComponent
                title={Lang_chg.validate_txt[config.language]}
                onPress={() => {
                  setAddPromo(true);
                  setPromoModal(false);
                }}
                btnStyle={{
                  marginTop: (mobileH * 5) / 100,
                  width: (mobileW * 80) / 100,
                  height: (mobileH * 6) / 100,
                }}
                txtStyle={{
                  fontSize: (mobileW * 3.5) / 100,
                }}
                active={true}
              />

              <Text
                style={{
                  color: Colors.modalTabColor,
                  fontSize: (mobileW * 3) / 100,
                  fontFamily: Font.FontMediumManrope,
                  textAlign: 'center',
                  marginTop: (mobileH * 1) / 100,
                }}>
                {Lang_chg.olnyOnePromocodePerHour_txt[config.language]}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* -------------------------------------------- */}

      <View
        style={{
          marginTop: (mobileH * 2) / 100,
          alignSelf: 'center',
        }}>
        <Image
          source={localimag.icon_listing_step_5}
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
          {Lang_chg.yourListingIsReady_txt[config.language]}
        </Text>

        <View
          style={{
            paddingHorizontal: (mobileW * 5) / 100,
            marginTop: (mobileH * 1) / 100,
            width: (mobileW * 70) / 100,
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
            {Lang_chg.checkTheDetails_txt[config.language]}
          </Text>
        </View>

        {/*------------- product container -----------*/}

        <View
          style={{
            backgroundColor: Colors.cardbackground,
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
            height: (mobileH * 15) / 100,
            borderRadius: (mobileW * 2) / 100,
            marginTop: (mobileH * 3.5) / 100,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: (mobileW * 5) / 100,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              height: (mobileH * 13) / 100,
              width: (mobileW * 86) / 100,
              backgroundColor: Colors.whiteColor,
              borderWidth: (mobileW * 0.1) / 100,
              borderColor: Colors.searchBorderColor,
              borderRadius: (mobileW * 2) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={localimag.image__brown_headPhone}
                style={{
                  height: (mobileH * 13) / 100,
                  width: (mobileW * 35) / 100,
                  borderTopLeftRadius: (mobileW * 2) / 100,
                  borderBottomLeftRadius: (mobileW * 2) / 100,
                }}
              />

              <View
                style={{
                  paddingVertical: (mobileH * 1) / 100,
                  paddingRight: (mobileW * 4) / 100,
                  marginLeft: (mobileW * 3) / 100,
                  width: (mobileW * 45) / 100,
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
                      fontSize: (mobileW * 3.3) / 100,
                      fontFamily: Font.FontBoldManrope,
                    }}>
                    {`1500`}{' '}
                    <Text
                      style={{
                        color: Colors.skipColor,
                        fontSize: (mobileW * 2.5) / 100,
                        fontFamily: Font.FontMediumManrope,
                      }}>
                      {config.currency}
                    </Text>
                  </Text>
                </View>

                <Text
                  style={{
                    color: Colors.title_color,
                    fontSize: (mobileW * 3.3) / 100,
                    fontFamily: Font.FontBoldManrope,
                    marginTop: (mobileH * 0.5) / 100,
                    lineHeight: (mobileH * 2.5) / 100,
                  }}>
                  {`Lenovo I7 11h Gen GTX 1650`}
                </Text>

                <View
                  style={{
                    marginTop: (mobileH * 0.4) / 100,
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
                      resizeMode="contain"
                      source={localimag.icon_location}
                      style={{
                        width: (mobileW * 3) / 100,
                        height: (mobileW * 3) / 100,
                      }}
                    />

                    <Text
                      style={{
                        color: Colors.parisColor,
                        fontSize: (mobileW * 2.8) / 100,
                        fontFamily: Font.FontMediumManrope,
                        marginLeft: (mobileW * 1) / 100,
                      }}>
                      {`Paris`}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* ---------------------------- */}

        {/* details */}
        <View
          style={{
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
            borderRadius: (mobileW * 2) / 100,
            backgroundColor: Colors.cardbackground,
            paddingHorizontal: (mobileW * 5) / 100,
            paddingVertical: (mobileH * 2) / 100,
            marginTop: (mobileH * 3) / 100,
          }}>
          {/* Listing cost */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              {Lang_chg.listingCost_txt[config.language]}
            </Text>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              50 {config.currency}
            </Text>
          </View>
          {/* ------------- */}

          {/* Feature 3(days) */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 1) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              {Lang_chg.featureThreeDays_txt[config.language]}
            </Text>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              100 {config.currency}
            </Text>
          </View>

          {/* ----------------------- */}

          {/* Additional  photos */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 1) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              {Lang_chg.additionalPhotos_txt[config.language]}
            </Text>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              40 {config.currency}
            </Text>
          </View>
          {/* ----------------------- */}

          {/*------------ promo code ----------------- */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 2.5) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_promocode}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}
              />

              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 1) / 100,
                }}>
                {Lang_chg.doYouHavePromoCode_txt[config.language]}
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                addPromo ? setAddPromo(false) : setPromoModal(true)
              }>
              <Image
                source={
                  addPromo
                    ? localimag.icon_removePromo
                    : localimag.icon_addPromo
                }
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                }}
              />
            </TouchableOpacity>
          </View>

          {addPromo && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: (mobileH * 0.5) / 100,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: (mobileW * 5) / 100,
                  }}></View>
                <Text
                  style={{
                    color: Colors.theme_color,
                    fontSize: (mobileW * 3) / 100,
                    fontFamily: Font.FontBoldManrope,
                    marginLeft: (mobileW * 1) / 100,
                  }}>
                  XYZ2500NEW
                </Text>
              </View>

              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3) / 100,
                  fontFamily: Font.FontBoldManrope,
                  marginLeft: (mobileW * 1) / 100,
                }}>
                -30 {config.currency}
              </Text>
            </View>
          )}

          {/* ----------------------- */}

          {/* border */}

          <View
            style={{
              marginTop: (mobileH * 3) / 100,
              backgroundColor: Colors.promoBorderColor,
              height: (mobileH * 0.4) / 100,
            }}></View>

          {/* ------------------------------ */}

          {/* ------------ Total Pay ----------------- */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 1.5) / 100,
            }}>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              {Lang_chg.totalToPay_txt[config.language]}
            </Text>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              190 {config.currency}
            </Text>
          </View>

          {/* ---------------------------------------------- */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: (mobileH * 1.5) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3) / 100,
                fontFamily: Font.FontMediumManrope,
                marginLeft: (mobileW * 1) / 100,
              }}>
              {Lang_chg.youeCreditWillCharge_txt[config.language]}
            </Text>
          </View>
        </View>

        {/* ------------------ */}

        {/* current balance */}

        <View
          style={{
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
            borderRadius: (mobileW * 2) / 100,
            backgroundColor: Colors.cardbackground,
            paddingHorizontal: (mobileW * 3) / 100,
            paddingVertical: (mobileH * 2) / 100,
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
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.youeCurrentBalance_txt[config.language]}
            </Text>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              200 {config.currency}
            </Text>
          </View>
        </View>

        {/* terms of use */}

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 2.8) / 100,
          }}>
          <Image
            source={localimag.icon_checkBox}
            style={{
              width: (mobileW * 6) / 100,
              height: (mobileW * 6) / 100,
              resizeMode: 'contain',
            }}
          />

          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 3.3) / 100,
              fontFamily: Font.FontMediumManrope,
              marginLeft: (mobileW * 2.5) / 100,
              width: (mobileW * 80) / 100,
            }}>
            {Lang_chg.byPostingListing_txt[config.language]}
          </Text>
        </TouchableOpacity>

        {/* ----------------------------*/}

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
              navigation.navigate('Congratulations');
            }}
            title={Lang_chg.publish_my_listing_txt[config.language]}
            btnStyle={{
              width: (mobileW * 58) / 100,
              borderRadius: (mobileW * 2) / 100,
              height: (mobileH * 7) / 100,
              marginLeft: (mobileW * 2) / 100,
            }}
            active={true}
          />
        </View>

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

        {/* --------------------------------- */}
      </ScrollView>
    </View>
  );
};

export default SellStep_5;

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
