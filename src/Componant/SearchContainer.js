import {StyleSheet, Image, View, TextInput, Keyboard} from 'react-native';
import React from 'react';
import {
  Colors,
  Font,
  localimag,
  mobileH,
  mobileW,
  config,
} from '../Provider/utilslib/Utils';

const SearchContainer = ({
  onChangeText,
  placeholder,
  containerStyle,
  searchText,
  inputStyle,
}) => {
  return (
    <View
      style={[
        {
          width: (mobileW * 90) / 100,
          height:
            config.device_type == 'ios'
              ? (mobileH * 6.5) / 100
              : (mobileH * 7) / 100,
          borderWidth: (mobileW * 0.5) / 100,
          borderColor: Colors.searchBorderColor,
          alignSelf: 'center',
          borderRadius: (mobileW * 2) / 100,
          // marginTop: (mobileH * 3) / 100,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: (mobileW * 2) / 100,
        },
        containerStyle,
      ]}>
      <Image
        source={localimag.icon_search}
        style={{
          width: (mobileW * 8) / 100,
          height: (mobileW * 8) / 100,
          resizeMode: 'contain',
        }}
      />
      <TextInput
        placeholderTextColor={Colors.searchPlaceholderColor}
        returnKeyLabel="done"
        returnKeyType="done"
        onSubmitEditing={() => {
          Keyboard.dismiss();
        }}
        value={searchText}
        style={[
          {
            width: (mobileW * 78) / 100,
            marginLeft: (mobileW * 1) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontMediumManrope,
            fontSize: (mobileW * 3.3) / 100,
          },
          inputStyle,
        ]}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchContainer;

const styles = StyleSheet.create({});
