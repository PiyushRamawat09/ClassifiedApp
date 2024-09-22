import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import AppstatusBar from '../Componant/AppstatusBar';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  mobileH,
  mobileW,
  localimag,
} from '../Provider/utilslib/Utils';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from '../Componant/ButtonComponent';

const VerifyMyIdentity = () => {
  const { navigate, goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <AppstatusBar />
      {/*---------- header------------ */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: (mobileW * 90) / 100,
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginTop: (mobileH * 3) / 100,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: (mobileW * 6) / 100,
            width: (mobileW * 6) / 100,
          }}
          onPress={() => goBack()}>
          <Image
            source={localimag.icon_goback}
            style={{
              height: (mobileW * 6) / 100,
              width: (mobileW * 6) / 100,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: (mobileW * 5.5) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontBold,
          }}>
          {Lang_chg.verifiy_my_identity[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 10) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      <View style={styles.mainView}>
        <View
          style={{
            alignItems: 'center',
            marginTop: (mobileH * 3) / 100,
          }}>
          <Text
            style={{
              color: Colors.buttoncolor,
              fontSize: (mobileW * 6.5) / 100,
              fontFamily: Font.FontBold,
            }}>
            {Lang_chg.verifyYourIdentity[config.language]}
          </Text>
          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 4) / 100,
              fontFamily: Font.FontRegular,
              marginTop: (mobileH * 1) / 100,
              textAlign: 'center',
              lineHeight: (mobileH * 3) / 100,
            }}>
            {Lang_chg.gointrust[config.language]}
          </Text>
        </View>
        <Image
          source={localimag.icon_selected}
          style={{
            marginTop: mobileW * 2 / 100,
            width: (mobileW * 16) / 100,
            height: (mobileW * 16) / 100,
            resizeMode: 'contain', alignSelf: 'center'
          }}
        />
        {/* select language view */}
        <View
          style={{
            paddingVertical: (mobileH * 3) / 100,
            backgroundColor: Colors.cardbackground,
            borderRadius: mobileW * 3 / 100,
            width: mobileW * 85 / 100,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              marginTop: (mobileH * 2) / 100,
              color: Colors.black_color,
              fontSize: (mobileW * 4.5) / 100,
              fontFamily: Font.FontBold,
              marginLeft: mobileW * 4 / 100
            }}>
            {Lang_chg.benefitsOf[config.language]}
          </Text>
          <Text
            style={{
              color: Colors.buttoncolor,
              marginLeft: mobileW * 4 / 100,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              marginTop: (mobileH * 1) / 100,
              lineHeight: (mobileH * 3) / 100,
            }}>
            {Lang_chg.strangth[config.language]}
          </Text>
          <Text
            style={{
              color: Colors.buttoncolor,
              marginLeft: mobileW * 4 / 100,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              marginTop: (mobileH * 1) / 100,
              lineHeight: (mobileH * 3) / 100,
            }}>
            {Lang_chg.Increase_your[config.language]}
          </Text>
          <Text
            style={{
              color: Colors.buttoncolor,
              marginLeft: mobileW * 4 / 100,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              marginTop: (mobileH * 1) / 100,
              lineHeight: (mobileH * 3) / 100,
            }}>
            {Lang_chg.Access_exclusive[config.language]}
          </Text>
        </View>
        {/* --------documents accepted------- */}
        <View
          style={{
            marginTop: mobileW * 7 / 100,
            paddingVertical: (mobileH * 3) / 100,
            backgroundColor: Colors.cardbackground,
            borderRadius: mobileW * 3 / 100,
            width: mobileW * 85 / 100,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              marginTop: (mobileH * 2) / 100,
              color: Colors.black_color,
              fontSize: (mobileW * 4.5) / 100,
              fontFamily: Font.FontBold,
              marginLeft: mobileW * 4 / 100
            }}>
            {Lang_chg.Documents_accepted[config.language]}
          </Text>
          <Text
            style={{
              color: Colors.buttoncolor,
              marginLeft: mobileW * 4 / 100,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              marginTop: (mobileH * 1) / 100,
              lineHeight: (mobileH * 3) / 100,
            }}>
            {Lang_chg.strangth[config.language]}
          </Text>
          <Text
            style={{
              color: Colors.buttoncolor,
              marginLeft: mobileW * 4 / 100,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              marginTop: (mobileH * 1) / 100,
              lineHeight: (mobileH * 3) / 100,
            }}>
            {Lang_chg.Increase_your[config.language]}
          </Text>
          <Text
            style={{
              color: Colors.buttoncolor,
              marginLeft: mobileW * 4 / 100,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              marginTop: (mobileH * 1) / 100,
              lineHeight: (mobileH * 3) / 100,
            }}>
            {Lang_chg.Access_exclusive[config.language]}
          </Text>
        </View>
        {/* <View
          style={{
            alignItems: 'center',
            marginTop: (mobileH * 3) / 100,
          }}>
          <Text
            style={{
              color: Colors.selectLanguageColor,
              fontSize: (mobileW * 6.5) / 100,
              fontFamily: Font.FontBold,
            }}>
            {Lang_chg.verification_process_txt[config.language]}
          </Text>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 4) / 100,
              fontFamily: Font.FontRegular,
              marginTop: (mobileH * 1) / 100,
              textAlign: 'center',
              lineHeight: (mobileH * 3) / 100,
            }}>
            Lorem ipsum dolor sit amet consectetur. Et ut eu iaculis
            condimentum.
          </Text>
        </View> */}

        {/* ------------------- */}

        {/* Button view */}

        {/* <View
          style={{
            marginTop: (mobileH * 5.5) / 100,
          }}>
          <ButtonComponent
            title={Lang_chg.upload_document_txt[config.language]}
            onPress={() => navigate('UploadDocument')}
            active={true}
          />

          <ButtonComponent
            onPress={() => navigate('UploadSelfie')}
            title={Lang_chg.upload_selfie_txt[config.language]}
            btnStyle={{
              marginTop: (mobileH * 3) / 100,
            }}
            active={false}
          />
        </View> */}
      </View>
    </View>
  );
};

export default VerifyMyIdentity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    marginTop: (mobileH * 6) / 100,
  },
});
