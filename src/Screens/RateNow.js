import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
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
import ButtonComponent from '../Componant/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import StarRating from 'react-native-star-rating';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const RateNow = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [isMessageFocused, setMessageFocused] = useState(false);

  const [rating, setRating] = useState(1);

  function setRatingfunc(rating) {
    if (rating < 1) {
      setRating(1);
    } else {
      setRating(rating);
    }
  }

  return (
    <View style={styles.container}>
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
            height: (mobileW * 8) / 100,
            width: (mobileW * 8) / 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
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
          }}>
          {Lang_chg.rateNow_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 10) / 100,
          }}></View>
      </View>

      {/* --------------- */}

      <KeyboardAwareScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        keyboardShouldPersistTaps={false}>
        <View
          style={{
            width: (mobileW * 20) / 100,
            height: (mobileW * 20) / 100,
            borderRadius: (mobileW * 30) / 100,
            backgroundColor: Colors.whiteColor,

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={localimag.image_redIphone}
            style={{
              width: (mobileW * 18.5) / 100,
              height: (mobileW * 18.5) / 100,
              borderRadius: (mobileW * 30) / 100,
              backgroundColor: Colors.whiteColor,
            }}
          />
        </View>

        <Text
          style={{
            color: Colors.deactiveColor,
            fontSize: (mobileW * 4) / 100,
            fontFamily: Font.FontBoldManrope,
            marginTop: (mobileH * 1.5) / 100,
          }}>
          Khady Ahmed
        </Text>

        <StarRating
          containerStyle={{
            width: (mobileW * 55) / 100,
            marginTop: (mobileH * 3) / 100,
          }}
          fullStar={localimag.icon_active_star}
          halfStar={localimag.icon_halfStar}
          emptyStar={localimag.icon_deactive_star}
          maxStars={5}
          starSize={(mobileW * 9) / 100}
          rating={rating}
          starStyle={{
            marginRight: (mobileW * 0.5) / 100,
          }}
          disabled={false}
          selectedStar={rating => {
            setRatingfunc(rating);
          }}
        />

        {/* Message */}

        <View
          style={{
            width: (mobileW * 90) / 100,
            height: (mobileH * 22) / 100,
            backgroundColor: Colors.inputBackground,
            borderColor: isMessageFocused
              ? Colors.darkGreen_color
              : Colors.darkGrey,
            borderWidth: (mobileW * 0.2) / 100,
            borderRadius: (mobileW * 3) / 100,
            paddingVertical: (mobileH * 2) / 100,
            paddingHorizontal: (mobileW * 6) / 100,
            marginTop: (mobileH * 4) / 100,
          }}>
          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 3) / 100,
              fontFamily: Font.FontMediumManrope,
            }}>
            {Lang_chg.message_asteric_txt[config.language]}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: (mobileH * 1.5) / 100,
            }}>
            <Image
              source={localimag.icon_message}
              style={{
                width: (mobileW * 4.5) / 100,
                height: (mobileW * 4.5) / 100,
                resizeMode: 'contain',
                tintColor: isMessageFocused
                  ? Colors.darkGreen_color
                  : Colors.darkGrey,
              }}
            />

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
              onFocus={() => setMessageFocused(true)}
              onBlur={() => setMessageFocused(false)}
              style={{
                width: (mobileW * 73) / 100,
                marginLeft: (mobileW * 3) / 100,
                color: Colors.black_color,
                fontFamily: Font.FontMediumManrope,
                fontSize: (mobileW * 3.3) / 100,
                height: (mobileH * 15) / 100,
                textAlignVertical: 'top',
                paddingTop: 0,
              }}
              placeholder={Lang_chg.enter_message_txt[config.language]}
              onChangeText={val => setMessage(val)}
              maxLength={250}
            />
          </View>
        </View>

        <ButtonComponent
          title={Lang_chg.submit_txt[config.language]}
          onPress={() => navigation.goBack()}
          btnStyle={{
            marginTop: (mobileH * 4) / 100,
          }}
          active={true}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RateNow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: (mobileH * 5) / 100,
    backgroundColor: Colors.whiteColor,
  },
});
