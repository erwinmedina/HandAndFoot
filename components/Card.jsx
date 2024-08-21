import { View, Image, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import React, { useState }  from 'react';

export default function Card({ imageName, cardId, cardValue, onIncrement, onDecrement }) {
    const [showValue, setShowValue] = useState(false)
    const [fadeAnim] = useState(new Animated.Value(1));

    const handlePress = () => {
        onIncrement(cardId)
        setShowValue(true)
        fadeInAndOut();
    }
    const fadeInAndOut = () => {
        fadeAnim.setValue(1)
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => setShowValue(false));
    }

    return (
        <View style={styles.card}>
            <TouchableOpacity onLongPress={()=> onDecrement(cardId)} onPress={handlePress}>
                <Image source={imageName} style={styles.image} resizeMode="contain"/>
                {showValue && (
                    <Animated.View style={[styles.valueContainer, {opacity: fadeAnim}]}>
                        <Text style={styles.valueText}>{cardValue < 0 ? cardValue : "+" + cardValue}</Text>
                    </Animated.View>
                )}
            </TouchableOpacity>
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
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 15},
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    image: {
        width: "100%",
        height: 150,
    },
    valueContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    valueText: {
        color: 'green',
        backgroundColor: 'white',
        width: "100%",
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    }
})