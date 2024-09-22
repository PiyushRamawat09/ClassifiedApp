import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';

const FavouriteSellers = () => {
  const {navigate, goBack} = useNavigation();
  const [professional, setProfessional] = useState(true);
  const [individual, setindividual] = useState(false);

  const [userLists, setUserLists] = useState([
    {
      id: 0,
      name: 'Sophia Miller',
      image: require('../Icons/Images/image_user_1.jpg'),
      new: true,
      verified: false,
    },
    {
      id: 1,
      name: 'Abraham Nicole',
      image: require('../Icons/Images/image_user_6.jpg'),
      new: false,
      verified: true,
    },
    {
      id: 2,
      name: 'Sophia Miller',
      image: require('../Icons/Images/image_user_7.jpg'),
      new: true,
      verified: false,
    },
    {
      id: 3,
      name: 'David Miller',
      image: require('../Icons/Images/image_user_5.jpg'),
      new: false,
      verified: true,
    },
    {
      id: 4,
      name: 'Sophia Miller',
      image: require('../Icons/Images/image_user_4.jpg'),
      new: true,
      verified: true,
    },
    {
      id: 5,
      name: 'Nick Jonas',
      image: require('../Icons/Images/image_user_3.jpg'),
      new: false,
      verified: false,
    },
    {
      id: 6,
      name: 'Sophia Miller',
      image: require('../Icons/Images/image_user_1.jpg'),
      new: true,
      verified: false,
    },
    {
      id: 7,
      name: 'Abraham Nicole',
      image: require('../Icons/Images/image_user_6.jpg'),
      new: false,
      verified: false,
    },
  ]);

  const [individualUserLists, setIndividualUserLists] = useState([
    {
      id: 0,
      name: 'Sophia Miller',
      image: require('../Icons/Images/image_user_1.jpg'),
      new: true,
    },
    {
      id: 1,
      name: 'Abraham Nicole',
      image: require('../Icons/Images/image_user_6.jpg'),
      new: false,
    },
    {
      id: 2,
      name: 'Sophia Miller',
      image: require('../Icons/Images/image_user_7.jpg'),
      new: true,
    },
    {
      id: 3,
      name: 'David Miller',
      image: require('../Icons/Images/image_user_5.jpg'),
      new: false,
    },
    {
      id: 4,
      name: 'Sophia Miller',
      image: require('../Icons/Images/image_user_4.jpg'),

      new: true,
    },
    {
      id: 5,
      name: 'Nick Jonas',
      image: require('../Icons/Images/image_user_3.jpg'),
      new: false,
    },
    {
      id: 6,
      name: 'Sophia Miller',
      image: require('../Icons/Images/image_user_1.jpg'),

      new: true,
    },
    {
      id: 7,
      name: 'Abraham Nicole',
      image: require('../Icons/Images/image_user_6.jpg'),
      new: false,
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
          {Lang_chg.myFavourite_sellers_txt[config.language]}
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
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setindividual(false);
            setProfessional(true);
          }}
          style={{
            width: (mobileW * 35) / 100,
            justifyContent: 'center',
            alignItems: 'center',
            height: (mobileH * 6) / 100,
            borderBottomWidth: (mobileW * 0.5) / 100,
            borderColor: professional ? Colors.theme_color : Colors.whiteColor,
          }}>
          <Text
            style={{
              fontSize: (mobileW * 3.8) / 100,
              color: professional ? Colors.theme_color : Colors.black_color,
              fontFamily: Font.FontBoldManrope,
            }}>
            {Lang_chg.professional_txt[config.language]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setProfessional(false);
            setindividual(true);
          }}
          activeOpacity={0.8}
          style={{
            width: (mobileW * 35) / 100,
            justifyContent: 'center',
            alignItems: 'center',
            height: (mobileH * 6) / 100,
            borderBottomWidth: (mobileW * 0.5) / 100,
            borderColor: individual ? Colors.theme_color : Colors.whiteColor,
            marginLeft: (mobileW * 5) / 100,
          }}>
          <Text
            style={{
              fontSize: (mobileW * 3.8) / 100,
              color: individual ? Colors.theme_color : Colors.black_color,
              fontFamily: Font.FontBoldManrope,
            }}>
            {Lang_chg.individualSeller_txt[config.language]}
          </Text>
        </TouchableOpacity>
      </View>

      {/* ----------------------------------- */}

      {professional && (
        <FlatList
          data={userLists}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={[
            styles.mainView,
            {
              paddingBottom: (mobileH * 15) / 100,
            },
          ]}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: index != 0 ? (mobileH * 3) / 100 : null,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: (mobileW * 10) / 100,
                    height: (mobileW * 10) / 100,
                    borderRadius: (mobileW * 30) / 100,
                  }}></Image>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.8) / 100,
                    fontFamily: Font.FontBoldManrope,
                    marginLeft: (mobileW * 3) / 100,
                  }}>
                  {item.name}
                </Text>

                {item.verified && (
                  <Image
                    source={localimag.icon_verified}
                    style={{
                      width: (mobileW * 5) / 100,
                      height: (mobileW * 5) / 100,
                      marginLeft: (mobileW * 2) / 100,
                    }}
                  />
                )}
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: (mobileW * 20) / 100,
                  height: (mobileH * 4) / 100,
                  borderWidth: (mobileW * 0.2) / 100,
                  borderColor: Colors.theme_color,
                  borderRadius: (mobileW * 1.5) / 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.theme_color,
                    fontSize: (mobileW * 3.3) / 100,
                    fontFamily: Font.FontMediumManrope,
                  }}>
                  {Lang_chg.unfollow_txt[config.language]}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {individual && (
        <FlatList
          data={individualUserLists}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={[
            styles.mainView,
            {
              paddingBottom: (mobileH * 15) / 100,
            },
          ]}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: index != 0 ? (mobileH * 3) / 100 : null,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: (mobileW * 10) / 100,
                    height: (mobileW * 10) / 100,
                    borderRadius: (mobileW * 30) / 100,
                  }}></Image>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.8) / 100,
                    fontFamily: Font.FontBoldManrope,
                    marginLeft: (mobileW * 3) / 100,
                  }}>
                  {item.name}
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: (mobileW * 20) / 100,
                  height: (mobileH * 4) / 100,
                  borderWidth: (mobileW * 0.2) / 100,
                  borderColor: Colors.theme_color,
                  borderRadius: (mobileW * 1.5) / 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.theme_color,
                    fontSize: (mobileW * 3.3) / 100,
                    fontFamily: Font.FontMediumManrope,
                  }}>
                  {Lang_chg.unfollow_txt[config.language]}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default FavouriteSellers;

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
