import React, { useContext, useEffect } from 'react';
import { Image, StyleSheet, SafeAreaView } from 'react-native';
import IncidentDescScreen from './src/screens/home/IncidentDescScreen';
import TheoryDescScreen from './src/screens/home/TheoryDescScreen';
import ImageSaveScreen from './src/screens/home/ImageSaveScreen';
import ImagePicker from './src/screens/home/ImagePicker';
import AudioScreen from './src/screens/home/AudioScreen';
import Error from './src/screens/error/Error';
import StackScreen from './src/screens/storage/StackScreen';
import InfoScreen from './src/screens/wechat/InfoScreen';
import HomeTab from './src/screens/tabScreens/HomeTab';
import StorageTab from './src/screens/tabScreens/StorageTab';
import WechatTab from './src/screens/tabScreens/WechatTab';
import CameraTab from './src/screens/tabScreens/CameraTab';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import { ContextProvider } from "./src/context/ContextProvider";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeTabRoutes = [
  {
    name: 'HomeTab',
    component: HomeTab,
    option: { title: 'Home' },
  },
  {
    name: 'StorageTab',
    component: StorageTab,
    option: { title: 'Storage' },
  },
  {
    name: 'CameraTab',
    component: CameraTab,
    option: { title: 'Camera' },
  },
  {
    name: 'WechatTab',
    component: WechatTab,
    option: { title: 'Wechat' },
  },
];
const StorageStackRoutes = [
  {
    name: 'StackScreen',
    component: StackScreen,
    option: { title: 'StackPages' },
  }
];
const HomeStackRoutes = [
  {
    name: 'TheoryDescScreen',
    component: TheoryDescScreen,
    option: { title: 'WebView网页' },
  },
  {
    name: 'IncidentDescScreen',
    component: IncidentDescScreen,
    option: { title: '视频集成' },
  },
  {
    name: 'AudioScreen',
    component: AudioScreen,
    option: { title: '音频集成' },
  },
  {
    name: 'ImagePicker',
    component: ImagePicker,
    option: { title: '访问相机集成' },
  },

  {
    name: 'ImageSaveScreen',
    component: ImageSaveScreen,
    option: { title: '图片保存' },
  }
];
const CameraStackRoutes = [];
const WechatStackRoutes = [
  {
    name: 'InfoScreen',
    component: InfoScreen,
    option: { title: 'InfoScreen' },
  }
];
const ErrorStackRoutes = [
  {
    name: 'Error',
    component: Error,
    option: { title: '错误页面' },
  }
];
const containStackRoutes = [
  ...HomeStackRoutes,
  ...StorageStackRoutes,
  ...WechatStackRoutes,
  ...CameraStackRoutes,
  ...ErrorStackRoutes
]

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: '#972F97', inactiveTintColor: 'gray' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name === 'HomeTab') {
            icon = focused ? (
              <Image
                source={require('./src/static/key1.png')}
                style={{ width: 29, height: 25 }}
              />
            ) : (
              <Image
                source={require('./src/static/key0.png')}
                style={{ width: 27.5, height: 25 }}
              />
            );
          } else if (route.name === 'StorageTab') {
            icon = focused ? (
              <Image
                source={require('./src/static/my1.png')}
                style={{ width: 31, height: 25 }}
              />
            ) : (
              <Image
                source={require('./src/static/my0.png')}
                style={{ width: 29, height: 25 }}
              />
            );
          } else if (route.name == 'CameraTab') {
            icon = focused ? (
              <Image
                source={require('./src/static/my1.png')}
                style={{ width: 31, height: 25 }}
              />
            ) : (
              <Image
                source={require('./src/static/my0.png')}
                style={{ width: 29, height: 25 }}
              />
            );
          } else if (route.name == 'WechatTab') {
            icon = focused ? (
              <Image
                source={require('./src/static/my1.png')}
                style={{ width: 31, height: 25 }}
              />
            ) : (
              <Image
                source={require('./src/static/my0.png')}
                style={{ width: 29, height: 25 }}
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
            options={{ title: item.option.title }}
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
      <ContextProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              {/* 将tab页装载在根节点Stack页面; */}
              <Stack.Screen
                name="Home"
                component={HomeTabs}
                options={{ header: () => null, title: '首页' }}
              />
              {containStackRoutes.map(item => {
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
      </ContextProvider>
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
