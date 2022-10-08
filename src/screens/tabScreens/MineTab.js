import React, { Fragment, Component, useEffect, useState } from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
  Text,
  Alert,
  Linking
} from 'react-native';
import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import * as WeChat from 'react-native-wechat-lib';

const MineTab = () => {
  const [appid, setAppId] = useState("wx9013ae9aee782bfc");
  const [secretID, setSecretID] = useState("7a9ebc6f2902f964xxxxxxxxx");
  const [apiVersion, setApiVersion] = useState(null);
  const [isWXAppInstalled, setIsWXAppInstalled] = useState(true);
  const [wxAppInstallUrl, setWxAppInstallUrl] = useState(null);
  const [isWXAppSupportApi, setIsWXAppSupportApi] = useState(false);
  useEffect(() => {
    // WeChat.registerApp('appid', 'universalLink');
    //appid和secretID/在微信开发平台申请(https://open.weixin.qq.com/)universalLink就是填写的申请资料;
    WeChat.registerApp("wx9013ae9aee782bfc", "https://dev.workbench.zhichetech.com/wechat/").then((res) => {
      console.log('weixin open sdk successfully integrated', res);
    })
      .catch(err => {
        console.log('weixin open sdk integration failed: ', err);
      });
    const initData = async () => {
      const apiVersion = await WeChat.getApiVersion()
      const wxAppInstallUrl = Platform.OS === 'ios' ? await WeChat.getWXAppInstallUrl() : null;
      const isWXAppSupportApi = await WeChat.isWXAppSupportApi()
      const isWXAppInstalled = await WeChat.isWXAppInstalled()
      console.log("apiVersion", apiVersion, "wxAppInstallUrl", wxAppInstallUrl, "isWXAppSupportApi", isWXAppSupportApi, "isWXAppInstalled", isWXAppInstalled);
      setApiVersion(apiVersion);
      setWxAppInstallUrl(wxAppInstallUrl)
      setIsWXAppSupportApi(isWXAppSupportApi)
      setIsWXAppInstalled(isWXAppInstalled)
    }
    initData()
  }, [])
  const shareOptions = {
    title: 'playground',
    description: '微信分享测试',
    thumbImage: 'https://i.loli.net/2019/09/03/62FauzAY37gsEXV.png',
    type: 'news',
    webpageUrl: 'https://github.com/little-snow-fox/react-native-wechat-lib',
  };
  const onOpenWechat = () => {
    if (isWXAppInstalled) {
      WeChat.openWXApp();
      return WeChat.openWXApp();
    } else {
      Alert.alert('没有安装微信，请安装之后重试');
    }
  }
  const onWechatShareToFriend = () => {
    if (isWXAppInstalled) {
      WeChat.shareToSession(shareOptions).catch(error => {
        Alert.alert(error.message);
      });
    } else {
      Alert.alert('没有安装微信，请安装之后重试');
    }
  }
  const onWechatShareToMoment = () => {
    if (isWXAppInstalled) {
      WeChat.shareToTimeline(shareOptions).catch(error => {
        Alert.alert(error.message);
      });
    } else {
      Alert.alert('没有安装微信，请安装之后重试');
    }
  }
  const installWechat = () => {
    var getWeChatUrl = 'itms-apps://itunes.apple.com/cn/app/%E5%BE%AE%E4%BF%A1/id414478124?mt=8';
    Linking.canOpenURL(getWeChatUrl)
      .then((supported) => {
        if (!supported) {
          console.log('Can\'t handle url: ' + url);
          Alert.alert(
            '提示',
            'Can\'t handle url: ' + url,
            [
              { text: 'OK', onPress: () => { } }
            ]
          );
        } else {
          return Linking.openURL(getWeChatUrl);
        }
      })
      .catch((err) => {
        console.log('An error occurred', err);
        Alert.alert(
          '提示',
          'An error occurred: ' + err,
          [
            { text: 'OK', onPress: () => { } }
          ]
        );
      });
  }
  //Step1:AccessToken 
  const getAccessToken = (responseCode) => {
    // ToastUtil.showShort(responseCode, true);
    var AccessTokenUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=' + appid + '&secret=' + secretID + '&code=' + responseCode + '&grant_type=authorization_code';
    // console.log('AccessTokenUrl=',AccessTokenUrl);
    fetch(AccessTokenUrl, {
      method: 'GET',
      timeout: 2000,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('AccessToken值', responseData);
        getRefreshToken(responseData.refresh_token);
      })
      .catch((error) => {
        if (error) console.log('error', error);
      })
  }
  //Step2:RefreshToken 
  const getRefreshToken = (refreshtoken) => {
    var getRefreshTokenUrl = 'https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=' + appid + '&grant_type=refresh_token&refresh_token=' + refreshtoken;
    // console.log('getRefreshTokenUrl=',getRefreshTokenUrl);
    fetch(getRefreshTokenUrl, {
      method: 'GET',
      timeout: 2000,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('RefreshToken', responseData);
        getUserInfo(responseData);
      })
      .catch((error) => {
        if (error) console.log('error', error);
      })
  }
  //Step3:UserInfo 
  const getUserInfo = (responseData) => {
    console.log(responseData);
    var getUserInfoUrl = 'https://api.weixin.qq.com/sns/userinfo?access_token=' + responseData.access_token + '&openid=' + responseData.openid;
    console.log('getUserInfoUrl=', getUserInfoUrl);
    fetch(getUserInfoUrl, {
      method: 'GET',
      timeout: 2000,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('UserInfo', responseData);
      })
      .catch((error) => {
        if (error) console.log('error', error);
      })
  }
  const onWechatLogin = () => {
    let scope = 'snsapi_userinfo';
    let state = 'wechat_sdk_demo';
    WeChat.isWXAppInstalled()
      .then((isInstalled) => {
        if (isInstalled) {
          WeChat.sendAuthRequest(scope, state)
            .then(responseCode => {
              console.log("code值", responseCode.code);
              getAccessToken(responseCode.code);
            })
            .catch(err => {
              Alert.alert('登录授权发生错误：', err.message, [
                { text: '确定' }
              ]);
            })
        }
        else {
          Platform.OS == 'ios' ?
            Alert.alert('没有安装微信', '是否安装微信？', [
              { text: '取消' },
              { text: '确定', onPress: () => installWechat() }
            ]) :
            Alert.alert('没有安装微信', '请先安装微信客户端在进行登录', [
              { text: '确定' }
            ])
        }
      })
  }
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.highlight}>
                ApiVersion: <Text>{apiVersion}</Text>
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={onOpenWechat}>
                <Text>打开微信</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={onWechatShareToFriend}>
                <Text>分享至微信好友</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={onWechatShareToMoment}>
                <Text>分享至朋友圈</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={onWechatLogin}>
                <Text>微信登陆</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  highlight: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.black,
  },
});
export default MineTab;