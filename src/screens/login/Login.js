import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
//水平垂直居中;
const Center = {
    justifyContent: "center",
    alignItems: "center",
}
//居中左对齐;
const Left = {
    justifyContent: "center",
    alignItems: 'flex-start'
}
//居中右对齐;
const Right = {
    justifyContent: "center",
    alignItems: 'flex-end'
}

//底部居中对齐;
const BottomCenter = {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'flex-end'
}

//水平居中;
const RowCenter = {
    flexDirection: "row",
    justifyContent: "center",
}



const styles = StyleSheet.create({
    backgroudVideo: { width: 700, height: '100%' },
    mask: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
