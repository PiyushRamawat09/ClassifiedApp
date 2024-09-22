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
import StoresContainer from '../Componant/StoresContainer';
import Cardcontainer from '../Componant/Cardcontainer';
const Favorites = () => {
  const {navigate, goBack} = useNavigation();
  const [store, setStore] = useState(true);
  const [products, setProducts] = useState(false);

  const [listing_1, setListing_1] = useState([
    {
      id: 0,
      image: localimag.image_bench,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
    },
    {
      id: 1,
      image: localimag.image_christmas,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
    },
    {
      id: 2,
      image: localimag.image_christmas,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
    },
    {
      id: 3,
      image: localimag.image_white_headphone,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
    },
    {
      id: 4,
      image: localimag.image_white_headphone,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
    },
    {
      id: 5,
      image: localimag.image_bench,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 0,
      location: 'Paris',
    },
  ]);

  const [listing_2, setListing_2] = useState([
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
      proStatus: 1,
      location: 'Paris',
      discount: false,
    },
    {
      id: 4,
      image: require('../Icons/Images/image_redDress.jpg'),
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      discount: true,
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
          {Lang_chg.myFavourite_listings_txt[config.language]}
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
            setProducts(false);
            setStore(true);
          }}
          style={{
            width: (mobileW * 35) / 100,
            justifyContent: 'center',
            alignItems: 'center',
            height: (mobileH * 6) / 100,
            borderBottomWidth: (mobileW * 0.5) / 100,
            borderColor: store ? Colors.theme_color : Colors.whiteColor,
          }}>
          <Text
            style={{
              fontSize: (mobileW * 3.8) / 100,
              color: store ? Colors.theme_color : Colors.black_color,
              fontFamily: Font.FontBoldManrope,
            }}>
            {Lang_chg.professional_txt[config.language]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStore(false);
            setProducts(true);
          }}
          activeOpacity={0.8}
          style={{
            width: (mobileW * 35) / 100,
            justifyContent: 'center',
            alignItems: 'center',
            height: (mobileH * 6) / 100,
            borderBottomWidth: (mobileW * 0.5) / 100,
            borderColor: products ? Colors.theme_color : Colors.whiteColor,
            marginLeft: (mobileW * 5) / 100,
          }}>
          <Text
            style={{
              fontSize: (mobileW * 3.8) / 100,
              color: products ? Colors.theme_color : Colors.black_color,
              fontFamily: Font.FontBoldManrope,
            }}>
            {Lang_chg.individualSeller_txt[config.language]}
          </Text>
        </TouchableOpacity>
      </View>

      {/* --------------------Stores--------------- */}

      {store && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listing_2}
          numColumns={2}
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
                style={
                  {
                    // marginTop: (mobileH * 2) / 100,
                  }
                }>
                <Cardcontainer
                  image={item.image}
                  pro_status={item.proStatus}
                  currency={item.currency}
                  title={item.title}
                  location={item.location}
                  containerStyle={{
                    marginTop: (mobileH * 2.5) / 100,
                    width: (mobileW * 42) / 100,
                    marginHorizontal: (mobileW * 2) / 100,
                  }}
                  imageContainer={{
                    width: (mobileW * 42) / 100,
                  }}
                  saveStatus={true}
                  discount={item.discount}
                  dicountPrice={`1500`}
                  discountPercent={`20`}
                />
              </View>
            );
          }}
        />
      )}

      {products && (
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={listing_1}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            paddingBottom: (mobileH * 5) / 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => {
            return (
              <View style={{}}>
                <Cardcontainer
                  image={item.image}
                  pro_status={item.proStatus}
                  currency={item.currency}
                  title={item.title}
                  location={item.location}
                  containerStyle={{
                    marginTop: (mobileH * 2.5) / 100,
                    width: (mobileW * 42) / 100,
                    marginHorizontal: (mobileW * 2) / 100,
                  }}
                  imageContainer={{
                    width: (mobileW * 42) / 100,
                  }}
                  saveStatus={true}
                />
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default Favorites;

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
