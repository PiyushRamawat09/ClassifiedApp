import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  BackHandler,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {Switch} from 'react-native-paper';
import ButtonComponent from '../Componant/ButtonComponent';

const SettingsAndInformation = () => {
  const handleBackPress = useCallback(() => {
    navigate('Profile');
    return true;
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [handleBackPress]);

  const {navigate, goBack, replace} = useNavigation();
  const [notificationStatus, setNotificationStauts] = useState(true);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  //----for terms and condition
  const TermsCondition = () => {
    consolepro.consolelog('iam terms');
    navigate('TermsOfUse', {
      pagename: Lang_chg.terms_and_condition_txt[config.language],
      contentpage: 2,
      user_type: 1,
    });
  };

  //----for PrivacyPolicy
  const PrivacyPolicy = () => {
    consolepro.consolelog('iam privacy');
    navigate('TermsOfUse', {
      pagename: Lang_chg.privacy_policy_txt[config.language],
      contentpage: 1,
      user_type: 1,
    });
  };

  //----for AboutUs
  const AboutUs = () => {
    consolepro.consolelog('iam aboutus');
    navigate('TermsOfUse', {
      pagename: Lang_chg.about_us_txt[config.language],
      contentpage: 0,
      user_type: 1,
    });
  };

  //----for legal notices
  const LegalNotices = () => {
    consolepro.consolelog('legal notices');
    navigate('TermsOfUse', {
      pagename: Lang_chg.legal_notice_txt[config.language],
      contentpage: 0,
      user_type: 1,
    });
  };

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
          onPress={() => navigate('Profile')}>
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
          {Lang_chg.settings_and_inforamtion_txt[config.language]}
        </Text>

        <View
          style={{
            width: (mobileW * 5) / 100,
          }}></View>
      </View>
      {/* ----------------------------- */}

      {/* Logout modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmLogout}
        onRequestClose={() => {
          consolepro.consolelog('backkac');
          setConfirmLogout(false);
        }}>
        <TouchableOpacity
          onPress={() => setConfirmLogout(false)}
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
              height: (mobileW * 50) / 100,
              borderRadius: (mobileW * 3) / 100,
              backgroundColor: Colors.whiteColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBold,
              }}>
              {Lang_chg.Log_out_txt[config.language]}
            </Text>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontRegular,
                marginTop: (mobileH * 1) / 100,
              }}>
              {Lang_chg.are_you_sure_you_want_to_logout[config.language]}
            </Text>

            <View
              style={{
                marginTop: (mobileH * 3) / 100,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ButtonComponent
                onPress={() => setConfirmLogout(false)}
                title={Lang_chg.back_txt[config.language]}
                btnStyle={{
                  width: (mobileW * 30) / 100,
                  borderRadius: (mobileW * 1) / 100,
                  height: (mobileH * 6) / 100,
                }}
                txtStyle={{
                  color: Colors.blockBorderColor,
                }}
                active={false}
              />

              <ButtonComponent
                onPress={() => {
                  setConfirmLogout(false);
                  navigate('Login');
                }}
                title={Lang_chg.yes_txt[config.language]}
                btnStyle={{
                  width: (mobileW * 30) / 100,
                  borderRadius: (mobileW * 1) / 100,
                  height: (mobileH * 6) / 100,
                  marginLeft: (mobileW * 3) / 100,
                }}
                active={true}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* ----------------------------- */}

      {/* delete Modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmDelete}
        onRequestClose={() => {
          consolepro.consolelog('backkac');
          setConfirmDelete(false);
        }}>
        <TouchableOpacity
          onPress={() => setConfirmDelete(false)}
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
              height: (mobileW * 50) / 100,
              borderRadius: (mobileW * 3) / 100,
              backgroundColor: Colors.whiteColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 4) / 100,
                fontFamily: Font.FontBold,
              }}>
              {Lang_chg.delete_account_txt[config.language]}
            </Text>
            <Text
              style={{
                color: Colors.black_color,
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontRegular,
                marginTop: (mobileH * 1) / 100,
              }}>
              {Lang_chg.are_you_sure_you_want_to_delete[config.language]}
            </Text>

            <View
              style={{
                marginTop: (mobileH * 3) / 100,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ButtonComponent
                onPress={() => setConfirmDelete(false)}
                title={Lang_chg.back_txt[config.language]}
                btnStyle={{
                  width: (mobileW * 30) / 100,
                  borderRadius: (mobileW * 1) / 100,
                  height: (mobileH * 6) / 100,
                }}
                txtStyle={{
                  color: Colors.blockBorderColor,
                }}
                active={false}
              />

              <ButtonComponent
                onPress={() => {
                  setConfirmDelete(false);
                  navigate('DeleteAccount');
                }}
                active={true}
                title={Lang_chg.yes_txt[config.language]}
                btnStyle={{
                  width: (mobileW * 30) / 100,
                  borderRadius: (mobileW * 1) / 100,
                  height: (mobileH * 6) / 100,
                  marginLeft: (mobileW * 3) / 100,
                  backgroundColor: Colors.deleteColor,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={styles.mainView}>
        {/*---------------- Notification preference ------------- */}

        <TouchableOpacity
          onPress={() => {
            navigate('NotificationPreferences');
          }}
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: (mobileH * 3) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={localimag.icon_bell}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.8) / 100,
                fontFamily: Font.FontRegularManrope,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.notification_preference_txt[config.language]}
            </Text>
          </View>

          <Image
            source={localimag.icon_profile_next}
            style={{
              width: (mobileW * 5) / 100,
              height: (mobileW * 5) / 100,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>
        {/* ------------------------------- */}

        {/*----------------Terms and Conditions------------- */}

        <TouchableOpacity
          onPress={() => TermsCondition()}
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: (mobileH * 4) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={localimag.icon_terms_Conditions}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.8) / 100,
                fontFamily: Font.FontRegularManrope,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.terms_and_condition_txt[config.language]}
            </Text>
          </View>

          <Image
            source={localimag.icon_profile_next}
            style={{
              width: (mobileW * 5) / 100,
              height: (mobileW * 5) / 100,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>

        {/* ------------------------------- */}

        {/*----------------Legal Notice ------------- */}

        <TouchableOpacity
          onPress={() => LegalNotices()}
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: (mobileH * 4) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={localimag.icon_legal_notice}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.8) / 100,
                fontFamily: Font.FontRegularManrope,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.legal_notice_txt[config.language]}
            </Text>
          </View>

          <Image
            source={localimag.icon_profile_next}
            style={{
              width: (mobileW * 5) / 100,
              height: (mobileW * 5) / 100,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>

        {/* ------------------------------- */}

        {/*----------------  privacy policy ------------- */}

        <TouchableOpacity
          onPress={() => PrivacyPolicy()}
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: (mobileH * 4) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={localimag.icon_privacy_policy}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.8) / 100,
                fontFamily: Font.FontRegularManrope,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.privacy_policy_txt[config.language]}
            </Text>
          </View>

          <Image
            source={localimag.icon_profile_next}
            style={{
              width: (mobileW * 5) / 100,
              height: (mobileW * 5) / 100,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>

        {/* ------------------------------- */}

        {/*---------------- About US ------------- */}

        <TouchableOpacity
          onPress={() => AboutUs()}
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: (mobileH * 4) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={localimag.icon_about_us}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.8) / 100,
                fontFamily: Font.FontRegularManrope,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.about_us_txt[config.language]}
            </Text>
          </View>

          <Image
            source={localimag.icon_profile_next}
            style={{
              width: (mobileW * 5) / 100,
              height: (mobileW * 5) / 100,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>

        {/* ------------------------------- */}

        {/*---------------- Change Password ------------- */}

        <TouchableOpacity
          onPress={() =>
            replace('ChangePassword', {
              status: 2,
            })
          }
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: (mobileH * 4) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={localimag.icon_change_password}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.8) / 100,
                fontFamily: Font.FontRegularManrope,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.changepassword_txt[config.language]}
            </Text>
          </View>

          <Image
            source={localimag.icon_profile_next}
            style={{
              width: (mobileW * 5) / 100,
              height: (mobileW * 5) / 100,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>

        {/* ------------------------------- */}

        {/*---------------- delete account ------------- */}

        <TouchableOpacity
          onPress={() => setConfirmDelete(true)}
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: (mobileH * 4) / 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={localimag.brokenheart}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
              }}></Image>

            <Text
              style={{
                color: Colors.profileColor,
                fontSize: (mobileW * 3.8) / 100,
                fontFamily: Font.FontRegularManrope,
                marginLeft: (mobileW * 4) / 100,
              }}>
              {Lang_chg.delete_account_txt[config.language]}
            </Text>
          </View>

          <Image
            source={localimag.icon_profile_next}
            style={{
              width: (mobileW * 5) / 100,
              height: (mobileW * 5) / 100,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>

        {/* ------------------------------- */}

        {/* Logout button */}

        <View
          style={{
            position: 'absolute',
            bottom: (mobileH * 5) / 100,
          }}>
          <TouchableOpacity
            onPress={() => setConfirmLogout(true)}
            activeOpacity={0.8}
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              height: (mobileH * 7) / 100,
              borderRadius: (mobileW * 2) / 100,
              backgroundColor: Colors.logoutColor,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: (mobileH * 1) / 100,
              justifyContent: 'center',
            }}>
            <Image
              source={localimag.icon_logout}
              style={{
                width: (mobileW * 5) / 100,
                height: (mobileW * 5) / 100,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}></Image>
            <Text
              style={{
                color: Colors.whiteColor,
                alignSelf: 'center',
                fontSize: (mobileW * 4.5) / 100,
                fontFamily: Font.FontMediumManrope,
                marginLeft: (mobileW * 2) / 100,
              }}>
              {Lang_chg.Logout_txt[config.language]}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingsAndInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainView: {
    flex: 1,
    width: (mobileW * 90) / 100,
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor,
    marginTop: (mobileH * 3) / 100,
    paddingHorizontal: (mobileW * 1) / 100,
  },
});
