import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
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
import ButtonComponent from '../Componant/ButtonComponent';

const BuySubscription = () => {
  const {navigate, goBack} = useNavigation();
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
      </View>
      {/* -------------------------------------------- */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.mainView,
          {
            paddingBottom: (mobileH * 10) / 100,
          },
        ]}>
        <Text
          style={{
            color: Colors.black_color,
            fontSize: (mobileW * 12) / 100,
            fontFamily: Font.FontBold,
            lineHeight: (mobileH * 8) / 100,
          }}>
          {Lang_chg.buySubscription_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 35) / 100,
            backgroundColor: Colors.theme_color,
            height: (mobileH * 0.6) / 100,
            marginTop: (mobileH * 1.6) / 100,
          }}></View>

        <View
          style={{
            marginTop: (mobileH * 4) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              //   alignItems: 'center',
            }}>
            <Image
              source={localimag.icon_right}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}
            />

            <Text
              style={{
                marginLeft: (mobileW * 3) / 100,
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.8) / 100,
                width: (mobileW * 85) / 100,
              }}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: (mobileH * 3) / 100,
            }}>
            <Image
              source={localimag.icon_right}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}
            />

            <Text
              style={{
                marginLeft: (mobileW * 3) / 100,
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.8) / 100,
                width: (mobileW * 85) / 100,
              }}>
              Ullamcorper sed aliquet tellus cras. Velit quis mi non risus purus
              nulla velit interdum nec.
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              //   alignItems: 'center',
              marginTop: (mobileH * 3) / 100,
            }}>
            <Image
              source={localimag.icon_right}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}
            />

            <Text
              style={{
                marginLeft: (mobileW * 3) / 100,
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.8) / 100,
                width: (mobileW * 85) / 100,
              }}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: Colors.faqBack,
            borderWidth: 1,
            borderColor: Colors.theme_color,
            borderRadius: (mobileW * 1) / 100,
            height: (mobileH * 8) / 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: (mobileH * 4) / 100,
          }}>
          <Text
            style={{
              color: Colors.black_color,
              fontFamily: Font.FontBold,
              fontSize: (mobileW * 5.5) / 100,
            }}>
            YEARLY
          </Text>
          <Text
            style={{
              color: Colors.black_color,
              fontFamily: Font.FontBold,
              fontSize: (mobileW * 4.5) / 100,
            }}>
            1999 {config.currency}
          </Text>

          <Image
            source={localimag.icon_selected}
            style={{
              width: (mobileW * 6.5) / 100,
              height: (mobileW * 6.5) / 100,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: Colors.subscriptionButtonColor,
            borderWidth: 1,
            borderColor: Colors.subscriptionButtonColor,
            borderRadius: (mobileW * 1) / 100,
            height: (mobileH * 8) / 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: (mobileH * 4) / 100,
          }}>
          <Text
            style={{
              color: Colors.darkGrey,
              fontFamily: Font.FontBold,
              fontSize: (mobileW * 5.5) / 100,
            }}>
            MONTHLY
          </Text>
          <Text
            style={{
              color: Colors.darkGrey,
              fontFamily: Font.FontBold,
              fontSize: (mobileW * 4.5) / 100,
            }}>
            999 {config.currency}
          </Text>

          <Image
            source={localimag.icon_circle}
            style={{
              width: (mobileW * 6.5) / 100,
              height: (mobileW * 6.5) / 100,
            }}
          />
        </TouchableOpacity>

        {/* Button View  */}

        <ButtonComponent
          title={Lang_chg.subscribe_txt[config.language]}
          onPress={() => navigate('Profile')}
          btnStyle={{
            marginTop:
              config.device_type == 'ios'
                ? (mobileH * 6) / 100
                : (mobileH * 8) / 100,
          }}
          active={true}
        />
      </ScrollView>
    </View>
  );
};

export default BuySubscription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 5) / 100,
  },
});
