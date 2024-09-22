import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
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

const SubscriptionHistory = () => {
  const {navigate, goBack} = useNavigation();
  const [subscriptionData, setSubscriptionData] = useState([
    {
      id: 0,
      status: 'Ongoing',
      price: '1999',
      date: 'June 21, 2024',
      transactionID: '#7653278987',
      type: 'Yearly',
    },
    {
      id: 1,
      status: 'Expired',
      price: '1999',
      date: 'June 21, 2024',
      transactionID: '#7653278987',
      type: 'Yearly',
    },
  ]);

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
            fontSize: (mobileW * 6) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontBold,
          }}>
          {Lang_chg.subscription_history_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 10) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      <View style={styles.mainView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={subscriptionData}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: (mobileH * 3) / 100,
                }}>
                <View>
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
                      <View
                        style={{
                          backgroundColor:
                            item.status == 'Expired'
                              ? Colors.deleteColor
                              : Colors.ongoing_color,
                          width: (mobileW * 25) / 100,
                          height: (mobileH * 4) / 100,
                          borderRadius: (mobileW * 1) / 100,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: Colors.whiteColor,
                            fontSize: (mobileW * 3.5) / 100,
                            fontFamily: Font.FontBold,
                          }}>
                          {item.type}
                        </Text>
                      </View>

                      <Text
                        style={{
                          color: Colors.black_color,
                          fontSize: (mobileW * 4.5) / 100,
                          fontFamily: Font.FontBold,
                          marginLeft: (mobileW * 3) / 100,
                        }}>
                        {item.price} {config.currency}
                      </Text>
                    </View>

                    <Text
                      style={{
                        color:
                          item.status == 'Expired'
                            ? Colors.deleteColor
                            : Colors.ongoing_color,
                        fontSize: (mobileW * 4) / 100,
                        fontFamily: Font.FontRegular,
                      }}>
                      {item.status}
                    </Text>
                  </View>

                  <View
                    style={{
                      marginTop: (mobileH * 2) / 100,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: Colors.darkGrey,
                        fontSize: (mobileW * 3.5) / 100,
                        fontFamily: Font.FontBold,
                      }}>
                      {item.date}
                    </Text>

                    <View
                      style={{
                        width: (mobileW * 0.2) / 100,
                        height: (mobileH * 3) / 100,
                        backgroundColor: Colors.darkGrey,
                        marginLeft: (mobileW * 3) / 100,
                      }}></View>

                    <Text
                      style={{
                        color: Colors.darkGrey,
                        fontSize: (mobileW * 3.5) / 100,
                        fontFamily: Font.FontBold,
                        marginLeft: (mobileW * 3) / 100,
                      }}>
                      {Lang_chg.transaction_id_txt[config.language]} :{' '}
                      {item.transactionID}
                    </Text>
                  </View>

                  {item.status != 'Expired' && (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{
                        marginTop: (mobileH * 2) / 100,
                        width: (mobileW * 35) / 100,
                      }}>
                      <Text
                        style={{
                          color: Colors.cancel_subscription,
                          ffontSize: (mobileW * 3.5) / 100,
                          fontFamily: Font.FontBold,
                          textDecorationLine: 'underline',
                        }}>
                        {Lang_chg.cancel_subscription[config.language]}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>

                <View
                  style={{
                    width: (mobileW * 90) / 100,
                    alignSelf: 'center',
                    height: (mobileH * 0.2) / 100,
                    backgroundColor: Colors.borderGrey,
                    marginTop: (mobileH * 3) / 100,
                  }}></View>
              </View>
            );
          }}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: (mobileW * 40) / 100,
            height: (mobileH * 6.5) / 100,
            borderRadius: (mobileW * 2) / 100,
            backgroundColor: Colors.theme_color,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            alignSelf: 'flex-end',
            bottom: (mobileH * 5) / 100,
            right: (mobileW * 5) / 100,
          }}>
          <Text
            style={{
              color: Colors.whiteColor,
              fontSize: (mobileW * 4) / 100,
              fontFamily: Font.FontRegular,
              marginLeft: (mobileW * 2) / 100,
            }}>
            {Lang_chg.buySubscription_btn_txt[config.language]}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubscriptionHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 2.5) / 100,
    flex: 1,
  },
});
