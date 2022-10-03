import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'; //引入
const Stack = createStackNavigator();
const ScreenB = ({navigation, route}) => {
  return (
    <View>
      <Text>tabB</Text>
      <Button
        title="热门内部Stack"
        onPress={() =>
          navigation.navigate('Screen_E', {name: '李华', id: '18'})
        }></Button>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ScreenB;
