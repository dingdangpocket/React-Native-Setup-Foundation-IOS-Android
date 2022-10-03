import React from 'react';
import {
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import TabScreenA from './src/screens/tabScreens/TabScreenA'; //引入
import TabScreenB from './src/screens/tabScreens/TabScreenB'; //引入
import TabScreenC from './src/screens/tabScreens/TabScreenC'; //引入
import IncidentDescScreen from './src/screens/home/IncidentDescScreen'; //引入
import TheoryDescScreen from './src/screens/home/TheoryDescScreen'; //引入
import {createStackNavigator} from '@react-navigation/stack'; //引入
import {NavigationContainer} from '@react-navigation/native'; //引入
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{activeTintColor: '#972F97', inactiveTintColor: 'gray'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let icon;
          if (route.name === '首页') {
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
          } else if (route.name === '我的') {
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
          } else if (route.name == '热门') {
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
      <Tab.Screen name="首页" component={TabScreenA} />
      <Tab.Screen name="热门" component={TabScreenB} />
      <Tab.Screen name="我的" component={TabScreenC} />
    </Tab.Navigator>
  );
};

const HomeRoutes = [
  {
    name: 'TheoryDescScreen',
    component: TheoryDescScreen,
    option: {title: '首页理论页面'},
  },
  {
    name: 'IncidentDescScreen',
    component: IncidentDescScreen,
    option: {title: '首页实践页面'},
  },
];

import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* 将tab页装载在Stack页面中; */}
            <Stack.Screen
              name="Home"
              component={HomeTabs}
              options={{header: () => null, title: '首页'}}
            />
            {HomeRoutes.map(item => {
              return (
                <Stack.Screen
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
      </Provider>
    </SafeAreaView>
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
