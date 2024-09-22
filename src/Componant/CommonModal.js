
import React, { useState, useRef } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    Image,
    Modal,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import {
    config,
    Lang_chg,
    Font,
    Colors,
    mobileH,
    mobileW,
    localimag,
} from '../Provider/utilslib/Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

export default function CommonModal(props) {

    const { navigate, goBack } = useNavigation();
    const navigation = useNavigation();
    const [APILoaderModal, setAPILoaderModal] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.themeblack_color }}>

            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    width: mobileW,
                    paddingBottom: mobileH * 5 / 100
                }}
                keyboardShouldPersistTaps='handled'>



                {/* -------------------------------- */}
                {/* -----------------LoaderModel---------------- */}

                <Modal
                    animationType={'slide'}
                    transparent
                    visible={props.ViesibleModal}
                    onRequestClose={() => {
                    }}>
                    <View
                        style={styles.ModalContaiView}>
                        <View style={{
                            backgroundColor: Colors.themeblack_color,
                            width: mobileW * 90 / 100,
                            paddingVertical: mobileH * 2 / 100
                        }}>
                            <View style={{ paddingVertical: mobileH * 1 / 100, alignSelf: 'center' }}>
                                <View style={{
                                    width: mobileW * 73 / 100,
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Image style={{
                                        height: mobileW * 12 / 100,
                                        width: mobileW * 12 / 100,
                                    }}
                                        source={props.Image}>
                                    </Image>
                                    <Text style={styles.VerifiedCompletedStyle}>{props.LabelText}
                                    </Text>
                                    <Text style={styles.VerifiedCompletedStyle1}>{props.DetailText}</Text>

                                    <Text style={styles.VerifiedCompletedStyle1}>{props.Selfietxt} <Text style={{
                                        fontFamily: Font.FontBold,
                                        color: Colors.whiteColor,
                                        fontSize: mobileW * 3.3 / 100,
                                        textDecorationLine: 'underline'
                                    }}>{props.Selfietxt1}</Text></Text>

                                    <Text style={styles.VerifiedCompletedStyle1}>{props.PleaseTryAgain} <Text style={{
                                        fontFamily: Font.FontBold,
                                        color: Colors.YellowTextColor,
                                        fontSize: mobileW * 3.3 / 100,
                                        textDecorationLine: 'underline'
                                    }}>{props.TextYellow}</Text></Text>

                                </View>

                                {/* <TouchableOpacity
                                    onPress={() => { props.onPress }}
                                    style={{
                                        position: 'absolute', top: 0, right: mobileW * -4 / 100
                                    }}>
                                    <Image style={{
                                        height: mobileW * 4.5 / 100,
                                        width: mobileW * 4.5 / 100,
                                    }}
                                        source={localimag.CrossImage}>
                                    </Image>
                                </TouchableOpacity> */}
                            </View>
                        </View>
                    </View>
                </Modal>

            </KeyboardAwareScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({


    VerifiedCompletedStyle1: {
        fontFamily: Font.FontMedium,
        color: Colors.greyColor,
        fontSize: mobileW * 3.5 / 100,
        textAlign: 'center'
    },
    VerifiedCompletedStyle: {
        fontSize: mobileW * 4.2 / 100,
        fontFamily: Font.FontMedium,
        paddingTop: mobileH * 2 / 100,
        color: Colors.whiteColor,
        textAlign: 'center'
    },
    ModalContaiView: {
        flex: 1,
        backgroundColor: '#00000090',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
    },
    CongratsYouHaveVerifiesStyle: {
        fontFamily: Font.FontSemiBold,
        color: Colors.whiteColor,
        fontSize: mobileW * 4.2 / 100,
        textAlign: 'center',
        marginTop: mobileH * 1 / 100
    }


})
