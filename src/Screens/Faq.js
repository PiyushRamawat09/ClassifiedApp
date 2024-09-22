import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
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
import AppstatusBar from '../Componant/AppstatusBar';
import {useNavigation} from '@react-navigation/native';
import SearchContainer from '../Componant/SearchContainer';

const Faq = () => {
  const {navigate, goBack} = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [faqArr, setFaqArr] = useState([
    {
      id: 0,
      title: 'What is benefits?',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nulla maecenas ut scelerisque amet massa gravida. Habitant non ac nunc luctus tortor tellus leo.',
      status: false,
    },
    {
      id: 1,
      title: 'How can i make my profile in this app?',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nulla maecenas ut scelerisque amet massa gravida. Habitant non ac nunc luctus tortor tellus leo.',
      status: false,
    },
    {
      id: 2,
      title: 'What is benefits?',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nulla maecenas ut scelerisque amet massa gravida. Habitant non ac nunc luctus tortor tellus leo.',
      status: false,
    },
    {
      id: 3,
      title: 'What is benefits?',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nulla maecenas ut scelerisque amet massa gravida. Habitant non ac nunc luctus tortor tellus leo.',
      status: false,
    },
    {
      id: 4,
      title: 'What is benefits?',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nulla maecenas ut scelerisque amet massa gravida. Habitant non ac nunc luctus tortor tellus leo.',
      status: false,
    },
  ]);

  const setStatus = (item, index) => {
    let data1 = [...faqArr];
    data1[index].status = !data1[index].status;
    setFaqArr(data1);
  };

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
          {Lang_chg.faq_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 5) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      {/* search container */}

      <SearchContainer
        searchText={searchText}
        onChangeText={val => setSearchText(val)}
        placeholder={Lang_chg.serach_txt[config.language]}
        containerStyle={{
          marginTop: (mobileH * 3) / 100,
        }}
      />

      {/* --------------- */}

      <FlatList
        data={faqArr}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{
          marginTop: (mobileH * 3) / 100,
          paddingBottom: (mobileH * 10) / 100,
        }}
        renderItem={({item, index}) => (
          <View
            style={{
              borderColor: !item.status ? Colors.borderGrey : null,
              paddingBottom: (mobileH * 0.8) / 100,
              borderBottomWidth: !item.status ? 1 : null,
              marginTop: (mobileH * 2) / 100,
            }}>
            {item.status == false ? (
              <TouchableOpacity
                onPress={() => setStatus(item, index)}
                activeOpacity={0.7}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: (mobileW * 90) / 100,
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: (mobileW * 75) / 100,
                  }}>
                  <Text
                    style={{
                      fontSize: (mobileW * 3.6) / 100,
                      fontFamily: Font.FontBoldManrope,
                      color: Colors.modalTabColor,
                      width: (mobileW * 70) / 100,
                    }}>
                    {item.title}
                  </Text>
                </View>
                <View
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 9) / 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: (mobileW * 4.5) / 100,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: (mobileW * 4) / 100,
                      height: (mobileW * 4) / 100,
                    }}
                    source={localimag.icon_dropDown}></Image>
                </View>
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: Colors.faqBack,
                  alignItems: 'center',
                  paddingVertical: (mobileH * 2) / 100,
                }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setStatus(item, index)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: (mobileW * 85) / 100,
                    }}>
                    <Text
                      style={{
                        fontSize: (mobileW * 3.6) / 100,
                        fontFamily: Font.FontBoldManrope,
                        color: Colors.theme_color,
                      }}>
                      {item.title}
                    </Text>
                  </View>
                  <View
                    activeOpacity={0.7}
                    style={{
                      width: (mobileW * 5) / 100,
                      paddingBottom: (mobileH * 1.5) / 100,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: (mobileW * 4.5) / 100,
                    }}>
                    <Image
                      resizeMode="contain"
                      style={{
                        width: (mobileW * 4) / 100,
                        height: (mobileW * 4) / 100,
                        transform: [{rotate: '180deg'}],
                        tintColor: Colors.theme_color,
                      }}
                      source={localimag.icon_dropDown}></Image>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    marginTop: (mobileH * 1) / 100,
                    paddingBottom: (mobileH * 1) / 100,
                    width: (mobileW * 90) / 100,
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: (mobileW * 3.3) / 100,
                      fontFamily: Font.FontMediumManrope,
                      color: Colors.black_color,
                    }}>
                    {item.description}
                  </Text>
                </View>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 3) / 100,
    paddingHorizontal: (mobileW * 1) / 100,
  },
});
