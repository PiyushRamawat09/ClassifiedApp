import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  Keyboard,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AppstatusBar from '../Componant/AppstatusBar';
import {useNavigation} from '@react-navigation/native';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import InputField from '../Componant/InputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ButtonComponent from '../Componant/ButtonComponent';

const Wallet = () => {
  const {navigate, goBack} = useNavigation();
  const [transactionTab, setTransactionTab] = useState(true);
  const [rechargeTab, setRechargeTab] = useState(false);
  const [transferTab, setTransferTab] = useState(false);

  const [bankilyNumber, setBankilyNumber] = useState('');
  const [paymentCode, setPaymentCode] = useState('');

  const [listingArr, setListingArr] = useState([
    {
      id: 0,
      icon: localimag.icon_wallet_lising,
      title: 'Listing',
      date: 'June 21, 2024 08:00 AM',
      transaction_id: '#7689006316',
      amount: '150',
    },
    {
      id: 1,
      icon: localimag.icon_wallet_subscription,
      title: 'Subscription',
      date: 'June 21, 2024 08:00 AM',
      transaction_id: '#7689006316',
      amount: '1999',
    },
    {
      id: 2,
      icon: localimag.icon_wallet_lising,
      title: 'Listing',
      date: 'June 21, 2024 08:00 AM',
      transaction_id: '#7689006316',
      amount: '150',
    },
    {
      id: 3,
      icon: localimag.icon_wallet_lising,
      title: 'Listing',
      date: 'June 21, 2024 08:00 AM',
      transaction_id: '#7689006316',
      amount: '150',
    },
    {
      id: 4,
      icon: localimag.icon_wallet_lising,
      title: 'Listing',
      date: 'June 21, 2024 08:00 AM',
      transaction_id: '#7689006316',
      amount: '150',
    },
    {
      id: 5,
      icon: localimag.icon_wallet_lising,
      title: 'Listing',
      date: 'June 21, 2024 08:00 AM',
      transaction_id: '#7689006316',
      amount: '150',
    },
  ]);

  const [instantArr, setInstantArr] = useState([
    {
      id: 0,
      amount: '100',
      status: false,
    },
    {
      id: 1,
      amount: '200',
      status: false,
    },
    {
      id: 2,
      amount: '400',
      status: false,
    },
    {
      id: 3,
      amount: '500',
      status: false,
    },
    {
      id: 4,
      amount: '1000',
      status: false,
    },
  ]);

  const [amount, setAmount] = useState('');

  const [queStatus, setQueStatus] = useState(true);

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
          {Lang_chg.wallet_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 5) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: (mobileH * 5) / 100,
        }}>
        <ImageBackground
          source={localimag.icon_totalAmount}
          style={{
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
            height: (mobileH * 18) / 100,
            marginTop: (mobileH * 3) / 100,
            justifyContent: 'center',
            paddingHorizontal: (mobileW * 8) / 100,
          }}
          imageStyle={{
            borderRadius: (mobileW * 4) / 100,
          }}>
          <Text
            style={{
              color: Colors.whiteColor,
              fontSize: (mobileW * 4) / 100,
              fontFamily: Font.FontBoldManrope,
            }}>
            {Lang_chg.balance_txt[config.language]}
          </Text>

          <Text
            style={{
              color: Colors.whiteColor,
              fontSize: (mobileW * 9) / 100,
              fontFamily: Font.FontBoldManrope,
              marginTop: (mobileH * 0.5) / 100,
            }}>
            850{' '}
            <Text
              style={{
                color: Colors.whiteColor,
                fontSize: (mobileW * 6) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {config.currency}
            </Text>
          </Text>
        </ImageBackground>

        {/* ---------------------------- */}

        {/* ------------------- Tab Bar ----------------------- */}

        <View
          style={{
            // width: (mobileW * 90) / 100,
            //alignSelf: 'center',
            paddingHorizontal: (mobileW * 4) / 100,
            flexDirection: 'row',
            alignItems: 'center',
            height: (mobileH * 7) / 100,
            marginTop: (mobileH * 2) / 100,
            // justifyContent: 'center',
          }}>
          {/* rechagre */}

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setTransferTab(false);
              setTransactionTab(false);
              setRechargeTab(true);
            }}
            style={{
              width: (mobileW * 26) / 100,
              justifyContent: 'center',
              alignItems: 'center',
              height: (mobileH * 6) / 100,
              borderBottomWidth: (mobileW * 0.5) / 100,
              borderColor: rechargeTab ? Colors.theme_color : Colors.whiteColor,

              flexDirection: 'row',
            }}>
            <Image
              source={localimag.icon_addPromo}
              style={{
                width: (mobileW * 4) / 100,
                height: (mobileW * 4) / 100,
                tintColor: rechargeTab
                  ? Colors.theme_color
                  : Colors.tabTextColor,
              }}
            />
            <Text
              style={{
                fontSize: (mobileW * 3.5) / 100,
                color: rechargeTab ? Colors.theme_color : Colors.tabTextColor,
                fontFamily: rechargeTab
                  ? Font.FontBoldManrope
                  : Font.FontMediumManrope,
                marginLeft: (mobileW * 1) / 100,
              }}>
              {Lang_chg.recharge_txt[config.language]}
            </Text>
          </TouchableOpacity>

          {/* transfer */}

          <TouchableOpacity
            onPress={() => {
              setTransactionTab(true);
              setRechargeTab(false);
              setTransferTab(false);
            }}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 26) / 100,
              justifyContent: 'center',
              alignItems: 'center',
              height: (mobileH * 6) / 100,
              borderBottomWidth: (mobileW * 0.5) / 100,
              borderColor: transferTab ? Colors.theme_color : Colors.whiteColor,
              marginLeft: (mobileW * 5) / 100,

              flexDirection: 'row',
            }}>
            <Image
              source={localimag.icon_transfer}
              style={{
                width: (mobileW * 4) / 100,
                height: (mobileW * 4) / 100,
                tintColor: transferTab
                  ? Colors.theme_color
                  : Colors.tabTextColor,
              }}
            />
            <Text
              style={{
                fontSize: (mobileW * 3.5) / 100,
                color: transferTab ? Colors.theme_color : Colors.tabTextColor,
                fontFamily: transferTab
                  ? Font.FontBoldManrope
                  : Font.FontMediumManrope,
                marginLeft: (mobileW * 1) / 100,
              }}>
              {Lang_chg.transfer_txt[config.language]}
            </Text>
          </TouchableOpacity>

          {/* transactions
           */}
          <TouchableOpacity
            onPress={() => {
              setTransferTab(false);
              setRechargeTab(false);
              setTransactionTab(true);
            }}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 30) / 100,
              justifyContent: 'center',
              alignItems: 'center',
              height: (mobileH * 6) / 100,
              borderBottomWidth: (mobileW * 0.5) / 100,
              borderColor: transactionTab
                ? Colors.theme_color
                : Colors.whiteColor,
              marginLeft: (mobileW * 3) / 100,
              flexDirection: 'row',
            }}>
            <Image
              source={localimag.icon_transactions}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                tintColor: transactionTab
                  ? Colors.theme_color
                  : Colors.tabTextColor,
              }}
            />
            <Text
              style={{
                fontSize: (mobileW * 3.5) / 100,
                color: transactionTab
                  ? Colors.theme_color
                  : Colors.tabTextColor,
                fontFamily: transactionTab
                  ? Font.FontBoldManrope
                  : Font.FontMediumManrope,
                marginLeft: (mobileW * 1) / 100,
              }}>
              {Lang_chg.transactions_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* --------------------Listing--------------- */}

        <View style={styles.mainView}>
          {transactionTab && (
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={listingArr}
              keyExtractor={item => `${item.id}`}
              contentContainerStyle={{
                paddingBottom: (mobileH * 5) / 100,
              }}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={[
                      {
                        marginTop:
                          index == 0
                            ? (mobileH * 2.5) / 100
                            : (mobileH * 4) / 100,
                      },
                    ]}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: (mobileW * 50) / 100,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <Image
                          source={item.icon}
                          style={{
                            height: (mobileW * 12) / 100,
                            width: (mobileW * 12) / 100,
                            resizeMode: 'contain',
                            borderRadius: (mobileW * 30) / 100,
                          }}
                        />

                        <View
                          style={{
                            marginLeft: (mobileW * 3) / 100,
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
                                width: (mobileW * 42) / 100,
                              }}>
                              {item.title}
                            </Text>
                            <Text
                              style={{
                                color: Colors.darkGrey,
                                fontSize: (mobileW * 2.8) / 100,
                                fontFamily: Font.FontMediumManrope,
                              }}>
                              {item.date}
                            </Text>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}>
                            <Text
                              style={{
                                color: Colors.transactionColor,
                                fontSize: (mobileW * 3) / 100,
                                fontFamily: Font.FontMediumManrope,
                                marginTop: (mobileH * 0.2) / 100,
                                width: (mobileW * 48) / 100,
                              }}>
                              {Lang_chg.transaction_id_txt[config.language]}{' '}
                              {item.transaction_id}
                            </Text>
                            <Text
                              style={{
                                color: Colors.black_color,
                                fontSize: (mobileW * 4) / 100,
                                fontFamily: Font.FontExtraBoldManrope,
                                marginTop: (mobileH * 0.2) / 100,
                              }}>
                              {item.amount}{' '}
                              <Text
                                style={{
                                  color: Colors.black_color,
                                  fontSize: (mobileW * 3) / 100,
                                  fontFamily: Font.FontExtraBoldManrope,
                                  marginTop: (mobileH * 0.7) / 100,
                                }}>
                                {config.currency}
                              </Text>
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          )}

          {rechargeTab && (
            <View
              style={{
                marginTop: (mobileH * 2.5) / 100,
              }}>
              <View
                style={{
                  backgroundColor: Colors.categoriesback,
                  paddingHorizontal: (mobileW * 3) / 100,
                  paddingVertical: (mobileH * 1) / 100,
                  borderRadius: (mobileW * 1) / 100,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.5) / 100,
                    fontFamily: Font.FontBoldLexend,
                  }}>
                  B-Pay code: 012345
                </Text>
              </View>

              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: (mobileH * 2) / 100,
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // paddingHorizontal: (mobileW * 3) / 100,
                    width: (mobileW * 35) / 100,
                    paddingVertical: (mobileH * 1) / 100,
                    borderWidth: (mobileW * 0.2) / 100,
                    borderColor: Colors.profileColor,
                    borderRadius: (mobileW * 1) / 100,
                  }}>
                  <Image
                    source={localimag.icon_copyBpayCode}
                    style={{
                      width: (mobileW * 5) / 100,
                      height: (mobileW * 5) / 100,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{
                      color: Colors.profileColor,
                      fontSize: (mobileW * 3) / 100,
                      fontFamily: Font.FontMediumManrope,
                      marginLeft: (mobileW * 1) / 100,
                    }}>
                    {Lang_chg.copyBpayCode_txt[config.language]}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // paddingHorizontal: (mobileW * 3) / 100,
                    width: (mobileW * 35) / 100,
                    justifyContent: 'center',
                    paddingVertical: (mobileH * 1) / 100,
                    borderWidth: (mobileW * 0.2) / 100,
                    borderColor: Colors.theme_color,
                    borderRadius: (mobileW * 1) / 100,
                    marginLeft: (mobileW * 3) / 100,
                  }}>
                  <Image
                    source={localimag.icon_openBankily}
                    style={{
                      width: (mobileW * 5) / 100,
                      height: (mobileW * 5) / 100,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{
                      color: Colors.theme_color,
                      fontSize: (mobileW * 3) / 100,
                      fontFamily: Font.FontMediumManrope,
                      marginLeft: (mobileW * 1) / 100,
                    }}>
                    {Lang_chg.openBankly_txt[config.language]}
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  marginTop: (mobileH * 3) / 100,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={localimag.icon_checkBox_empty}
                    style={{
                      width: (mobileW * 5.5) / 100,
                      height: (mobileW * 5.5) / 100,
                    }}
                  />
                  <Text
                    style={{
                      color: Colors.phoneNumber_Color,
                      fontSize: (mobileW * 3) / 100,
                      fontFamily: Font.FontMediumManrope,
                      marginLeft: (mobileW * 2) / 100,
                    }}>
                    {Lang_chg.myPhoneNumber_txt[config.language]}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: (mobileW * 90) / 100,
                  height: (mobileH * 10) / 100,
                  alignSelf: 'center',
                  borderRadius: (mobileW * 2) / 100,
                  marginTop: (mobileH * 2) / 100,
                  borderWidth: (mobileW * 0.2) / 100,
                  borderColor: Colors.chatBack,
                  padding: (mobileW * 3) / 100,
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.8) / 100,
                    fontFamily: Font.FontBoldManrope,
                  }}>
                  {Lang_chg.bankilyNumbet_txt[config.language]}
                </Text>
                <TextInput
                  multiline={true}
                  placeholderTextColor={Colors.placeholderWalletColor}
                  returnKeyLabel="done"
                  returnKeyType="done"
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                  value={bankilyNumber}
                  keyboardType="number-pad"
                  style={{
                    width: (mobileW * 85) / 100,
                    color: Colors.black_color,
                    fontFamily: Font.FontMediumManrope,
                    fontSize: (mobileW * 3.5) / 100,
                    height: (mobileH * 5) / 100,
                  }}
                  placeholder={
                    Lang_chg.enterYourBankilyNumber_txt[config.language]
                  }
                  onChangeText={val => setBankilyNumber(val)}
                />
              </View>
              <View
                style={{
                  width: (mobileW * 90) / 100,
                  height: (mobileH * 10) / 100,
                  alignSelf: 'center',
                  borderRadius: (mobileW * 2) / 100,
                  marginTop: (mobileH * 1.5) / 100,
                  borderWidth: (mobileW * 0.2) / 100,
                  borderColor: Colors.chatBack,
                  padding: (mobileW * 3) / 100,
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.8) / 100,
                    fontFamily: Font.FontBoldManrope,
                  }}>
                  {Lang_chg.amount_txt[config.language]}
                </Text>
                <TextInput
                  multiline={true}
                  placeholderTextColor={Colors.placeholderWalletColor}
                  returnKeyLabel="done"
                  returnKeyType="done"
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                  value={amount}
                  keyboardType="number-pad"
                  style={{
                    width: (mobileW * 85) / 100,
                    color: Colors.black_color,
                    fontFamily: Font.FontMediumManrope,
                    fontSize: (mobileW * 3.5) / 100,
                    height: (mobileH * 5) / 100,
                  }}
                  placeholder={
                    Lang_chg.enterAmountpaidOnBankily_txt[config.language]
                  }
                  onChangeText={val => setAmount(val)}
                />
              </View>
              <View
                style={{
                  width: (mobileW * 90) / 100,
                  height: (mobileH * 10) / 100,
                  alignSelf: 'center',
                  borderRadius: (mobileW * 2) / 100,
                  marginTop: (mobileH * 1.5) / 100,
                  borderWidth: (mobileW * 0.2) / 100,
                  borderColor: Colors.chatBack,
                  padding: (mobileW * 3) / 100,
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.8) / 100,
                    fontFamily: Font.FontBoldManrope,
                  }}>
                  {Lang_chg.paymentCode_txt[config.language]}
                </Text>
                <TextInput
                  multiline={true}
                  placeholderTextColor={Colors.placeholderWalletColor}
                  returnKeyLabel="done"
                  returnKeyType="done"
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                  value={paymentCode}
                  keyboardType="default"
                  style={{
                    width: (mobileW * 85) / 100,
                    color: Colors.black_color,
                    fontFamily: Font.FontMediumManrope,
                    fontSize: (mobileW * 3.5) / 100,
                    height: (mobileH * 5) / 100,
                  }}
                  placeholder={
                    Lang_chg.enterThecodeRecieved_txt[config.language]
                  }
                  onChangeText={val => setPaymentCode(val)}
                />
              </View>

              <ButtonComponent
                title={Lang_chg.recharge_txt[config.language]}
                btnStyle={{
                  marginTop: (mobileH * 4) / 100,
                }}
                active={true}
              />

              {/* questions */}

              <View
                style={{
                  width: (mobileW * 90) / 100,
                  alignSelf: 'center',
                  borderWidth: (mobileW * 0.2) / 100,
                  borderColor: Colors.chatBack,
                  borderRadius: (mobileW * 2) / 100,
                  // paddingBottom: (mobileH * 1) / 100,
                  marginTop: (mobileH * 4) / 100,
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setQueStatus(prev => !prev)}
                  style={{
                    width: (mobileW * 90) / 100,
                    backgroundColor: Colors.theme_color,
                    height: (mobileH * 7) / 100,
                    borderRadius: (mobileW * 2) / 100,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: (mobileW * 4) / 100,
                  }}>
                  <Text
                    style={{
                      color: Colors.whiteColor,
                      fontSize: (mobileW * 4) / 100,
                      fontFamily: Font.FontExtraBoldManrope,
                    }}>
                    {Lang_chg.howDoIpayViabankily_txt[config.language]}
                  </Text>

                  {queStatus ? (
                    <Image
                      source={localimag.icon_dropUp}
                      style={{
                        width: (mobileW * 5) / 100,
                        height: (mobileW * 5) / 100,
                        tintColor: Colors.whiteColor,
                      }}
                    />
                  ) : (
                    <Image
                      source={localimag.icon_dropUp}
                      style={{
                        width: (mobileW * 5) / 100,
                        height: (mobileW * 5) / 100,
                        tintColor: Colors.whiteColor,
                        transform: [{rotate: '180deg'}],
                      }}
                    />
                  )}
                </TouchableOpacity>

                {queStatus && (
                  <View
                    style={{
                      marginTop: (mobileH * 2.5) / 100,
                      paddingBottom: (mobileH * 2) / 100,
                      paddingHorizontal: (mobileW * 1) / 100,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        // alignItems: 'center',
                      }}>
                      <Image
                        source={localimag.icon_one}
                        style={{
                          width: (mobileW * 10) / 100,
                          height: (mobileW * 10) / 100,
                          resizeMode: 'contain',
                        }}
                      />

                      <Text
                        style={{
                          color: Colors.walletquestionsColor,
                          fontSize: (mobileW * 3) / 100,
                          fontFamily: Font.FontMediumManrope,
                          marginLeft: (mobileW * 2) / 100,
                          marginTop: (mobileH * 0.5) / 100,
                        }}>
                        Open the Bankily application.
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        // alignItems: 'center',
                      }}>
                      <Image
                        source={localimag.icon_two}
                        style={{
                          width: (mobileW * 10) / 100,
                          height: (mobileW * 10) / 100,
                          resizeMode: 'contain',
                        }}
                      />
                      <Text
                        style={{
                          color: Colors.walletquestionsColor,
                          fontSize: (mobileW * 3) / 100,
                          fontFamily: Font.FontMediumManrope,
                          marginLeft: (mobileW * 2) / 100,
                          marginTop: (mobileH * 0.5) / 100,
                        }}>
                        Select the B-Pay option.
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        // alignItems: 'center',
                      }}>
                      <Image
                        source={localimag.icon_three}
                        style={{
                          width: (mobileW * 10) / 100,
                          height: (mobileW * 10) / 100,
                          resizeMode: 'contain',
                        }}
                      />
                      <Text
                        style={{
                          color: Colors.walletquestionsColor,
                          fontSize: (mobileW * 3) / 100,
                          fontFamily: Font.FontMediumManrope,
                          marginLeft: (mobileW * 2) / 100,
                          marginTop: (mobileH * 0.5) / 100,
                        }}>
                        Enter the Chizein B-Paycode.
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        // alignItems: 'center',
                      }}>
                      <Image
                        source={localimag.icon_four}
                        style={{
                          width: (mobileW * 10) / 100,
                          height: (mobileW * 10) / 100,
                          resizeMode: 'contain',
                        }}
                      />
                      <Text
                        style={{
                          color: Colors.walletquestionsColor,
                          fontSize: (mobileW * 3) / 100,
                          fontFamily: Font.FontMediumManrope,
                          marginLeft: (mobileW * 2) / 100,
                          marginTop: (mobileH * 0.5) / 100,
                        }}>
                        Pay the desired amount.
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        // alignItems: 'center',
                      }}>
                      <Image
                        source={localimag.icon_five}
                        style={{
                          width: (mobileW * 10) / 100,
                          height: (mobileW * 10) / 100,
                          resizeMode: 'contain',
                        }}
                      />
                      <Text
                        style={{
                          color: Colors.walletquestionsColor,
                          fontSize: (mobileW * 3) / 100,
                          fontFamily: Font.FontMediumManrope,
                          marginLeft: (mobileW * 2) / 100,
                          marginTop: (mobileH * 0.5) / 100,
                        }}>
                        Note the confirmation code received by SMS.
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        // alignItems: 'center',
                      }}>
                      <Image
                        source={localimag.icon_six}
                        style={{
                          width: (mobileW * 10) / 100,
                          height: (mobileW * 10) / 100,
                          resizeMode: 'contain',
                        }}
                      />
                      <Text
                        style={{
                          color: Colors.walletquestionsColor,
                          fontSize: (mobileW * 3) / 100,
                          fontFamily: Font.FontMediumManrope,
                          marginLeft: (mobileW * 2) / 100,
                          marginTop: (mobileH * 0.5) / 100,
                        }}>
                        Return to ChiZein to finalize your payment.
                      </Text>
                    </View>
                  </View>
                )}
              </View>

              {/* --------------need help------------------ */}

              <View
                style={{
                  marginTop: (mobileH * 5) / 100,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontExtraBoldManrope,
                    textAlign: 'center',
                  }}>
                  {Lang_chg.needHelp_txt[config.language]}
                </Text>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: (mobileW * 0.2) / 100,
                    borderColor: Colors.theme_color,
                    borderRadius: (mobileW * 1.5) / 100,
                    height: (mobileH * 5) / 100,
                    width: (mobileW * 45) / 100,
                    marginTop: (mobileH * 1.5) / 100,
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={localimag.icon_envelopGreen}
                    style={{
                      width: (mobileW * 4.5) / 100,
                      height: (mobileW * 4.5) / 100,
                    }}
                  />
                  <Text
                    style={{
                      color: Colors.theme_color,
                      fontSize: (mobileW * 3.5) / 100,
                      fontFamily: Font.FontBoldManrope,
                      marginLeft: (mobileW * 2) / 100,
                    }}>
                    {Lang_chg.Contactus[config.language]}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    flex: 1,
  },
});
