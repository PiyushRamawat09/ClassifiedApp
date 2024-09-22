import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const StoriesDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AppstatusBar />

      {/* header */}

      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
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

        {/* <Text
          style={{
            color: Colors.black_color,
            fontSize: (mobileW * 5) / 100,
            fontFamily: Font.FontBoldLexend,
          }}>
          {Lang_chg.details_txt[config.language]}
        </Text> */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={localimag.icon_share}
              style={{
                height: (mobileW * 6) / 100,
                width: (mobileW * 6) / 100,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              marginLeft: (mobileW * 4) / 100,
            }}>
            <Image
              source={localimag.icon_wishlist}
              style={{
                height: (mobileW * 6) / 100,
                width: (mobileW * 6) / 100,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* ---------------- */}

      {/*-------- body --------------- */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          {
            paddingBottom: (mobileH * 5) / 100,
          },
        ]}>
        <View
          style={{
            marginTop: (mobileH * 3) / 100,
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: Colors.skipColor,
              fontSize: (mobileW * 3.3) / 100,
              fontFamily: Font.FontMediumManrope,
            }}>
            Published June 21, 2024
          </Text>

          <Text
            style={{
              color: Colors.deactiveColor,
              fontSize: (mobileW * 5) / 100,
              fontFamily: Font.FontBoldManrope,
              marginTop: (mobileH * 1) / 100,
              lineHeight: (mobileH * 3.5) / 100,
            }}>
            Best work bags to invest in, according to your girl boss style
          </Text>
        </View>

        <Image
          source={require('../Icons/Images/image_store_3.jpg')}
          style={{
            width: mobileW,
            height: (mobileH * 35) / 100,
            resizeMode: 'cover',
            marginTop: (mobileH * 3) / 100,
          }}
        />

        <View
          style={{
            marginTop: (mobileH * 2) / 100,
            width: (mobileW * 90) / 100,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 3.5) / 100,
              fontFamily: Font.FontMediumManrope,
              lineHeight: (mobileH * 3) / 100,
              textAlign: 'justify',
            }}>
            Lorem ipsum dolor sit amet consectetur. Sem praesent viverra iaculis
            leo pellentesque arcu. Et leo ridiculus viverra pretium et est
            scelerisque. Id sed feugiat arcu pretium sed massa. In dictumst nunc
            metus et sem proin mauris. Lorem ipsum dolor sit amet consectetur.
            Id lectus vestibulum ipsum sed eget et habitant. Vulputate cras
            hendrerit amet quam platea facilisis tempus quis laoreet. Nulla dui
            donec sed egestas ultrices ut. Placerat lorem eu viverra ultrices
            praesent pharetra laoreet nec. Laoreet donec cursus suspendisse
            venenatis amet. Et nibh sapien duis elementum morbi mi fermentum.
            Aliquam faucibus consectetur volutpat commodo dictum sit. Ut sem
            maecenas porttitor quam dolor mattis tristique ullamcorper. Amet
            volutpat diam est mi lacus nam et a. Lorem ipsum dolor sit amet
            consectetur. Sem praesent viverra iaculis leo pellentesque arcu. Et
            leo ridiculus viverra pretium et est scelerisque. Id sed feugiat
            arcu pretium sed massa. In dictumst nunc metus et sem proin mauris.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default StoriesDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: (mobileH * 3) / 100,
    paddingHorizontal: (mobileW * 5) / 100,
    paddingBottom: (mobileH * 1) / 100,
  },
});
