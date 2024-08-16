import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Modal, Pressable } from "react-native"
import { useFonts, Sriracha_400Regular } from "@expo-google-fonts/dev"
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function CustomHeader({ onClear, isGrouped, setIsGrouped }) {
    let [fontsLoaded] = useFonts({
        Sriracha_400Regular,
    })

    const [modalVisible, setModalVisible] = useState(false);

    if (!fontsLoaded) {
        return <AppLoading/>
    }

    const handleOptionSelect = (option) => {
        setModalVisible(false)
    }
    const handleClear = () => {
        onClear()
        setModalVisible(false)
    }
    const handleGroup = () => {
        onClear()
        setIsGrouped(!isGrouped)
        setModalVisible(false)
    }

    return (
        <SafeAreaView styles={styles.safeArea}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Hand & Foot</Text>
                <TouchableOpacity
                    style={styles.cogButton}
                    onPress={() => setModalVisible(true)}
                >
                        <Ionicons name="cog" size={30} color="white" />
                </TouchableOpacity>
            </View>

            {modalVisible && (
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <Pressable style={styles.overlay} onPress={() => setModalVisible(false)}>
                        <View style={styles.dropdown}>
                            <TouchableOpacity onPress={() => handleOptionSelect('Rules')}>
                                <Text style={styles.dropdownText}>Rules</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleGroup()}>
                                <Text style={styles.dropdownText}>{isGrouped ? "Ungroup" : "Group"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleClear()}>
                                <Text style={styles.dropdownText}>Clear Values</Text>
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </Modal>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 0,
        backgroundColor: '#f4511e'
    },
    header: {
        marginTop: 20,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        color: "white",
        fontSize: 40,
        fontWeigght: 'bold',
        fontFamily: "Sriracha_400Regular",
    },
    cogButton: {
        position: "absolute",
        right: 20,
        top: 25,
    },
    dropdown: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 8,
        borderColor: "black",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.8,
        width: 200,
        shadowRadius: 2,
        position: "absolute",
        right: 10,
        top: 130
    },
    dropdownText: {
        paddingVertical: 3,
        fontSize: 20,
        color: "#333",
        fontFamily: "Sriracha_400Regular",
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-end",
    }
})