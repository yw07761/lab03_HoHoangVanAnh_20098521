import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";


export default function Screen3() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["rgba(0, 204, 249, 0.36)", "rgba(0, 204, 249, 1)"]}
                style={{ width: "100%", height: "100%", alignItems: "center" }}
            >
                <View style={styles.imgWrapper}>
                    <Image style={styles.imgLock} source={require('../assets/lock.png')} />
                </View>
                <Text style={styles.title}>FORGET<br /> PASSWORD </Text>
                <Text style={styles.txt}> Provide your account email for which you {'\n'} want to reset your password </Text>
                <View style={styles.btnMailWrapper}>
                        <Image style={styles.mailIcon} source={require('../assets/mail.png')} />
                        <input type="text" style={styles.mailTxt} placeholder="Email" />
                </View>
                <View style={styles.btnNextWrapper}>
                    <TouchableOpacity style={styles.btnNext}>
                        <Text style={styles.nextTxt}> NEXT </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    imgWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 50,
    },
    imgLock: {
        width: '100px',
        height: '110px',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: '25px',
        marginTop: '50px',
    },
    txt: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: '15px',
        marginTop: '50px',
    },
    btnMailWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 30,
        
    },
    btnMail: {
        width: '80%',
        height: 50,
        backgroundColor: '#c4c4c4',
        display: 'flex',
        flexDirection: 'row',
    },
    mailIcon: {
        width: 50,
        height: 50,
    },
    mailTxt: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '15px',
        paddingTop: 16,
        width: 280,
        backgroundColor: '#c4c4c4',
        borderColor: 'transparent',
    },
    btnNextWrapper: {
        width: 330,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 50
    },
    btnNext: {
        width: 330,
        height: 50,
        backgroundColor: '#E3C000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    nextTxt: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: '15px',
        paddingTop: 16,
    },
})