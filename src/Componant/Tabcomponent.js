import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors, Font, mobileH, mobileW} from '../Provider/utilslib/Utils';

const Tabcomponent = ({tabData, onPress, containerStyle}) => {
  return (
    <FlatList
      data={tabData}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `${index}`}
      contentContainerStyle={[{marginTop: (mobileH * 1) / 100}, containerStyle]}
      renderItem={({item, index}) => (
        <View
          style={{
            borderBottomWidth: (mobileW * 0.3) / 100,
            borderBottomColor: Colors.searchBorderColor,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPress(index)}
            style={{
              borderBottomWidth: item.status ? (mobileW * 0.5) / 100 : null,
              borderBottomColor: item.status ? Colors.theme_color : null,
              height: (mobileH * 5) / 100,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: (mobileW * 3) / 100,
            }}>
            <Text
              style={{
                fontSize: (mobileW * 3.5) / 100,
                fontFamily: Font.FontBoldManrope,
                color: item.status ? Colors.theme_color : Colors.tabTextColor,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default Tabcomponent;

const styles = StyleSheet.create({});
