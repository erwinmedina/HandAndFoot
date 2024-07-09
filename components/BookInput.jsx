import { TouchableOpacity, View, Text, StyleSheet} from "react-native";

export default function BookInput({bookType, count, onIncrement, onDecrement }) {
    return (
        <View style={styles.container} >
            <View style={styles.topHalf}>
                <Text style={styles.bookType}>{bookType}</Text>
            </View>
            <View style={styles.bottomHalf}>
                <TouchableOpacity style={styles.Lefttouchable} onPress={onIncrement}>
                    <Text style={styles.button}>
                        +
                    </Text>
                </TouchableOpacity>
                <View style={styles.valueContainer}>
                    <Text style={styles.value}>{count}</Text>
                </View>

                <TouchableOpacity style={styles.Righttouchable} onPress={onDecrement}>
                    <Text style={styles.button}>
                        -
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 70,
        marginBottom: 5,
    },
    topHalf: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "blue",
        width: "100%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderWidth: 1,
        borderColor: "white",
    },
    bottomHalf: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: "gray",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "white",
    },
    bookType: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Sriracha_400Regular",
    },
    Lefttouchable: {
        flex: 1,
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    Righttouchable: {
        flex: 1,
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    valueContainer: {
        flex: 1,
        height: "100%",
        backgroundColor: "gray",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Sriracha_400Regular",
    },
    value: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Sriracha_400Regular",
    }
})