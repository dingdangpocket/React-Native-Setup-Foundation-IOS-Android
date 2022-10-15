import { View, Text, Image, TextInput, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Center, RowCenter, Left, Right, BottomCenter, } from "../../commonStyle/commonStyle"
import { useState } from 'react';
import CustomButton from "../../components/CustomButton"

const Login = () => {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();
    const [userName, onChangeUserName] = useState("");
    const onLogin = () => {
        navigation.navigate("HomeTabs")
    }
    const onGetAccessCode = () => {};
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                ...Center
            }}>
                <View style={{
                    width: width * 0.95,
                    height: 80,
                    borderRadius: 10,
                    flexDirection: "row",
                    ...Center,
                }}>
                    <Text style={{ marginRight: 5 }}>+86</Text>
                    <TextInput
                        style={{ width: width * 0.8, borderBottomWidth: 2, borderColor: "rgba(10,10,10,0.3)" }}
                        onChangeText={(value) => onChangeUserName(value)}
                        value={userName}
                        underlineColorAndroid="transparent"
                        placeholder="请输入手机号"
                        keyboardType="number-pad"
                        maxLength={11}
                    />
                </View>
                <View style={{
                    width: width * 0.95,
                    height: 80,
                    borderRadius: 10,
                    flexDirection: "row",
                    ...Center,

                }}>
                    <TextInput
                        style={{ width: width * 0.50, borderBottomWidth: 2, borderColor: "rgba(10,10,10,0.2)" }}
                        onChangeText={(value) => onChangeUserName(value)}
                        value={userName}
                        underlineColorAndroid="transparent"
                        placeholder="请输入验证码"
                        keyboardType="number-pad"
                        maxLength={11}
                    />
                    <CustomButton
                        title="获取验证码"
                        titleColor="white"
                        fontSize={11}
                        width={width * 0.2}
                        height={40}
                        backgroundColor="#F73809"
                        borderRadius={2.5}
                        marginLeft={10}
                        align={Center}
                        onPress={onGetAccessCode} />
                </View>
                <CustomButton
                    title="登陆"
                    titleColor="white"
                    fontSize={18}
                    width={width * 0.2}
                    height={50}
                    backgroundColor="#F73809"
                    borderRadius={2.5}
                    marginTop={10}
                    align={Center}
                    onPress={onLogin} />
            </View>
        </View >
    );
};
export default Login;