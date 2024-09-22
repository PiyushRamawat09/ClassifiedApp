import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputField from '../Componant/InputField';

const SellStep_3 = () => {
  const navigation = useNavigation();
  const [productStatus, setProductStatus] = useState(false);
  const [description, setDescription] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState('');
  const [productCondition, setProductionCondition] = useState([
    {
      id: 0,
      type: 'New',
      status: false,
    },
    {
      id: 1,
      type: 'Used',
      status: false,
    },
  ]);

  const [conditionModal, setConditionModal] = useState(false);
  const [deliveryOptionsModal, setDeliveryOptionModal] = useState(false);
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

      {/* ---- product conditional modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={conditionModal}
        onRequestClose={() => {
          setConditionModal(false);
        }}>
        <TouchableOpacity
          onPress={() => setConditionModal(false)}
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#00000090',
          }}>
          <View
            style={{
              position: 'absolute',
              bottom: mobileH * 0,
              height: (mobileH * 48) / 100,
              width: mobileW,
              backgroundColor: Colors.whiteColor,
              alignSelf: 'center',
              borderTopRightRadius: (mobileW * 7) / 100,
              borderTopLeftRadius: (mobileW * 7) / 100,
            }}>
            <TouchableOpacity
              onPress={() => setConditionModal(false)}
              style={{
                width: (mobileW * 22) / 100,
                height: (mobileH * 0.4) / 100,
                borderRadius: (mobileW * 30) / 100,
                backgroundColor: Colors.modalTabColor,
                alignSelf: 'center',
                marginTop: (mobileH * 1.5) / 100,
              }}></TouchableOpacity>

            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 4.5) / 100,
                fontFamily: Font.FontBoldLexend,
                textAlign: 'center',
                marginTop: (mobileH * 3) / 100,
              }}>
              {Lang_chg.product_condition_txt[config.language]}
            </Text>

            <View
              style={{
                marginLeft: (mobileW * 6) / 100,
                marginTop: (mobileH * 5) / 100,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setConditionModal(false);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginRight: (mobileW * 5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.black_color,
                  }}>
                  {Lang_chg.new_txt[config.language]}
                </Text>

                <Image
                  source={localimag.icon_circle}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>

              <View
                style={{
                  height: (mobileW * 0.1) / 100,
                  backgroundColor: Colors.borderGrey,
                  width: (mobileW * 90) / 100,
                  marginTop: (mobileH * 3) / 100,
                }}></View>

              <TouchableOpacity
                onPress={() => {
                  setConditionModal(false);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: (mobileH * 3) / 100,
                  marginRight: (mobileW * 5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.black_color,
                  }}>
                  {Lang_chg.veryGoodCondition_txt[config.language]}
                </Text>

                <Image
                  source={localimag.icon_circle}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>

              <View
                style={{
                  height: (mobileW * 0.1) / 100,
                  backgroundColor: Colors.borderGrey,
                  width: (mobileW * 90) / 100,
                  marginTop: (mobileH * 3) / 100,
                }}></View>

              <TouchableOpacity
                onPress={() => {
                  setConditionModal(false);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: (mobileH * 3) / 100,
                  marginRight: (mobileW * 5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.black_color,
                  }}>
                  {Lang_chg.goodCondition_txt[config.language]}
                </Text>

                <Image
                  source={localimag.icon_circle}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>

              <View
                style={{
                  height: (mobileW * 0.1) / 100,
                  backgroundColor: Colors.borderGrey,
                  width: (mobileW * 90) / 100,
                  marginTop: (mobileH * 3) / 100,
                }}></View>

              <TouchableOpacity
                onPress={() => {
                  setConditionModal(false);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: (mobileH * 3) / 100,
                  marginRight: (mobileW * 5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.black_color,
                  }}>
                  {Lang_chg.acceptTable_txt[config.language]}
                </Text>

                <Image
                  source={localimag.icon_circle}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* ------------------------------------------------- */}

      {/* ---- Delivery otional modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={deliveryOptionsModal}
        onRequestClose={() => {
          setDeliveryOptionModal(false);
        }}>
        <TouchableOpacity
          onPress={() => setDeliveryOptionModal(false)}
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#00000090',
          }}>
          <View
            style={{
              position: 'absolute',
              bottom: mobileH * 0,
              height: (mobileH * 32) / 100,
              width: mobileW,
              backgroundColor: Colors.whiteColor,
              alignSelf: 'center',
              borderTopRightRadius: (mobileW * 7) / 100,
              borderTopLeftRadius: (mobileW * 7) / 100,
            }}>
            <TouchableOpacity
              onPress={() => setDeliveryOptionModal(false)}
              style={{
                width: (mobileW * 22) / 100,
                height: (mobileH * 0.4) / 100,
                borderRadius: (mobileW * 30) / 100,
                backgroundColor: Colors.modalTabColor,
                alignSelf: 'center',
                marginTop: (mobileH * 1.5) / 100,
              }}></TouchableOpacity>

            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 4.5) / 100,
                fontFamily: Font.FontBoldLexend,
                textAlign: 'center',
                marginTop: (mobileH * 3) / 100,
              }}>
              {Lang_chg.deliveryOptions_txt[config.language]}
            </Text>

            <View
              style={{
                marginLeft: (mobileW * 6) / 100,
                marginTop: (mobileH * 5) / 100,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setDeliveryOptionModal(false);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginRight: (mobileW * 5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.black_color,
                  }}>
                  {Lang_chg.deliveryIsAvailable_txt[config.language]}
                </Text>

                <Image
                  source={localimag.icon_circle}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>

              <View
                style={{
                  height: (mobileW * 0.1) / 100,
                  backgroundColor: Colors.borderGrey,
                  width: (mobileW * 90) / 100,
                  marginTop: (mobileH * 3) / 100,
                }}></View>

              <TouchableOpacity
                onPress={() => {
                  setDeliveryOptionModal(false);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginRight: (mobileW * 5) / 100,
                  marginTop: (mobileH * 3) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.black_color,
                  }}>
                  {Lang_chg.deliverynotAvailable_txt[config.language]}
                </Text>

                <Image
                  source={localimag.icon_circle}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* ------------------------------------------------- */}

      <View
        style={{
          marginTop: (mobileH * 2) / 100,
          alignSelf: 'center',
        }}>
        <Image
          source={localimag.icon_listing_step_3}
          style={{
            width: (mobileW * 65) / 100,
            height: (mobileH * 8) / 100,
            resizeMode: 'contain',
          }}
        />
      </View>

      {/* -----------------------------------*/}
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.mainView,
          {
            paddingBottom: (mobileH * 8) / 100,
          },
        ]}>
        {/* ----------------- Product condition -------------------- */}

        <View
          style={{
            marginTop: (mobileH * 2.5) / 100,
          }}>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 3) / 100,
              fontFamily: Font.FontMediumManrope,
              lineHeight: (mobileH * 2.5) / 100,
            }}>
            {Lang_chg.choosing_correct_Category[config.language]}
          </Text>

          <Text
            style={{
              color: Colors.darkGrey,
              fontFamily: Font.FontBoldManrope,
              fontSize: (mobileW * 4) / 100,
              marginTop: (mobileH * 1.5) / 100,
            }}>
            {Lang_chg.product_condition_txt[config.language]}
          </Text>

          <TouchableOpacity
            onPress={() => setConditionModal(true)}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 90) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              marginTop: (mobileH * 1) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 7.5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontBoldManrope,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              New
            </Text>

            <Image
              source={
                productStatus ? localimag.icon_dropUp : localimag.icon_dropDown
              }
              style={{
                width: productStatus
                  ? (mobileW * 4.5) / 100
                  : (mobileW * 3.5) / 100,
                height: productStatus
                  ? (mobileW * 4.5) / 100
                  : (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </View>

        {/* {productStatus && (
          <>
            {productCondition.map((item, index) => {
              return (
                <TouchableOpacity
                  key={`${item.id}`}
                  activeOpacity={0.8}
                  style={{
                    width: (mobileW * 90) / 100,
                    borderWidth: (mobileW * 0.3) / 100,
                    borderColor: Colors.chatBack,
                    borderRadius: (mobileW * 2) / 100,
                    marginTop: (mobileH * 1.5) / 100,
                    paddingHorizontal: (mobileW * 3) / 100,
                    height: (mobileH * 5) / 100,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: Colors.darkGrey,
                      fontFamily: Font.FontMediumManrope,
                      fontSize: (mobileW * 3.5) / 100,
                    }}>
                    {item.type}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </>
        )} */}

        {/* --------------------------Delivery options----------------------------------- */}

        <View
          style={{
            marginTop: (mobileH * 2.5) / 100,
          }}>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 3) / 100,
              fontFamily: Font.FontMediumManrope,
              lineHeight: (mobileH * 2.5) / 100,
            }}>
            {Lang_chg.choosing_right_delivery_option_txt[config.language]}
          </Text>

          <Text
            style={{
              color: Colors.darkGrey,
              fontFamily: Font.FontBoldManrope,
              fontSize: (mobileW * 4) / 100,
              marginTop: (mobileH * 1.5) / 100,
            }}>
            {Lang_chg.deliveryOptions_txt[config.language]}
          </Text>

          <TouchableOpacity
            onPress={() => setDeliveryOptionModal(true)}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 90) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              marginTop: (mobileH * 1) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 7.5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontBoldManrope,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.deliveryAvailable_txt[config.language]}
            </Text>

            <Image
              source={
                productStatus ? localimag.icon_dropUp : localimag.icon_dropDown
              }
              style={{
                width: productStatus
                  ? (mobileW * 4.5) / 100
                  : (mobileW * 3.5) / 100,
                height: productStatus
                  ? (mobileW * 4.5) / 100
                  : (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </View>

        {/* -------------------------------------------------- */}

        {/* --------------------------Location----------------------------------- */}

        <View
          style={{
            marginTop: (mobileH * 2.5) / 100,
          }}>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 3) / 100,
              fontFamily: Font.FontMediumManrope,
              lineHeight: (mobileH * 2.5) / 100,
            }}>
            {Lang_chg.theSelectLocationFeature_txt[config.language]}
          </Text>

          <Text
            style={{
              color: Colors.darkGrey,
              fontFamily: Font.FontBoldManrope,
              fontSize: (mobileW * 4) / 100,
              marginTop: (mobileH * 1.5) / 100,
            }}>
            {Lang_chg.location_txt[config.language]}
          </Text>

          <TouchableOpacity
            // onPress={() => setProductStatus(prev => !prev)}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 90) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              marginTop: (mobileH * 1) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 7.5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontBoldManrope,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              Paris
            </Text>

            <Image
              source={
                productStatus ? localimag.icon_dropUp : localimag.icon_dropDown
              }
              style={{
                width: productStatus
                  ? (mobileW * 4.5) / 100
                  : (mobileW * 3.5) / 100,
                height: productStatus
                  ? (mobileW * 4.5) / 100
                  : (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </View>

        {/* -------------------------------------------------- */}

        {/* ----------description------------------------ */}

        <View
          style={{
            marginTop: (mobileH * 3) / 100,
          }}>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 3) / 100,
              fontFamily: Font.FontMediumManrope,
              lineHeight: (mobileH * 2.5) / 100,
            }}>
            {Lang_chg.provide_all_essentail_txt[config.language]}
          </Text>

          <InputField
            multiline={true}
            title={Lang_chg.description_txt[config.language]}
            placeholder={Lang_chg.enter_description_txt[config.language]}
            value={description}
            setValue={setDescription}
            keyboardType="default"
            maxLength={250}
            inputContainerStyle={{
              marginTop: (mobileH * 1.5) / 100,
            }}
            inputFieldStyle={{
              height: (mobileH * 16) / 100,
              textAlignVertical: 'top',
              paddingVertical: (mobileH * 1.5) / 100,
              marginTop: (mobileH * 1) / 100,
            }}
            titleStyle={{
              marginBottom: (mobileH * 0.2) / 100,
              color: Colors.darkGrey,
            }}
          />
        </View>
        {/* ------------------------------ */}

        {/* btn view */}
        <View
          style={{
            marginTop: (mobileH * 6) / 100,
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
              navigation.navigate('SellStep_4');
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
      </KeyboardAwareScrollView>

      {/* ----------------------------- */}
    </View>
  );
};

export default SellStep_3;

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
