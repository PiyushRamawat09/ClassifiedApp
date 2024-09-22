import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  mobileH,
  mobileW,
  localimag,
} from '../Provider/utilslib/Utils';
import AppstatusBar from '../Componant/AppstatusBar';
import {useNavigation} from '@react-navigation/native';
import ButtonComponent from '../Componant/ButtonComponent';

const ReportUser = () => {
  const [message, setMessage] = useState('');
  const {navigate, goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <AppstatusBar />
      {/* header */}
      <View
        style={{
          marginTop: (mobileH * 3) / 100,
          width: (mobileW * 90) / 100,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
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
            fontSize: (mobileW * 5) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontBoldLexend,
            textAlign: 'center',
          }}>
          {Lang_chg.report_txt[config.language]}
        </Text>

        <TouchableOpacity
          activeOpacity={1}
          style={{
            width: (mobileW * 5) / 100,
          }}></TouchableOpacity>
      </View>

      <View style={styles.mainView}>
        <Text
          style={{
            color: Colors.blockBorderColor,
            fontSize: (mobileW * 3) / 100,
            fontFamily: Font.FontMediumManrope,
          }}>
          {Lang_chg.reason_for_reporting[config.language]}
        </Text>
        <Text
          style={{
            color: Colors.blockBorderColor,
            fontSize: (mobileW * 4) / 100,
            fontFamily: Font.FontMediumManrope,
            marginTop: (mobileH * 2) / 100,
          }}>
          {Lang_chg.message_txt[config.language]}
        </Text>
      </View>

      {/* input container */}
      <View
        style={{
          width: (mobileW * 90) / 100,
          height: (mobileH * 20) / 100,
          alignSelf: 'center',
          borderRadius: (mobileW * 2) / 100,
          marginTop: (mobileH * 1.5) / 100,
          borderWidth: (mobileW * 0.2) / 100,
          borderColor: Colors.borderGrey,
          padding: (mobileW * 2) / 100,
        }}>
        <TextInput
          multiline={true}
          placeholderTextColor={Colors.darkGrey}
          returnKeyLabel="done"
          returnKeyType="done"
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          value={message}
          keyboardType="default"
          style={{
            width: (mobileW * 85) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontMediumManrope,
            fontSize: (mobileW * 3.3) / 100,
            height: (mobileH * 20) / 100,
            textAlignVertical: 'top',
          }}
          placeholder={Lang_chg.enter_message_txt[config.language]}
          onChangeText={val => setMessage(val)}
          maxLength={250}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: (mobileH * 3) / 100,
          width: (mobileW * 90) / 100,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: Colors.black_color,
            fontSize: (mobileW * 3.5) / 100,
            fontFamily: Font.FontBoldManrope,
          }}>
          {Lang_chg.blockUser_txt[config.language]}
        </Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Image
            source={localimag.icon_checkBox}
            style={{
              width: (mobileW * 6) / 100,
              height: (mobileW * 6) / 100,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>

      <ButtonComponent
        title={Lang_chg.submit_txt[config.language]}
        onPress={() => navigate('Inbox')}
        btnStyle={{
          marginTop: (mobileH * 4) / 100,
        }}
        active={true}
      />
    </View>
  );
};

export default ReportUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 5) / 100,
  },
});
