import {
  View,
  TouchableOpacity,
  Image,
  Keyboard,
  Text,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  Colors,
  mobileW,
  localimag,
  Font,
  mobileH,
  config,
} from '../Provider/utilslib/Utils';

const InputContainer = ({
  title,
  placeholder,
  placeholderIcon,
  value,
  setValue,
  keyboardType,
  secureText,
  setSecureText,
  inputStyle,
  showEyeIcon,
  containerStyle,
  maxLength,
  setFocused,
  focused,
  multiline,
  inputContainer,
}) => {
  return (
    <View
      style={[
        {
          width: (mobileW * 90) / 100,
          height: (mobileH * 11) / 100,
          backgroundColor: Colors.inputBackground,
          borderColor: focused ? Colors.darkGreen_color : Colors.darkGrey,
          borderWidth: (mobileW * 0.2) / 100,
          borderRadius: (mobileW * 3) / 100,
          paddingVertical: (mobileH * 2) / 100,
          paddingHorizontal: (mobileW * 6) / 100,
        },
        containerStyle,
      ]}>
      <Text
        style={{
          color: Colors.black_color,
          fontSize: (mobileW * 3) / 100,
          fontFamily: Font.FontMediumManrope,
        }}>
        {title}
      </Text>

      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: config.device_type == 'ios' ? (mobileH * 2) / 100 : null,
          },
          inputContainer,
        ]}>
        <Image
          source={placeholderIcon}
          style={{
            width: (mobileW * 5) / 100,
            height: (mobileW * 5) / 100,
            resizeMode: 'contain',
            tintColor: focused ? Colors.darkGreen_color : Colors.darkGrey,
          }}
        />

        <TextInput
          multiline={multiline}
          placeholderTextColor={Colors.darkGrey}
          returnKeyLabel="done"
          returnKeyType="done"
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          value={value}
          keyboardType={keyboardType}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={[
            {
              width: showEyeIcon ? (mobileW * 64) / 100 : (mobileW * 73) / 100,
              marginLeft: (mobileW * 2) / 100,
              color: Colors.black_color,
              fontFamily: Font.FontMediumManrope,
              fontSize: (mobileW * 3.3) / 100,
            },
            inputStyle,
          ]}
          placeholder={placeholder}
          secureTextEntry={secureText}
          onChangeText={val => setValue(val)}
          maxLength={maxLength}
        />

        {showEyeIcon && (
          <TouchableOpacity
            onPress={() => setSecureText(prevState => !prevState)}
            style={{
              marginLeft: (mobileW * 1) / 100,
            }}>
            <Image
              source={
                secureText ? localimag.icon_eye : localimag.icon_cross_eye
              }
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputContainer;
