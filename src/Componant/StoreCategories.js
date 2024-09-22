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
import StoresContainer from './StoresContainer';

const StoreCategories = () => {
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

  const [favStores, setFavStores] = useState([
    {
      id: 0,
      image: require('../Icons/Images/image_store.jpg'),
      storeImage: require('../Icons/Images/image_christmas.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
    },
    {
      id: 1,
      image: require('../Icons/Images/image_store_2.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Dashing Haber',
      location: 'Paris',
      rating: 5,
    },
    {
      id: 2,
      image: require('../Icons/Images/image_store.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'DSW - Designer Warehouse',
      location: 'Paris',
      rating: 5,
    },
    {
      id: 3,
      image: require('../Icons/Images/image_store_2.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
    },
    {
      id: 4,
      image: require('../Icons/Images/image_store.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
    },
    {
      id: 5,
      image: require('../Icons/Images/image_store_2.jpg'),
      storeImage: require('../Icons/Images/image_store.jpg'),
      title: 'The Hidden Gem Emporium',
      location: 'Paris',
      rating: 5,
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

  return (
    <View>
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
      </View>
      {/* -------------------------------- */}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={favStores}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{
          paddingBottom: (mobileH * 5) / 100,
          width: (mobileW * 90) / 100,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginTop: (mobileH * 3) / 100,
              }}>
              <StoresContainer
                image={item.image}
                title={item.title}
                location={item.location}
                rating={item.rating}
                containerStyle={{
                  width: (mobileW * 88) / 100,
                }}
                imageContainer={{
                  width: (mobileW * 87.3) / 100,
                }}
                storeImage={item.storeImage}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default React.memo(StoreCategories);
