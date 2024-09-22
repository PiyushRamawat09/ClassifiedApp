import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import AppstatusBar from '../Componant/AppstatusBar';
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
import SearchContainer from '../Componant/SearchContainer';
import {useNavigation, useRoute} from '@react-navigation/native';
import Cardcontainer from '../Componant/Cardcontainer';
import StoresContainer from '../Componant/StoresContainer';
import {useSelector} from 'react-redux';
import ButtonComponent from '../Componant/ButtonComponent';
import StarRating from 'react-native-star-rating';

const ViewAllCategories = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const {params} = useRoute();

  const [categories, setCategories] = useState([
    {
      id: 0,
      category: "Women's Fashion",
      icon: localimag.icon_women_dress,
      status: true,
    },
    {
      id: 1,
      category: 'For Men',
      icon: localimag.icon_men_dress,
      status: false,
    },
    {
      id: 2,
      category: 'High-tech',
      icon: localimag.icon_cellPhone,
      status: false,
    },
    {
      id: 3,
      category: 'Children',
      icon: localimag.icon_kid,
      status: false,
    },
  ]);

  const [categoriesType, setCategoriesType] = useState([
    {
      id: 0,
      category: 'All',
      icon: '',
      status: false,
    },
    {
      id: 1,
      category: 'Clothing',
      icon: localimag.icon_women_dress,
      status: true,
    },
    {
      id: 2,
      category: 'Perfume',
      icon: localimag.icon_perfume,
      status: false,
    },
    {
      id: 3,
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
      id: 3,
      category: 'Shoes',
      icon: localimag.icon_shoes,
      status: false,
    },
    {
      id: 3,
      category: 'Watches & Jewellery',
      icon: localimag.icon_ring,
      status: false,
    },
  ]);

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

  const selectCategoryType = indx => {
    let categorie_arr_type = [...categoriesType];
    consolepro.consolelog('categorie_arr_type', categorie_arr_type);
    consolepro.consolelog('indx', indx);

    for (let i = 0; i < categorie_arr_type.length; i++) {
      categorie_arr_type[i].status = false;
    }

    categorie_arr_type[indx].status = true;

    setCategoriesType(categorie_arr_type);
    consolepro.consolelog('categorie_arr_type 123', categoriesType);
  };

  const [listing_1, setListing_1] = useState([
    {
      id: 0,
      image: require('../Icons/Images/image_redDress.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
    },
    {
      id: 1,
      image: require('../Icons/Images/image_redDress_2.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
    },
    {
      id: 2,
      image: require('../Icons/Images/imagre_blueDress.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 2,
      location: 'Paris',
    },
    {
      id: 3,
      image: require('../Icons/Images/image_redDress_3.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
    },
    {
      id: 4,
      image: require('../Icons/Images/image_redDress.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
    },
    {
      id: 5,
      image: require('../Icons/Images/image_redDress_2.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
    },
    {
      id: 6,
      image: require('../Icons/Images/imagre_blueDress.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
    },
  ]);

  const [modalVisiblele, setModalVisible] = useState(false);

  const [priceStatus, setPriceStatus] = useState(1);

  const [favStores, setFavStores] = useState([
    {
      id: 0,
      image: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
    },
    {
      id: 1,
      image: require('../Icons/Images/image_store_2.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
    },
    {
      id: 2,
      image: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
    },
    {
      id: 3,
      image: require('../Icons/Images/image_store_2.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
    },
    {
      id: 4,
      image: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
    },
    {
      id: 5,
      image: require('../Icons/Images/image_store_2.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
    },
  ]);

  const [sort, setSort] = useState([
    {
      id: 0,
      name: 'Popular',
      status: true,
    },
    {
      id: 0,
      name: 'Nearby',
      status: false,
    },
    {
      id: 0,
      name: 'Trending',
      status: false,
    },
    {
      id: 0,
      name: 'Featured',
      status: false,
    },
  ]);

  const setSortStatus = indx => {
    let sort_arr = [...sort];
    consolepro.consolelog('sort_arr', sort_arr);
    consolepro.consolelog('indx', indx);

    for (let i = 0; i < sort_arr.length; i++) {
      sort_arr[i].status = false;
    }

    sort_arr[indx].status = true;

    setSort(sort_arr);
    consolepro.consolelog('sort_arr 123', sort);
  };

  const [filterVisible, setFilterVisible] = useState(false);

  const categoriesFilter = useSelector(
    state => state.home.homeData?.categories,
  );

  const [rating, setRating] = useState([
    {
      id: 0,
      title: '5 Stars',
      icon: localimag.icon_deactive_star,
      status: true,
    },
    {
      id: 1,
      title: '4 Stars',
      icon: localimag.icon_deactive_star,
      status: false,
    },
    {
      id: 2,
      title: '3 Stars',
      icon: localimag.icon_deactive_star,
      status: false,
    },
    {
      id: 3,
      title: '2 Stars',
      icon: localimag.icon_deactive_star,
      status: false,
    },
    {
      id: 4,
      title: '1 Stars',
      icon: localimag.icon_deactive_star,
      status: false,
    },
  ]);

  const setRatingStatus = index => {
    let rating_arr = [...rating];
    consolepro.consolelog('rating_arr', rating_arr);
    consolepro.consolelog('indx', index);

    for (let i = 0; i < rating_arr.length; i++) {
      rating_arr[i].status = false;
    }

    rating_arr[index].status = true;

    setRating(rating_arr);
    consolepro.consolelog('categories 123', rating);
  };

  // -----------------------------------

  const ScrollY = useRef(new Animated.Value(0)).current;

  const translateHeader = ScrollY.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
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

      {/* sort modal */}

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
              height: (mobileH * 32) / 100,
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
                  fontSize: (mobileW * 4.8) / 100,
                  fontFamily: Font.FontBoldLexend,
                }}>
                {Lang_chg.sort_txt[config.language]}
              </Text>
            </View>

            <View
              style={{
                width: (mobileW * 80) / 100,
                alignSelf: 'center',
                marginTop: (mobileH * 5) / 100,
              }}>
              {/* high to low */}

              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setPriceStatus(1);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.8) / 100,
                    fontFamily: Font.FontMediumManrope,
                  }}>
                  {Lang_chg.high_to_low_price[config.language]}
                </Text>

                <Image
                  source={
                    priceStatus == 1
                      ? localimag.icon_activeRadio
                      : localimag.icon_deactiveRadio
                  }
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}></Image>
              </TouchableOpacity>

              {/* boreder */}
              <View
                style={{
                  marginVertical: (mobileH * 3) / 100,
                  width: (mobileW * 90) / 100,
                  height: (mobileH * 0.2) / 100,
                  backgroundColor: '#F2F2F2',
                  alignSelf: 'center',
                }}></View>

              {/* low to high */}
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setPriceStatus(2);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.8) / 100,
                    fontFamily: Font.FontMediumManrope,
                  }}>
                  {Lang_chg.low_to_low_high[config.language]}
                </Text>

                <Image
                  source={
                    priceStatus == 2
                      ? localimag.icon_activeRadio
                      : localimag.icon_deactiveRadio
                  }
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                  }}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* filter modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={filterVisible}
        onRequestClose={() => {
          consolepro.consolelog('backkac');
          setFilterVisible(false);
        }}>
        <TouchableOpacity
          onPress={() => setFilterVisible(false)}
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
              height:
                params?.type === 2
                  ? (mobileH * 78) / 100
                  : (mobileH * 60) / 100,
              width: mobileW,
              backgroundColor: Colors.whiteColor,
              alignSelf: 'center',
              borderTopRightRadius: (mobileW * 7) / 100,
              borderTopLeftRadius: (mobileW * 7) / 100,
            }}>
            <TouchableOpacity
              onPress={() => setFilterVisible(false)}
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
                  fontSize: (mobileW * 4.8) / 100,
                  fontFamily: Font.FontBoldLexend,
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
                  fontSize: (mobileW * 4.3) / 100,
                  fontFamily: Font.FontBoldManrope,
                }}>
                {Lang_chg.product_categories[config.language]}
              </Text>

              {/* categories  */}
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={categoriesFilter}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                  marginTop: (mobileH * 3) / 100,
                }}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{
                        paddingHorizontal: (mobileW * 4) / 100,
                        paddingVertical: (mobileH * 1.5) / 100,
                        borderWidth: (mobileW * 0.3) / 100,
                        borderColor: Colors.theme_color,
                        borderRadius: (mobileW * 30) / 100,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight:
                          index != categoriesFilter.length - 1
                            ? (mobileW * 2) / 100
                            : null,

                        backgroundColor: item.status
                          ? Colors.theme_color
                          : Colors.whiteColor,
                      }}>
                      <Image
                        source={item.icon}
                        style={{
                          width: (mobileW * 5) / 100,
                          height: (mobileW * 5) / 100,
                          resizeMode: 'contain',
                          tintColor: item.status
                            ? Colors.whiteColor
                            : Colors.theme_color,
                        }}
                      />

                      <Text
                        style={{
                          color: item.status
                            ? Colors.whiteColor
                            : Colors.theme_color,
                          fontSize: (mobileW * 3.8) / 100,
                          fontFamily: Font.FontBoldManrope,
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
                    fontSize: (mobileW * 3.8) / 100,
                    fontFamily: Font.FontBoldManrope,
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
                      fontFamily: Font.FontMediumManrope,
                      fontSize: (mobileW * 3.3) / 100,
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

              {/* Ratings */}

              {params?.type === 2 && (
                <View
                  style={{
                    marginTop: (mobileH * 3) / 100,
                  }}>
                  <Text
                    style={{
                      color: Colors.profileColor,
                      fontSize: (mobileW * 3.8) / 100,
                      fontFamily: Font.FontBoldManrope,
                    }}>
                    {Lang_chg.ratings_txt[config.language]}
                  </Text>

                  <View
                    style={{
                      marginTop: (mobileH * 1.5) / 100,
                      flexDirection: 'row',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}>
                    {rating.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={`${index}`}
                          activeOpacity={0.8}
                          onPress={() => setRatingStatus(index)}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: (mobileH * 1.2) / 100,
                            paddingHorizontal: (mobileW * 4) / 100,
                            backgroundColor: item.status
                              ? Colors.faqBack
                              : Colors.whiteColor,
                            borderWidth: 1,
                            borderColor: item.status
                              ? Colors.faqBack
                              : Colors.borderLine,
                            borderRadius: (mobileW * 30) / 100,
                            marginTop: (mobileH * 1.5) / 100,
                            marginRight: (mobileW * 3) / 100,
                          }}>
                          <Image
                            source={item.icon}
                            style={{
                              height: (mobileW * 3.5) / 100,
                              width: (mobileW * 3.5) / 100,
                              resizeMode: 'contain',
                              tintColor: item.status
                                ? Colors.theme_color
                                : null,
                            }}></Image>

                          <Text
                            style={{
                              color: item.status
                                ? Colors.theme_color
                                : Colors.darkGrey,
                              fontSize: (mobileW * 3.3) / 100,
                              fontFamily: Font.FontMediumManrope,
                              marginLeft: (mobileW * 3) / 100,
                            }}>
                            {item.title}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              )}

              <View
                style={{
                  marginTop: (mobileH * 5) / 100,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ButtonComponent
                  onPress={() => {
                    setFilterVisible(false);
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
                    setFilterVisible(false);
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
          <Animated.View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              justifyContent: 'space-between',
              opacity: opacityTitle,
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
              {Lang_chg.categories_txt[config.language]}
            </Text>

            <View style={{width: (mobileW * 10) / 100}}></View>
          </Animated.View>

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
              placeholder={
                params?.type === 2
                  ? Lang_chg.serach_for_a_store[config.language]
                  : Lang_chg.serach_txt[config.language]
              }
              containerStyle={{
                width: (mobileW * 60) / 100,
              }}
              inputStyle={{
                width: (mobileW * 48) / 100,
              }}
            />
            <TouchableOpacity
              onPress={() => setFilterVisible(true)}
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
              onPress={() => setModalVisible(true)}
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

      {/* ------ header end -------- */}

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.mainView,
          {
            paddingTop:
              config.device_type == 'ios'
                ? (mobileH * 18) / 100
                : (mobileH * 19) / 100,
            paddingBottom: (mobileH * 5) / 100,
          },
        ]}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: ScrollY}}}],
          {
            useNativeDriver: true,
          },
        )}>
        {/* categories  */}
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => selectCategory(index)}
                activeOpacity={0.8}
                style={{
                  paddingHorizontal: (mobileW * 4) / 100,
                  paddingVertical: (mobileH * 1.5) / 100,
                  borderWidth: (mobileW * 0.3) / 100,
                  borderColor: Colors.theme_color,
                  borderRadius: (mobileW * 30) / 100,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight:
                    index != categories.length - 1 ? (mobileW * 2) / 100 : null,

                  backgroundColor: item.status
                    ? Colors.theme_color
                    : Colors.whiteColor,
                }}>
                <Image
                  source={item.icon}
                  style={{
                    width: (mobileW * 5) / 100,
                    height: (mobileW * 5) / 100,
                    resizeMode: 'contain',
                    tintColor: item.status
                      ? Colors.whiteColor
                      : Colors.theme_color,
                  }}></Image>

                <Text
                  style={{
                    color: item.status ? Colors.whiteColor : Colors.theme_color,
                    fontSize: (mobileW * 3.8) / 100,
                    fontFamily: Font.FontMediumManrope,
                    marginLeft: (mobileW * 0.8) / 100,
                  }}>
                  {item.category}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        {/* categories type list  */}

        <View
          style={{
            marginTop: (mobileH * 2.5) / 100,
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          {categoriesType.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => selectCategoryType(index)}
                activeOpacity={0.8}
                style={{
                  paddingHorizontal: (mobileW * 3) / 100,
                  paddingVertical: (mobileH * 1) / 100,
                  borderWidth: (mobileW * 0.3) / 100,
                  borderColor: Colors.theme_color,
                  borderRadius: (mobileW * 1) / 100,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: (mobileW * 1) / 100,
                  backgroundColor: item.status
                    ? Colors.theme_color
                    : Colors.whiteColor,
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
                    color: item.status ? Colors.whiteColor : Colors.theme_color,
                    fontSize: (mobileW * 2.8) / 100,
                    fontFamily: Font.FontMediumManrope,
                    marginLeft: item.icon ? (mobileW * 0.8) / 100 : null,
                  }}>
                  {item.category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* popular and Nearby */}

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: (mobileH * 2) / 100,
          }}>
          {sort.map((item, index) => {
            return (
              <TouchableOpacity
                key={`${index}`}
                onPress={() => setSortStatus(index)}
                activeOpacity={0.8}
                style={{
                  width: (mobileW * 22) / 100,
                  height: (mobileH * 5) / 100,
                  backgroundColor: item.status
                    ? Colors.theme_color
                    : Colors.whiteColor,
                  borderWidth: !item.status ? (mobileW * 0.1) / 100 : null,
                  borderColor: !item.status ? Colors.borderLine : null,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: (mobileW * 1) / 100,
                  marginRight: (mobileW * 3) / 100,
                }}>
                <Text
                  style={{
                    color: item.status ? Colors.whiteColor : Colors.darkGrey,
                    fontSize: (mobileW * 3) / 100,
                    fontFamily: Font.FontMediumManrope,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Category list  */}

        {params?.type === 1 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={listing_1}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={{
              paddingBottom: (mobileH * 1) / 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            renderItem={({item, index}) => {
              return (
                <View style={{}}>
                  {index !== listing_1.length - 1 ? (
                    <Cardcontainer
                      image={item.image}
                      pro_status={item.proStatus}
                      currency={item.currency}
                      title={item.title}
                      location={item.location}
                      containerStyle={{
                        marginTop:
                          index <= 1
                            ? (mobileH * 3) / 100
                            : (mobileH * 2.5) / 100,
                        width: (mobileW * 42) / 100,
                        marginHorizontal: (mobileW * 2) / 100,
                      }}
                      imageContainer={{
                        width: (mobileW * 42) / 100,
                      }}
                    />
                  ) : (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{
                        marginTop: (mobileH * 2) / 100,
                      }}>
                      <Image
                        source={localimag.icon_down}
                        style={{
                          width: (mobileW * 15) / 100,
                          height: (mobileW * 15) / 100,
                          resizeMode: 'contain',
                        }}></Image>
                    </TouchableOpacity>
                  )}
                </View>
              );
            }}
          />
        )}

        {params?.type === 2 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={favStores}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={{
              paddingBottom: (mobileH * 1) / 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            renderItem={({item, index}) => {
              return (
                <View style={{marginTop: (mobileH * 2.5) / 100}}>
                  {index !== favStores.length - 1 ? (
                    <StoresContainer
                      image={item.image}
                      title={item.title}
                      location={item.location}
                      rating={item.rating}
                      containerStyle={{
                        width: (mobileW * 88) / 100,
                      }}
                      imageContainer={{
                        width: (mobileW * 88) / 100,
                      }}
                    />
                  ) : (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{
                        marginTop: (mobileH * 2) / 100,
                      }}>
                      <Image
                        source={localimag.icon_down}
                        style={{
                          width: (mobileW * 15) / 100,
                          height: (mobileW * 15) / 100,
                          resizeMode: 'contain',
                        }}></Image>
                    </TouchableOpacity>
                  )}
                </View>
              );
            }}
          />
        )}
      </Animated.ScrollView>
    </View>
  );
};

export default ViewAllCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    marginTop: (mobileH * 2) / 100,
    backgroundColor: Colors.whiteColor,
  },
});
