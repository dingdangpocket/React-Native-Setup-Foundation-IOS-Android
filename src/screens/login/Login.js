import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate("HomeTabs")}>
                <Text style={{ fontSize: 16 }}>登陆页</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({});
export default Login;
