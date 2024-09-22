import React from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Font, mobileH, mobileW, verticalScale, scaleFont, localimag, config } from '../Provider/utilslib/Utils'


const CustomButton = (props) => {
    return (
        <View style={{ alignItems: 'center', alignSelf: 'center' }} >
            <TouchableOpacity
                onPress={props.onPress}
                activeOpacity={0.7} style={{
                    backgroundColor: Colors.whiteColor,
                    height: mobileH * 6.5 / 100,
                    width: mobileW * 90 / 100,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: props.MarginTopStyle
                }}>
                <Text style={{
                    color: Colors.black_color,
                    fontFamily: Font.FontBold,
                    fontSize: mobileW * 4 / 100
                }}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default CustomButton;



const styles = StyleSheet.create({


});