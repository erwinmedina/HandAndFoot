import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Confirmation({visible, onClose, onConfirm}) {
    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Are you ready to end this game?!</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, styles.buttonLeft]} onPress={onClose}>
                            <Text style={styles.buttonText}>Nahh</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttonRight]} onPress={onConfirm}>
                            <Text style={styles.buttonText}>Absolutely</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 25,
        textAlign: 'center',
        fontFamily: "Sriracha_400Regular",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: .8,
        shadowRadius: 3,
    },
    buttonLeft: {
        backgroundColor: 'teal',
    },
    buttonRight: {
        backgroundColor: "orangered"
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: "Sriracha_400Regular",
    },
});
