import React, {useEffect} from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
import {Colors, mobileW, localimag} from '../Provider/utilslib/Utils';

import {useNavigation} from '@react-navigation/native';

export default function Splash(props) {
  const {navigate} = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate('SelectLanguage');
    }, 4000);
  });

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        translucent={false}
        barStyle="dark-content"
        networkActivityIndicatorVisible={true}
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image style={styles.logo} source={localimag.splashGif}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.whiteColor,
  },
  logo: {
    resizeMode: 'contain',
    width: (mobileW * 80) / 100,
  },
});
