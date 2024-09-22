import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import FastImage from 'react-native-fast-image';

const Cardcontainer = ({
  image,
  pro_status,
  currency,
  title,
  location,
  containerStyle,
  imageContainer,
  imageStyle,
  Onpress,
  saveStatus,
  saveunsave,
  discount,
  dicountPrice,
  discountPercent,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={Onpress}
      style={[
        {
          width: (mobileW * 40) / 100,
          height: (mobileH * 36.6) / 100,
          borderRadius: (mobileW * 2) / 100,
          // shadowColor: '#000',
          // shadowOffset: {
          //   width: 0,
          //   height: 2,
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 3.84,

          // elevation: 5,
          backgroundColor: Colors.whiteColor,
          borderWidth: (mobileW * 0.1) / 100,
          borderColor: Colors.searchBorderColor,
        },
        containerStyle,
      ]}>
      <FastImage
        style={[
          {
            width: (mobileW * 39.7) / 100,
            height: (mobileH * 22) / 100,
            borderTopLeftRadius: (mobileW * 2) / 100,
            borderTopRightRadius: (mobileW * 2) / 100,
          },
          imageContainer,
        ]}
        source={image}>
        <TouchableOpacity
          style={{
            width: (mobileW * 6.5) / 100,
            height: (mobileW * 6.5) / 100,
            position: 'absolute',
            top: 15,
            right: (mobileW * 1) / 100,
            marginRight: (mobileW * 2.5) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={0.8}
          onPress={saveunsave}>
          <FastImage
            source={
              saveStatus ? localimag.icon_redHeart : localimag.icon_black_heart
            }
            style={{
              width: (mobileW * 6.5) / 100,
              height: (mobileW * 6.5) / 100,
            }}
          />
        </TouchableOpacity>
      </FastImage>

      <View
        style={{
          marginTop: (mobileH * 1) / 100,
          paddingHorizontal: (mobileW * 3) / 100,
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
            <Text
              style={{
                color: discount ? Colors.theme_color : Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              {currency}{' '}
              <Text
                style={{
                  color: Colors.skipColor,
                  fontSize: (mobileW * 2.5) / 100,
                  fontFamily: Font.FontMediumManrope,
                }}>
                {config.currency}
              </Text>{' '}
              {discount && (
                <>
                  <Text
                    style={{
                      color: Colors.darkGrey,
                      fontSize: (mobileW * 2.5) / 100,
                      fontFamily: Font.FontBoldManrope,
                      textDecorationLine: 'line-through',
                    }}>
                    {dicountPrice}
                  </Text>
                  <Text
                    style={{
                      color: Colors.darkGrey,
                      fontSize: (mobileW * 2.5) / 100,
                      fontFamily: Font.FontBoldManrope,
                    }}>
                    {`(${discountPercent}%)`}
                  </Text>
                </>
              )}
            </Text>
          </View>

          {/* {pro_status == 1 && (
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              source={localimag.icon_pro}
              style={{
                width: (mobileW * 8) / 100,
                height: (mobileW * 8) / 100,
                marginTop: (-mobileH * 2) / 100,
                marginRight: (-mobileW * 1) / 100,
              }}
            />
          )} */}

          {/* {pro_status == 0 && (
            <FastImage
              source={localimag.icon_speaker}
              resizeMode={FastImage.resizeMode.contain}
              style={{
                width: (mobileW * 6) / 100,
                height: (mobileW * 6) / 100,
              }}
            />
          )} */}
        </View>

        <Text
          numberOfLines={2}
          style={{
            color: Colors.title_color,
            fontSize: (mobileW * 3.5) / 100,
            fontFamily: Font.FontBoldManrope,
            marginTop: (mobileH * 0.5) / 100,
            lineHeight: (mobileH * 2.5) / 100,
          }}>
          {title}
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
            <FastImage
              source={localimag.icon_location}
              resizeMode={FastImage.resizeMode.contain}
              style={{
                width: (mobileW * 4) / 100,
                height: (mobileW * 4) / 100,
              }}
            />

            <Text
              style={{
                color: Colors.parisColor,
                fontSize: (mobileW * 3) / 100,
                fontFamily: Font.FontMediumManrope,
                marginLeft: (mobileW * 1) / 100,
              }}>
              {location}
            </Text>
          </View>
          {pro_status == 1 && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: (mobileW * 30) / 100,
                backgroundColor: Colors.proColor,
                width: (mobileW * 8) / 100,
                height: (mobileW * 8) / 100,
              }}>
              <Text
                style={{
                  color: Colors.theme_color,
                  fontSize: (mobileW * 2.2) / 100,
                  fontFamily: Font.FontExtraBoldManrope,
                }}>
                {Lang_chg.pro_txt[config.language]}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cardcontainer;

const styles = StyleSheet.create({});
