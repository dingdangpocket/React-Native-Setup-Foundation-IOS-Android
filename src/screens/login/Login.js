import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Center, RowCenter, Left, Right, BottomCenter, } from "src/commonStyle/commonStyle"

const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.mask}>
                <View style={styles.loginContainer}>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    backgroudVideo: { width: 700, height: '100%' },
    mask: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.78)',
        ...Center
    },
    loginContainer: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        borderRadius: 30,
        ...Center,
    }

});
export default Login;
