import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
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

import EmptyCart from '../Componant/EmptyCart';
import CartView from '../Componant/CartView';
import ButtonComponent from '../Componant/ButtonComponent';

const Cart = () => {
  const [cartData, setCartData] = useState([
    {
      id: 0,
      userImage: require('../Icons/Images/image_store_2.jpg'),
      userName: 'Oasis Boutique',
      total: '13,500',
      shareStatus: false,
      productArr: [
        {
          id: 0,
          image: localimag.image_christmas,
          title: 'Urban chic premium comfort...',
          location: 'Paris',
          count: 9,
          price: '13,500',
        },
        {
          id: 1,
          image: localimag.image_christmas,
          title: 'Urban chic premium comfort...',
          location: 'Paris',
          count: 9,
          price: '13,500',
        },
        {
          id: 2,
          image: localimag.image_christmas,
          title: 'Urban chic premium comfort...',
          location: 'Paris',
          count: 9,
          price: '13,500',
        },
      ],
    },
    {
      id: 1,
      userImage: require('../Icons/Images/image_store_2.jpg'),
      userName: 'Oasis Boutique',
      total: '13,500',
      shareStatus: false,
      productArr: [
        {
          id: 0,
          image: localimag.image_christmas,
          title: 'Urban chic premium comfort...',
          location: 'Paris',
          count: 9,
          price: '13,500',
        },
        {
          id: 1,
          image: localimag.image_christmas,
          title: 'Urban chic premium comfort...',
          location: 'Paris',
          count: 9,
          price: '13,500',
        },
      ],
    },
  ]);

  const [cartStatus, setCartStatus] = useState(false);

  const [shareWithSeller, setShareWithSeller] = useState(false);
  const [cancelShare, setCancelShare] = useState(false);
  const [cancelShareModal, setCancelShareModal] = useState(false);

  const getInspired = () => {
    setCartStatus(true);
  };

  const shareWithSellerFunc = cartIndex => {
    const updatedCart = cartData.map((cartItem, index) => {
      if (index === cartIndex) {
        return {...cartItem, shareStatus: !cartItem.shareStatus};
      }
      return cartItem;
    });
    setCartData(updatedCart);
  };

  const cancelShareFunc = status => {
    if (status) {
      setCancelShareModal(true);
    }
  };

  return (
    <View style={styles.container}>
      {/*------------- header -------------- */}
      <View
        style={{
          width: mobileW,
          height: (mobileH * 10) / 100,
          backgroundColor: Colors.whiteColor,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: Colors.black_color,
            fontSize: (mobileW * 5) / 100,
            fontFamily: Font.FontBoldLexend,
          }}>
          {Lang_chg.cart_txt[config.language]}
        </Text>
      </View>
      {/* -------------------------- */}

      {/* cancel sharemodal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={cancelShareModal}
        onRequestClose={() => {
          consolepro.consolelog('backkac');
          setCancelShareModal(false);
        }}>
        <TouchableOpacity
          onPress={() => setCancelShareModal(false)}
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000090',
          }}>
          <View
            style={{
              width: (mobileW * 85) / 100,
              paddingVertical: (mobileH * 2.5) / 100,
              borderRadius: (mobileW * 3) / 100,
              backgroundColor: Colors.whiteColor,
              justifyContent: 'center',
              paddingHorizontal: (mobileW * 8) / 100,
            }}>
            <Text
              style={{
                color: Colors.theme_color,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontExtraBoldManrope,
              }}>
              {Lang_chg.cancelSharing_txt[config.language]}
            </Text>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontMediumManrope,
                marginTop: (mobileH * 1) / 100,
                width: (mobileW * 65) / 100,
                lineHeight: (mobileH * 3) / 100,
              }}>
              {Lang_chg.are_you_sure_you_want_to_stop_sharing[config.language]}
            </Text>

            <View
              style={{
                marginTop: (mobileH * 3) / 100,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setCancelShareModal(false)}
                style={{
                  backgroundColor: Colors.whiteColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: (mobileW * 25) / 100,
                  borderRadius: (mobileW * 1) / 100,
                  height: (mobileH * 5) / 100,
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.5) / 100,
                    fontFamily: Font.FontMediumManrope,
                  }}>
                  {Lang_chg.cancel_txt[config.language]}
                </Text>
              </TouchableOpacity>

              <ButtonComponent
                onPress={() => {
                  setCancelShareModal(false);
                }}
                title={Lang_chg.stopSharing_txt[config.language]}
                btnStyle={{
                  width: (mobileW * 25) / 100,
                  borderRadius: (mobileW * 1) / 100,
                  height: (mobileH * 4) / 100,
                  borderWidth: null,
                }}
                txtStyle={{
                  fontSize: (mobileW * 3) / 100,
                }}
                active={true}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* ----------------------------- */}

      {!cartStatus ? (
        <EmptyCart onPress={getInspired} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: (mobileH * 2.5) / 100,
            paddingHorizontal: (mobileW * 5) / 100,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: (mobileH * 10) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: (mobileW * 80) / 100,
              alignSelf: 'center',
            }}>
            <Image
              source={localimag.icon_info}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                tintColor: Colors.theme_color,
                marginTop: (mobileH * 0.2) / 100,
              }}
            />
            <Text
              style={{
                color: Colors.transactionColor,
                fontFamily: Font.FontMediumManrope,
                fontSize: (mobileW * 3.5) / 100,
                marginLeft: (mobileW * 1) / 100,
                textAlign: 'center',
                lineHeight: (mobileH * 2.5) / 100,
              }}>
              {Lang_chg.shareYourSelectionWithSeller_txt[config.language]}
            </Text>
          </View>

          <CartView
            cartData={cartData}
            shareWithSellerFunc={cartIndex => shareWithSellerFunc(cartIndex)}
            cancelShareFunc={status => cancelShareFunc(status)}
            showCartBag={true}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default React.memo(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
});
