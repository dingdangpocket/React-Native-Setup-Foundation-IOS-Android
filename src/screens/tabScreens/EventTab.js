import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Alert,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';
// import {RNCamera} from 'react-native-camera';
const EventTab = ({navigation, route}) => {
  // const [type, setType] = useState('');
  // const cameraEl = useRef(null);

  // const flipCamera = () => {
  //   setType(
  //     type === RNCamera.Constants.Type.back
  //       ? RNCamera.Constants.Type.front
  //       : RNCamera.Constants.Type.back,
  //   );
  // };
  // const takePhoto = async () => {
  //   console.log('1');
  //   // const {onTakePhoto} = this.props;
  //   const options = {
  //     quality: 0.5,
  //     base64: true,
  //     width: 300,
  //     height: 400,
  //   };
  //   if (cameraEl.current) {
  //     console.log('1',cameraEl.current.takePictureAsync);
  //     const data = await cameraEl.current.takePictureAsync(options);
  //     console.log('拍摄结果', data.uri);
  //   }

  //   // onTakePhoto(data.base64);
  // };
  const onBottomButtonPressed = EVENT => {
    console.log('EVENT', EVENT);
  };
  return (
    <View style={styles.container}>
      <CameraScreen
        actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
        onBottomButtonPressed={onBottomButtonPressed(EVENT)}
        flashImages={{
          // optional, images for flash state
          on: require('../../static/add1.png'),
          off: require('../../static/add1.png'),
          auto: require('../../static/add1.png'),
        }}
        cameraFlipImage={require('../../static/add1.png')} // optional, image for flipping camera button
        captureButtonImage={require('../../static/add1.png')} // optional, image capture button
        torchOnImage={require('../../static/add1.png')} // optional, image for toggling on flash light
        torchOffImage={require('../../static/add1.png')} // optional, image for toggling off flash light
        hideControls={false} // (default false) optional, hides camera controls
        showCapturedImageCount={false} // (default false) optional, show count for photos taken during that capture session
      />
      {/* <RNCamera ref={cameraEl} type={type} style={styles.preview} />
      <View style={styles.topButtons}>
        <TouchableOpacity onPress={flipCamera} style={styles.flipButton}>
          <Text>切换正反</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity onPress={takePhoto} style={styles.recordingButton}>
          <Text>拍摄</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topButtons: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'flex-start',
  },
  bottomButtons: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  flipButton: {
    flex: 1,
    marginTop: 20,
    right: 20,
    backgroundColor: 'red',
    alignSelf: 'flex-end',
  },
  recordingButton: {
    backgroundColor: 'red',
    marginBottom: 10,
  },
});

export default EventTab;
