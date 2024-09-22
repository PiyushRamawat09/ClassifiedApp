import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
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
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppstatusBar from '../Componant/AppstatusBar';

const CreateMyStore = () => {
  const [slides, setSlides] = useState([
    {
      key: 1,
      image: localimag.icon_we_are_open,
      title: 'Create Store',
      description:
        'Lorem ipsum dolor sit amet consectetur. Et ut eu iaculis condimentum. Quis imperdiet orci porta ut augue.',
      status: false,
    },
    {
      key: 2,
      image: localimag.image_add_products_to_store,
      title: 'Add Products to Store',
      description:
        'Lorem ipsum dolor sit amet consectetur. Et ut eu iaculis condimentum. Quis imperdiet orci porta ut augue.',
      status: false,
    },
    {
      key: 3,
      image: localimag.image_manage_products,
      title: 'Manage Products',
      description:
        'Lorem ipsum dolor sit amet consectetur. Et ut eu iaculis condimentum. Quis imperdiet orci porta ut augue.',
      status: false,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();

  const onScroll = event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / slideSize);
    setCurrentIndex(index);
  };

  const Indicator = ({slides, currentIndex}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          // marginTop: (mobileH * 2) / 100,
          position: 'absolute',
          alignSelf: 'center',
          bottom:
            config.device_type == 'ios'
              ? (mobileH * 17.5) / 100
              : (mobileH * 18) / 100,
        }}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={{
              height: (mobileW * 2) / 100,
              width:
                currentIndex === index
                  ? (mobileW * 8) / 100
                  : (mobileW * 2) / 100,
              borderRadius: (mobileW * 30) / 100,
              backgroundColor:
                currentIndex === index
                  ? Colors.theme_color
                  : Colors.deactiveIndicator,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    );
  };

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
            fontSize: (mobileW * 6) / 100,
            color: Colors.black_color,
            fontFamily: Font.FontBold,
          }}>
          {Lang_chg.create_my_store[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 5) / 100,
          }}></View>
      </View>
      {/* -------------------------------------------- */}

      {/* content view */}
      <View
        style={{
          marginTop: (mobileH * 3) / 100,
        }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={slides}
          keyExtractor={item => item.key}
          pagingEnabled={true}
          onScroll={onScroll}
          renderItem={({item, index}) => {
            return (
              <View>
                <Image
                  source={item.image}
                  style={{
                    width: mobileW,
                    height:
                      config.device_type == 'ios'
                        ? (mobileH * 40) / 100
                        : (mobileH * 48) / 100,
                  }}></Image>

                <View
                  style={{
                    marginTop: (mobileH * 5) / 100,
                    width: (mobileW * 90) / 100,
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: Colors.black_color,
                      fontSize: (mobileW * 6) / 100,
                      fontFamily: Font.FontBold,
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      marginTop: (mobileH * 1) / 100,
                      fontSize: (mobileW * 4.5) / 100,
                      color: Colors.darkGrey,
                      textAlign: 'center',
                      lineHeight: (mobileH * 3) / 100,
                    }}>
                    {item.description}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>

      <Indicator slides={slides} currentIndex={currentIndex} />

      <TouchableOpacity
        onPress={() => navigation.navigate('CreateMyStore_step_1')}
        activeOpacity={0.8}
        style={{
          width: (mobileW * 90) / 100,
          alignSelf: 'center',
          height: (mobileH * 7) / 100,
          borderRadius: (mobileW * 2) / 100,
          backgroundColor: Colors.theme_color,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: (mobileH * 5) / 100,
        }}>
        <Image
          source={localimag.icon_create_my_store}
          style={{
            width: (mobileW * 5) / 100,
            height: (mobileW * 5) / 100,
            resizeMode: 'contain',
          }}></Image>
        <Text
          style={{
            color: Colors.whiteColor,
            fontSize: (mobileW * 4.5) / 100,
            fontFamily: Font.FontRegular,
            marginLeft: (mobileW * 2) / 100,
          }}>
          {Lang_chg.create_my_store[config.language]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateMyStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
});
