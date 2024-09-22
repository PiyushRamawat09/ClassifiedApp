import {StyleSheet, Text, View, TextInput, Keyboard} from 'react-native';
import React from 'react';
import {Colors, Font, mobileH, mobileW} from '../Provider/utilslib/Utils';

const InputField = ({
  title,
  value,
  keyboardType,
  placeholder,
  inputFieldStyle,
  setValue,
  maxLength,
  inputContainerStyle,
  titleStyle,
  multiline,
}) => {
  return (
    <View style={[inputContainerStyle]}>
      <Text
        style={[
          {
            color: Colors.profileColor,
            fontSize: (mobileW * 4) / 100,
            fontFamily: Font.FontBoldManrope,
          },
          titleStyle,
        ]}>
        {title}
      </Text>

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
        style={[
          {
            width: (mobileW * 90) / 100,
            height: (mobileH * 7.5) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontMediumManrope,
            borderWidth: (mobileW * 0.3) / 100,
            borderColor: Colors.chatBack,
            borderRadius: (mobileW * 2) / 100,
            marginTop: (mobileH * 1.8) / 100,
            paddingHorizontal: (mobileW * 3) / 100,
            fontSize: (mobileW * 3.5) / 100,
          },
          inputFieldStyle,
        ]}
        placeholder={placeholder}
        onChangeText={val => setValue(val)}
        maxLength={maxLength}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({});
