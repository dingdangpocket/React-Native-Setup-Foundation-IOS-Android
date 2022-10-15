import { View, Text, Image, TextInput, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Center, RowCenter, Left, Right, BottomCenter, } from "../../commonStyle/commonStyle"
import { useState } from 'react';
import CustomButton from "../../components/CustomButton"
const Login = () => {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();
    const [phoneNum, onChangePhoneNum] = useState("");
    const [accessCode, onChangeAccessCode] = useState("");
    const onLogin = () => {
        console.log("onLoginParams", phoneNum, accessCode);
        navigation.navigate("HomeTabs")
    }
    const onGetAccessCode = () => { };
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(10,10,10,0.9)',
                ...Center
            }}>
                <View style={{
                    width: width * 0.85,
                    height: 80,
                    borderRadius: 10,
                    flexDirection: "row",
                    ...Center,
                    // backgroundColor:"red"
                }}>
                    <Text style={{ marginRight: 5, color: "white" }}>+86</Text>
                    <TextInput
                        style={{ width: width * 0.7, borderBottomWidth: 2, borderColor: "rgba(255,255,255,0.8)", color: "white" }}
                        onChangeText={(value) => {
                            const authValue = value.replace(/[^\d]+/, '');
                            onChangePhoneNum(authValue)
                        }}
                        value={phoneNum}
                        underlineColorAndroid="transparent"
                        placeholder="请输入手机号"
                        placeholderTextColor={"white"}
                        keyboardType="number-pad"
                        maxLength={11}
                    />
                </View>
                <View style={{
                    width: width * 0.85,
                    height: 80,
                    borderRadius: 10,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor:"red"
                }}>
                    <TextInput
                        style={{ width: width * 0.35, borderBottomWidth: 2, borderColor: "rgba(255,255,255,0.6)", color: "white" }}
                        onChangeText={(value) => {
                            const authValue = value.replace(/[^\d]+/, '');
                            onChangeAccessCode(authValue)
                        }}
                        value={accessCode}
                        underlineColorAndroid="transparent"
                        placeholder="请输入验证码"
                        placeholderTextColor={"white"}
                        keyboardType="number-pad"
                        maxLength={6}
                    />
                    <CustomButton
                        title="获取验证码"
                        titleColor="white"
                        fontSize={11}
                        width={width * 0.2}
                        height={35}
                        backgroundColor="rgba(255,51,0,0.6)"
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
                    onPress={onLogin} />
            </View>
        </View >
    );
};
export default Login;