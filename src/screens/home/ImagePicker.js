import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
const ImagePicker = () => {
  const [isShow, setIsshow] = useState(true);
  const [prview, setPrview] = useState('');
  const options = {
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 300,
    quality: 0.8,
    cameraType: 'back',
    includeBase64: true,
    saveToPhotos: false,
    selectionLimit: 5,
  };
  const onCancel = () => {
    setIsshow(false);
  };
  const onSelect = assets => {
    setPrview(assets);
    console.log('assets', assets);
  };
  const dealImage = response => {
    onCancel();
    console.log('dealImages => ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorCode) {
      console.log('mage picker Error: ', response.errorCode);
    } else if (response.errorMessage) {
      console.log('User tapped errorMessage: ', response.errorMessage);
    } else if (response.assets) {
      onSelect(response.assets);
    } else {
      console.log('other data');
    }
  };
  const selectPhotoTapped = () => {
    launchImageLibrary(options, response => dealImage(response));
  };
  const takePhotoTapped = () => {
    launchCamera(options, response => dealImage(response));
  };

  const buttons = [
    {
      label: '相册',
      onClick: () => selectPhotoTapped(),
    },
    {
      label: '拍摄',
      onClick: () => takePhotoTapped(),
    },
    {
      label: '取消',
      textStyle: {color: 'black'},
      onClick: () => onCancel(),
    },
  ];

  return (
    <View>
      <ImageBackground
        source={prview}
        style={{height: 500, width: Dimensions.get('screen').width}}
        resizeMode="cover"></ImageBackground>
      <Modal
        animationType={'slide'}
        transparent={true}
        statusBarTranslucent={true}
        visible={isShow}
        onRequestClose={onCancel}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.outSideView}
          onPress={onCancel}
        />
        <View style={styles.container}>
          {buttons.map(item => (
            <TouchableOpacity
              key={item.label}
              style={styles.openButton}
              onPress={item.onClick}
              activeOpacity={0.7}>
              <Text style={[styles.buttonTitle, item.textStyle]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  outSideView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  openButton: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 10,
    borderBottomColor: 'white',
  },
  buttonTitle: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
});
export default ImagePicker;
