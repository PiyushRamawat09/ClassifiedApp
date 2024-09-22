import {StyleSheet, Text, View, Image} from 'react-native';
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
import ButtonComponent from '../Componant/ButtonComponent';

const EmptyCart = ({onPress = () => {}}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={localimag.icon_cartEmpty}
        style={{
          width: (mobileW * 9) / 100,
          height: (mobileW * 9) / 100,
        }}
      />

      <Text
        style={{
          color: Colors.black_color,
          fontSize: (mobileW * 4) / 100,
          fontFamily: Font.FontExtraBoldManrope,
          marginTop: (mobileH * 2) / 100,
        }}>
        {Lang_chg.yourCartIsEmpty_txt[config.language]}
      </Text>

      <Text
        style={{
          color: Colors.modalTabColor,
          fontSize: (mobileW * 3.5) / 100,
          fontFamily: Font.FontMediumManrope,
          textAlign: 'center',
          marginTop: (mobileH * 0.5) / 100,
          lineHeight: (mobileH * 3) / 100,
        }}>
        {Lang_chg.addProductsToCart_txt[config.language]}
      </Text>

      <ButtonComponent
        title={Lang_chg.getinspired_txt[config.language]}
        btnStyle={{
          marginTop: (mobileH * 3.5) / 100,
          width: (mobileW * 75) / 100,
          height: (mobileH * 5.5) / 100,
          borderRadius: (mobileW * 1) / 100,
        }}
        txtStyle={{
          fontSize: (mobileW * 3.5) / 100,
        }}
        active={true}
        onPress={onPress}
      />
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({});
