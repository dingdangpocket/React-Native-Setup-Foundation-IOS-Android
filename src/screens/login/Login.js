import { View, Text, Image, TextInput, useWindowDimensions, Alert, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Center, RowCenter, Left, Right, BottomCenter, } from "src/commonStyle/commonStyle"
import { useState, useEffect } from 'react';
import CustomButton from "../../components/CustomButton"
import NavigationBar from 'react-native-navbar-color'
const Login = () => {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();
    const [phoneNum, onChangePhoneNum] = useState("");
    const [accessCode, onChangeAccessCode] = useState("");
    const [countDown, setCountDown] = useState(5);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [btnContent, setBtnContent] = useState('获取验证码');
    const [initIntercept, setInitIntercept] = useState(false);
    useEffect(() => {
        NavigationBar.setColor('#000000')
    }, [])
    useEffect(() => {
        if (initIntercept) {
            if (countDown == 0) {
                setBtnContent('获取验证码');
                setBtnDisabled(false);
                return;
            }
            if (countDown > 0 && countDown <= 5) setBtnDisabled(true);
            //此处的初始间隔也在倒计时范围内;
            const Interval = setInterval(() => {
                setCountDown(countDown - 1);
                setBtnContent(`${countDown - 1}s后重发`);
            }, 1000);
            return () => clearInterval(Interval);
        }
    });
    const onGetAccessCode = () => {
        setInitIntercept(true);
        setBtnDisabled(true);
        setBtnContent(`5s后重发`);
        setCountDown(5);
    };
    const onLogin = () => {
        //api...
        if (accessCode == 123456) {
            navigation.navigate("HomeTabs")
        } else {
            Alert.alert('提示', "手机验证码错误", [
                {
                    text: '确认',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'default',
                },
            ]);
        }
    }
    const commonInputStyle = {
        width: width * 0.88,
        height: 80,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(30,30,30,0.7)"
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ flex: 1 }} resizeMode="cover" source={require("../../static/C1.jpg")}>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'rgba(10,10,10,0.65)',
                        ...Center
                    }}>
                        <View style={{
                            width: width * 0.88,
                            height: 30,
                            backgroundColor: "rgba(10,10,10,0.75)",
                            ...Center,
                        }}>
                            <Text style={{ color: "white", fontSize: 10, color: "rgba(255,255,255,0.9)" }}>登陆探索中国极限</Text>
                        </View>
                        <View style={{
                            ...commonInputStyle
                        }}>
                            <Text style={{ marginRight: 5, color: "white" }}>+86</Text>
                            <TextInput
                                style={{ width: width * 0.7, borderBottomWidth: 2, borderColor: "rgba(255,255,255,0.6)", color: "white" }}
                                onChangeText={(value) => {
                                    const authValue = value.replace(/[^\d]+/, '');
                                    onChangePhoneNum(authValue)
                                }}
                                value={phoneNum}
                                underlineColorAndroid="transparent"
                                placeholder="请输入手机号"
                                placeholderTextColor={"rgba(255,255,255,0.8)"}
                                keyboardType="number-pad"
                                maxLength={11}
                            />
                        </View>
                        <View style={{
                            ...commonInputStyle
                        }}>
                            <TextInput
                                style={{ width: width * 0.38, borderBottomWidth: 2, borderColor: "rgba(255,255,255,0.6)", color: "white" }}
                                onChangeText={(value) => {
                                    const authValue = value.replace(/[^\d]+/, '');
                                    onChangeAccessCode(authValue)
                                }}
                                value={accessCode}
                                underlineColorAndroid="transparent"
                                placeholder="请输入验证码"
                                placeholderTextColor={"rgba(255,255,255,0.8)"}
                                keyboardType="number-pad"
                                maxLength={6}
                            />
                            <CustomButton
                                disabled={btnDisabled}
                                title={btnContent}
                                titleColor={btnDisabled ? "rgba(255,255,255,0.75)" : "white"}
                                fontSize={11}
                                width={width * 0.2}
                                height={35}
                                backgroundColor={btnDisabled ? "rgba(100,100,100,0.9)" : "rgba(255,51,0,0.5)"}
                                borderRadius={2.5}
                                marginLeft={15}
                                align={Center}
                                onPress={onGetAccessCode} />
                        </View>
                        <CustomButton
                            title="登陆"
                            titleColor="white"
                            fontSize={18}
                            width={width * 0.85}
                            height={50}
                            backgroundColor="rgba(255,51,0,0.7)"
                            borderRadius={2.5}
                            marginTop={10}
                            align={Center}
                            onPress={onLogin}
                        />
                    </View>
                </ImageBackground>
            </View >
        </KeyboardAvoidingView>
    );
};
export default Login;