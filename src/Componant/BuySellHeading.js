import React from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Font, mobileH, mobileW, verticalScale, scaleFont, localimag, config } from '../Provider/utilslib/Utils'




const BuySellHeading = (props) => {
          return (
                    <TouchableOpacity
                              onPress={() => props.onPress()
                              }
                              activeOpacity={0.7}
                              style={{
                                        width: mobileW * 90 / 100,
                                        alignItems: 'center',
                                        marginTop: mobileH * 2 / 100,
                                        alignSelf: 'center',
                                        flexDirection: 'row',
                                        paddingBottom: mobileH * 1 / 100
                              }}>
                              <TouchableOpacity
                                        onPress={() => props.onPress()
                                        }
                                        style={{}}>
                                        <Image style={{
                                                  width: mobileW * 5 / 100,
                                                  height: mobileW * 5 / 100
                                        }}
                                                  resizeMode='contain'
                                                  source={localimag.left}></Image>
                              </TouchableOpacity>
                              <View style={{
                                        paddingHorizontal: mobileW * 2 / 100,
                                        alignItems: 'center'
                              }}>
                                        <Text style={{
                                                  color: Colors.placeholder_color,
                                                  fontSize: mobileW * 5 / 100,
                                                  fontFamily: Font.FontBold,
                                                  marginTop: config.device_type == 'ios' ? mobileH * 0.3 / 100 : mobileH * 0 / 100
                                        }}>{props.heading}</Text>

                              </View>
                    </TouchableOpacity>
          )
}

export default BuySellHeading

const styles = StyleSheet.create({})




