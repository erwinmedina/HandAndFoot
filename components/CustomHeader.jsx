import { StyleSheet, View, Text, SafeAreaView } from "react-native"
import { useFonts, Sriracha_400Regular } from "@expo-google-fonts/dev"
import AppLoading from "expo-app-loading";

export default function CustomHeader() {
    let [fontsLoaded] = useFonts({
        Sriracha_400Regular,
    })
    if (!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <SafeAreaView styles={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Hand & Foot</Text>
            </View>
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
    }
})