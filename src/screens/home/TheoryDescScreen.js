import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';

const TheoryDescScreen = () => {
  const injectedJs = `window.alert("参数来自Native:id?10")`;
  return (
    <View style={{flex:1}}>
      <WebView
        style={{flex:1}}
        source={{uri: 'https://www.baidu.com'}}
        injectedJavaScriptBeforeContentLoaded={injectedJs}
        javaScriptEnabledAndroid={true}
        javaScriptEnabled={true}
        onMessage={event => {
          alert('接收数据' + event.nativeEvent.data);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TheoryDescScreen;
