import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function FooterButons({ onEndRound, onEndGame }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, styles.endRound]} onPress={onEndRound}>
                <Text style={styles.buttonText}>END ROUND</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.endGame]} onPress={onEndGame}>
                <Text style={styles.buttonText}>END GAME</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 50,
        height: 60,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        height: 60,
        width: "50%",
        borderRadius: 20,
        borderColor: "white",
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    endRound: {
        backgroundColor: 'teal',
        borderWidth: 1,
        width: "40%",
    },
    endGame: {
        backgroundColor: 'orangered',
        borderWidth: 1,        
        width: "40%",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "Sriracha_400Regular",
    }
})