import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { Button } from 'react-native-web';

export default function Screen2() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
                style={{ width: "100%", height: "100%", alignItems: "center" }}
            >
                <View style={styles.circle}></View>
                <Text style={styles.title}> GROW </Text>
                <Text style={{ fontSize: 25, fontWeight: "bold", top: 140 }}> YOUR BUSINESS </Text>
                <Text style={styles.subTitle}> We will help you to grow your business using online server </Text>
                <View style={styles.formButton}>
                    <TouchableOpacity style={{ backgroundColor: "#E3C000", borderRadius: 10, width: 119, height: 48, top: 200, alignItems: "center", justifyContent: "center", marginRight: 80 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}> LOGIN </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#E3C000", borderRadius: 10, width: 119, height: 48, top: 200, alignItems: "center", justifyContent: "center", left: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}> SIGN UP </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rectangle}>
                    <Text style={{ fontWeight: "700", fontSize: 18}}> HOW WE WORK? </Text>
                </View>

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    circle: {
        width: 140,
        height: 140,
        borderRadius: 500 / 2,
        top: 155,
        borderColor: "black",
        borderWidth: 15,
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        top: 170,
        color: "black",
        height: 58,
        width: 189,
    },
    subTitle: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "700",
        top: 190,
        color: "black",
        height: 36,
        width: 302,
    },
    formButton: {
        marginTop: 30,
        flexDirection: "row",
    },
    rectangle: {
        width: 300,
        height: 100,
        top: 250,
        alignItems: "center",
        justifyContent: "flex-start",
        borderWidth: 5,
        borderColor: "blue"
    },

});