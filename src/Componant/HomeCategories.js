import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
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
import Cardcontainer from '../Componant/Cardcontainer';

const HomeCategories = ({title}) => {
  const navigation = useNavigation();

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
      name: 'Promotion',
      status: false,
    },
  ]);

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

  const [listing_1, setListing_1] = useState([
    {
      id: 0,
      image: require('../Icons/Images/image_redDress.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      discount: true,
    },
    {
      id: 1,
      image: require('../Icons/Images/image_redDress_2.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      discount: false,
    },
    {
      id: 2,
      image: require('../Icons/Images/imagre_blueDress.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      discount: false,
    },
    {
      id: 3,
      image: require('../Icons/Images/image_redDress_3.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      discount: true,
    },
    {
      id: 4,
      image: require('../Icons/Images/image_redDress.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      discount: false,
    },
    {
      id: 5,
      image: require('../Icons/Images/image_redDress_2.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      discount: true,
    },
    {
      id: 6,
      image: require('../Icons/Images/imagre_blueDress.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
      discount: false,
    },
  ]);

  return (
    <View>
      <View
        style={{
          backgroundColor: Colors.categoriesback,
          paddingVertical: (mobileH * 1) / 100,
          paddingHorizontal: (mobileW * 3) / 100,
        }}>
        {/* categories type list  */}

        <View
          style={{
            marginTop: (mobileH * 2) / 100,
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
                    fontFamily: Font.FontBoldManrope,
                    marginLeft: item.icon ? (mobileW * 0.8) / 100 : null,
                  }}>
                  {item.category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* popular/Nearby tab */}

      <View
        style={{
          width: (mobileW * 90) / 100,
          alignSelf: 'center',
          marginTop: (mobileH * 2) / 100,
        }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {sort.map((item, index) => {
            return (
              <TouchableOpacity
                key={`${index}`}
                onPress={() => setSortStatus(index)}
                activeOpacity={0.8}
                style={{
                  width: (mobileW * 20) / 100,
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
                    discount={item.discount}
                    dicountPrice={`1500`}
                    discountPercent={`20`}
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
      </View>
    </View>
  );
};

export default React.memo(HomeCategories);
