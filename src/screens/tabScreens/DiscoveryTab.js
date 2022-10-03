import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const DiscoveryTab = ({navigation, route}) => {
  const [userInfo] = useState({
    user: 'Dingdang',
    token: 'TYWU8728787392HU787266UYW77622',
  });
  const saveData = async () => {
    await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
  };
  const getData = () => {
    AsyncStorage.getItem('userInfo').then(value => {
      if (value) console.log(value);
    });
  };
  return (
    <View>
      <Button
        title="探索内部Stack"
        onPress={() =>
          navigation.navigate('Screen_E', {name: '李华', id: '18'})
        }></Button>
      <Button title="保存数据AsyncStorage" onPress={() => saveData()}></Button>
      <Button title="获取数据AsyncStorage" onPress={() => getData()}></Button>
    </View>
  );
};
const styles = StyleSheet.create({});
export default DiscoveryTab;
