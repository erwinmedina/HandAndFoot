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
        // flex: 1,
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
    },
    endRound: {
        backgroundColor: 'blue',
        borderWidth: 1,
        width: "40%",
    },
    endGame: {
        backgroundColor: 'red',
        borderWidth: 1,        
        width: "40%",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    }
})