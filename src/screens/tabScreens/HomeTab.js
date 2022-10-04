import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const HomeTab = ({navigation}) => {
  const [current, setCurrent] = useState(0);
  const [optionList] = useState([
    {id: 0, content: '关注'},
    {id: 1, content: '精选'},
    {id: 2, content: '热门'},
    {id: 3, content: '示例'},
    {id: 4, content: '理论'},
    {id: 5, content: '问题'},
  ]);
  //位置;
  const requestLocationPermission = async () => {
    Geolocation.getCurrentPosition(
      info => console.log("hello",info),
      error => {
        console.log(error);
      },
      {
        timeout: 2000,
      },
    );
  };
  return (
    <View>
      <ScrollView horizontal={false}>
        <View style={styles.optionArea}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.optionAreaLeft}>
            {optionList.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.8}
                  onPress={() => setCurrent(item.id)}>
                  <View
                    style={
                      item.id == current
                        ? styles.optionBox
                        : styles.optionBoxUnActived
                    }>
                    <Text
                      style={
                        item.id == current
                          ? styles.textDefault
                          : styles.textUnActived
                      }>
                      {item.content}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <View style={styles.optionAreaRight}>
            <Image
              source={require('../../static/search.png')}
              style={{width: 25, height: 25}}
            />
          </View>
        </View>
        {current == 0 ? (
          <View style={styles.focusListContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.btn}
              onPress={() => navigation.navigate('TheoryDescScreen')}>
              <Text style={{color: 'white'}}>React-native</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.btn}
              onPress={() => navigation.navigate('IncidentDescScreen')}>
              <Text style={{color: 'white'}}>实践</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.btn}
              onPress={() => requestLocationPermission()}>
              <Text style={{color: 'white'}}>位置</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        {current == 1 ? <Text>精选</Text> : null}
        {current == 2 ? <Text>热门</Text> : null}
        {current == 3 ? <Text>示例</Text> : null}
        {current == 4 ? <Text>理论</Text> : null}
        {current == 5 ? <Text>问题</Text> : null}
      </ScrollView>
    </View>
  );
};
export default HomeTab;
let MainWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  codeBlock: {
    backgroundColor: 'gray',
    borderBottomWidth: 1,
    borderColor: 'red',
    fontSize: 13,
    color: 'white',
    paddingRight: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    width: MainWidth * 0.8,
    borderWidth: 2,
    height: 40,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: MainWidth * 0.1,
    marginRight: MainWidth * 0.1,
  },
  TabViewItem: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  optionArea: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  optionAreaLeft: {
    backgroundColor: 'white',
    height: 60,
    width: MainWidth * 0.75,
  },
  optionAreaRight: {
    backgroundColor: 'white',
    height: 60,
    width: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 60,
    width: 85,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#972F97',
    backgroundColor: 'rgba(151,47,151, 0.7)',
  },
  optionBox: {
    height: 60,
    width: 95,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#972F97',
    backgroundColor: 'rgba(151,47,151, 0.7)',
  },
  optionBoxUnActived: {
    height: 60,
    width: 95,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDefault: {
    color: 'white',
    fontSize: 15,
  },
  textUnActived: {
    color: 'gray',
  },
  focusListContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
