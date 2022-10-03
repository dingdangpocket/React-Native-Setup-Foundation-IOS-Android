import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const MineTab = ({navigation, route}) => {
  return (
    <View>
      <Button
        title="我的内部Stack"
        onPress={() =>
          navigation.navigate('Screen_E', {name: '李华', id: '18'})
        }></Button>
    </View>
  );
};
const styles = StyleSheet.create({});
export default MineTab;
