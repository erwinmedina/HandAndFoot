import { TouchableOpacity, View, Text, StyleSheet} from "react-native";


export default function CounterInput({ cardId, value, onIncrement, onDecrement }) {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.Lefttouchable} onPress={() => onDecrement(cardId)}>
                <Text style={styles.button}>
                    -
                </Text>
            </TouchableOpacity>
            
            <Text style={styles.value}>{value}</Text>

            <TouchableOpacity style={styles.Righttouchable} onPress={() => onIncrement(cardId)}>
                <Text style={styles.button}>
                    +
                </Text>
            </TouchableOpacity>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 40,
        width: "90%",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 20,
        marginBottom: 30,
        backgroundColor: '#70a0a3',
    },
    Lefttouchable: {
        flex: 1,
        height: "100%",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#70a0a3",
    },
    Righttouchable: {
        flex: 1,
        height: "100%",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#70a0a3",
    },
    button: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Sriracha_400Regular",
    },
    value: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Sriracha_400Regular",
    }
})