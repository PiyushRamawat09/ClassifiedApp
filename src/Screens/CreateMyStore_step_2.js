import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import {useNavigation} from '@react-navigation/native';
import AppstatusBar from '../Componant/AppstatusBar';
import {Switch} from 'react-native-paper';
import ButtonComponent from '../Componant/ButtonComponent';

const CreateMyStore_step_2 = () => {
  const {navigate, goBack} = useNavigation();

  const [mondayStatus, setMondayStatus] = useState(true);
  const [tuesdayStatus, setTuesdayStatus] = useState(true);
  const [wednesdayStatus, setWednesdayStatus] = useState(true);
  const [thursdayStatus, setThursdayStatus] = useState(true);
  const [fridayStatus, setFridayStatus] = useState(true);
  const [saturdayStatus, setSaturdayStatus] = useState(true);
  const [sundayStatus, setSundayStatus] = useState(false);

  const switch_toggle = status => {
    if (status === 0) {
      setSundayStatus(prev => !prev);
    }
    if (status === 1) {
      setMondayStatus(prev => !prev);
    }
    if (status === 2) {
      setTuesdayStatus(prev => !prev);
    }
    if (status === 3) {
      setWednesdayStatus(prev => !prev);
    }
    if (status === 4) {
      setThursdayStatus(prev => !prev);
    }
    if (status === 5) {
      setFridayStatus(prev => !prev);
    }
    if (status === 6) {
      setSaturdayStatus(prev => !prev);
    }
  };

  const [successModal, setSuccessModal] = useState(false);

  return (
    <View style={styles.container}>
      <AppstatusBar />

      {/*--------------------  header -------------- */}
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
            fontSize: (mobileW * 5) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontBold,
          }}>
          {Lang_chg.availability_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 7.5) / 100,
          }}></View>
      </View>
      {/* -------------------------------------------- */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={successModal}
        onRequestClose={() => {
          consolepro.consolelog('backkac');
          setSuccessModal(false);
        }}>
        <TouchableOpacity
          onPress={() => setSuccessModal(false)}
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000090',
          }}>
          <View
            style={{
              width: (mobileW * 85) / 100,
              paddingVertical: (mobileH * 5) / 100,
              borderRadius: (mobileW * 3) / 100,
              backgroundColor: Colors.whiteColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={localimag.icon_success}
              style={{
                width: (mobileW * 28) / 100,
                height: (mobileW * 28) / 100,
                resizeMode: 'contain',
                marginTop: (-mobileH * 1) / 100,
              }}
            />
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 5.5) / 100,
                fontFamily: Font.FontBold,
              }}>
              {Lang_chg.success_txt[config.language]}
            </Text>
            <Text
              style={{
                color: Colors.modalTabColor,
                fontSize: (mobileW * 3.8) / 100,
                fontFamily: Font.FontRegular,
                marginTop: (mobileH * 1) / 100,
                textAlign: 'center',
                width: (mobileW * 60) / 100,
                lineHeight: (mobileH * 3) / 100,
              }}>
              {Lang_chg.your_account_will_be_activate[config.language]}
            </Text>

            <View
              style={{
                marginTop: (mobileH * 3) / 100,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ButtonComponent
                onPress={() => {
                  setSuccessModal(false);

                  navigate('BuySubscription');
                }}
                title={Lang_chg.ok_txt[config.language]}
                btnStyle={{
                  width: (mobileW * 30) / 100,
                  borderRadius: (mobileW * 1) / 100,
                  height: (mobileH * 5) / 100,
                }}
                active={true}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <View
        style={{
          marginTop: (mobileH * 2) / 100,
          alignSelf: 'center',
        }}>
        <Image
          source={localimag.icon_step_2}
          style={{
            width: (mobileW * 40) / 100,
            height: (mobileH * 8) / 100,
            resizeMode: 'contain',
          }}
        />
      </View>

      {/* --------------------- */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.mainView,
          {
            paddingBottom: (mobileH * 10) / 100,
          },
        ]}>
        {/* Always open view */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: Colors.theme_color,
              fontSize: (mobileW * 4.5) / 100,
              fontFamily: Font.FontBold,
            }}>
            {Lang_chg.always_open_txt[config.language]}
          </Text>

          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={localimag.icon_checkBox_empty}
              style={{
                width: (mobileW * 6) / 100,
                height: (mobileW * 6) / 100,
                resizeMode: 'contain',
                tintColor: Colors.darkGrey,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Monday */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 4) / 100,
          }}>
          <Switch
            trackColor={{
              false: Colors.placeholder_color,
              true: Colors.placeholder_color,
            }}
            thumbColor={mondayStatus ? Colors.theme_color : Colors.white_color}
            onValueChange={() => {
              switch_toggle(1);
            }}
            style={{
              transform:
                config.device_type == 'ios'
                  ? [{scaleX: 0.6}, {scaleY: 0.6}]
                  : [{scaleX: 0.9}, {scaleY: 0.9}],
              marginLeft: (-mobileW * 1) / 100,
            }}
            value={mondayStatus}></Switch>

          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              marginLeft: (mobileW * 1) / 100,
              width: (mobileW * 19) / 100,
            }}>
            {Lang_chg.monday_txt[config.language]}
          </Text>

          {/* from */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 28.6) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: (mobileW * 1.8) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.from_txt[config.language]}
            </Text>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>

          {/* to */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 28.6) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: (mobileW * 3) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.to_txt[config.language]}
            </Text>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </View>

        {/* Tuesday */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 3) / 100,
          }}>
          <Switch
            trackColor={{
              false: Colors.placeholder_color,
              true: Colors.placeholder_color,
            }}
            thumbColor={tuesdayStatus ? Colors.theme_color : Colors.white_color}
            onValueChange={() => {
              switch_toggle(2);
            }}
            style={{
              transform:
                config.device_type == 'ios'
                  ? [{scaleX: 0.6}, {scaleY: 0.6}]
                  : [{scaleX: 0.9}, {scaleY: 0.9}],
              marginLeft: (-mobileW * 1) / 100,
            }}
            value={tuesdayStatus}></Switch>

          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              marginLeft: (mobileW * 1) / 100,
              width: (mobileW * 19) / 100,
            }}>
            {Lang_chg.tuesday_txt[config.language]}
          </Text>

          {/* from */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 28.6) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: (mobileW * 1.8) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.from_txt[config.language]}
            </Text>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>

          {/* to */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 28.6) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: (mobileW * 3) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.to_txt[config.language]}
            </Text>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </View>

        {/* Wednesday */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 3) / 100,
          }}>
          <Switch
            trackColor={{
              false: Colors.placeholder_color,
              true: Colors.placeholder_color,
            }}
            thumbColor={
              wednesdayStatus ? Colors.theme_color : Colors.white_color
            }
            onValueChange={() => {
              switch_toggle(3);
            }}
            style={{
              transform:
                config.device_type == 'ios'
                  ? [{scaleX: 0.6}, {scaleY: 0.6}]
                  : [{scaleX: 0.9}, {scaleY: 0.9}],
              marginLeft: (-mobileW * 1) / 100,
            }}
            value={wednesdayStatus}></Switch>

          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              marginLeft: (mobileW * 1) / 100,
              width: (mobileW * 19) / 100,
            }}>
            {Lang_chg.wednesday_txt[config.language]}
          </Text>

          {/* from */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 28.6) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: (mobileW * 1.8) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.from_txt[config.language]}
            </Text>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>

          {/* to */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 28.6) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: (mobileW * 3) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.to_txt[config.language]}
            </Text>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </View>

        {/* Thursday */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 3) / 100,
          }}>
          <Switch
            trackColor={{
              false: Colors.placeholder_color,
              true: Colors.placeholder_color,
            }}
            thumbColor={
              thursdayStatus ? Colors.theme_color : Colors.white_color
            }
            onValueChange={() => {
              switch_toggle(4);
            }}
            style={{
              transform:
                config.device_type == 'ios'
                  ? [{scaleX: 0.6}, {scaleY: 0.6}]
                  : [{scaleX: 0.9}, {scaleY: 0.9}],
              marginLeft: (-mobileW * 1) / 100,
            }}
            value={thursdayStatus}></Switch>

          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              marginLeft: (mobileW * 1) / 100,
              width: (mobileW * 19) / 100,
            }}>
            {Lang_chg.thursday_txt[config.language]}
          </Text>

          {/* from */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 28.6) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: (mobileW * 1.8) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.from_txt[config.language]}
            </Text>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>

          {/* to */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 28.6) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: (mobileW * 3) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.to_txt[config.language]}
            </Text>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </View>

        {/* Friday */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 3) / 100,
          }}>
          <Switch
            trackColor={{
              false: Colors.placeholder_color,
              true: Colors.placeholder_color,
            }}
            thumbColor={fridayStatus ? Colors.theme_color : Colors.white_color}
            onValueChange={() => {
              switch_toggle(5);
            }}
            style={{
              transform:
                config.device_type == 'ios'
                  ? [{scaleX: 0.6}, {scaleY: 0.6}]
                  : [{scaleX: 0.9}, {scaleY: 0.9}],
              marginLeft: (-mobileW * 1) / 100,
            }}
            value={fridayStatus}></Switch>

          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              marginLeft: (mobileW * 1) / 100,
              width: (mobileW * 19) / 100,
            }}>
            {Lang_chg.friday_txt[config.language]}
          </Text>

          {/* from */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 28.6) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: (mobileW * 1.8) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.from_txt[config.language]}
            </Text>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>

          {/* to */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 28.6) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: (mobileW * 3) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.to_txt[config.language]}
            </Text>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </View>

        {/* Saturday */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 3) / 100,
          }}>
          <Switch
            trackColor={{
              false: Colors.placeholder_color,
              true: Colors.placeholder_color,
            }}
            thumbColor={
              saturdayStatus ? Colors.theme_color : Colors.white_color
            }
            onValueChange={() => {
              switch_toggle(6);
            }}
            style={{
              transform:
                config.device_type == 'ios'
                  ? [{scaleX: 0.6}, {scaleY: 0.6}]
                  : [{scaleX: 0.9}, {scaleY: 0.9}],
              marginLeft: (-mobileW * 1) / 100,
            }}
            value={saturdayStatus}></Switch>

          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              marginLeft: (mobileW * 1) / 100,
              width: (mobileW * 19) / 100,
            }}>
            {Lang_chg.saturday_txt[config.language]}
          </Text>

          {/* from */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 28.6) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: (mobileW * 1.8) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.from_txt[config.language]}
            </Text>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>

          {/* to */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 28.6) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: (mobileW * 3) / 100,
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.to_txt[config.language]}
            </Text>

            <Image
              source={localimag.icon_dropDown}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </View>

        {/* Sunday */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 3) / 100,
          }}>
          <Switch
            trackColor={{
              false: Colors.placeholder_color,
              true: Colors.placeholder_color,
            }}
            thumbColor={sundayStatus ? Colors.theme_color : Colors.white_color}
            onValueChange={() => {
              switch_toggle(0);
            }}
            style={{
              transform:
                config.device_type == 'ios'
                  ? [{scaleX: 0.6}, {scaleY: 0.6}]
                  : [{scaleX: 0.9}, {scaleY: 0.9}],
              marginLeft: (-mobileW * 1) / 100,
            }}
            value={sundayStatus}></Switch>

          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontRegular,
              marginLeft: (mobileW * 1) / 100,
              width: (mobileW * 19) / 100,
            }}>
            {Lang_chg.sunday_txt[config.language]}
          </Text>

          {/* from */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 60.5) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.closedColor,
              borderRadius: (mobileW * 2) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: (mobileW * 1.8) / 100,
              backgroundColor: Colors.closedColor,
            }}>
            <Image
              source={localimag.icon_moon}
              style={{
                width: (mobileW * 3.5) / 100,
                height: (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
            <Text
              style={{
                color: Colors.darkGrey,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
                marginLeft: (mobileW * 2) / 100,
              }}>
              {Lang_chg.closed_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* button View */}

        <ButtonComponent
          title={Lang_chg.create_store_txt[config.language]}
          onPress={() => setSuccessModal(true)}
          btnStyle={{
            marginTop:
              config.device_type == 'ios'
                ? (mobileH * 6) / 100
                : (mobileH * 8) / 100,
          }}
          active={true}
        />
      </ScrollView>
    </View>
  );
};

export default CreateMyStore_step_2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    // width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 3) / 100,
  },
});
