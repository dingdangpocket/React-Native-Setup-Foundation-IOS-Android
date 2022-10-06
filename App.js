import React from 'react';
import {Image, StyleSheet, SafeAreaView} from 'react-native';
import IncidentDescScreen from './src/screens/home/IncidentDescScreen';
import TheoryDescScreen from './src/screens/home/TheoryDescScreen';
import ImagePicker from './src/screens/home/ImagePicker';
import AudioScreen from './src/screens/home/AudioScreen';
import StackScreen from './src/screens/home/StackScreen';
import HomeTab from './src/screens/tabScreens/HomeTab';
import DiscoveryTab from './src/screens/tabScreens/DiscoveryTab';
import MineTab from './src/screens/tabScreens/MineTab';
import EventTab from './src/screens/tabScreens/EventTab';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//核心库;
const HomeTabRoutes = [
  {
    name: 'HomeTab',
    component: HomeTab,
    option: {title: '首页'},
  },
  {
    name: 'DiscoveryTab',
    component: DiscoveryTab,
    option: {title: '探索'},
  },
  {
    name: 'EventTab',
    component: EventTab,
    option: {title: '活动'},
  },
  {
    name: 'MineTab',
    component: MineTab,
    option: {title: '我的'},
  },
];

const HomeStackRoutes = [
  {
    name: 'TheoryDescScreen',
    component: TheoryDescScreen,
    option: {title: 'WebView网页'},
  },
  {
    name: 'IncidentDescScreen',
    component: IncidentDescScreen,
    option: {title: '视频集成'},
  },
  {
    name: 'AudioScreen',
    component: AudioScreen,
    option: {title: '音频集成'},
  },
  {
    name: 'ImagePicker',
    component: ImagePicker,
    option: {title: '访问相机集成'},
  },
  {
    name: 'StackScreen',
    component: StackScreen,
    option: {title: 'StackPages'},
  },
];

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{activeTintColor: '#972F97', inactiveTintColor: 'gray'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;
          if (route.name === 'HomeTab') {
            icon = focused ? (
              <Image
                source={require('./src/static/key1.png')}
                style={{width: 29, height: 25}}
              />
            ) : (
              <Image
                source={require('./src/static/key0.png')}
                style={{width: 27.5, height: 25}}
              />
            );
          } else if (route.name === 'DiscoveryTab') {
            icon = focused ? (
              <Image
                source={require('./src/static/my1.png')}
                style={{width: 31, height: 25}}
              />
            ) : (
              <Image
                source={require('./src/static/my0.png')}
                style={{width: 29, height: 25}}
              />
            );
          } else if (route.name == 'EventTab') {
            icon = focused ? (
              <Image
                source={require('./src/static/my1.png')}
                style={{width: 31, height: 25}}
              />
            ) : (
              <Image
                source={require('./src/static/my0.png')}
                style={{width: 29, height: 25}}
              />
            );
          } else if (route.name == 'MineTab') {
            icon = focused ? (
              <Image
                source={require('./src/static/my1.png')}
                style={{width: 31, height: 25}}
              />
            ) : (
              <Image
                source={require('./src/static/my0.png')}
                style={{width: 29, height: 25}}
              />
            );
          }
          return icon;
        },
      })}>
      {HomeTabRoutes.map(item => {
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
            options={{title: item.option.title}}
            component={item.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* 将tab页装载在Stack页面中; */}
            <Stack.Screen
              name="Home"
              component={HomeTabs}
              options={{header: () => null, title: '首页'}}
            />
            {HomeStackRoutes.map(item => {
              return (
                <Stack.Screen
                  key={item.name}
                  name={item.name}
                  options={{
                    title: item.option.title,
                  }}
                  component={item.component}
                />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};
const styles = StyleSheet.create({
  add: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
  },
});
export default App;
