import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
const DiscoveryTab = ({navigation, route}) => {
  return (
    <View>
      <Button
        title="探索内部Stack"
        onPress={() =>
          navigation.navigate('Screen_E', {name: '李华', id: '18'})
        }></Button>
    </View>
  );
};
const styles = StyleSheet.create({});
export default DiscoveryTab;
