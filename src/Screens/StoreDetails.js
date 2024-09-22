import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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
import StarRating from 'react-native-star-rating';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SearchContainer from '../Componant/SearchContainer';
import Cardcontainer from '../Componant/Cardcontainer';
import {useSelector} from 'react-redux';
import ButtonComponent from '../Componant/ButtonComponent';

const StoreDetails = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState([
    {
      id: 0,
      name: 'New Arrivals',
      status: true,
    },
    {
      id: 0,
      name: 'Promotions',
      status: false,
    },
    {
      id: 0,
      name: 'Popular',
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

  const [listing_1, setListing_1] = useState([
    {
      id: 0,
      image: localimag.image_bench,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      discount: true,
    },
    {
      id: 1,
      image: localimag.image_christmas,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      discount: false,
    },
    {
      id: 2,
      image: localimag.image_christmas,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      discount: true,
    },
    {
      id: 3,
      image: localimag.image_white_headphone,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      discount: true,
    },
    {
      id: 4,
      image: localimag.image_white_headphone,
      title: 'Lenovo I7 11h Gen GTX 1650',
      currency: '1500',
      proStatus: 1,
      location: 'Paris',
      discount: false,
    },
  ]);

  const [filterVisible, setFilterVisible] = useState(false);

  const categoriesFilter = useSelector(
    state => state.home.homeData?.categories,
  );

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

        <Text
          style={{
            color: Colors.black_color,
            fontSize: (mobileW * 5) / 100,
            fontFamily: Font.FontBoldLexend,
          }}>
          {Lang_chg.details_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 8) / 100,
          }}></View>
      </View>

      {/* --------------- */}

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
              height: (mobileH * 60) / 100,
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
                  fontSize: (mobileW * 5) / 100,
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
                  fontSize: (mobileW * 4) / 100,
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
                          fontSize: (mobileW * 3.5) / 100,
                          fontFamily: Font.FontMediumManrope,
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
                    fontSize: (mobileW * 3.5) / 100,
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
                      fontSize: (mobileW * 3) / 100,
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

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          {
            paddingBottom: (mobileH * 5) / 100,
            marginTop: (mobileH * 2) / 100,
          },
        ]}>
        <ImageBackground
          source={require('../Icons/Images/image_store_2.jpg')}
          style={{
            width: mobileW,
            height: (mobileH * 25) / 100,
            justifyContent: 'flex-end',
            paddingHorizontal: (mobileW * 5) / 100,
          }}
          resizeMode="cover">
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: (mobileW * 26) / 100,
              height: (mobileW * 26) / 100,
              borderRadius: (mobileW * 30) / 100,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.whiteColor,
              marginBottom: (-mobileH * 6) / 100,

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,

              elevation: 8,
            }}>
            <Image
              source={require('../Icons/Images/image_store_2.jpg')}
              style={{
                width: (mobileW * 24.5) / 100,
                height: (mobileW * 24.5) / 100,
                resizeMode: 'contain',
                borderRadius: (mobileW * 30) / 100,
              }}></Image>
          </TouchableOpacity>
        </ImageBackground>

        {/* ---------------------- */}

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            marginTop: (mobileH * 2) / 100,
            alignSelf: 'flex-end',
            marginRight: (mobileW * 5) / 100,
          }}>
          <Image
            source={localimag.icon_share}
            style={{
              height: (mobileW * 7) / 100,
              width: (mobileW * 7) / 100,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>

        {/* ---------- */}

        <View style={styles.mainView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.modalTabColor,
                fontSize: (mobileW * 5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              Oasis Boutique
            </Text>

            <Image
              source={localimag.icon_storeVerified}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
                marginLeft: (mobileW * 2) / 100,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: (mobileH * 0.5) / 100,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Review')}
              style={{
                width: (mobileW * 28) / 100,
              }}>
              <StarRating
                containerStyle={{
                  width: (mobileW * 18) / 100,
                }}
                fullStar={localimag.icon_active_star}
                halfStar={localimag.icon_halfStar}
                emptyStar={localimag.icon_deactive_star}
                maxStars={5}
                starSize={(mobileW * 4.5) / 100}
                rating={5}
                starStyle={{
                  marginRight: (mobileW * 1) / 100,
                }}
                disabled={true}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: Colors.title_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
              }}>
              {`(5.0)`}
            </Text>

            <View
              style={{
                paddingHorizontal: (mobileW * 2) / 100,
                paddingVertical: (mobileH * 0.4) / 100,
                borderRadius: (mobileW * 1) / 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.faqBack,
                marginLeft: (mobileW * 3) / 100,
                flexDirection: 'row',
              }}>
              <Image
                source={localimag.icon_women_dress}
                style={{
                  width: (mobileW * 3.3) / 100,
                  height: (mobileW * 3.3) / 100,
                  resizeMode: 'contain',
                }}
              />

              <Text
                style={{
                  color: Colors.theme_color,
                  fontSize: (mobileW * 3) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 1) / 100,
                }}>
                {Lang_chg.women_txt[config.language]}
              </Text>
            </View>
          </View>

          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: (mobileW * 3.3) / 100,
              fontFamily: Font.FontMediumManrope,
              lineHeight: (mobileH * 2.5) / 100,
              marginTop: (mobileH * 1) / 100,
              textAlign: 'justify',
            }}>
            Lorem ipsum dolor sit amet consectetur. Sem praesent viverra iaculis
            leo pellentesque arcu. Et leo ridiculus viverra pretium et est
            scelerisque.
          </Text>

          <View
            style={{
              marginTop: (mobileH * 2) / 100,
            }}>
            {/*---- contact info -----*/}
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={localimag.icon_mobile}
                style={{
                  width: (mobileW * 4) / 100,
                  height: (mobileW * 4) / 100,
                  resizeMode: 'contain',
                }}
              />

              <Text
                style={{
                  color: Colors.darkGrey,
                  fontSize: (mobileW * 3.3) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 3) / 100,
                }}>
                +1 89064 67543
              </Text>
            </View>
            {/* -------- */}

            {/*---- location info -----*/}
            <View
              style={{
                flexDirection: 'row',
                marginTop: (mobileH * 1.5) / 100,
              }}>
              <Image
                source={localimag.icon_location}
                style={{
                  width: (mobileW * 4) / 100,
                  height: (mobileW * 4) / 100,
                  resizeMode: 'contain',
                }}
              />

              <Text
                style={{
                  color: Colors.darkGrey,
                  fontSize: (mobileW * 3.3) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 3) / 100,
                  lineHeight: (mobileH * 2.5) / 100,
                }}>
                Paristade, 164 Rue Ambroise Croizat, Saint-Denis
              </Text>
            </View>
            {/* -------- */}

            {/*---- time info -----*/}
            <View
              style={{
                flexDirection: 'row',
                marginTop: (mobileH * 1.5) / 100,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={localimag.icon_shop_1}
                  style={{
                    width: (mobileW * 4) / 100,
                    height: (mobileW * 4) / 100,
                    resizeMode: 'contain',
                  }}
                />

                <Text
                  style={{
                    color: Colors.darkGrey,
                    fontSize: (mobileW * 3.3) / 100,
                    fontFamily: Font.FontMediumManrope,
                    marginLeft: (mobileW * 3) / 100,
                    lineHeight: (mobileH * 2.5) / 100,
                  }}>
                  09:00AM To 09:00PM
                </Text>

                <Text
                  style={{
                    color: Colors.theme_color,
                    fontSize: (mobileW * 3.3) / 100,
                    fontFamily: Font.FontBoldManrope,
                    marginLeft: (mobileW * 3) / 100,
                  }}>
                  {Lang_chg.open_now_txt[config.language]}
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: (mobileW * 14) / 100,
                  height: (mobileH * 3) / 100,
                  borderRadius: (mobileW * 1) / 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.faqBack,
                  borderWidth: 0.5,
                  borderColor: Colors.theme_color,
                }}>
                <Text
                  style={{
                    color: Colors.theme_color,
                    fontSize: (mobileW * 2.8) / 100,
                    fontFamily: Font.FontMediumManrope,
                  }}>
                  {Lang_chg.see_all_txt[config.language]}
                </Text>
              </TouchableOpacity>
            </View>
            {/* -------- */}

            {/* socila media icons */}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: (mobileH * 1.5) / 100,
              }}>
              <TouchableOpacity activeOpacity={0.8} style={{}}>
                <Image
                  source={localimag.icon_snap_green}
                  style={{
                    width: (mobileW * 5.5) / 100,
                    height: (mobileW * 5.5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  marginLeft: (mobileW * 3) / 100,
                }}>
                <Image
                  source={localimag.icon_insta_green}
                  style={{
                    width: (mobileW * 5.5) / 100,
                    height: (mobileW * 5.5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  marginLeft: (mobileW * 3) / 100,
                }}>
                <Image
                  source={localimag.icon_facebook_green}
                  style={{
                    width: (mobileW * 5.5) / 100,
                    height: (mobileW * 5.5) / 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* ------------------------------ */}

          {/* follow, Call and chat button */}

          <View
            style={{
              marginTop: (mobileH * 4) / 100,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            {/* Follow */}
            <TouchableOpacity
              // onPress={() => navigation.navigate('')}
              activeOpacity={0.8}
              style={{
                width: (mobileW * 28) / 100,
                alignSelf: 'center',
                height: (mobileH * 6) / 100,
                borderRadius: (mobileW * 1.5) / 100,
                backgroundColor: Colors.whiteColor,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: Colors.theme_color,
              }}>
              <Image
                source={localimag.icon_follow}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>
              <Text
                style={{
                  color: Colors.theme_color,
                  fontSize: (mobileW * 4) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 2) / 100,
                }}>
                {Lang_chg.follow_txt[config.language]}
              </Text>
            </TouchableOpacity>

            {/* Call */}

            <TouchableOpacity
              // onPress={() => navigation.navigate('')}
              activeOpacity={0.8}
              style={{
                width: (mobileW * 28) / 100,
                alignSelf: 'center',
                height: (mobileH * 6) / 100,
                borderRadius: (mobileW * 1.5) / 100,
                backgroundColor: Colors.yellow_dark_color,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={localimag.icon_contact_us}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>
              <Text
                style={{
                  color: Colors.black_color,
                  fontSize: (mobileW * 4) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 1.5) / 100,
                }}>
                {Lang_chg.call_txt[config.language]}
              </Text>
            </TouchableOpacity>

            {/* chat */}
            <TouchableOpacity
              // onPress={() => navigation.navigate('')}
              activeOpacity={0.8}
              style={{
                width: (mobileW * 28) / 100,
                alignSelf: 'center',
                height: (mobileH * 6) / 100,
                borderRadius: (mobileW * 1.5) / 100,
                backgroundColor: Colors.theme_color,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={localimag.icon_chat}
                style={{
                  width: (mobileW * 5) / 100,
                  height: (mobileW * 5) / 100,
                  resizeMode: 'contain',
                }}></Image>
              <Text
                style={{
                  color: Colors.whiteColor,
                  fontSize: (mobileW * 4) / 100,
                  fontFamily: Font.FontMediumManrope,
                  marginLeft: (mobileW * 2) / 100,
                }}>
                {Lang_chg.chat_txt[config.language]}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Followers and Total ads */}

          <View
            style={{
              marginTop: (mobileH * 2.5) / 100,
              width: (mobileW * 90) / 100,
              borderTopWidth: (mobileW * 0.2) / 100,
              borderBottomWidth: (mobileW * 0.2) / 100,
              borderColor: Colors.borderGrey,
              alignSelf: 'center',
              justifyContent: 'center',
              height: (mobileH * 10.5) / 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: (mobileW * 45) / 100,
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 5.3) / 100,
                    fontFamily: Font.FontBoldManrope,
                  }}>
                  125
                </Text>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.5) / 100,
                    fontFamily: Font.FontMediumManrope,
                    // marginTop: (mobileH * 0.5) / 100,
                  }}>
                  {Lang_chg.followers_txt[config.language]}
                </Text>
              </View>
              <View
                style={{
                  width: (mobileW * 0.2) / 100,
                  height: (mobileH * 7) / 100,
                  backgroundColor: Colors.borderGrey,
                }}></View>
              <View
                style={{
                  width: (mobileW * 45) / 100,
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 5.3) / 100,
                    fontFamily: Font.FontBoldManrope,
                  }}>
                  100
                </Text>
                <Text
                  style={{
                    color: Colors.black_color,
                    fontSize: (mobileW * 3.5) / 100,
                    fontFamily: Font.FontMediumManrope,
                    // marginTop: (mobileH * 0.5) / 100,
                  }}>
                  {Lang_chg.total_ads_txt[config.language]}
                </Text>
              </View>
            </View>
          </View>

          {/* search container */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: (mobileH * 3) / 100,
            }}>
            <SearchContainer
              searchText={searchText}
              onChangeText={val => setSearchText(val)}
              placeholder={Lang_chg.serach_txt[config.language]}
              containerStyle={{
                width: (mobileW * 70) / 100,
              }}
              inputStyle={{
                width: (mobileW * 58) / 100,
              }}
            />

            <TouchableOpacity
              onPress={() => setFilterVisible(true)}
              activeOpacity={0.8}
              style={{
                marginLeft: (mobileW * 3) / 100,
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
          </View>

          {/*------------------  */}

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: (mobileH * 3) / 100,
            }}>
            {sort.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => setSortStatus(index)}
                  activeOpacity={0.8}
                  style={{
                    paddingHorizontal: (mobileW * 5) / 100,
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

          {/* -------------------------- */}

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
                        marginTop: (mobileH * 2.5) / 100,
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
      </KeyboardAwareScrollView>
    </View>
  );
};

export default React.memo(StoreDetails);

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
  mainView: {
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 3) / 100,
  },
});
