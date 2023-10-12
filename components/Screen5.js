import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import { React, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';


export default function Screen5() {
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}> LOGIN </Text>
            <View style={styles.inputWrapper}>
                <TextInput placeholder="Email" style={styles.input} />
                <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                    <TextInput placeholder='Password'
                        secureTextEntry={!showPassword} style={styles.input} />
                    <TouchableOpacity  onPress={toggleShowPassword}
                    style={{position:'absolute', right: 20, marginTop: 20}}
                    >
                        <Ionicons
                            name={showPassword ? 'eye-off' : 'eye'}
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.btnLoginTxt}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.txtOption}>When you agree to terms and conditions</Text>
                <Text style={[styles.txtOption, { color: '#5D25FA' }]}>For got your password?</Text>
                <Text style={styles.txtOption}>Or login with</Text>
            </View>
            <View style={styles.btnWrapperIcon}>
                <TouchableOpacity style={[styles.btnSocial, { backgroundColor: '#4267B2' }]}>
                    <Image style={styles.btnImage1} source={require('../assets/iconfacebook.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnSocial, { backgroundColor: '#0058d9' }]}>
                    <Image style={styles.btnImage2} source={require('../assets/iconzalo.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnSocial, styles.btnBorder]}>
                    <Image style={styles.btnImage2} source={require('../assets/icongoogle.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(49, 170, 82, 0.19)",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        textAlign: 'center',
        marginTop: 50,
    },
    inputWrapper: {
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#c4c4c4',
        marginTop: 20,
        width: 330,
        height: 54,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        paddingLeft: 10,
    },
    btnWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
    },
    btnLogin: {
        backgroundColor: '#E53935',
        width: 330,
        height: 54,
        display: 'flex',
        justifyContent: 'center',
    },
    btnLoginTxt: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 24,
    },
    txtOption: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
    },
    btnWrapperIcon: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
    },
    btnSocial: {
        width: '28%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnImage1: {
        width: 35,
        height: 35,
    },
    btnImage2: {
        width: 25,
        height: 25,
    },
    btnBorder: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0058d9',
    }
})