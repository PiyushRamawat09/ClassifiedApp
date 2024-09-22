import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors, mobileH, mobileW} from '../Provider/utilslib/Utils';

const ProgressBarComponent = ({progressValue}) => {
  const normalizedWidth = ((mobileW * 48) / 100) * (progressValue / 100);

  return (
    <View style={styles.container}>
      {/* Unfilled bar */}
      <View style={styles.unfilledBar}>
        {/* Filled bar */}
        <View style={[styles.filledBar, {width: normalizedWidth}]} />
      </View>
    </View>
  );
};

export default ProgressBarComponent;

const styles = StyleSheet.create({
  container: {
    width: (mobileW * 48) / 100,
    borderRadius: (mobileW * 30) / 100,
  },
  unfilledBar: {
    backgroundColor: Colors.unfilledColor,
    height: (mobileH * 1.5) / 100,
    borderRadius: (mobileW * 30) / 100,
  },
  filledBar: {
    backgroundColor: Colors.yellow_dark_color,
    height: (mobileH * 1.5) / 100,
    borderRadius: (mobileW * 30) / 100,
  },
});
