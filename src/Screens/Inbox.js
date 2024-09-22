import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  Modal,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AppstatusBar from '../Componant/AppstatusBar';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import SearchContainer from '../Componant/SearchContainer';

const Inbox = () => {
  const {navigate, goBack} = useNavigation();

  const handleBackPress = useCallback(() => {
    navigate('Home');
    return true;
  }, [navigate]);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }, [handleBackPress]),
  );

  const [searchText, setSearchText] = useState('');

  const [userLists, setUserLists] = useState([
    {
      id: 0,
      name: 'Sophia Miller',
      msg: 'Hello Sophia i had seen a product so may i asked a question.....',
      time: '5 min',
      image: require('../Icons/Images/image_user_1.jpg'),
      new: true,
    },
    {
      id: 1,
      name: 'Abraham Nicole',
      msg: 'Hello Abraham i had seen a product so may i asked a question.....',
      time: '5 min',
      image: require('../Icons/Images/image_user_6.jpg'),
      new: false,
    },
    {
      id: 2,
      name: 'Sophia Miller',
      msg: 'Hello Sophia i had seen a product so may i asked a question.....',
      time: '5 min',
      image: require('../Icons/Images/image_user_7.jpg'),
      new: true,
    },
    {
      id: 3,
      name: 'David Miller',
      msg: 'Hello David i had seen a product so may i asked a question.....',
      time: '5 min',
      image: require('../Icons/Images/image_user_5.jpg'),
      new: false,
    },
    {
      id: 4,
      name: 'Sophia Miller',
      msg: 'Hello David i had seen a product so may i asked a question.....',
      time: '5 min',
      image: require('../Icons/Images/image_user_4.jpg'),
      new: true,
    },
    {
      id: 5,
      name: 'Nick Jonas',
      msg: 'Hello Nick i had seen a product so may i asked a question.....',
      time: '5 min',
      image: require('../Icons/Images/image_user_3.jpg'),
      new: false,
    },
  ]);

  // ------------------------------------

  const ScrollY = useRef(new Animated.Value(0)).current;

  const translateHeader = ScrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  const opacityTitle = ScrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const [modalVisiblele, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <AppstatusBar />
      {/*------------- header -------------- */}
      <Animated.View
        style={{
          backgroundColor: Colors.whiteColor,
          paddingBottom: (mobileH * 1.5) / 100,
          marginBottom: (mobileH * 1.5) / 100,

          transform: [{translateY: translateHeader}],

          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}>
        <View
          style={{
            marginTop: (mobileH * 3) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: (mobileW * 5) / 100,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: (mobileW * 5) / 100,
                width: (mobileW * 5) / 100,
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
            <Animated.Text
              style={{
                fontSize: (mobileW * 5) / 100,
                color: Colors.black_color,
                fontFamily: Font.FontBoldLexend,
                textAlign: 'center',
                opacity: opacityTitle,
              }}>
              {Lang_chg.inbox_txt[config.language]}
            </Animated.Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setModalVisible(true)}
              style={{
                height: (mobileW * 5) / 100,
                width: (mobileW * 5) / 100,
              }}>
              <Image
                source={localimag.icon_chatFilter}
                style={{
                  height: (mobileW * 6) / 100,
                  width: (mobileW * 6) / 100,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>

          {/* search container */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: (mobileH * 2.5) / 100,
            }}>
            <SearchContainer
              searchText={searchText}
              onChangeText={val => setSearchText(val)}
              placeholder={Lang_chg.serach_txt[config.language]}
              containerStyle={{}}
              inputStyle={{}}
            />
          </View>
        </View>
      </Animated.View>
      {/* ---------------------------------- */}

      {/* Chat Modal */}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisiblele}
        onRequestClose={() => {
          consolepro.consolelog('backkac');
          setModalVisible(false);
        }}>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            // backgroundColor: '#00000090',
          }}>
          <View
            style={{
              position: 'absolute',
              right: (mobileW * 5) / 100,
              top: (mobileW * 16) / 100,
              paddingVertical: (mobileH * 2) / 100,
              paddingHorizontal: (mobileW * 2) / 100,
              backgroundColor: Colors.whiteColor,
              alignSelf: 'center',
              borderRadius: (mobileW * 2) / 100,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,

              elevation: 7,
            }}>
            <TouchableOpacity activeOpacity={0.8}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3.8) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.all_chats_txt[config.language]}
              </Text>
            </TouchableOpacity>

            <View
              style={{
                width: (mobileW * 42) / 100,
                alignSelf: 'center',
                height: (mobileH * 0.1) / 100,
                backgroundColor: Colors.borderLine,
                marginTop: (mobileH * 2) / 100,
              }}></View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                marginTop: (mobileH * 2) / 100,
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 3.8) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.sharedProducts_txt[config.language]}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <Animated.FlatList
        data={userLists}
        keyExtractor={item => `${item.id}`}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: ScrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
        contentContainerStyle={[
          styles.mainView,
          {
            paddingTop: (mobileH * 19) / 100,
            paddingBottom: (mobileH * 5) / 100,
          },
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigate('ChatScreen', {
                  name: item.name,
                  image: item.image,
                })
              }
              activeOpacity={0.8}
              style={{
                flexDirection: 'row',
                marginTop:
                  index == 0 ? (mobileH * 1) / 100 : (mobileH * 4) / 100,
              }}>
              <Image
                source={item.image}
                style={{
                  width: (mobileW * 12.5) / 100,
                  height: (mobileW * 12.5) / 100,
                  borderRadius: (mobileW * 30) / 100,
                }}></Image>

              <View
                style={{
                  width: (mobileW * 60) / 100,
                  marginLeft: (mobileW * 3) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    color: Colors.deactiveColor,
                    fontFamily: Font.FontBoldManrope,
                  }}>
                  {item.name}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    width: (mobileW * 64) / 100,
                  }}>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: (mobileW * 2.8) / 100,
                      color: Colors.darkGrey,
                      fontFamily: Font.FontMediumManrope,
                      marginTop: (mobileH * 0.5) / 100,
                      lineHeight: (mobileH * 2.2) / 100,
                      width: (mobileW * 60) / 100,
                    }}>
                    {item.msg}
                  </Text>

                  {item.new && (
                    <View
                      style={{
                        backgroundColor: Colors.theme_color,
                        width: (mobileW * 3.5) / 100,
                        height: (mobileW * 3.5) / 100,
                        borderRadius: (mobileW * 30) / 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: (mobileW * 5) / 100,
                      }}>
                      <Text
                        style={{
                          fontSize: (mobileW * 2.3) / 100,
                          color: Colors.whiteColor,
                          fontFamily: Font.FontMediumManrope,
                        }}>
                        1
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              <View
                style={{
                  marginLeft: (mobileW * 5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 2.5) / 100,
                    color: Colors.darkGrey,
                    fontFamily: Font.FontMediumManrope,
                    marginTop: (mobileH * 0.5) / 100,
                    lineHeight: (mobileH * 2.2) / 100,
                  }}>
                  {item.time}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
  },
});
