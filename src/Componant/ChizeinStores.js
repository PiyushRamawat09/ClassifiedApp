import {
  BackHandler,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
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
import StoresContainer from '../Componant/StoresContainer';
import StarRating from 'react-native-star-rating';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {likeDislike} from '../Redux/Slice/StoreSlice';

const ChizeinStores = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleBackPress = useCallback(() => {
    navigation.navigate('Home');
    return true;
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }, [handleBackPress]),
  );

  const [featured, setFeatured] = useState([
    {
      id: 0,
      image: require('../Icons/Images/image_store.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'Oasis Boutique',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 1,
      image: require('../Icons/Images/image_store_2.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 2,
      image: require('../Icons/Images/image_store.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 3,
      image: require('../Icons/Images/image_store_2.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 4,
      image: require('../Icons/Images/image_store.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 5,
      image: require('../Icons/Images/image_store_2.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
  ]);

  const [newStore, setNewStore] = useState([
    {
      id: 0,
      image: require('../Icons/Images/image_store_3.jpg'),
      storeImage: require('../Icons/Images/image_christmas.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 1,
      image: require('../Icons/Images/image_store_4.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 2,
      image: require('../Icons/Images/image_store_3.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 3,
      image: require('../Icons/Images/image_store_4.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 4,
      image: require('../Icons/Images/image_store_3.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 5,
      image: require('../Icons/Images/image_store_4.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
  ]);

  const [men, setMen] = useState([
    {
      id: 0,
      image: require('../Icons/Images/image_store_4.jpg'),
      storeImage: require('../Icons/Images/image_store_3.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 1,
      image: require('../Icons/Images/image_store.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 2,
      image: require('../Icons/Images/image_store_4.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 3,
      image: require('../Icons/Images/image_store.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 4,
      image: require('../Icons/Images/image_store_4.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 5,
      image: require('../Icons/Images/image_store.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
  ]);

  const [women, setWomen] = useState([
    {
      id: 0,
      image: require('../Icons/Images/image_christmas.jpg'),
      storeImage: require('../Icons/Images/image_store_2.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 1,
      image: require('../Icons/Images/icon_purse.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 2,
      image: require('../Icons/Images/image_christmas.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 3,
      image: require('../Icons/Images/icon_purse.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 4,
      image: require('../Icons/Images/image_christmas.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 5,
      image: require('../Icons/Images/icon_purse.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
  ]);

  const [electronics, setElectronics] = useState([
    {
      id: 0,
      image: require('../Icons/Images/image_white_headphone.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 1,
      image: require('../Icons/Images/image__brown_headPhone.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 2,
      image: require('../Icons/Images/image_white_headphone.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 3,
      image: require('../Icons/Images/image__brown_headPhone.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 4,
      image: require('../Icons/Images/image_white_headphone.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 5,
      image: require('../Icons/Images/image__brown_headPhone.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
  ]);

  const [car, setCar] = useState([
    {
      id: 0,
      image: require('../Icons/Images/image_redIphone.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 1,
      image: require('../Icons/Images/image_store.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 2,
      image: require('../Icons/Images/image_redIphone.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 3,
      image: require('../Icons/Images/image_store.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 4,
      image: require('../Icons/Images/image_redIphone.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 5,
      image: require('../Icons/Images/image_store.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
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

  const [sortData, setSortData] = useState([
    {
      id: 0,
      image: require('../Icons/Images/image_bench.jpg'),
      storeImage: require('../Icons/Images/image_store_2.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 1,
      image: require('../Icons/Images/image_christmas.jpg'),
      storeImage: require('../Icons/Images/image_store_3.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 2,
      image: require('../Icons/Images/image_bench.jpg'),
      storeImage: require('../Icons/Images/image_store_4.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 3,
      image: require('../Icons/Images/image_christmas.jpg'),
      storeImage: require('../Icons/Images/image_store_2.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
    {
      id: 4,
      image: require('../Icons/Images/image_bench.jpg'),
      storeImage: require('../Icons/Images/image_store_3.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
      save: false,
    },
  ]);

  const save_unsave = (index, arrayName) => {
    dispatch(likeDislike({arrayName, index}));
  };
  return (
    <View>
      {/* ------ Featured View ---------------------- */}
      <View
        style={{
          marginTop: (mobileH * 1.5) / 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 4.5) / 100,
              fontFamily: Font.FontExtraBoldManrope,
            }}>
            {Lang_chg.featured_txt[config.language]}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ViewAllStores', {
                pageName: Lang_chg.featured_txt[config.language],
              })
            }>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.view_all_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* store Card */}

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={featured}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 1) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: (mobileH * 2) / 100,
                  marginLeft:
                    index != 0 ? (mobileW * 3) / 100 : (mobileW * 1) / 100,
                }}>
                {index !== featured.length - 1 ? (
                  <StoresContainer
                    image={item.image}
                    storeImage={item.storeImage}
                    title={item.title}
                    location={item.location}
                    rating={item.rating}
                    onPress={() => navigation.navigate('StoreDetails')}
                    saveStatus={item.save}
                    saveunsave={() => save_unsave(index, 'featured')}
                  />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('ViewAllStores', {
                        pageName: Lang_chg.featured_txt[config.language],
                      })
                    }>
                    <Image
                      source={localimag.icon_next}
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
      </View>
      {/* ----------------------------- */}

      {/* ------ new View ---------------------- */}
      <View
        style={{
          marginTop: (mobileH * 2) / 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 4.5) / 100,
              fontFamily: Font.FontExtraBoldManrope,
            }}>
            {Lang_chg.new_txt[config.language]}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ViewAllStores', {
                pageName: Lang_chg.new_txt[config.language],
              })
            }>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.view_all_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* store Card */}

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={newStore}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 1) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: (mobileH * 2) / 100,
                  marginLeft:
                    index != 0 ? (mobileW * 3) / 100 : (mobileW * 1) / 100,
                }}>
                {index !== newStore.length - 1 ? (
                  <StoresContainer
                    image={item.image}
                    storeImage={item.storeImage}
                    title={item.title}
                    location={item.location}
                    rating={item.rating}
                    onPress={() => navigation.navigate('StoreDetails')}
                    saveStatus={item.save}
                    saveunsave={() => save_unsave(index, 'newStore')}
                  />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('ViewAllStores', {
                        pageName: Lang_chg.new_txt[config.language],
                      })
                    }>
                    <Image
                      source={localimag.icon_next}
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
      </View>
      {/* ---------------------------------- */}

      {/*--------------- Men ------------------*/}
      <View
        style={{
          marginTop: (mobileH * 2) / 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 4.5) / 100,
              fontFamily: Font.FontExtraBoldManrope,
            }}>
            {Lang_chg.men_txt[config.language]}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ViewAllStores', {
                pageName: Lang_chg.men_txt[config.language],
              })
            }>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.view_all_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* store Card */}

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={men}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 1) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: (mobileH * 2) / 100,
                  marginLeft:
                    index != 0 ? (mobileW * 3) / 100 : (mobileW * 1) / 100,
                }}>
                {index !== men.length - 1 ? (
                  <StoresContainer
                    image={item.image}
                    storeImage={item.storeImage}
                    title={item.title}
                    location={item.location}
                    rating={item.rating}
                    onPress={() => navigation.navigate('StoreDetails')}
                    saveStatus={item.save}
                    saveunsave={() => save_unsave(index, 'men')}
                  />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('ViewAllStores', {
                        pageName: Lang_chg.men_txt[config.language],
                      })
                    }>
                    <Image
                      source={localimag.icon_next}
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
      </View>

      {/* ------------------------- */}

      {/*--------------- Women ------------------*/}
      <View
        style={{
          marginTop: (mobileH * 2) / 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 4.5) / 100,
              fontFamily: Font.FontExtraBoldManrope,
            }}>
            {Lang_chg.women_txt[config.language]}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ViewAllStores', {
                pageName: Lang_chg.women_txt[config.language],
              })
            }>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.view_all_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* store Card */}

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={women}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 1) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: (mobileH * 2) / 100,
                  marginLeft:
                    index != 0 ? (mobileW * 3) / 100 : (mobileW * 1) / 100,
                }}>
                {index !== women.length - 1 ? (
                  <StoresContainer
                    image={item.image}
                    storeImage={item.storeImage}
                    title={item.title}
                    location={item.location}
                    rating={item.rating}
                    onPress={() => navigation.navigate('StoreDetails')}
                    saveStatus={item.save}
                    saveunsave={() => save_unsave(index, 'women')}
                  />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('ViewAllStores', {
                        pageName: Lang_chg.women_txt[config.language],
                      })
                    }>
                    <Image
                      source={localimag.icon_next}
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
      </View>

      {/* ------------------------- */}

      {/*--------------- Electronics ------------------*/}
      <View
        style={{
          marginTop: (mobileH * 2) / 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 4.5) / 100,
              fontFamily: Font.FontExtraBoldManrope,
            }}>
            {Lang_chg.electronics_txt[config.language]}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ViewAllStores', {
                pageName: Lang_chg.electronics_txt[config.language],
              })
            }>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.view_all_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* store Card */}

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={electronics}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 1) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: (mobileH * 2) / 100,
                  marginLeft:
                    index != 0 ? (mobileW * 3) / 100 : (mobileW * 1) / 100,
                }}>
                {index !== electronics.length - 1 ? (
                  <StoresContainer
                    image={item.image}
                    storeImage={item.storeImage}
                    title={item.title}
                    location={item.location}
                    rating={item.rating}
                    onPress={() => navigation.navigate('StoreDetails')}
                    saveStatus={item.save}
                    saveunsave={() => save_unsave(index, 'electronics')}
                  />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('ViewAllStores', {
                        pageName: Lang_chg.electronics_txt[config.language],
                      })
                    }>
                    <Image
                      source={localimag.icon_next}
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
      </View>

      {/* ------------------------- */}

      {/*--------------- Car ------------------*/}
      <View
        style={{
          marginTop: (mobileH * 2) / 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: Colors.black_color,
              fontSize: (mobileW * 4.5) / 100,
              fontFamily: Font.FontExtraBoldManrope,
            }}>
            {Lang_chg.car_txt[config.language]}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ViewAllStores', {
                pageName: Lang_chg.car_txt[config.language],
              })
            }>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
              }}>
              {Lang_chg.view_all_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>

        {/* store Card */}

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={car}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 1) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginTop: (mobileH * 2) / 100,
                  marginLeft:
                    index != 0 ? (mobileW * 3) / 100 : (mobileW * 1) / 100,
                }}>
                {index !== car.length - 1 ? (
                  <StoresContainer
                    image={item.image}
                    storeImage={item.storeImage}
                    title={item.title}
                    location={item.location}
                    rating={item.rating}
                    onPress={() => navigation.navigate('StoreDetails')}
                    saveStatus={item.save}
                    saveunsave={() => save_unsave(index, 'car')}
                  />
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate('ViewAllStores', {
                        pageName: Lang_chg.car_txt[config.language],
                      })
                    }>
                    <Image
                      source={localimag.icon_next}
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
      </View>

      {/* ------------------------- */}

      {/* --------------- sort ------------------------ */}

      <View
        style={{
          marginTop: (mobileH * 2) / 100,
        }}>
        <Text
          style={{
            color: Colors.black_color,
            fontSize: (mobileW * 4.5) / 100,
            fontFamily: Font.FontBoldManrope,
          }}>
          {Lang_chg.sort_txt[config.language]}
        </Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: (mobileH * 2.5) / 100,
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
                  fontSize: (mobileW * 3.2) / 100,
                  fontFamily: Font.FontMediumManrope,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={sortData}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{
          paddingBottom: (mobileH * 1) / 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        renderItem={({item, index}) => {
          return (
            <View style={{}}>
              {index != sortData.length - 1 ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    width: (mobileW * 90) / 100,
                    height: (mobileH * 16.5) / 100,
                    backgroundColor: Colors.whiteColor,
                    borderWidth: (mobileW * 0.4) / 100,
                    borderColor: Colors.searchBorderColor,
                    borderRadius: (mobileW * 3) / 100,
                    marginTop: (mobileH * 3) / 100,
                    position: 'relative',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <FastImage
                      source={item.image}
                      style={{
                        width: (mobileW * 40) / 100,
                        height: (mobileH * 16.2) / 100,
                        resizeMode: 'contain',
                        position: 'relative',
                        borderTopLeftRadius: (mobileW * 2.5) / 100,
                        borderBottomLeftRadius: (mobileW * 2.5) / 100,
                      }}>
                      {/* <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => save_unsave(item, index, sortData)}
                          style={{
                            width: (mobileW * 7.5) / 100,
                            height: (mobileW * 7.5) / 100,
                            position: 'absolute',
                            top: 0,
                            right: (mobileW * 1) / 100,
                            marginRight: (mobileW * 1) / 100,
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                            backgroundColor: '#00000010',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <FastImage
                            source={
                              item.save
                                ? localimag.icon_save
                                : localimag.icon_unsave
                            }
                            style={{
                              width: (mobileW * 8.5) / 100,
                              height: (mobileW * 8.5) / 100,
                              // resizeMode: 'contain',
                            }}
                          />
                        </TouchableOpacity> */}

                      {item.storeImage && (
                        <View
                          style={{
                            width: (mobileW * 13) / 100,
                            height: (mobileW * 13) / 100,
                            borderRadius: (mobileW * 30) / 100,
                            backgroundColor: Colors.whiteColor,
                            position: 'absolute',
                            bottom: (mobileH * 0.8) / 100,
                            left: (mobileW * 2) / 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            source={item.storeImage}
                            style={{
                              width: (mobileW * 12) / 100,
                              height: (mobileW * 12) / 100,
                              borderRadius: (mobileW * 30) / 100,
                            }}
                          />
                        </View>
                      )}
                    </FastImage>

                    <View
                      style={{
                        marginTop: (mobileH * 0.5) / 100,
                        paddingRight: (mobileW * 4) / 100,
                        marginLeft: (mobileW * 3) / 100,
                        width: (mobileW * 45) / 100,
                      }}>
                      <Text
                        style={{
                          color: Colors.title_color,
                          fontSize: (mobileW * 3.8) / 100,
                          fontFamily: Font.FontBoldManrope,
                          marginTop: (mobileH * 1.5) / 100,
                          lineHeight: (mobileH * 2.8) / 100,
                        }}>
                        {item.title}
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: (mobileH * 1) / 100,
                        }}>
                        <StarRating
                          containerStyle={{
                            width: (mobileW * 18) / 100,
                          }}
                          fullStar={localimag.icon_active_star}
                          halfStar={localimag.icon_halfStar}
                          emptyStar={localimag.icon_deactive_star}
                          maxStars={5}
                          starSize={(mobileW * 3) / 100}
                          rating={item.rating}
                          starStyle={{
                            marginRight: (mobileW * 0.5) / 100,
                          }}
                          disabled={true}
                        />

                        <Text
                          style={{
                            color: Colors.title_color,
                            fontSize: (mobileW * 2.5) / 100,
                            fontFamily: Font.FontBoldManrope,
                            marginLeft: (mobileW * 1) / 100,
                          }}>
                          {`(${item.rating}.0)`}
                        </Text>
                      </View>

                      <View
                        style={{
                          marginTop: (mobileH * 2) / 100,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <FastImage
                          resizeMode={FastImage.resizeMode.contain}
                          source={localimag.icon_location}
                          style={{
                            width: (mobileW * 4) / 100,
                            height: (mobileW * 4) / 100,
                          }}
                        />

                        <Text
                          style={{
                            color: Colors.parisColor,
                            fontSize: (mobileW * 3) / 100,
                            fontFamily: Font.FontMediumManrope,
                            marginLeft: (mobileW * 1) / 100,
                          }}>
                          {item.location}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    marginTop: (mobileH * 2) / 100,
                  }}>
                  <FastImage
                    source={localimag.icon_down}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{
                      width: (mobileW * 15) / 100,
                      height: (mobileW * 15) / 100,
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default ChizeinStores;
