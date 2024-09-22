import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  BackHandler,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import AppstatusBar from '../Componant/AppstatusBar';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  mobileH,
  mobileW,
  localimag,
} from '../Provider/utilslib/Utils';

const Notification = () => {
  const {navigate, goBack} = useNavigation();
  const [notificationArrArr, setNotificationArr] = useState([
    {
      id: 0,
      icon: require('../Icons/Images/image_user_3.jpg'),
      title: 'Anthony Jonas',
      date: '5 min',
      description: 'messages you',
    },
    {
      id: 1,
      icon: require('../Icons/Images/image_user_3.jpg'),
      title: 'Anthony Jonas',
      date: '10 min',
      description: 'Start follows you',
    },
    {
      id: 2,
      icon: localimag.icon_liveChat,
      title: 'Follow Oasis Boutique',
      date: '15 min',
      description:
        'Stay updated! Follow Oasis Boutique for exclusive deals and the latest services.',
    },
    {
      id: 3,
      icon: require('../Icons/Images/image_user_6.jpg'),
      title: 'Abraham Nicole',
      date: '30 min',
      description: 'Start follows you',
    },
    {
      id: 4,
      icon: localimag.icon_liveChat,
      title: 'Admin',
      date: '45 min',
      description:
        'Explore new destinations! These popular routes might interest you',
    },
    {
      id: 5,
      icon: require('../Icons/Images/image_user_5.jpg'),
      title: 'David Miller',
      date: '50 min',
      description: 'messages you',
    },
    {
      id: 6,
      icon: require('../Icons/Images/image_user_3.jpg'),
      title: 'Nick Jonas',
      date: '55 min',
      description: 'Start follows you',
    },
  ]);

  const handleBackPress = useCallback(() => {
    goBack();
    return true;
  }, []);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }, [handleBackPress]),
  );

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
            fontSize: (mobileW * 5) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontBoldLexend,
          }}>
          {Lang_chg.notifications_txt[config.language]}
        </Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={{
              fontSize: (mobileW * 4) / 100,
              color: Colors.black_color,
              fontFamily: Font.FontBoldManrope,
            }}>
            {Lang_chg.clear_all[config.language]}
          </Text>
        </TouchableOpacity>
      </View>
      {/* ----------------------------- */}

      <View style={styles.mainView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={notificationArrArr}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 15) / 100,
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  {
                    marginTop:
                      index == 0 ? (mobileH * 2.5) / 100 : (mobileH * 1) / 100,
                  },
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.icon}
                    style={{
                      height: (mobileW * 12) / 100,
                      width: (mobileW * 12) / 100,
                      resizeMode: 'contain',
                      borderRadius: (mobileW * 30) / 100,
                    }}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    {item.id != 4 ? (
                      <Text
                        style={{
                          color: Colors.black_color,
                          fontSize: (mobileW * 3.5) / 100,
                          fontFamily: Font.FontBoldManrope,
                          marginLeft: (mobileW * 3.5) / 100,
                          width: (mobileW * 64) / 100,
                        }}>
                        {item.title}{' '}
                        <Text
                          style={{
                            color: Colors.black_color,
                            fontSize: (mobileW * 3.5) / 100,
                            fontFamily: Font.FontMediumManrope,
                            marginLeft: (mobileW * 3.5) / 100,
                            width: (mobileW * 64) / 100,
                            textDecorationLine: 'none',
                          }}>
                          {item.description}
                        </Text>
                      </Text>
                    ) : (
                      <Text
                        style={{
                          color: Colors.black_color,
                          fontSize: (mobileW * 3.5) / 100,
                          fontFamily: Font.FontMediumManrope,
                          marginLeft: (mobileW * 3.5) / 100,
                          width: (mobileW * 64) / 100,
                          textDecorationLine: 'none',
                        }}>
                        {item.description}
                      </Text>
                    )}

                    <Text
                      style={{
                        color: Colors.darkGrey,
                        fontSize: (mobileW * 2.5) / 100,
                        fontFamily: Font.FontMediumManrope,
                      }}>
                      {item.date}
                    </Text>
                  </View>
                </View>

                {index != notificationArrArr.length - 1 && (
                  <View
                    style={{
                      width: (mobileW * 90) / 100,
                      alignSelf: 'center',
                      height: (mobileH * 0.1) / 100,
                      backgroundColor: Colors.borderGrey,
                      marginVertical: (mobileH * 2.5) / 100,
                    }}></View>
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 4) / 100,
  },
});
