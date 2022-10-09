import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const DiscoveryTab = ({ navigation, route }) => {
  const [userInfo] = useState({
    user: 'Dingdang',
    token: 'TYWU8728787392HU787266UYW77622',
  });
  const saveData = async () => {
    await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
  };
  const getData = () => {
    AsyncStorage.getItem('userInfo').then(value => {
      if (value)
        Alert.alert('AsyncStorage', value, [
          {
            text: '关闭',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ]);
      console.log(value);
    });
  };
  return (
    <View>
      <Button
        title="探索内部Stack"
        onPress={() => navigation.navigate('StackScreen')}></Button>
      <Button title="保存数据AsyncStorage" onPress={() => saveData()}></Button>
      <Button title="获取数据AsyncStorage" onPress={() => getData()}></Button>
      <Image style={{ width: 100, height: 100 }} source={{ uri: "https://img0.baidu.com/it/u=4254314593,3842655474&fm=253&fmt=auto&app=120&f=JPEG?w=828&h=455" }}></Image>
    </View>
  );
};
const styles = StyleSheet.create({});
export default DiscoveryTab;
