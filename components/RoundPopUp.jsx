import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RoundPopUp({visible, onClose, onContinue, tableData, totalSum, currentRound}) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Round {currentRound}</Text>
                    <Text style={styles.modalTitle}>Score Sheet</Text>
                    <View>
                        {tableData.map((row, index) => (
                            <View key={index} style={[
                                styles.tableRow,
                                index % 2 === 0 ? styles.evenRow : styles.oddRow
                            ]}>
                                <View style={styles.tableCellLeft}>
                                    <Text style={styles.tableText}>{row[0]}</Text>
                                </View>
                                <View style={styles.divider}></View>
                                <View style={styles.tableCellLeft}>
                                    <Text style={styles.tableText}>{row[1]}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={styles.sumBox}>
                        <Text style={styles.sumText}>TOTAL PTS: {totalSum}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, styles.buttonReview]} onPress={onClose}>
                            <Text style={styles.buttonText}>REVIEW</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttonContinue]}  onPress={onContinue}>
                            <Text style={styles.buttonText}>CONTINUE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: "Sriracha_400Regular",
    },
    table: {
        marginBottom: 10,
    },
    tableRow: {
        flexDirection: 'row',
        width: 300,
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: 'gray',
    },
    tableCellLeft: {
        flex: 1,
        padding: 1,
    },
    tableCellRight: {
        flex: 1,
        textAlign: 'right',
    },
    evenRow: {
        backgroundColor: '#f2f2f2',
    },
    oddRow: {
        backgroundColor: '#ffffff',
    },
    tableCell: {
        borderTopWidth: 1,
        borderColor: 'black',
        flex: 1,
    },
    tableText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: "Sriracha_400Regular",
    },
    sumBox: {
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'teal',
        padding: 10,
        borderRadius: 20,
        minWidth: 200,
    },
    sumText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        flex: 1,
        margin: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    buttonReview: {
        backgroundColor: 'orange',
    },
    buttonContinue: {
        backgroundColor: 'green',
    }
});