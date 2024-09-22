import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ListingView from '../Componant/ListingView';
import SearchContainer from '../Componant/SearchContainer';
import {
  Colors,
  config,
  consolepro,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import AppstatusBar from '../Componant/AppstatusBar';
import ButtonComponent from '../Componant/ButtonComponent';

const ManageMyStore = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const [listing, setListing] = useState([
    {
      id: 0,
      image: localimag.image_bench,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      showListingStatus: true,
      listingStatusImage: localimag.icon_listSold,
    },
    {
      id: 1,
      image: localimag.image_white_headphone,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      showListingStatus: true,
      listingStatusImage: localimag.icon_pause,
    },
    {
      id: 2,
      image: localimag.image__brown_headPhone,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 2,
      location: 'Paris',
      showListingStatus: false,
      listingStatusImage: '',
    },
    {
      id: 3,
      image: localimag.image_white_headphone,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      showListingStatus: true,
      listingStatusImage: localimag.icon_listSold,
    },
    {
      id: 4,
      image: localimag.image_bench,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      showListingStatus: true,
      listingStatusImage: localimag.icon_listEdit,
    },
  ]);

  const [categories, setCategories] = useState([
    {
      id: 0,
      category: 'Clothing',
      icon: localimag.icon_women_dress,
      status: true,
    },
    {
      id: 1,
      category: 'Perfume',
      icon: localimag.icon_perfume,
      status: false,
    },
    {
      id: 2,
      category: 'Bags',
      icon: localimag.icon_bag,
      status: false,
    },
    {
      id: 3,
      category: 'Cosmetics',
      icon: localimag.icon_lipistick,
      status: false,
    },
    {
      id: 4,
      category: 'Shoes',
      icon: localimag.icon_shoes,
      status: false,
    },
    {
      id: 5,
      category: 'Watches & Jewellery',
      icon: localimag.icon_ring,
      status: false,
    },
  ]);

  const [listModal, setListModal] = useState(false);
  const [modalVisiblele, setModalVisible] = useState(false);
  const [sortModal, setSortModal] = useState(false);

  const selectCategory = indx => {
    let categorie_arr = [...categories];
    consolepro.consolelog('categorie_arr', categorie_arr);
    consolepro.consolelog('indx', indx);

    for (let i = 0; i < categorie_arr.length; i++) {
      categorie_arr[i].status = false;
    }

    categorie_arr[indx].status = true;

    setCategories(categorie_arr);
    consolepro.consolelog('categories 123', categories);
  };

  // ------------------------------------

  const ScrollY = useRef(new Animated.Value(0)).current;

  const translateHeader = ScrollY.interpolate({
    inputRange: [0, 55],
    outputRange: [0, -55],
    extrapolate: 'clamp',
  });

  const opacityTitle = ScrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <AppstatusBar />

      {/* ------ header ------- */}
      <Animated.View
        style={{
          backgroundColor: Colors.whiteColor,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          paddingBottom: (mobileH * 1.5) / 100,
          marginBottom: (mobileH * 1) / 100,

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
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
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

            <Animated.Text
              style={{
                fontSize: (mobileW * 6) / 100,
                color: Colors.black_color,
                fontFamily: Font.FontBold,
                marginLeft: (mobileW * 15) / 100,
                opacity: opacityTitle,
              }}>
              {Lang_chg.manage_my_store_txt[config.language]}
            </Animated.Text>
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
              containerStyle={{
                width: (mobileW * 60) / 100,
              }}
              inputStyle={{
                width: (mobileW * 48) / 100,
              }}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              activeOpacity={0.8}
              style={{
                marginLeft: (mobileW * 1.5) / 100,
              }}>
              <Image
                source={localimag.icon_filter}
                style={{
                  width: (mobileW * 15) / 100,
                  height: (mobileW * 15) / 100,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSortModal(true)}
              activeOpacity={0.8}
              style={{
                marginLeft: (mobileW * 1.5) / 100,
              }}>
              <Image
                source={localimag.icon_updown}
                style={{
                  width: (mobileW * 15) / 100,
                  height: (mobileW * 15) / 100,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

      {/* ------------------------ */}

      {/* List status Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={listModal}
        onRequestClose={() => {
          consolepro.consolelog('backkac');
          setListModal(false);
        }}>
        <TouchableOpacity
          onPress={() => setListModal(false)}
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
              height: (mobileH * 35) / 100,
              width: mobileW,
              backgroundColor: Colors.whiteColor,
              alignSelf: 'center',
              borderTopRightRadius: (mobileW * 7) / 100,
              borderTopLeftRadius: (mobileW * 7) / 100,
            }}>
            <TouchableOpacity
              onPress={() => setListModal(false)}
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
                marginLeft: (mobileW * 6) / 100,
                marginTop: (mobileH * 5) / 100,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setListModal(false);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={localimag.icon_check}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontRegular,
                    color: Colors.black_color,
                    marginLeft: (mobileW * 3) / 100,
                  }}>
                  {Lang_chg.mark_as_sold_txt[config.language]}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setListModal(false);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: (mobileH * 4.5) / 100,
                }}>
                <Image
                  source={localimag.icon_pause_btn}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontRegular,
                    color: Colors.black_color,
                    marginLeft: (mobileW * 3) / 100,
                  }}>
                  {Lang_chg.pause_txt[config.language]}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setListModal(false);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: (mobileH * 4.5) / 100,
                }}>
                <Image
                  source={localimag.icon_message}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontRegular,
                    color: Colors.black_color,
                    marginLeft: (mobileW * 3) / 100,
                  }}>
                  {Lang_chg.edit_txt[config.language]}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setListModal(false);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: (mobileH * 4.5) / 100,
                }}>
                <Image
                  source={localimag.icon_delete_bin}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontRegular,
                    color: Colors.deleteColor,
                    marginLeft: (mobileW * 3) / 100,
                  }}>
                  {Lang_chg.delete_txt[config.language]}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* ---------------------- */}

      {/* filter modal */}

      <Modal
        animationType="slide"
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
            backgroundColor: '#00000090',
          }}>
          <View
            style={{
              position: 'absolute',
              bottom: mobileH * 0,
              height: (mobileH * 60) / 100,
              width: mobileW,
              backgroundColor: Colors.whiteColor,
              alignSelf: 'center',
              borderTopRightRadius: (mobileW * 7) / 100,
              borderTopLeftRadius: (mobileW * 7) / 100,
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
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
                {Lang_chg.filter_txt[config.language]}
              </Text>
            </View>

            <View
              style={{
                width: (mobileW * 90) / 100,
                alignSelf: 'center',
                marginTop: (mobileH * 2) / 100,
              }}>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 4.5) / 100,
                  fontFamily: Font.FontRegular,
                }}>
                {Lang_chg.product_categories[config.language]}
              </Text>

              {/* categories  */}
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                  marginTop: (mobileH * 3) / 100,
                }}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => selectCategory(index)}
                      activeOpacity={0.8}
                      style={{
                        paddingHorizontal: (mobileW * 3) / 100,
                        paddingVertical: (mobileH * 1) / 100,
                        borderWidth: (mobileW * 0.3) / 100,
                        borderColor: !item.status
                          ? Colors.theme_color
                          : Colors.faqBack,
                        borderRadius: (mobileW * 30) / 100,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight:
                          index != categories.length - 1
                            ? (mobileW * 2) / 100
                            : null,

                        backgroundColor: item.status
                          ? Colors.faqBack
                          : Colors.whiteColor,
                      }}>
                      <Image
                        source={item.icon}
                        style={{
                          width: (mobileW * 5) / 100,
                          height: (mobileW * 5) / 100,
                          resizeMode: 'contain',
                          tintColor: Colors.theme_color,
                        }}></Image>

                      <Text
                        style={{
                          color: Colors.theme_color,
                          fontSize: (mobileW * 4) / 100,
                          fontFamily: Font.FontBold,
                          marginLeft: (mobileW * 0.8) / 100,
                        }}>
                        {item.category}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />

              <View
                style={{
                  width: (mobileW * 90) / 100,
                  height: (mobileH * 0.2) / 100,
                  backgroundColor: Colors.borderGrey,
                  marginTop: (mobileH * 2.5) / 100,
                  alignSelf: 'center',
                }}></View>

              {/* locations */}
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
                  {Lang_chg.location_txt[config.language]}
                </Text>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    width: (mobileW * 90) / 100,
                    borderWidth: (mobileW * 0.3) / 100,
                    borderColor: Colors.chatBack,
                    borderRadius: (mobileW * 2) / 100,
                    marginTop: (mobileH * 1.8) / 100,
                    paddingHorizontal: (mobileW * 3) / 100,
                    height: (mobileH * 7) / 100,
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
                    {Lang_chg.location_txt[config.language]}
                  </Text>

                  <Image
                    source={localimag.icon_profile_next}
                    style={{
                      width: (mobileW * 5) / 100,
                      height: (mobileW * 5) / 100,
                      resizeMode: 'contain',
                    }}></Image>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: (mobileW * 90) / 100,
                  height: (mobileH * 0.2) / 100,
                  backgroundColor: Colors.borderGrey,
                  marginTop: (mobileH * 2.5) / 100,
                  alignSelf: 'center',
                }}></View>

              <View
                style={{
                  marginTop: (mobileH * 5) / 100,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ButtonComponent
                  onPress={() => {
                    setModalVisible(false);
                  }}
                  title={Lang_chg.reset_all[config.language]}
                  btnStyle={{
                    width: (mobileW * 42) / 100,
                    borderRadius: (mobileW * 2) / 100,
                    height: (mobileH * 7) / 100,
                  }}
                  active={false}
                />

                <ButtonComponent
                  onPress={() => {
                    setModalVisible(false);
                  }}
                  title={Lang_chg.apply_txt[config.language]}
                  btnStyle={{
                    width: (mobileW * 42) / 100,
                    borderRadius: (mobileW * 2) / 100,
                    height: (mobileH * 7) / 100,
                    marginLeft: (mobileW * 4) / 100,
                  }}
                  active={true}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* ---------------- */}

      {/* sort Modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={sortModal}
        onRequestClose={() => {
          consolepro.consolelog('backkac');
          setSortModal(false);
        }}>
        <TouchableOpacity
          onPress={() => setSortModal(false)}
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
              height: (mobileH * 33) / 100,
              width: mobileW,
              backgroundColor: Colors.whiteColor,
              alignSelf: 'center',
              borderTopRightRadius: (mobileW * 7) / 100,
              borderTopLeftRadius: (mobileW * 7) / 100,
            }}>
            <TouchableOpacity
              onPress={() => setSortModal(false)}
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
                marginLeft: (mobileW * 6) / 100,
                marginTop: (mobileH * 5) / 100,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setSortModal(false);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginRight: (mobileW * 5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontRegular,
                    color: Colors.black_color,
                  }}>
                  {Lang_chg.pause_txt[config.language]}
                </Text>

                <Image
                  source={localimag.icon_circle}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>

              <View
                style={{
                  height: (mobileW * 0.1) / 100,
                  backgroundColor: Colors.borderGrey,
                  width: (mobileW * 90) / 100,
                  marginTop: (mobileH * 3) / 100,
                }}></View>

              <TouchableOpacity
                onPress={() => {
                  setSortModal(false);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: (mobileH * 3) / 100,
                  marginRight: (mobileW * 5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontRegular,
                    color: Colors.black_color,
                  }}>
                  {Lang_chg.mark_as_sold_txt[config.language]}
                </Text>

                <Image
                  source={localimag.icon_circle}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>

              <View
                style={{
                  height: (mobileW * 0.1) / 100,
                  backgroundColor: Colors.borderGrey,
                  width: (mobileW * 90) / 100,
                  marginTop: (mobileH * 3) / 100,
                }}></View>

              <TouchableOpacity
                onPress={() => {
                  setSortModal(false);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: (mobileH * 3) / 100,
                  marginRight: (mobileW * 5) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 4) / 100,
                    fontFamily: Font.FontRegular,
                    color: Colors.black_color,
                  }}>
                  {Lang_chg.unsold_txt[config.language]}
                </Text>

                <Image
                  source={localimag.icon_circle}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* ---------------------------- */}

      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={listing}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{
          paddingTop: (mobileH * 19) / 100,
          paddingBottom: (mobileH * 8) / 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: ScrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
        renderItem={({item, index}) => {
          return (
            <View style={{}}>
              <ListingView
                image={item.image}
                pro_status={item.proStatus}
                currency={item.currency}
                title={item.title}
                location={item.location}
                showFav={false}
                showListingStatus={item.showListingStatus}
                listingStatusImage={item.listingStatusImage}
                onPress={() => setListModal(true)}
                threeDots={true}
                containerStyle={{
                  marginTop: (mobileH * 2) / 100,
                }}
                subContainerStyle={{
                  marginTop: (mobileH * 2) / 100,
                }}
              />
            </View>
          );
        }}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          width: (mobileW * 40) / 100,
          height: (mobileH * 6.5) / 100,
          borderRadius: (mobileW * 2) / 100,
          backgroundColor: Colors.theme_color,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: (mobileH * 1) / 100,
          justifyContent: 'center',
          position: 'absolute',
          alignSelf: 'flex-end',
          bottom: (mobileH * 5) / 100,
          right: (mobileW * 5) / 100,
        }}>
        <Image
          source={localimag.icon_plus}
          style={{
            width: (mobileW * 5) / 100,
            height: (mobileW * 5) / 100,
            resizeMode: 'contain',
          }}></Image>
        <Text
          style={{
            color: Colors.whiteColor,
            fontSize: (mobileW * 4) / 100,
            fontFamily: Font.FontRegular,
            marginLeft: (mobileW * 2) / 100,
          }}>
          {Lang_chg.add_products_txt[config.language]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ManageMyStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    marginTop: (mobileH * 1) / 100,
    backgroundColor: Colors.whiteColor,
  },
});
