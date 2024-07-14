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
                    <Text style={styles.modalTitle}>Round {currentRound} Summary</Text>
                    <View>
                        {/* Header Row */}
                        <View style={styles.tableRow}>
                            <View style={[styles.tableCell, styles.tableCellLeft, styles.tableHeader]}>
                                <Text style={[styles.tableText, styles.tableHeaderText]}></Text>
                            </View>
                            <View style={styles.divider}></View>
                            <View style={[styles.tableCell, styles.tableCellLeft, styles.tableHeader]}>
                                <Text style={[styles.tableText, styles.tableHeaderText]}>Played</Text>
                            </View>
                            <View style={styles.divider}></View>
                            <View style={[styles.tableCell, styles.tableCellLeft, styles.tableHeader]}>
                                <Text style={[styles.tableText, styles.tableHeaderText]}>Unplayed</Text>
                            </View>
                        </View>

                        {/* Data Row */}
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
                                <View style={styles.divider}></View>
                                <View style={styles.tableCellLeft}>
                                    <Text style={styles.tableText}>{row[2]}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={styles.sumBox}>
                        <Text style={styles.sumText}>TOTAL POINTS: {totalSum}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, styles.buttonReview]} onPress={onClose}>
                            <Text style={styles.buttonText}>EDIT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttonContinue]}  onPress={onContinue}>
                            <Text style={styles.buttonText}>NEXT ROUND</Text>
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
        fontSize: 25,
        marginBottom: 10,
        fontFamily: "Sriracha_400Regular",
    },
    table: {
        marginBottom: 10,
    },
    tableHeader: {
        backgroundColor: "rgba(0,0,0,.3)",
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
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: "Sriracha_400Regular",
    },
    sumBox: {
        marginBottom: 10,
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
        minWidth: 200,
    },
    sumText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: "Sriracha_400Regular",
        color: 'black',
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
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: .7,
        shadowRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    buttonReview: {
        backgroundColor: 'orangered',
    },
    buttonContinue: {
        backgroundColor: 'teal',
    }
});