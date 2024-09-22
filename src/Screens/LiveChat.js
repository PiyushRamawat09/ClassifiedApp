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
import {useNavigation} from '@react-navigation/native';

const LiveChat = () => {
  const {goBack, navigate} = useNavigation();

  const FlatListRef = useRef(null);

  const [chatData, setChatData] = useState([
    {
      id: 0,
      img: localimag.icon_liveChat,
      message_1: 'Hello Andrew',
      message_2: 'i had seen a product so may i asked a question that ',
      time: '10:00 AM',
    },
    {
      id: 1,
      img: '',
      message_1: 'Hello Sophia',
      message_2: 'Yes Tell me the question',
      time: '10:03 AM',
    },
    {
      id: 0,
      img: localimag.icon_liveChat,
      message_1: 'Typing...',
    },
  ]);

  const [bottom, setBottom] = useState(0);

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
          {Lang_chg.chizein_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 10) / 100,
          }}></View>
      </View>

      {/* ----------------------------- */}

      {/* messages box */}

      <View
        style={{
          width: '95%',
          alignSelf: 'center',
          paddingTop: 10,
          paddingBottom: (mobileH * 10) / 100,
          flex: 1,
          marginTop: (mobileH * 3) / 100,
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
                    }}>
                    <Image
                      source={item.img}
                      style={{
                        width: (mobileW * 9) / 100,
                        height: (mobileW * 9) / 100,
                        borderRadius: (mobileW * 30) / 100,
                        // resizeMode: 'contain',
                      }}
                    />

                    <View
                      style={{
                        marginTop: (mobileH * 1.5) / 100,
                      }}>
                      <View
                        style={{
                          backgroundColor: Colors.theme_color,
                          paddingVertical: (mobileH * 1.5) / 100,
                          paddingHorizontal: (mobileW * 5) / 100,
                          alignSelf: 'flex-start',
                          marginLeft: (mobileW * 2) / 100,
                          borderTopRightRadius: (mobileW * 4) / 100,
                          borderBottomRightRadius: (mobileW * 4) / 100,
                          borderBottomLeftRadius: (mobileW * 4) / 100,
                          marginTop: (mobileH * 1) / 100,
                        }}>
                        <Text
                          style={{
                            fontSize: (mobileW * 3.6) / 100,
                            fontFamily: Font.FontLightManrope,
                            color: Colors.whiteColor,
                          }}>
                          {item.message_1}
                        </Text>
                      </View>

                      {item.message_2 && (
                        <View
                          style={{
                            backgroundColor: Colors.theme_color,
                            paddingVertical: (mobileH * 1.5) / 100,
                            paddingHorizontal: (mobileW * 5) / 100,
                            alignSelf: 'flex-start',
                            marginLeft: (mobileW * 2) / 100,
                            borderTopRightRadius: (mobileW * 4) / 100,
                            borderBottomRightRadius: (mobileW * 4) / 100,
                            borderBottomLeftRadius: (mobileW * 4) / 100,
                            marginTop: (mobileH * 1.5) / 100,
                          }}>
                          <Text
                            style={{
                              fontSize: (mobileW * 3.6) / 100,
                              fontFamily: Font.FontLightManrope,
                              color: Colors.whiteColor,
                            }}>
                            {item.message_2}
                          </Text>
                        </View>
                      )}

                      {item.time && (
                        <View
                          style={{
                            marginLeft: (mobileW * 2) / 100,
                            marginBottom: (mobileH * 1) / 100,
                            marginTop: (mobileH * 1.5) / 100,
                          }}>
                          <Text
                            style={{
                              fontSize: (mobileW * 2.6) / 100,
                              fontFamily: Font.FontMediumManrope,
                              color: Colors.darkGrey,
                            }}>
                            {item.time}
                          </Text>
                        </View>
                      )}
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
                      backgroundColor: Colors.chatBack,
                      paddingVertical: (mobileH * 1.5) / 100,
                      paddingHorizontal: (mobileW * 5) / 100,
                      alignSelf: 'flex-end',
                      marginRight: (mobileW * 3) / 100,
                      borderTopLeftRadius: (mobileW * 4) / 100,
                      borderBottomLeftRadius: (mobileW * 4) / 100,
                      borderBottomRightRadius: (mobileW * 4) / 100,
                      marginTop: (mobileH * 1) / 100,
                    }}>
                    <Text
                      style={{
                        fontSize: (mobileW * 3.6) / 100,
                        fontFamily: Font.FontLightManrope,
                        color: Colors.black_color,
                      }}>
                      {item.message_1}
                    </Text>
                  </View>
                  {item.message_2 && (
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
                          fontSize: (mobileW * 3.6) / 100,
                          fontFamily: Font.FontLightManrope,
                          color: Colors.black_color,
                        }}>
                        {item.message_2}
                      </Text>
                    </View>
                  )}

                  <View
                    style={{
                      marginRight: (mobileW * 3) / 100,
                      marginBottom: (mobileH * 1) / 100,
                      marginTop: (mobileH * 1.5) / 100,
                      alignSelf: 'flex-end',
                    }}>
                    <Text
                      style={{
                        fontSize: (mobileW * 2.6) / 100,
                        fontFamily: Font.FontMediumManrope,
                        color: Colors.darkGrey,
                      }}>
                      {item.time}
                    </Text>
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
            height: (mobileH * 8) / 100,
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
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: (mobileW * 85) / 100,
              paddingVertical: (mobileH * 1.7) / 100,
            }}>
            <View
              style={{
                width: '100%',
                paddingLeft: mobileW * (3 / 100),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {}}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: (mobileW * 8) / 100,
                  height: (mobileW * 8) / 100,
                  backgroundColor: Colors.whiteColor,
                }}>
                <Image
                  source={localimag.icon_camera}
                  resizeMode="contain"
                  style={{
                    height: (mobileW * 5.5) / 100,
                    width: (mobileW * 5.5) / 100,
                    justifyContent: 'center',
                  }}
                />
              </TouchableOpacity>
              <TextInput
                keyboardType="default"
                returnKeyLabel="done"
                returnKeyType="done"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                style={{
                  fontSize: (mobileW * 3.6) / 100,
                  width: '95%',
                  paddingVertical: (mobileW * 0.01) / 100,
                  fontFamily: Font.FontMediumManrope,
                  color: Colors.black_color,
                  marginLeft: (mobileW * 1) / 100,
                }}
                placeholderTextColor={Colors.black_color}
                placeholder={Lang_chg.type_message_txt[config.language]}
                onFocus={() => {
                  setBottom(45);
                }}
                onBlur={() => {
                  setBottom(0);
                }}></TextInput>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: (mobileW * 15) / 100,
              height: (mobileH * 8) / 100,
              backgroundColor: Colors.whiteColor,
            }}>
            <Image
              source={localimag.icon_send}
              resizeMode="contain"
              style={{
                height: (mobileW * 5.5) / 100,
                width: (mobileW * 5.5) / 100,
                justifyContent: 'center',
              }}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LiveChat;

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
