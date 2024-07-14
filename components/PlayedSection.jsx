import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { useState } from "react";

export default function PlayedSection({ onSectionChange }) {

    const [activeSection, setActiveSection] = useState("played");
    const handlePress = (section) => {
        setActiveSection(section)
        onSectionChange(section)
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInside}>
                <TouchableOpacity 
                    style={[styles.button1, activeSection === "played" ? styles.activeButton : styles.notActiveButton]}
                    onPress={() => handlePress("played")}
                >
                    <Text style={styles.buttonText}>Played</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button1, activeSection === "unplayed" ? styles.activeButton : styles.notActiveButton]}
                    onPress={() => handlePress("unplayed")}
                >
                    <Text style={styles.buttonText}>Unplayed</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 40,
        marginBottom: 20,
        borderBottomColor: "rgba(255,255,255,.3)",
        borderBottomWidth: 1,
    },
    containerInside: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
    button1: {
        backgroundColor: "gray",
        width: "40%",
        height: "100%",
        justifyContent: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "white",
    },
    activeButton: {
        backgroundColor: "seagreen",
        width: "45%",
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -3},
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    notActiveButton: {
        backgroundColor: "rgba(255,255,255,.2)",
        // backgroundColor: "gray",
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: "Sriracha_400Regular",
    }
});