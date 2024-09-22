import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../Provider/utilslib/Utils';

const AppstatusBar = () => {
  return (
    <View>
      <SafeAreaView style={{ flex: 0 }} />
      <StatusBar
        hidden={false}
        translucent={false}
        barStyle="dark-content"
        networkActivityIndicatorVisible={true}
        backgroundColor={Colors.whiteColor}
      />
    </View>
  );
};

export default AppstatusBar;

const styles = StyleSheet.create({});
