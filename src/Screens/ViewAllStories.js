import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AppstatusBar from '../Componant/AppstatusBar';
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

const ViewAllStories = () => {
  const [storiesTab, setStoriesTab] = useState(true);
  const [savedTab, setSavedTab] = useState(false);
  const {navigate, goBack} = useNavigation();

  const [stories, setStories] = useState([
    {
      id: 0,
      image: require('../Icons/Images/image_card_1.jpg'),
      title: 'Success Story : How I tripled my sales',
      time: '1 hour ago',
    },
    {
      id: 1,
      image: require('../Icons/Images/image_card_1.jpg'),
      title: 'Success Story : How I tripled my sales',
      time: '1 hour ago',
    },
    {
      id: 2,
      image: require('../Icons/Images/image_card_1.jpg'),
      title: 'Success Story : How I tripled my sales',
      time: '1 hour ago',
    },
    {
      id: 3,
      image: require('../Icons/Images/image_card_1.jpg'),
      title: 'Success Story : How I tripled my sales',
      time: '1 hour ago',
    },
    {
      id: 4,
      image: require('../Icons/Images/image_card_1.jpg'),
      title: 'Success Story : How I tripled my sales',
      time: '1 hour ago',
    },
    {
      id: 5,
      image: require('../Icons/Images/image_card_1.jpg'),
      title: 'Success Story : How I tripled my sales',
      time: '1 hour ago',
    },
  ]);

  const [categories, setCategories] = useState([
    {
      id: 0,
      category: 'All',
      icon: '',
      status: false,
    },
    {
      id: 1,
      category: 'News',
      icon: localimag.icon_newspaperIcon,
      status: true,
    },
    {
      id: 2,
      category: 'Guides',
      icon: localimag.icon_guides,
      status: false,
    },
    {
      id: 3,
      category: 'Community',
      icon: localimag.icon_community,
      status: false,
    },
  ]);

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
          {Lang_chg.learn_and_discover_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 10) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      {/* ------------------- Tab Bar ----------------------- */}

      <View
        style={{
          width: (mobileW * 90) / 100,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          height: (mobileH * 7) / 100,
          marginTop: (mobileH * 3) / 100,
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: (mobileH * 6) / 100,
            width: (mobileW * 35) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setSavedTab(false);
              setStoriesTab(true);
            }}
            style={{
              width: (mobileW * 28) / 100,
              justifyContent: 'center',
              alignItems: 'center',
              height: (mobileH * 6) / 100,
              borderBottomWidth: (mobileW * 0.5) / 100,
              borderColor: storiesTab ? Colors.theme_color : Colors.whiteColor,
            }}>
            <Text
              style={{
                fontSize: (mobileW * 3.5) / 100,
                color: storiesTab ? Colors.theme_color : Colors.black_color,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.articles_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginLeft: (mobileW * 5) / 100,
            height: (mobileH * 6) / 100,
            width: (mobileW * 35) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setStoriesTab(false);
              setSavedTab(true);
            }}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 28) / 100,
              justifyContent: 'center',
              alignItems: 'center',
              height: (mobileH * 6) / 100,
              borderBottomWidth: (mobileW * 0.5) / 100,
              borderColor: savedTab ? Colors.theme_color : Colors.whiteColor,
            }}>
            <Text
              style={{
                fontSize: (mobileW * 3.5) / 100,
                color: savedTab ? Colors.theme_color : Colors.black_color,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.saved_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ------------------------------ */}

      <View style={styles.mainView}>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            contentContainerStyle={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: (mobileH * 1) / 100,
            }}>
            {categories.map((item, index) => {
              return (
                <TouchableOpacity
                  key={`${index}`}
                  activeOpacity={0.8}
                  style={{
                    paddingHorizontal: (mobileW * 3) / 100,
                    paddingVertical: (mobileH * 1) / 100,
                    backgroundColor: item.status
                      ? Colors.theme_color
                      : Colors.whiteColor,
                    borderWidth: !item.status ? (mobileW * 0.3) / 100 : null,
                    borderColor: !item.status ? Colors.theme_color : null,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: (mobileW * 1) / 100,
                    marginRight: (mobileW * 3) / 100,
                  }}>
                  {item.icon && (
                    <Image
                      source={item.icon}
                      style={{
                        width: (mobileW * 3.5) / 100,
                        height: (mobileW * 3.5) / 100,
                        resizeMode: 'contain',
                        tintColor: item.status
                          ? Colors.whiteColor
                          : Colors.theme_color,
                      }}></Image>
                  )}

                  <Text
                    style={{
                      color: item.status
                        ? Colors.whiteColor
                        : Colors.theme_color,
                      fontSize: (mobileW * 3) / 100,
                      fontFamily: Font.FontMediumManrope,
                      marginLeft: (mobileW * 1) / 100,
                    }}>
                    {item.category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {storiesTab && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={stories}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={{
              paddingBottom: (mobileH * 25) / 100,
            }}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigate('StoriesDetails')}
                  keyExtractor={item => `${item.id}`}
                  style={{
                    width: (mobileW * 90) / 100,
                    height: (mobileH * 16) / 100,
                    backgroundColor: Colors.whiteColor,
                    borderWidth: (mobileW * 0.5) / 100,
                    borderColor: Colors.searchBorderColor,
                    borderRadius: (mobileW * 3) / 100,
                    paddingHorizontal: (mobileW * 1.8) / 100,
                    paddingVertical: (mobileH * 0.8) / 100,
                    marginTop: (mobileH * 2) / 100,
                    position: 'relative',
                    marginRight:
                      index != stories.length - 1
                        ? (mobileW * 2.5) / 100
                        : null,
                  }}>
                  <TouchableOpacity
                    style={{
                      width: (mobileW * 5.5) / 100,
                      height: (mobileW * 5.5) / 100,
                      position: 'absolute',
                      top: 8,
                      right: (mobileW * 1) / 100,
                      marginRight: (mobileW * 2.5) / 100,
                      justifyContent: 'center',
                      alignItems: 'center',

                      // shadowOffset: {
                      //   width: 0,
                      //   height: 2,
                      // },
                      // shadowOpacity: 0.25,
                      // shadowRadius: 2.84,

                      // elevation: 5,
                      // backgroundColor: '#00000010',
                    }}
                    activeOpacity={0.8}>
                    <Image
                      resizeMode="contain"
                      source={localimag.icon_removeWishlist}
                      style={{
                        width: (mobileW * 5.5) / 100,
                        height: (mobileW * 5.5) / 100,
                      }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={item.image}
                      style={{
                        width: (mobileW * 28) / 100,
                        height: (mobileH * 14) / 100,
                        borderRadius: (mobileW * 1.5) / 100,
                      }}
                    />
                    <View
                      style={{
                        marginLeft: (mobileW * 2) / 100,
                        marginTop: (mobileW * 1) / 100,
                        width: (mobileW * 58) / 100,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={localimag.icon_newspaperIcon}
                          resizeMode="contain"
                          style={{
                            width: (mobileW * 3.5) / 100,
                            height: (mobileW * 3.5) / 100,
                          }}
                        />
                        <Text
                          numberOfLines={1}
                          style={{
                            color: Colors.theme_color,
                            fontSize: (mobileW * 3.5) / 100,
                            fontFamily: Font.FontBoldManrope,
                            marginLeft: (mobileW * 1) / 100,
                          }}>
                          {Lang_chg.news_txt[config.language]}
                        </Text>
                      </View>

                      <Text
                        numberOfLines={2}
                        style={{
                          color: Colors.black_color,
                          fontSize: (mobileW * 3.5) / 100,
                          fontFamily: Font.FontBoldManrope,
                          width: (mobileW * 45) / 100,
                          lineHeight: (mobileH * 2.5) / 100,
                        }}>
                        {item.title}
                      </Text>

                      <Text
                        style={{
                          color: Colors.hourAgoColor,
                          fontSize: (mobileW * 2.4) / 100,
                          fontFamily: Font.FontBoldManrope,
                          lineHeight: (mobileH * 2.5) / 100,
                        }}>
                        {item.time}
                      </Text>

                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: (mobileW * 18) / 100,
                          height: (mobileH * 3.8) / 100,
                          backgroundColor: Colors.yellow_dark_color,
                          borderRadius: (mobileW * 1) / 100,
                          alignSelf: 'flex-end',
                          paddingHorizontal: (mobileW * 3) / 100,
                          // marginRight: (mobileW * 1) / 100,
                          position: 'absolute',
                          bottom: (mobileH * 0.5) / 100,
                          right: (mobileW * 3) / 100,
                        }}>
                        <Text
                          style={{
                            color: Colors.explore_color,
                            fontSize: (mobileW * 2.8) / 100,
                            fontFamily: Font.FontBoldManrope,
                          }}>
                          {Lang_chg.explore_txt[config.language]}
                        </Text>
                        <Image
                          source={localimag.icon_explore}
                          resizeMode="contain"
                          style={{
                            width: (mobileW * 2.8) / 100,
                            height: (mobileW * 2.8) / 100,
                            marginLeft: (mobileW * 0.8) / 100,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        )}

        {savedTab && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={stories}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={{
              paddingBottom: (mobileH * 25) / 100,
            }}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigate('StoriesDetails')}
                  keyExtractor={item => `${item.id}`}
                  style={{
                    width: (mobileW * 90) / 100,
                    height: (mobileH * 16) / 100,
                    backgroundColor: Colors.whiteColor,
                    borderWidth: (mobileW * 0.5) / 100,
                    borderColor: Colors.searchBorderColor,
                    borderRadius: (mobileW * 3) / 100,
                    paddingHorizontal: (mobileW * 1.8) / 100,
                    paddingVertical: (mobileH * 0.8) / 100,
                    marginTop: (mobileH * 2) / 100,
                    position: 'relative',
                    marginRight:
                      index != stories.length - 1
                        ? (mobileW * 2.5) / 100
                        : null,
                  }}>
                  <TouchableOpacity
                    style={{
                      width: (mobileW * 5.5) / 100,
                      height: (mobileW * 5.5) / 100,
                      position: 'absolute',
                      top: 8,
                      right: (mobileW * 1) / 100,
                      marginRight: (mobileW * 2.5) / 100,
                      justifyContent: 'center',
                      alignItems: 'center',

                      // shadowOffset: {
                      //   width: 0,
                      //   height: 2,
                      // },
                      // shadowOpacity: 0.25,
                      // shadowRadius: 2.84,

                      // elevation: 5,
                      // backgroundColor: '#00000010',
                    }}
                    activeOpacity={0.8}>
                    <Image
                      resizeMode="contain"
                      source={localimag.icon_addWishlist}
                      style={{
                        width: (mobileW * 5.5) / 100,
                        height: (mobileW * 5.5) / 100,
                      }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={item.image}
                      style={{
                        width: (mobileW * 28) / 100,
                        height: (mobileH * 14) / 100,
                        borderRadius: (mobileW * 1.5) / 100,
                      }}
                    />
                    <View
                      style={{
                        marginLeft: (mobileW * 2) / 100,
                        marginTop: (mobileW * 1) / 100,
                        width: (mobileW * 58) / 100,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={localimag.icon_newspaperIcon}
                          resizeMode="contain"
                          style={{
                            width: (mobileW * 3.5) / 100,
                            height: (mobileW * 3.5) / 100,
                          }}
                        />
                        <Text
                          numberOfLines={1}
                          style={{
                            color: Colors.theme_color,
                            fontSize: (mobileW * 3.5) / 100,
                            fontFamily: Font.FontBoldManrope,
                            marginLeft: (mobileW * 1) / 100,
                          }}>
                          {Lang_chg.news_txt[config.language]}
                        </Text>
                      </View>

                      <Text
                        numberOfLines={2}
                        style={{
                          color: Colors.black_color,
                          fontSize: (mobileW * 3.5) / 100,
                          fontFamily: Font.FontBoldManrope,
                          width: (mobileW * 45) / 100,
                          lineHeight: (mobileH * 2.5) / 100,
                        }}>
                        {item.title}
                      </Text>

                      <Text
                        style={{
                          color: Colors.hourAgoColor,
                          fontSize: (mobileW * 2.4) / 100,
                          fontFamily: Font.FontBoldManrope,
                          lineHeight: (mobileH * 2.5) / 100,
                        }}>
                        {item.time}
                      </Text>

                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: (mobileW * 18) / 100,
                          height: (mobileH * 3.8) / 100,
                          backgroundColor: Colors.yellow_dark_color,
                          borderRadius: (mobileW * 1) / 100,
                          alignSelf: 'flex-end',
                          paddingHorizontal: (mobileW * 3) / 100,
                          // marginRight: (mobileW * 1) / 100,
                          position: 'absolute',
                          bottom: (mobileH * 0.5) / 100,
                          right: (mobileW * 3) / 100,
                        }}>
                        <Text
                          style={{
                            color: Colors.explore_color,
                            fontSize: (mobileW * 2.8) / 100,
                            fontFamily: Font.FontBoldManrope,
                          }}>
                          {Lang_chg.explore_txt[config.language]}
                        </Text>
                        <Image
                          source={localimag.icon_explore}
                          resizeMode="contain"
                          style={{
                            width: (mobileW * 2.8) / 100,
                            height: (mobileW * 2.8) / 100,
                            marginLeft: (mobileW * 0.8) / 100,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default ViewAllStories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 2) / 100,
  },
});
