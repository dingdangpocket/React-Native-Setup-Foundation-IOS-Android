import { View, Text, StyleSheet, Image, TextInput, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Center, RowCenter, Left, Right, BottomCenter, } from "../../commonStyle/commonStyle"
import { useColor } from "./hooks/useColor"

const Login = () => {
    const navigation = useNavigation();
    const { years } = useColor();
    const { width,height } = useWindowDimensions();
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.78)',
                ...Center
            }}>
                <View style={{
                    width: width*0.8,
                    height: 100,
                    backgroundColor: "red",
                    borderRadius: 30,
                    ...Center,
                }}>
                    <Text>2</Text>
                </View>
            </View>
        </View>
    );
};
export default Login;
