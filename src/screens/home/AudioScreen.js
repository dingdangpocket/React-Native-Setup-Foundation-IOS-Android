import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const IncidentDescScreen = () => {
  const refPlayer = useRef(null);
  const [rate, setRate] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [resizeMode, setResizeMode] = useState('contain');
  const [paused, setPaused] = useState(false);
  const onError = onError => {
    console.log('播放错误', onError);
  };
  const onLoad = onLoad => {
    console.log('加载完成', onLoad);
  };
  const loadStart = loadStart => {
    console.log('开始加载', loadStart);
  };
  const onProgress = onProgress => {
    console.log('播放进度', onProgress);
  };
  const onEnd = onEnd => {
    console.log('加载结束', onEnd);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 25 }}>音乐🎵...加载中...请稍后...</Text>
      <Video
        source={{
          uri: 'https://webfs.ali.kugou.com/202210062139/5fc6d016b4e1ed8c34c48ea2508e4e9a/KGTX/CLTX001/4af037a12e824e3c357d9860c5bf5f09.mp3',
        }}
        ref={refPlayer} //实例;
        style={styles.container}//样式;
        rate={rate}//倍率;
        paused={paused} // 控制暂停/播放，0 代表暂停paused, 1代表播放normal;
        volume={volume} // 0静音, 1正常，其他数字表示放大倍数;
        muted={false} // true静音，默认false;
        onLoad={onLoad} // 加载完毕时回调;
        onLoadStart={loadStart} // 视频开始加载回调;
        onProgress={onProgress} // 进度实时回调;
        onEnd={onEnd} // 视频播放完毕回调函数;
        repeat={false} //重复播放;
        resizeMode={resizeMode} //嵌套方式;
        onError={onError} // 错误回调;
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default IncidentDescScreen;
