import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import AppstatusBar from '../Componant/AppstatusBar';

import {
  Colors,
  config,
  Font,
  Lang_chg,
  mobileH,
  mobileW,
  localimag,
} from '../Provider/utilslib/Utils';
import {useNavigation, useRoute} from '@react-navigation/native';
import ButtonComponent from '../Componant/ButtonComponent';
import {Platform} from 'react-native';
import CartView from '../Componant/CartView';

const ChatScreen = () => {
  const {goBack, navigate} = useNavigation();
  const {params} = useRoute();
  const FlatListRef = useRef(null);

  const [chatData, setChatData] = useState([
    {
      id: 0,
      img: require('../Icons/Images/image_user_4.jpg'),
      message_1:
        'Hello! I see you have agged some items to your cart our summer dresses ar e quite popular. need any help with sizing?',
      time: '10:00 AM',
      name: 'Oasis Boutique',
      message_2: '',
    },
    {
      id: 1,
      img: '',
      message_1:
        'Hii! yes. i’m unsure about the size for the floral maxidress.',
      time: '10:03 AM',
      name: 'You',
      message_2: '',
    },
    {
      id: 0,
      img: require('../Icons/Images/image_user_4.jpg'),
      message_1:
        'No worries!The maxi dress runs slightly large. what’s your usual size? I can recommend the best fit.',
      name: 'Oasis Boutique',
      time: '10:05 AM',
      message_2: [
        {
          id: 0,
          img: localimag.image__brown_headPhone,
        },
        {
          id: 1,
          img: localimag.image_blackCamera,
        },
        {
          id: 2,
          img: localimag.image_redIphone,
        },
      ],
    },
  ]);

  const [bottom, setBottom] = useState(0);

  const [modalVisiblele, setModalVisible] = useState(false);
  const [confirmBlock, setConfirmBlock] = useState(false);

  const [chatStatus, setChatStatus] = useState(true);
  const [cartStatus, setCartStatus] = useState(false);

  const [cartData, setCartData] = useState([
    {
      id: 0,
      userImage: require('../Icons/Images/image_store_2.jpg'),
      userName: 'Oasis Boutique',
      total: '13,500',
      shareStatus: true,
      productArr: [
        {
          id: 0,
          image: localimag.image_christmas,
          title: 'Urban chic premium comfort...',
          location: 'Paris',
          count: 9,
          price: '13,500',
        },
        {
          id: 1,
          image: localimag.image_christmas,
          title: 'Urban chic premium comfort...',
          location: 'Paris',
          count: 9,
          price: '13,500',
        },
        {
          id: 2,
          image: localimag.image_christmas,
          title: 'Urban chic premium comfort...',
          location: 'Paris',
          count: 9,
          price: '13,500',
        },
      ],
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
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
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
            textAlign: 'center',
          }}>
          {params?.name}
        </Text>

        {params?.user_id != 0 ? (
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            activeOpacity={0.8}
            style={{
              height: (mobileW * 6) / 100,
              width: (mobileW * 6) / 100,
            }}>
            <Image
              source={localimag.icon_optionWhite}
              style={{
                height: (mobileW * 6) / 100,
                width: (mobileW * 6) / 100,
                resizeMode: 'contain',
                tintColor: Colors.black_color,
              }}
            />
          </TouchableOpacity>
        ) : (
          <View
            style={{
              width: (mobileW * 5) / 100,
            }}></View>
        )}
      </View>

      {/* top tab  */}

      <View
        style={{
          width: mobileW,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: (mobileH * 3) / 100,
        }}>
        {/* chat tab */}
        <View
          style={{
            borderBottomWidth: chatStatus ? (mobileW * 0.4) / 100 : null,
            borderBottomColor: chatStatus ? Colors.searchBorderColor : null,
            width: (mobileW * 50) / 100,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setCartStatus(false);
              setChatStatus(true);
            }}
            style={{
              borderBottomWidth: chatStatus ? (mobileW * 0.5) / 100 : null,
              borderBottomColor: chatStatus ? Colors.theme_color : null,
              height: (mobileH * 5) / 100,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: (mobileW * 3) / 100,
              flexDirection: 'row',
            }}>
            <Image
              source={localimag.icon_chatGrey}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                tintColor: chatStatus ? Colors.theme_color : Colors.darkGrey,
              }}
            />

            <Text
              style={{
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBoldManrope,
                color: chatStatus ? Colors.theme_color : Colors.tabTextColor,
                marginLeft: (mobileW * 2) / 100,
              }}>
              {Lang_chg.chat_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* cart tab */}
        <View
          style={{
            borderBottomWidth: cartStatus ? (mobileW * 0.4) / 100 : null,
            borderBottomColor: cartStatus ? Colors.searchBorderColor : null,
            width: (mobileW * 50) / 100,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setChatStatus(false);
              setCartStatus(true);
            }}
            style={{
              borderBottomWidth: cartStatus ? (mobileW * 0.5) / 100 : null,
              borderBottomColor: cartStatus ? Colors.theme_color : null,
              height: (mobileH * 5) / 100,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: (mobileW * 3) / 100,
              flexDirection: 'row',
            }}>
            <Image
              source={localimag.icon_store_deactive}
              style={{
                width: (mobileW * 4.3) / 100,
                height: (mobileW * 4.3) / 100,
                tintColor: cartStatus ? Colors.theme_color : Colors.darkGrey,
              }}
            />
            <Text
              style={{
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBoldManrope,
                color: cartStatus ? Colors.theme_color : Colors.darkGrey,
                marginLeft: (mobileW * 2) / 100,
              }}>
              {Lang_chg.cart_txt[config.language]}
            </Text>

            <View
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                borderRadius: (mobileW * 30) / 100,
                backgroundColor: Colors.deleteColor,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: (mobileW * 2) / 100,
              }}>
              <Text
                style={{
                  color: Colors.whiteColor,
                  fontSize: (mobileW * 2.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                }}>
                9
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* block and report modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblele}
        onRequestClose={() => {
          consolepro.consolelog('backkac');
          setModalVisible(false);
        }}>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
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
              height: (mobileH * 22) / 100,
              width: mobileW,
              backgroundColor: Colors.whiteColor,
              alignSelf: 'center',
              borderTopRightRadius: (mobileW * 7) / 100,
              borderTopLeftRadius: (mobileW * 7) / 100,
            }}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              style={{
                width: (mobileW * 22) / 100,
                height: (mobileH * 0.4) / 100,
                borderRadius: (mobileW * 30) / 100,
                backgroundColor: Colors.modalTabColor,
                alignSelf: 'center',
                marginTop: (mobileH * 1.5) / 100,
              }}></TouchableOpacity>

            <View
              style={{
                marginLeft: (mobileW * 6) / 100,
                marginTop: (mobileH * 5) / 100,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  navigate('ReportUser');
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={localimag.icon_report_person}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.black_color,
                    marginLeft: (mobileW * 3) / 100,
                  }}>
                  {Lang_chg.report_txt[config.language]}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setConfirmBlock(true);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: (mobileH * 4.5) / 100,
                }}>
                <Image
                  source={localimag.icon_block}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.black_color,
                    marginLeft: (mobileW * 3) / 100,
                  }}>
                  {Lang_chg.block_txt[config.language]}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* --------------- */}

      {/* confirm block modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmBlock}
        onRequestClose={() => {
          consolepro.consolelog('backkac');
          setConfirmBlock(false);
        }}>
        <TouchableOpacity
          onPress={() => setConfirmBlock(false)}
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000090',
          }}>
          <View
            style={{
              width: (mobileW * 85) / 100,
              height: (mobileW * 50) / 100,
              borderRadius: (mobileW * 3) / 100,
              backgroundColor: Colors.whiteColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              {Lang_chg.block_txt[config.language]}
            </Text>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
                marginTop: (mobileH * 1) / 100,
              }}>
              {Lang_chg.are_you_sure_you_want_to_block[config.language]}
            </Text>

            <View
              style={{
                marginTop: (mobileH * 3) / 100,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ButtonComponent
                onPress={() => setConfirmBlock(false)}
                title={Lang_chg.back_txt[config.language]}
                btnStyle={{
                  width: (mobileW * 30) / 100,
                  borderRadius: (mobileW * 1) / 100,
                  backgroundColor: Colors.whiteColor,
                  borderWidth: (mobileW * 0.2) / 100,
                  borderColor: Colors.blockBorderColor,
                  height: (mobileH * 6) / 100,
                }}
                txtStyle={{
                  color: Colors.blockBorderColor,
                }}
              />

              <ButtonComponent
                onPress={() => {
                  setConfirmBlock(false);
                  goBack();
                }}
                title={Lang_chg.yes_txt[config.language]}
                btnStyle={{
                  width: (mobileW * 30) / 100,
                  borderRadius: (mobileW * 1) / 100,
                  height: (mobileH * 6) / 100,
                  marginLeft: (mobileW * 3) / 100,
                }}
                active={true}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* ----------------------------- */}

      {/* messages box */}

      {chatStatus && (
        <>
          <View
            style={{
              // width: '95%',
              // alignSelf: 'center',
              paddingHorizontal: (mobileW * 4) / 100,
              // paddingTop: (mobileH * 2) / 100,
              paddingBottom: (mobileH * 10) / 100,
              flex: 1,
              // marginTop: (mobileH * 3) / 100,
              backgroundColor: Colors.chatbackgroundColor,
            }}>
            <FlatList
              data={chatData}
              showsVerticalScrollIndicator={false}
              ref={FlatListRef}
              onContentSizeChange={() => FlatListRef.current.scrollToEnd()}
              contentContainerStyle={{}}
              keyboardDismissMode="interactive"
              keyboardShouldPersistTaps="handled"
              renderItem={({item, index}) => (
                <>
                  {item.id != 1 ? (
                    <View style={{alignSelf: 'flex-start', width: '80%'}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: (mobileH * 4) / 100,
                        }}>
                        <Image
                          source={params?.image}
                          style={{
                            width: (mobileW * 9) / 100,
                            height: (mobileW * 9) / 100,
                            borderRadius: (mobileW * 30) / 100,
                            // resizeMode: 'contain',
                          }}
                        />

                        <View
                          style={{
                            alignSelf: 'flex-start',
                            marginLeft: (mobileW * 2) / 100,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}>
                            <Text
                              style={{
                                fontSize: (mobileW * 2.5) / 100,
                                fontFamily: Font.FontMediumManrope,
                                color: Colors.darkGrey,
                              }}>
                              {item.name}
                            </Text>

                            {item.time && (
                              <View
                                style={{
                                  marginBottom: (mobileH * 1) / 100,
                                  marginTop: (mobileH * 1.5) / 100,
                                  marginRight: (mobileW * 1) / 100,
                                }}>
                                <Text
                                  style={{
                                    fontSize: (mobileW * 2.5) / 100,
                                    fontFamily: Font.FontMediumManrope,
                                    color: Colors.darkGrey,
                                  }}>
                                  {item.time}
                                </Text>
                              </View>
                            )}
                          </View>

                          <View>
                            <View
                              style={{
                                backgroundColor: Colors.whiteColor,
                                paddingVertical: (mobileH * 1.5) / 100,
                                paddingHorizontal: (mobileW * 3) / 100,
                                borderTopRightRadius: (mobileW * 2) / 100,
                                borderBottomRightRadius: (mobileW * 2) / 100,
                                borderBottomLeftRadius: (mobileW * 2) / 100,
                                // marginTop: (mobileH * 0.5) / 100,
                              }}>
                              <Text
                                style={{
                                  fontSize: (mobileW * 3.5) / 100,
                                  fontFamily: Font.FontLightManrope,
                                  color: Colors.black_color,
                                }}>
                                {item.message_1}
                              </Text>
                            </View>

                            {item?.message_2 && item.message_2.length != 0 && (
                              <View
                                style={{
                                  backgroundColor: Colors.whiteColor,
                                  paddingVertical: (mobileH * 1.5) / 100,
                                  paddingHorizontal: (mobileW * 3) / 100,
                                  alignSelf: 'flex-start',
                                  // marginLeft: (mobileW * 2) / 100,
                                  borderTopRightRadius: (mobileW * 2) / 100,
                                  borderBottomRightRadius: (mobileW * 2) / 100,
                                  borderBottomLeftRadius: (mobileW * 2) / 100,
                                  marginTop: (mobileH * 1) / 100,
                                }}>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                  }}>
                                  {item.message_2.map((ele, indx) => (
                                    <Image
                                      key={`${indx}`}
                                      source={ele.img}
                                      style={{
                                        width: (mobileW * 18) / 100,
                                        height: (mobileW * 18) / 100,
                                        // marginTop: (mobileH * 1) / 100,
                                        borderRadius: (mobileW * 2) / 100,
                                        marginRight:
                                          indx != item.message_2.length - 1
                                            ? (mobileW * 3) / 100
                                            : 0,
                                      }}
                                    />
                                  ))}
                                </View>
                              </View>
                            )}
                          </View>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View
                      style={{
                        alignSelf: 'flex-end',
                        width: '80%',
                      }}>
                      <View
                        style={{
                          alignSelf: 'flex-end',
                          marginRight: (mobileW * 3) / 100,
                          marginTop: (mobileH * 2) / 100,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <View
                            style={{
                              marginRight: (mobileW * 3) / 100,
                              marginBottom: (mobileH * 1) / 100,
                              marginTop: (mobileH * 1.5) / 100,
                              alignSelf: 'flex-end',
                            }}>
                            <Text
                              style={{
                                fontSize: (mobileW * 2.5) / 100,
                                fontFamily: Font.FontMediumManrope,
                                color: Colors.darkGrey,
                              }}>
                              {item.time}
                            </Text>
                          </View>

                          <Text
                            style={{
                              fontSize: (mobileW * 2.5) / 100,
                              fontFamily: Font.FontMediumManrope,
                              color: Colors.darkGrey,
                              marginRight: (mobileW * 1) / 100,
                            }}>
                            {item.name}
                          </Text>
                        </View>

                        <View
                          style={{
                            backgroundColor: Colors.theme_color,
                            paddingVertical: (mobileH * 1.5) / 100,
                            paddingHorizontal: (mobileW * 3) / 100,
                            borderTopLeftRadius: (mobileW * 2) / 100,
                            borderBottomLeftRadius: (mobileW * 2) / 100,
                            borderBottomRightRadius: (mobileW * 2) / 100,
                          }}>
                          <Text
                            style={{
                              fontSize: (mobileW * 3.5) / 100,
                              fontFamily: Font.FontLightManrope,
                              color: Colors.whiteColor,
                            }}>
                            {item.message_1}
                          </Text>
                        </View>
                        {item.message_2 && item.message_2.length != 0 && (
                          <View
                            style={{
                              backgroundColor: Colors.chatBack,
                              paddingVertical: (mobileH * 1.5) / 100,
                              paddingHorizontal: (mobileW * 5) / 100,
                              alignSelf: 'flex-end',
                              marginRight: (mobileW * 3) / 100,
                              borderTopLeftRadius: (mobileW * 4) / 100,
                              borderBottomLeftRadius: (mobileW * 4) / 100,
                              borderBottomRightRadius: (mobileW * 4) / 100,
                              marginTop: (mobileH * 1.5) / 100,
                            }}>
                            <Text
                              style={{
                                fontSize: (mobileW * 3.8) / 100,
                                fontFamily: Font.FontRegular,
                                color: Colors.black_color,
                              }}>
                              {item.message_2}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
                  )}
                </>
              )}
            />
          </View>

          {/* keyborad avoiding view */}

          {/* send view */}
          <KeyboardAvoidingView
            style={{
              backgroundColor: Colors.whiteColor,
              flex: 1,
              position: 'absolute',
              bottom: 0,
            }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
            <View
              style={{
                height: (mobileH * 10) / 100,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: mobileW,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,

                elevation: 18,
                backgroundColor: Colors.whiteColor,
                paddingHorizontal: (mobileW * 5) / 100,
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {}}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: (mobileW * 7) / 100,
                  width: (mobileW * 7) / 100,
                  backgroundColor: Colors.whiteColor,
                }}>
                <Image
                  source={localimag.icon_camera}
                  resizeMode="contain"
                  style={{
                    height: (mobileW * 7) / 100,
                    width: (mobileW * 7) / 100,
                    justifyContent: 'center',
                    tintColor: Colors.cartBorderColor,
                  }}
                />
              </TouchableOpacity>

              <View
                style={{
                  width: '80%',
                  height: (mobileH * 6) / 100,
                  borderWidth: (mobileW * 0.2) / 100,
                  borderRadius: (mobileW * 30) / 100,
                  paddingHorizontal: (mobileW * 3) / 100,
                  borderColor: Colors.hourAgoColor,
                }}>
                <TextInput
                  keyboardType="default"
                  returnKeyLabel="done"
                  returnKeyType="done"
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    paddingVertical: (mobileW * 0.01) / 100,
                    fontFamily: Font.FontMediumManrope,
                    color: Colors.black_color,
                    height: (mobileH * 6) / 100,
                  }}
                  placeholderTextColor={Colors.skipColor}
                  placeholder={Lang_chg.type_message_txt[config.language]}
                  onFocus={() => {
                    setBottom(45);
                  }}
                  onBlur={() => {
                    setBottom(0);
                  }}></TextInput>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {}}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: (mobileW * 6) / 100,
                  width: (mobileW * 6) / 100,
                  backgroundColor: Colors.whiteColor,
                }}>
                <Image
                  source={localimag.icon_chatSend}
                  resizeMode="contain"
                  style={{
                    height: (mobileW * 6) / 100,
                    width: (mobileW * 6) / 100,
                    justifyContent: 'center',
                  }}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </>
      )}

      {cartStatus && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: (mobileW * 5) / 100,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: (mobileH * 10) / 100,
          }}>
          <CartView
            cartData={cartData}
            shareWithSellerFunc={cartIndex => shareWithSellerFunc(cartIndex)}
            cancelShareFunc={status => cancelShareFunc(status)}
            showCartBag={false}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
  },
});
