import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
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

const ListingView = ({
  image,
  pro_status,
  currency,
  title,
  location,
  showFav,
  showListingStatus,
  listingStatusImage,
  onPress,
  saveStatus,
  saveunsave,
  threeDots,
  discount,
  dicountPrice,
  discountPercent,
  containerStyle,
  imageStyle,
  subContainerStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        {
          width: (mobileW * 90) / 100,
          height: (mobileH * 16.5) / 100,
          backgroundColor: Colors.whiteColor,
          borderWidth: (mobileW * 0.1) / 100,
          borderColor: Colors.searchBorderColor,
          borderRadius: (mobileW * 2) / 100,
          //marginTop: (mobileH * 2) / 100,
          position: 'relative',
        },
        containerStyle,
      ]}>
      {/* {pro_status == 1 && (
        <FastImage
          source={localimag.icon_pro}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            width: (mobileW * 8) / 100,
            height: (mobileW * 8) / 100,
            position: 'absolute',
            top: 0,
            right: (mobileW * 1) / 100,
            marginRight: (mobileW * 1) / 100,
          }}
        />
      )} */}

      <View
        style={{
          flexDirection: 'row',
        }}>
        <FastImage
          source={image}
          style={[
            {
              width: (mobileW * 40) / 100,
              height: (mobileH * 16.4) / 100,
              position: 'relative',
              borderTopLeftRadius: (mobileW * 2) / 100,
              borderBottomLeftRadius: (mobileW * 2) / 100,
            },
            imageStyle,
          ]}>
          {showFav && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={saveunsave}
              style={{
                width: (mobileW * 5.5) / 100,
                height: (mobileW * 5.5) / 100,
                position: 'absolute',
                top: 15,
                right: (mobileW * 1) / 100,
                marginRight: (mobileW * 2.5) / 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FastImage
                source={
                  saveStatus
                    ? localimag.icon_redHeart
                    : localimag.icon_black_heart
                }
                style={{
                  width: (mobileW * 6.5) / 100,
                  height: (mobileW * 6.5) / 100,
                  // resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}

          {showListingStatus && (
            <View
              style={{
                width: (mobileW * 40) / 100,
                height: (mobileH * 17.65) / 100,
                borderTopLeftRadius: (mobileW * 2.5) / 100,
                borderBottomLeftRadius: (mobileW * 2.5) / 100,
                backgroundColor: '#00000080',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FastImage
                source={listingStatusImage}
                resizeMode={FastImage.resizeMode.contain}
                style={{
                  width: (mobileW * 15) / 100,
                  height: (mobileW * 15) / 100,
                }}
              />
            </View>
          )}
        </FastImage>

        <View
          style={[
            {
              marginTop: (mobileH * 2) / 100,
              paddingRight: (mobileW * 4) / 100,
              marginLeft: (mobileW * 3) / 100,
              width: (mobileW * 45) / 100,
            },
            subContainerStyle,
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
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

            {/* {pro_status == 0 && (
              <FastImage
                resizeMode={FastImage.resizeMode.contain}
                source={localimag.icon_speaker}
                style={{
                  width: (mobileW * 6) / 100,
                  height: (mobileW * 6) / 100,
                }}
              />
            )} */}
          </View>

          <Text
            style={{
              color: Colors.title_color,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontBoldManrope,
              marginTop: (mobileH * 0.5) / 100,
              lineHeight: (mobileH * 2.8) / 100,
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
                resizeMode={FastImage.resizeMode.contain}
                source={localimag.icon_location}
                style={{
                  width: (mobileW * 4) / 100,
                  height: (mobileW * 4) / 100,
                }}
              />

              <Text
                style={{
                  color: Colors.parisColor,
                  fontSize: (mobileW * 3.3) / 100,
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

          {threeDots && (
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={0.8}
              style={{
                position: 'absolute',
                alignSelf: 'flex-end',
                bottom: (mobileH * 2.5) / 100,
                right: (mobileW * 1) / 100,
              }}>
              <Image
                source={localimag.icon_optionWhite}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                  tintColor: Colors.black_color,
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListingView;

const styles = StyleSheet.create({});
