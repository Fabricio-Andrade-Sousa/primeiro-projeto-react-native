import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";

export default function Temperatura() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Conversor de Temperatura</Text>
            <Image source={require('../../assets/img/temperatura.png')} />
            <View>
                <Text style={styles.texto}>Celsius (C°)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome de usuário"
                    placeholderTextColor="#999"


                />
                <Text style={styles.texto}>Fahrenheit (F°)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0.0"
                    placeholderTextColor="#999"
                    secureTextEntry

                />
            </View>
        </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#000011',
        opacity: 0.90,
        width: 'auto',
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        backgroundColor: 'white',
        fontSize: 20,
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#eeeeee',
        textAlign: 'left',
        marginVertical: 10,
    },
    titulo: {
        fontSize: 25,
        color: 'white',
        marginBottom: 40,
        fontWeight: "bold"

    },
});