import { Modal, TouchableOpacity, Text, View, StyleSheet } from "react-native";


export default function FinalReport({ visible, finalConfirm, rounds, gameScore}) {
    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="slide"
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Final Report</Text>
                    <View style={styles.tableContainer}>
                        {rounds?.map((round, index) => (
                            <View key={index} style={styles.tableRow}>
                                <Text style={styles.tableCell}>Round {index+1}</Text>
                                <Text style={styles.tableCell}>{round.points || 0}</Text>
                            </View>
                        ))}
                    </View>
                    <Text style={styles.title}>Total Points: {gameScore}</Text>
                    <TouchableOpacity onPress={finalConfirm} style={styles.button}>
                        <Text style={styles.buttonText}>RESTART GAME</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </Modal>
    );
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    tableContainer: {
        width: "100%",
        marginBottom: 20,
    },
    tableRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },
    tableCell: {
        fontSize: 18,
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "teal",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
    }

});