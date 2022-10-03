import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
const EventTab = ({navigation, route}) => {
  return (
    <View>
      <Button
        title="活动内部Stack"
        onPress={() =>
          navigation.navigate('MineTab', {name: '李华', id: '18'})
        }></Button>
    </View>
  );
};
const styles = StyleSheet.create({});
export default EventTab;
