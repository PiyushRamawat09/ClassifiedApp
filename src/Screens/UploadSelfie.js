import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AppstatusBar from '../Componant/AppstatusBar';
import ButtonComponent from '../Componant/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  mobileH,
  mobileW,
  localimag,
} from '../Provider/utilslib/Utils';

const UploadSelfie = () => {
  const {navigate, goBack} = useNavigation();
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
      </View>
      {/* ----------------------------- */}

      {/* upload selfie */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: (mobileH * 5) / 100,
        }}>
        <Text
          style={{
            color: Colors.black_color,
            fontSize: (mobileW * 5) / 100,
            fontFamily: Font.FontBold,
          }}>
          {Lang_chg.upload_selfie_txt[config.language]}
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            marginTop: (mobileH * 10) / 100,
          }}>
          <Image
            source={localimag.icon_upload_selfie}
            style={{
              width: (mobileW * 80) / 100,
              alignSelf: 'center',
              height: (mobileH * 40) / 100,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>

        <ButtonComponent
          title={Lang_chg.upload_txt[config.language]}
          onPress={() => navigate('VerifyMyIdentity')}
          btnStyle={{
            position: 'absolute',
            bottom: (mobileH * 10) / 100,
          }}
          active={true}
        />
      </View>
    </View>
  );
};

export default UploadSelfie;

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
