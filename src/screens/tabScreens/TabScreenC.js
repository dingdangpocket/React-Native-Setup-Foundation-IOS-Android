import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'; //引入
import {WebView} from 'react-native-webview';
const Stack = createStackNavigator();
const ScreenC = ({navigation, route}) => {
  return (
    <View>
      <Text>tabC</Text>
      <Button
        title="我的内部Stack"
        onPress={() =>
          navigation.navigate('Screen_E', {name: '李华', id: '18'})
        }></Button>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ScreenC;
