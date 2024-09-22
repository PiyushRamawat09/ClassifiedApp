import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import StarRating from 'react-native-star-rating';
import {
  Colors,
  Font,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';

const StoresContainer = ({
  image,
  title,
  location,
  containerStyle,
  imageContainer,
  imageStyle,
  rating,
  onPress,
  saveunsave,
  saveStatus,
  storeImage,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        {
          width: (mobileW * 75) / 100,
          height: (mobileH * 27.5) / 100,
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
          borderWidth: (mobileW * 0.4) / 100,
          borderColor: Colors.searchBorderColor,
        },
        containerStyle,
      ]}>
      <ImageBackground
        style={[
          {
            width: (mobileW * 75) / 100,
            height: (mobileH * 18) / 100,
            position: 'relative',
          },
          imageContainer,
        ]}
        imageStyle={{
          borderTopLeftRadius: (mobileW * 2) / 100,
          borderTopRightRadius: (mobileW * 2) / 100,
        }}
        source={image}>
        {/* <TouchableOpacity
          activeOpacity={0.8}
          onPress={saveunsave}
          style={{
            position: 'absolute',
            top: 0,
            right: (mobileW * 1) / 100,
            marginRight: (mobileW * 1) / 100,

            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000010',
            width: (mobileW * 7.5) / 100,
            height: (mobileW * 7.5) / 100,
          }}>
          <Image
            source={saveStatus ? localimag.icon_save : localimag.icon_unsave}
            style={{
              width: (mobileW * 8.5) / 100,
              height: (mobileW * 8.5) / 100,
              // resizeMode: 'contain',
            }}
          />
        </TouchableOpacity> */}

        {storeImage && (
          <View
            style={{
              width: (mobileW * 13) / 100,
              height: (mobileW * 13) / 100,
              borderRadius: (mobileW * 30) / 100,
              backgroundColor: Colors.whiteColor,
              position: 'absolute',
              bottom: (mobileH * 1) / 100,
              left: (mobileW * 2) / 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={storeImage}
              style={{
                width: (mobileW * 12) / 100,
                height: (mobileW * 12) / 100,
                borderRadius: (mobileW * 30) / 100,
              }}
            />
          </View>
        )}
      </ImageBackground>

      <View
        style={{
          marginTop: (mobileH * 0.7) / 100,
          paddingHorizontal: (mobileW * 4) / 100,
        }}>
        <Text
          numberOfLines={2}
          style={{
            color: Colors.title_color,
            fontSize: (mobileW * 3.6) / 100,
            fontFamily: Font.FontBoldManrope,
            lineHeight: (mobileH * 2.8) / 100,
          }}>
          {title}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: (mobileH * 0.3) / 100,
          }}>
          <StarRating
            containerStyle={{
              width: (mobileW * 18) / 100,
            }}
            fullStar={localimag.icon_active_star}
            halfStar={localimag.icon_halfStar}
            emptyStar={localimag.icon_deactive_star}
            maxStars={5}
            starSize={(mobileW * 3) / 100}
            rating={rating}
            starStyle={{
              marginRight: (mobileW * 0.5) / 100,
            }}
            disabled={true}
          />

          <Text
            style={{
              color: Colors.title_color,
              fontSize: (mobileW * 2.5) / 100,
              fontFamily: Font.FontMediumManrope,
              marginLeft: (mobileW * 1) / 100,
            }}>
            {`(${rating}.0)`}
          </Text>
        </View>

        <View
          style={{
            marginTop: (mobileH * 0.2) / 100,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={localimag.icon_location}
            resizeMode="contain"
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
      </View>
    </TouchableOpacity>
  );
};

export default StoresContainer;

const styles = StyleSheet.create({});
