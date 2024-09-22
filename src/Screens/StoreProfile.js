import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Modal,
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
import {useNavigation} from '@react-navigation/native';
import AppstatusBar from '../Componant/AppstatusBar';
import InputField from '../Componant/InputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Switch} from 'react-native-paper';
import ButtonComponent from '../Componant/ButtonComponent';

const StoreProfile = () => {
  const {navigate, goBack} = useNavigation();
  const [storeName, setStoreName] = useState('');
  const [activityDescription, setActivityDescription] = useState('');
  const [address, setAddress] = useState('');

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

  const [city, setCity] = useState([
    {
      id: 0,
      type: 'Paris',
      status: false,
    },
    {
      id: 1,
      type: 'Lyon',
      status: false,
    },
    {
      id: 2,
      type: 'Perfume',
      status: false,
    },
    {
      id: 3,
      type: 'Nice',
      status: false,
    },
    {
      id: 4,
      type: 'Marseille',
      status: false,
    },
    {
      id: 5,
      type: 'Bordeaux',
      status: false,
    },
    {
      id: 6,
      type: 'Toulouse',
      status: false,
    },
    {
      id: 7,
      type: 'Strasbourg',
      status: false,
    },
    {
      id: 8,
      type: 'Montpellier',
      status: false,
    },
    {
      id: 9,
      type: 'Dijon',
      status: false,
    },
    {
      id: 10,
      type: 'Nantes',
      status: false,
    },
  ]);

  const [categoryStatus, setCategoryStatus] = useState(false);
  const [subCategoryStatus, setSubCategoryStatus] = useState(false);
  const [cityStatus, setCityStatus] = useState(false);

  function setCategoryfunc(indx) {
    let category_arr = [...categorys];

    for (let i = 0; i < category_arr.length; i++) {
      category_arr[i].status = false;
    }

    category_arr[indx].status = true;

    setCategorys(category_arr);
    setCategoryStatus(false);
  }

  function setCityfunc(indx) {
    let city_arr = [...city];

    for (let i = 0; i < city_arr.length; i++) {
      city_arr[i].status = false;
    }

    city_arr[indx].status = true;

    setCity(city_arr);
    setCityStatus(false);
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
            fontSize: (mobileW * 6) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontBold,
          }}>
          {Lang_chg.store_profile_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 5) / 100,
          }}></View>
      </View>
      {/* -------------------------------------------- */}

      {/* Product Category Modal */}

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
                  fontSize: (mobileW * 5) / 100,
                  fontFamily: Font.FontBold,
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
                      fontSize: (mobileW * 4) / 100,
                      fontFamily: Font.FontRegular,
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

      {/* --------------------- */}

      {/* Sub -category modal */}
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
                  fontSize: (mobileW * 5) / 100,
                  fontFamily: Font.FontBold,
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
                      fontSize: (mobileW * 4) / 100,
                      fontFamily: Font.FontRegular,
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

      {/* ------------------ */}

      {/* City Modal */}
      <Modal
        visible={cityStatus}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setCityStatus(false);
        }}>
        <TouchableOpacity
          onPress={() => setCityStatus(false)}
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
              onPress={() => setCityStatus(false)}
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
                  fontSize: (mobileW * 5) / 100,
                  fontFamily: Font.FontBold,
                }}>
                {Lang_chg.city_txt[config.language]}
              </Text>
            </View>

            <FlatList
              showsHorizontalScrollIndicator={false}
              data={city}
              keyExtractor={item => `${item.id}`}
              contentContainerStyle={{
                paddingBottom: (mobileH * 5) / 100,
                marginTop: (mobileH * 3) / 100,
              }}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => setCityfunc(index)}
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
                      fontSize: (mobileW * 4) / 100,
                      fontFamily: Font.FontRegular,
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
      {/* --------------------------------- */}

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          {
            paddingBottom: (mobileH * 8) / 100,
          },
        ]}>
        {/* ------------------------ */}

        <View style={styles.mainView}>
          {/* upload store photo */}

          <View
            style={{
              marginTop: (mobileH * 3) / 100,
            }}>
            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBold,
              }}>
              {Lang_chg.upload_store_photo_txt[config.language]}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                marginTop: (mobileH * 1.8) / 100,
                width: (mobileW * 90) / 100,
                height: (mobileH * 20) / 100,
                borderWidth: (mobileW * 0.3) / 100,
                borderColor: Colors.chatBack,
                borderRadius: (mobileW * 2) / 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_image_placeHolder_icon}
                style={{
                  width: (mobileW * 7) / 100,
                  height: (mobileW * 7) / 100,
                }}
              />
            </TouchableOpacity>
          </View>

          {/* upload cover photo */}

          <View
            style={{
              marginTop: (mobileH * 3) / 100,
            }}>
            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBold,
              }}>
              {Lang_chg.upload_cover_photo_txt[config.language]}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                marginTop: (mobileH * 1.8) / 100,
                width: (mobileW * 90) / 100,
                height: (mobileH * 20) / 100,
                borderWidth: (mobileW * 0.3) / 100,
                borderColor: Colors.chatBack,
                borderRadius: (mobileW * 2) / 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={localimag.icon_image_placeHolder_icon}
                style={{
                  width: (mobileW * 7) / 100,
                  height: (mobileW * 7) / 100,
                }}
              />
            </TouchableOpacity>
          </View>

          {/* Store Name */}
          <InputField
            title={Lang_chg.store_name_txt[config.language]}
            placeholder={Lang_chg.enter_store_name_txt[config.language]}
            value={storeName}
            setValue={setStoreName}
            keyboardType="default"
            maxLength={100}
            inputContainerStyle={{
              marginTop: (mobileH * 3) / 100,
            }}
          />

          {/* Activity description */}

          <InputField
            multiline={true}
            title={Lang_chg.activity_description_txt[config.language]}
            placeholder={Lang_chg.enter_description_txt[config.language]}
            value={activityDescription}
            setValue={setActivityDescription}
            keyboardType="default"
            maxLength={250}
            inputContainerStyle={{
              marginTop: (mobileH * 3) / 100,
            }}
            inputFieldStyle={{
              height: (mobileH * 16) / 100,
              textAlignVertical: 'top',
              paddingVertical: (mobileH * 1.5) / 100,
            }}
          />

          {/* Product Category */}

          <View
            style={{
              marginTop: (mobileH * 3) / 100,
            }}>
            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBold,
              }}>
              {Lang_chg.product_category_txt[config.language]}
            </Text>

            <TouchableOpacity
              onPress={() => setCategoryStatus(true)}
              activeOpacity={0.8}
              style={{
                width: (mobileW * 90) / 100,
                borderWidth: (mobileW * 0.3) / 100,
                borderColor: Colors.chatBack,
                borderRadius: (mobileW * 2) / 100,
                marginTop: (mobileH * 1.8) / 100,
                paddingHorizontal: (mobileW * 3) / 100,
                height: (mobileH * 7.5) / 100,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontFamily: Font.FontRegular,
                  fontSize: (mobileW * 3.5) / 100,
                }}>
                {Lang_chg.select_category_txt[config.language]}
              </Text>

              <Image
                source={
                  categoryStatus
                    ? localimag.icon_dropUp
                    : localimag.icon_dropDown
                }
                style={{
                  width: (mobileW * 4) / 100,
                  height: (mobileW * 4) / 100,
                  resizeMode: 'contain',
                }}></Image>
            </TouchableOpacity>
          </View>

          {/* Product Sub category */}

          <View
            style={{
              marginTop: (mobileH * 3) / 100,
            }}>
            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBold,
              }}>
              {Lang_chg.product_sub_category_txt[config.language]}
            </Text>

            <TouchableOpacity
              onPress={() => setSubCategoryStatus(true)}
              activeOpacity={0.8}
              style={{
                width: (mobileW * 90) / 100,
                borderWidth: (mobileW * 0.3) / 100,
                borderColor: Colors.chatBack,
                borderRadius: (mobileW * 2) / 100,
                marginTop: (mobileH * 1.8) / 100,
                paddingHorizontal: (mobileW * 3) / 100,
                height: (mobileH * 7.5) / 100,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontFamily: Font.FontRegular,
                  fontSize: (mobileW * 3.5) / 100,
                }}>
                {Lang_chg.select_sub_category_txt[config.language]}
              </Text>

              <Image
                source={
                  subCategoryStatus
                    ? localimag.icon_dropUp
                    : localimag.icon_dropDown
                }
                style={{
                  width: (mobileW * 4) / 100,
                  height: (mobileW * 4) / 100,
                  resizeMode: 'contain',
                }}></Image>
            </TouchableOpacity>
          </View>

          {/* city */}

          <View
            style={{
              marginTop: (mobileH * 3) / 100,
            }}>
            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBold,
              }}>
              {Lang_chg.city_txt[config.language]}
            </Text>

            <TouchableOpacity
              onPress={() => setCityStatus(true)}
              activeOpacity={0.8}
              style={{
                width: (mobileW * 90) / 100,
                borderWidth: (mobileW * 0.3) / 100,
                borderColor: Colors.chatBack,
                borderRadius: (mobileW * 2) / 100,
                marginTop: (mobileH * 1.8) / 100,
                paddingHorizontal: (mobileW * 3) / 100,
                height: (mobileH * 7.5) / 100,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontFamily: Font.FontRegular,
                  fontSize: (mobileW * 3.5) / 100,
                }}>
                {Lang_chg.select_city_txt[config.language]}
              </Text>

              <Image
                source={
                  cityStatus ? localimag.icon_dropUp : localimag.icon_dropDown
                }
                style={{
                  width: (mobileW * 4) / 100,
                  height: (mobileW * 4) / 100,
                  resizeMode: 'contain',
                }}></Image>
            </TouchableOpacity>
          </View>

          {/* Address */}

          <InputField
            title={Lang_chg.address_txt[config.language]}
            placeholder={Lang_chg.enter_address_txt[config.language]}
            value={address}
            setValue={setAddress}
            keyboardType="default"
            maxLength={100}
            inputContainerStyle={{
              marginTop: (mobileH * 3) / 100,
            }}
          />
        </View>

        {/* Availability */}

        <View
          style={{
            marginTop: (mobileH * 3) / 100,
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: Colors.profileColor,
              fontSize: (mobileW * 4) / 100,
              fontFamily: Font.FontBold,
            }}>
            {Lang_chg.availability_txt[config.language]}
          </Text>
        </View>

        <View
          style={{
            marginTop: (mobileH * 2) / 100,
            alignSelf: 'center',
          }}>
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
              thumbColor={
                mondayStatus ? Colors.theme_color : Colors.white_color
              }
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
              thumbColor={
                tuesdayStatus ? Colors.theme_color : Colors.white_color
              }
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
              thumbColor={
                fridayStatus ? Colors.theme_color : Colors.white_color
              }
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
              thumbColor={
                sundayStatus ? Colors.theme_color : Colors.white_color
              }
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
            title={Lang_chg.next_txt[config.language]}
            onPress={() => goBack()}
            btnStyle={{
              marginTop: (mobileH * 4) / 100,
            }}
            active={true}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default StoreProfile;

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
