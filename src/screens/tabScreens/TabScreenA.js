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

const TabScreenA = ({navigation}) => {
  const [current, setCurrent] = useState(0);
  const [optionList] = useState([
    {id: 0, content: '关注'},
    {id: 1, content: '精选'},
    {id: 2, content: '热门'},
    {id: 3, content: '示例'},
    {id: 4, content: '理论'},
    {id: 5, content: '问题'},
  ]);
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
              onPress={() => navigation.navigate('TheoryDescScreen')}>
              <Text style={styles.optionBox}>理论</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('IncidentDescScreen')}>
              <Text style={styles.optionBox}>实践</Text>
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
export default TabScreenA;
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
  optionBox: {
    height: 60,
    width: 95,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginStart: 2,
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
