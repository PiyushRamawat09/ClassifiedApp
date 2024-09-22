import {StyleSheet, Text, View, Image, BackHandler} from 'react-native';
import React, {useCallback} from 'react';
import {
  Colors,
  config,
  Font,
  Lang_chg,
  localimag,
  mobileH,
  mobileW,
} from '../Provider/utilslib/Utils';
import AppstatusBar from '../Componant/AppstatusBar';
import ButtonComponent from '../Componant/ButtonComponent';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Congratulations = () => {
  const navigation = useNavigation();

  const handleBackPress = useCallback(() => {
    navigation.replace('Home');
    return true;
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }, [handleBackPress]),
  );

  return (
    <View style={styles.container}>
      <AppstatusBar />
      <Image
        source={localimag.ordeacceptedGif}
        style={{
          width: mobileW,
          height: (mobileH * 45) / 100,
          resizeMode: 'contain',
          marginTop: (mobileH * 5) / 100,
        }}
      />

      <View
        style={{
          width: (mobileW * 70) / 100,
          alignSelf: 'center',
          marginTop: (mobileH * 2) / 100,
        }}>
        <Text
          style={{
            color: Colors.black_color,
            fontSize: (mobileW * 7) / 100,
            fontFamily: Font.FontBoldLexend,
            textAlign: 'center',
          }}>
          {Lang_chg.congratulations_your_listing_txt[config.language]}
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: (mobileH * 5) / 100,
          alignSelf: 'center',
        }}>
        <ButtonComponent
          title={Lang_chg.view_listing_txt[config.language]}
          onPress={() => navigation.navigate('MyListing')}
          active={true}
        />

        <ButtonComponent
          title={Lang_chg.back_to_home_txt[config.language]}
          onPress={() => navigation.replace('Home')}
          btnStyle={{
            marginTop: (mobileH * 3) / 100,
            borderColor: Colors.modalTabColor,
          }}
          active={false}
        />
      </View>
    </View>
  );
};

export default Congratulations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
});
