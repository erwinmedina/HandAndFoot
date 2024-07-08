import { TouchableOpacity, StyleSheet, View, Text } from "react-native";


export default function SplitButton({leftLabel, rightLabel, onLeftPress, onRightPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, styles.leftButton]} onPress={onLeftPress}>
                <Text style={styles.buttonText}>{leftLabel}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.rightButton]} onPress={onRightPress}>
                <Text style={styles.buttonText}>{rightLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 5,
        overflow: 'hidden',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    leftButton: {
        backgroundColor: 'blue',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderColor: 'white',
        width: "65%",
        borderWidth: 1,
    },
    rightButton: {
        backgroundColor: 'red',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: 'white',
        width: "35%",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
})