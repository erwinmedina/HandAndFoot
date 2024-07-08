import { View, Image, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

export default function Card({ imageName }) {
    return (
        <View style={styles.card}>
            <Image source={imageName} style={styles.image} resizeMode="contain"/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 100,
        marginBottom: 20,
        margin: 13,
        borderRadius: 5,
        borderColor: '#ccc',
        overflow: 'hidden',
    },
    image: {
        width: "100%",
        height: 150,
    },
})