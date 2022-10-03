import React from 'react';
import {View, StyleSheet,Dimensions,Text} from 'react-native';
import {WebView} from 'react-native-webview';
let MainHeight = Dimensions.get('window').height;
let MainWidth = Dimensions.get('window').width;
const ExampleDescScreen = () => {
  return (
   
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <WebView
          androidHardwareAccelerationDisabled
          source={{uri:'https://www.baidu.com/'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
          style={{
            width:MainWidth,
            height:MainHeight,
          }}
        />
      </View>
  );
};
const styles = StyleSheet.create({});
export default ExampleDescScreen;
