import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {mobileH, mobileW, Font, Colors} from '../Provider/utilslib/Utils';

const ButtonComponent = ({title, btnStyle, onPress, txtStyle, active}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        {
          width: (mobileW * 90) / 100,
          alignSelf: 'center',
          backgroundColor: active ? Colors.buttoncolor : Colors.whiteColor,
          // marginTop: (mobileH * 4) / 100,
          height: (mobileH * 7) / 100,
          borderRadius: (mobileW * 2) / 100,
          justifyContent: 'center',
          alignItems: 'center',

          borderColor: !active ? Colors.btnBorderGrey : null,
          borderWidth: !active ? (mobileW * 0.3) / 100 : null,
        },
        btnStyle,
      ]}>
      <Text
        style={[
          {
            color: active ? Colors.whiteColor : Colors.black_color,
            fontSize: (mobileW * 4) / 100,
            fontFamily: Font.FontMediumManrope,
          },
          txtStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
