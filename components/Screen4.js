import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";

export default function Screen4() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#C7F4F6", "#D1F4F6","#E5F4F5", "#00CCF9"]}
                style={{ width: "100%", height: "100%", alignItems: "center" }}
            >
                <Text style={[styles.title, styles.txt]}> CODE </Text>
                <Text style={[styles.title2, styles.txt]}> VERIFICATION </Text>
                <Text style={[styles.instruction, styles.txt]}> Enter ontime password sent on {'\n'} +09895798 </Text>
                <View style={styles.blockWrapper}>
                    <View style={styles.block}>
                        <input type="text" style={styles.inputCode} />
                    </View>
                    <View style={styles.block}>
                        <input type="text" style={styles.inputCode} />
                    </View>
                    <View style={styles.block}>
                        <input type="text" style={styles.inputCode} />
                    </View>
                    <View style={styles.block}>
                        <input type="text" style={styles.inputCode} />
                    </View>
                    <View style={styles.block}>
                        <input type="text" style={styles.inputCode} />
                    </View>
                    <View style={styles.block}>
                        <input type="text" style={styles.inputCode} />
                    </View>
                    
                </View>
                <View style={styles.btnWrapper}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnTxt}> VERIFY CODE </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    txt: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        textAlign: 'center',
        marginTop: 60,
    },
    title: {
        paddingTop: 40,
        fontSize: 60,
    },
    title2: {
        fontSize: 20,
    },
    instruction: {
        fontSize: 15,
    },
    blockWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    block: {
        width: 50,
        height: 50,
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    btnWrapper: {
        display: 'flex',
        width: '80%',
        alignItems: 'center',
    },
    btn: {
        width: '100%',
        height: 50,
        backgroundColor: '#E3C000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnTxt: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: '15px',
        paddingTop: 16,
    },
    inputCode: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    }

})