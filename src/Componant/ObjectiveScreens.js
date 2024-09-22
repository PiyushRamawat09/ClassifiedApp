import React, { useState } from 'react'
import { Text, SafeAreaView, TouchableOpacity, StatusBar, View, StyleSheet, Image, TextInput } from 'react-native'
import { config, Lang_chg, Font, Colors, mobileH, mobileW, localimag, } from '../Provider/utilslib/Utils';


const ObjectiveScreens = (props) => {
          return (
                    <View style={{ alignItems: 'center', alignSelf: 'center' }} >

                              {/* //===============Image==============// */}
                              <View style={{
                                        width: mobileW * 90 / 100,
                                        alignSelf: 'center',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        marginTop: mobileH * 10 / 100,
                                        alignItems: 'center'
                              }}>
                                        <Image style={{
                                                  width: mobileW * 75 / 100,
                                                  height: mobileW * 75 / 100
                                        }} resizeMode='cover'
                                                  source={localimag.ObjectiveOneImage}></Image>
                              </View>

                              <View style={{
                                        width: mobileW * 60 / 100,
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        marginTop: mobileH * 7 / 100
                              }}>
                                        <Text style={{
                                                  color: Colors.whiteColor,
                                                  fontFamily: Font.FontSemiBold,
                                                  fontSize: mobileW * 6.5 / 100,
                                                  textAlign: 'center'
                                        }}>
                                                  {props.title}
                                        </Text>
                              </View>
                              <View
                                        style={{
                                                  width: mobileW * 90 / 100,
                                                  alignItems: 'center',
                                                  alignSelf: 'center',
                                                  marginTop: mobileH * 2 / 100,
                                        }} >
                                        <Text style={{
                                                  color: Colors.TermsColor,
                                                  fontFamily: Font.FontMedium,
                                                  fontSize: mobileW * 3.8 / 100,
                                                  textAlign: 'center'
                                        }}>{props.text}</Text>
                              </View>

                              <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={props.onPress}
                                        style={{
                                                  width: mobileW * 90 / 100,
                                                  alignSelf: 'center',
                                                  flexDirection: 'row',
                                                  justifyContent: 'center',
                                                  marginTop: mobileH * 7 / 100,
                                                  alignItems: 'center'
                                        }}>
                                        <Image style={{
                                                  width: mobileW * 24 / 100,
                                                  height: mobileW * 24 / 100
                                        }} resizeMode='cover'
                                                  source={props.image}></Image>
                              </TouchableOpacity>
                    </View>
          )
}

export default ObjectiveScreens

const styles = StyleSheet.create({})

