import {
  BackHandler,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Keyboard,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import React, {useCallback, useState} from 'react';
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
import InputField from '../Componant/InputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ButtonComponent from '../Componant/ButtonComponent';
import {color} from 'react-native-reanimated';

const Sell = () => {
  const navigation = useNavigation();

  const handleBackPress = useCallback(() => {
    navigation.navigate('Home');
    return true;
  }, [navigation]);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const [priceRequest, setPriceRequest] = useState(true);

  const [categorys, setCategorys] = useState([
    {
      id: 0,
      type: 'Womens',
      status: false,
    },
    {
      id: 1,
      type: 'Mens',
      status: false,
    },
    {
      id: 2,
      type: 'Car',
      status: false,
    },
    {
      id: 3,
      type: 'Electronics',
      status: false,
    },
    {
      id: 4,
      type: 'New',
      status: false,
    },
    {
      id: 5,
      type: 'Featured',
      status: false,
    },
    {
      id: 6,
      type: 'Nearby',
      status: false,
    },
    {
      id: 7,
      type: 'Popular',
      status: false,
    },
  ]);

  const [subCategorys, setSubCategorys] = useState([
    {
      id: 0,
      type: 'All',
      status: false,
    },
    {
      id: 1,
      type: 'Clothing',
      status: false,
    },
    {
      id: 2,
      type: 'Perfume',
      status: false,
    },
    {
      id: 3,
      type: 'Bags',
      status: false,
    },
    {
      id: 4,
      type: 'Cosmetics',
      status: false,
    },
    {
      id: 5,
      type: 'Shoes',
      status: false,
    },
    {
      id: 6,
      type: 'Watches & Jewellery',
      status: false,
    },
    {
      id: 7,
      type: 'Electronics',
      status: false,
    },
  ]);

  const [categoryStatus, setCategoryStatus] = useState(false);
  const [subCategoryStatus, setSubCategoryStatus] = useState(false);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }, [handleBackPress]),
  );

  function setCategoryfunc(indx) {
    let category_arr = [...categorys];

    for (let i = 0; i < category_arr.length; i++) {
      category_arr[i].status = false;
    }

    category_arr[indx].status = true;

    setCategorys(category_arr);
    setCategoryStatus(false);
  }

  function setSubCategoryfunc(indx) {
    let subcategory_arr = [...subCategorys];
    subcategory_arr[indx].status = !subcategory_arr[indx].status;
    setSubCategorys(subcategory_arr);
  }

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
          marginTop: (mobileH * 3) / 100,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: (mobileW * 6) / 100,
            width: (mobileW * 6) / 100,
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
          {Lang_chg.createListing_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 5) / 100,
          }}></View>
      </View>
      {/* -------------------------------------------- */}

      {/* category modal */}

      <Modal
        visible={categoryStatus}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setCategoryStatus(false);
        }}>
        <TouchableOpacity
          onPress={() => setCategoryStatus(false)}
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#00000090',
          }}>
          <View
            style={{
              position: 'absolute',
              bottom: mobileH * 0,
              height: (mobileH * 78) / 100,
              width: mobileW,
              backgroundColor: Colors.whiteColor,
              alignSelf: 'center',
              borderTopRightRadius: (mobileW * 7) / 100,
              borderTopLeftRadius: (mobileW * 7) / 100,
            }}>
            <TouchableOpacity
              onPress={() => setCategoryStatus(false)}
              style={{
                width: (mobileW * 22) / 100,
                height: (mobileH * 0.4) / 100,
                borderRadius: (mobileW * 30) / 100,
                backgroundColor: Colors.modalTabColor,
                alignSelf: 'center',
                marginTop: (mobileH * 1.5) / 100,
              }}></TouchableOpacity>

            <View
              style={{
                marginTop: (mobileH * 4) / 100,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 4.5) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.category_txt[config.language]}
              </Text>
            </View>

            <FlatList
              showsHorizontalScrollIndicator={false}
              data={categorys}
              keyExtractor={item => `${item.id}`}
              contentContainerStyle={{
                paddingBottom: (mobileH * 5) / 100,
                marginTop: (mobileH * 3) / 100,
              }}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => setCategoryfunc(index)}
                  activeOpacity={0.8}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: (mobileW * 85) / 100,
                    alignSelf: 'center',
                    marginTop: (mobileH * 3) / 100,
                    borderBottomColor: Colors.borderGrey,
                    borderBottomWidth: (mobileW * 0.2) / 100,
                    paddingBottom: (mobileH * 2) / 100,
                  }}>
                  <Text
                    style={{
                      color: Colors.black_color,
                      fontSize: (mobileW * 3.5) / 100,
                      fontFamily: Font.FontMediumManrope,
                    }}>
                    {item.type}
                  </Text>

                  {item.status && (
                    <Image
                      source={localimag.icon_check}
                      style={{
                        width: (mobileW * 5) / 100,
                        height: (mobileW * 5) / 100,
                        tintColor: Colors.theme_color,
                        resizeMode: 'contain',
                      }}
                    />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
      {/* ------------------ */}

      {/* sub-category modal */}

      <Modal
        visible={subCategoryStatus}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setSubCategoryStatus(false);
        }}>
        <TouchableOpacity
          onPress={() => setSubCategoryStatus(false)}
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#00000090',
          }}>
          <View
            style={{
              position: 'absolute',
              bottom: mobileH * 0,
              height: (mobileH * 78) / 100,
              width: mobileW,
              backgroundColor: Colors.whiteColor,
              alignSelf: 'center',
              borderTopRightRadius: (mobileW * 7) / 100,
              borderTopLeftRadius: (mobileW * 7) / 100,
            }}>
            <TouchableOpacity
              onPress={() => setSubCategoryStatus(false)}
              style={{
                width: (mobileW * 22) / 100,
                height: (mobileH * 0.4) / 100,
                borderRadius: (mobileW * 30) / 100,
                backgroundColor: Colors.modalTabColor,
                alignSelf: 'center',
                marginTop: (mobileH * 1.5) / 100,
              }}></TouchableOpacity>

            <View
              style={{
                marginTop: (mobileH * 4) / 100,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 4.5) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.sub_category_txt[config.language]}
              </Text>
            </View>

            <FlatList
              showsHorizontalScrollIndicator={false}
              data={subCategorys}
              keyExtractor={item => `${item.id}`}
              contentContainerStyle={{
                paddingBottom: (mobileH * 25) / 100,
                marginTop: (mobileH * 3) / 100,
              }}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => setSubCategoryfunc(index)}
                  activeOpacity={0.8}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: (mobileW * 85) / 100,
                    alignSelf: 'center',
                    marginTop: (mobileH * 3) / 100,
                    borderBottomColor: Colors.borderGrey,
                    borderBottomWidth: (mobileW * 0.2) / 100,
                    paddingBottom: (mobileH * 2) / 100,
                  }}>
                  <Text
                    style={{
                      color: Colors.black_color,
                      fontSize: (mobileW * 3.5) / 100,
                      fontFamily: Font.FontMediumManrope,
                    }}>
                    {item.type}
                  </Text>

                  <Image
                    source={
                      item.status
                        ? localimag.icon_checkBox
                        : localimag.icon_checkBox_empty
                    }
                    style={{
                      width: (mobileW * 5) / 100,
                      height: (mobileW * 5) / 100,
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              )}
            />

            <ButtonComponent
              title={Lang_chg.continue_txt[config.language]}
              onPress={() => setSubCategoryStatus(false)}
              btnStyle={{
                position: 'absolute',
                bottom:
                  config.device_type == 'ios'
                    ? (mobileH * 6) / 100
                    : (mobileH * 5) / 100,
              }}
              active={true}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      {/* ------------------- */}

      <View
        style={{
          marginTop: (mobileH * 2) / 100,
          alignSelf: 'center',
        }}>
        <Image
          source={localimag.icon_listing_step_1}
          style={{
            width: (mobileW * 65) / 100,
            height: (mobileH * 8) / 100,
            resizeMode: 'contain',
          }}
        />
      </View>

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.mainView,
          {
            paddingBottom: (mobileH * 8) / 100,
          },
        ]}>
        {/*---------- enter title -----------*/}

        <View
          style={{
            marginTop: (mobileH * 2) / 100,
          }}>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 3) / 100,
              fontFamily: Font.FontMediumManrope,
              lineHeight: (mobileH * 2.5) / 100,
            }}>
            {Lang_chg.keep_it_concise_txt[config.language]}
          </Text>

          <InputField
            title={Lang_chg.title_txt[config.language]}
            placeholder={Lang_chg.enter_title_txt[config.language]}
            value={title}
            setValue={setTitle}
            keyboardType="default"
            maxLength={100}
            inputContainerStyle={{
              marginTop: (mobileH * 1.5) / 100,
            }}
            titleStyle={{
              fontSize: (mobileW * 4) / 100,
              color: Colors.darkGrey,
            }}
            inputFieldStyle={{
              marginTop: (mobileH * 1) / 100,
              color: Colors.darkGrey,
            }}
          />
        </View>

        {/* -------------- */}

        {/*---------- enter price -----------*/}

        <View
          style={{
            marginTop: (mobileH * 3) / 100,
          }}>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 3) / 100,
              fontFamily: Font.FontMediumManrope,
              lineHeight: (mobileH * 2.5) / 100,
            }}>
            {Lang_chg.adjust_the_price_txt[config.language]}
          </Text>

          <Text
            style={{
              color: Colors.darkGrey,
              fontFamily: Font.FontBoldManrope,
              fontSize: (mobileW * 4) / 100,
              marginTop: (mobileH * 1.5) / 100,
            }}>
            {Lang_chg.price_txt[config.language]}
          </Text>

          <View
            activeOpacity={0.8}
            style={{
              width: (mobileW * 90) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              marginTop: (mobileH * 1) / 100,
              paddingHorizontal: (mobileW * 1.5) / 100,
              height: (mobileH * 7.5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput
              placeholderTextColor={Colors.darkGrey}
              returnKeyLabel="done"
              returnKeyType="done"
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              value={price}
              keyboardType="number-pad"
              style={{
                width: (mobileW * 75) / 100,
                height: (mobileH * 7.5) / 100,
                color: Colors.darkGrey,
                fontFamily: Font.FontMediumManrope,
                fontSize: (mobileW * 3.5) / 100,
              }}
              placeholder={Lang_chg.enter_price_txt[config.language]}
              onChangeText={val => setPrice(val)}
              maxLength={15}
            />

            <Text
              style={{
                color: Colors.black_color,
                fontFamily: Font.FontMediumManrope,
                fontSize: (mobileW * 3.5) / 100,
                marginRight: (mobileW * 2) / 100,
              }}>
              {config.currency}
            </Text>
          </View>
        </View>

        {/* -------------------- */}

        {/* price on request */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
            marginTop: (mobileH * 3) / 100,
          }}>
          <Text
            style={{
              color: Colors.darkGrey,
              fontFamily: Font.FontBoldManrope,
              fontSize: (mobileW * 4) / 100,
            }}>
            {Lang_chg.price_on_request_txt[config.language]}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setPriceRequest(prev => !prev)}>
            <Image
              source={
                priceRequest
                  ? localimag.icon_checkBox
                  : localimag.icon_checkBox_empty
              }
              style={{
                width: (mobileW * 6) / 100,
                height: (mobileW * 6) / 100,
                resizeMode: 'contain',
                tintColor: !priceRequest ? Colors.darkGrey : null,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* ----------------------- */}

        {/* ----------------- Category -------------------- */}

        <View
          style={{
            marginTop: (mobileH * 2) / 100,
          }}>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 3) / 100,
              fontFamily: Font.FontMediumManrope,
              lineHeight: (mobileH * 2.5) / 100,
            }}>
            {Lang_chg.choosing_correct_Category[config.language]}
          </Text>

          <Text
            style={{
              color: Colors.darkGrey,
              fontFamily: Font.FontBoldManrope,
              fontSize: (mobileW * 4) / 100,
              marginTop: (mobileH * 1.5) / 100,
            }}>
            {Lang_chg.category_txt[config.language]}
          </Text>

          <TouchableOpacity
            onPress={() => setCategoryStatus(prev => !prev)}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 90) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              marginTop: (mobileH * 1) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 7.5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: Colors.darkGrey,
                fontFamily: Font.FontMediumManrope,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.selectTheRightCategory_txt[config.language]}
            </Text>

            <Image
              source={
                categoryStatus ? localimag.icon_dropUp : localimag.icon_dropDown
              }
              style={{
                width: categoryStatus
                  ? (mobileW * 4.5) / 100
                  : (mobileW * 3.5) / 100,
                height: categoryStatus
                  ? (mobileW * 4.5) / 100
                  : (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </View>

        {/* ---------------------------- */}

        {/* sub category */}

        <View
          style={{
            marginTop: (mobileH * 2.5) / 100,
          }}>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 3) / 100,
              fontFamily: Font.FontMediumManrope,
              lineHeight: (mobileH * 2.5) / 100,
            }}>
            {Lang_chg.choosing_correct_subCategory[config.language]}
          </Text>

          <Text
            style={{
              color: Colors.darkGrey,
              fontFamily: Font.FontBoldManrope,
              fontSize: (mobileW * 4) / 100,
              marginTop: (mobileH * 1.5) / 100,
            }}>
            {Lang_chg.sub_category_txt[config.language]}
          </Text>

          <TouchableOpacity
            onPress={() => setSubCategoryStatus(prev => !prev)}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 90) / 100,
              borderWidth: (mobileW * 0.3) / 100,
              borderColor: Colors.chatBack,
              borderRadius: (mobileW * 2) / 100,
              marginTop: (mobileH * 1) / 100,
              paddingHorizontal: (mobileW * 3) / 100,
              height: (mobileH * 7.5) / 100,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: Colors.darkGrey,
                fontFamily: Font.FontRegular,
                fontSize: (mobileW * 3.5) / 100,
              }}>
              {Lang_chg.selectTheRightSubCategory_txt[config.language]}
            </Text>

            <Image
              source={
                subCategoryStatus
                  ? localimag.icon_dropUp
                  : localimag.icon_dropDown
              }
              style={{
                width: subCategoryStatus
                  ? (mobileW * 4.5) / 100
                  : (mobileW * 3.5) / 100,
                height: subCategoryStatus
                  ? (mobileW * 4.5) / 100
                  : (mobileW * 3.5) / 100,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </View>

        {/* ---------- */}

        {/* btn view */}

        <ButtonComponent
          onPress={() => {
            navigation.navigate('SellStep_2');
          }}
          title={Lang_chg.next_txt[config.language]}
          btnStyle={{
            marginTop: (mobileH * 4) / 100,
          }}
          active={true}
        />

        {/* -------------- */}
        {/* 
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            alignSelf: 'center',
            marginTop: (mobileH * 2) / 100,
          }}>
          <Text
            style={{
              fontSize: (mobileW * 3.5) / 100,
              color: Colors.draftColor,
              fontFamily: Font.FontRegular,
            }}>
            {Lang_chg.save_as_draft_txt[config.language]}
          </Text>

          <View
            style={{
              backgroundColor: Colors.draftColor,
              marginTop: (mobileH * 0.1) / 100,
              height: (mobileW * 0.3) / 100,
            }}></View>
        </TouchableOpacity> */}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Sell;

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
