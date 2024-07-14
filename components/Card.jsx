import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Card({ imageName, cardId, onIncrement, onDecrement }) {
    return (
        <View style={styles.card}>
            <TouchableOpacity onLongPress={()=> onDecrement(cardId)} onPress={() => onIncrement(cardId)}>
                <Image source={imageName} style={styles.image} resizeMode="contain"/>
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
})