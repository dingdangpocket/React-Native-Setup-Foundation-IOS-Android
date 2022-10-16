import React, { useContext, useEffect } from 'react';
import { Image, StyleSheet, SafeAreaView } from 'react-native';
import IncidentDescScreen from './src/screens/home/IncidentDescScreen';
import TheoryDescScreen from './src/screens/home/TheoryDescScreen';
import ImageSaveScreen from './src/screens/home/ImageSaveScreen';
import ImagePicker from './src/screens/home/ImagePicker';
import AudioScreen from './src/screens/home/AudioScreen';
import Login from './src/screens/login/Login';
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
import { HomeIconUnactive } from "./src/icons"

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
const xml = `<svg t="1665923108067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3945" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M1014.857143 495.873829l-48.036571-27.7504c-9.678629-102.142171-53.535086-201.607314-131.5712-279.643429-75.999086-76.035657-174.142171-121.929143-279.857371-131.821714L527.786057 8.837486c-6.500571-11.285943-25.142857-11.285943-31.643429 0l-27.607771 47.8208c-105.678629 9.892571-203.7504 55.749486-279.8208 131.7504-77.999543 78.070857-121.857829 177.570743-131.499886 279.714743L9.142857 495.873829c-5.642971 3.249371-9.142857 9.285486-9.142857 15.8208 0 6.537143 3.465143 12.571429 9.142857 15.822629l48.071314 27.785143c9.713371 102.142171 53.571657 201.642057 131.5712 279.678171 75.999086 75.927771 174.070857 121.786514 279.714743 131.713829l27.679086 47.857371c3.249371 5.677714 9.285486 9.142857 15.8208 9.142857s12.571429-3.499886 15.8208-9.142857l27.642514-47.857371c105.678629-9.929143 203.785143-55.749486 279.786057-131.713829 78.036114-78.070857 121.892571-177.570743 131.5712-279.714743L1014.857143 527.517257c5.677714-3.249371 9.142857-9.285486 9.142857-15.822629C1024 505.159314 1020.500114 499.1232 1014.857143 495.873829zM783.535543 783.268571c-72.4992 72.464457-168.928914 112.393143-271.5008 112.393143-102.606629 0-199.036343-39.928686-271.535543-112.393143-149.677714-149.750857-149.714286-393.393371-0.071314-543.144229C312.965486 167.623314 409.428114 127.694629 512 127.694629s198.999771 39.963429 271.535543 112.4992C933.249829 389.873371 933.249829 633.482971 783.535543 783.268571z" p-id="3946" fill="#2c2c2c"></path><path d="M768.285257 246.480457c-1.214171 0-2.428343 0.250514-3.536457 0.749714l0.107886-0.107886L442.3936 440.5888l-195.035429 325.035886c-0.821029 3.000686-0.393143 6.392686 2.0352 8.714971 1.678629 1.642057 3.856457 2.428343 6.036114 2.428343 0.786286 0 1.536-0.107886 2.285714-0.285257l325.429029-195.214629 193.536-322.5728c1.214171-3.143314 0.4992-6.965029-2.0352-9.570743C772.893257 247.374629 770.570971 246.480457 768.285257 246.480457zM469.035886 467.267657l0.036571-0.036571 87.392914 87.392914-218.499657 131.072L469.035886 467.267657z" p-id="3947" fill="#2c2c2c"></path></svg>`

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: '#972F97', inactiveTintColor: 'gray' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name === 'HomeTab') {
            icon = focused ? (
              <HomeIconUnactive />
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

const linking = {
  prefixes: ['foundation://'],
  config: {
    initialRouteName: 'HomeTabs',
    screens: {
      InfoScreen: {
        path: 'InfoScreen/:id'
      }
    }
  }
};
const App = () => {
  return (
    <Provider store={Store}>
      <ContextProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer
            linking={linking}>
            <Stack.Navigator>
              {/* 将tab页装载在根节点Stack页面; */}
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ header: () => null, title: '登陆' }}
              />
              <Stack.Screen
                name="HomeTabs"
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
    </Provider >
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