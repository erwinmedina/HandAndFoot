import { View, TextInput, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Card from "./Card";

export default function CardGrid({ updateTotalPoints, userInput, setUserInput}) {

    const cards = [
        { id: 1, imageName: require('../assets/images/ace_of_spades.png'), value: 20},
        { id: 2, imageName: require('../assets/images/2_of_clubs.png'), value: 20},
        { id: 3, imageName: require('../assets/images/3_of_clubs.png'), value: 0},
        { id: 4, imageName: require('../assets/images/3_of_diamonds.png'), value: -100},
        { id: 5, imageName: require('../assets/images/4_of_clubs.png'), value: 5},
        { id: 6, imageName: require('../assets/images/5_of_hearts.png'), value: 5},
        { id: 7, imageName: require('../assets/images/6_of_clubs.png'), value: 5},
        { id: 8, imageName: require('../assets/images/7_of_diamonds.png'), value: 5},
        { id: 9, imageName: require('../assets/images/8_of_spades.png'), value: 10},
        { id: 10, imageName: require('../assets/images/9_of_hearts.png'), value: 10},
        { id: 11, imageName: require('../assets/images/10_of_clubs.png'), value: 10},
        { id: 12, imageName: require('../assets/images/jack_of_diamonds2.png'), value: 10},
        { id: 13, imageName: require('../assets/images/queen_of_hearts2.png'), value: 10},
        { id: 14, imageName: require('../assets/images/king_of_spades2.png'), value: 10},
        { id: 15, imageName: require('../assets/images/black_joker.png'), value: 50},
    ];

    const handleInputChange = (cardId, text) => {
        const parsedValue = parseInt(text) || "";
        const updatedUserInput = {
            ...userInput,
            [cardId]: parsedValue
        };
        setUserInput(updatedUserInput);
        const newTotalPoints = calculateTotalPoints(updatedUserInput);
        updateTotalPoints(newTotalPoints);
    }

    const calculateTotalPoints = (updatedUserInput) => {
        let calculatedPoints = 0;
        cards.forEach(card => {
            const userInputValue = updatedUserInput[card.id] || "";
            calculatedPoints += card.value * userInputValue;
        })
        return calculatedPoints;
    }

    const renderCard = ({item}) => {
        return (
            <View style={styles.cardContainer}>
                <Card imageName={item.imageName}/>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="#"
                        keyboardType='numeric'
                        value={userInput[item.id]?.toString() || ""}
                        onChangeText={(text) => handleInputChange(item.id, text)}
                    />
                </View>
            </View>
        )
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
            style={styles.container}
        >
            <FlatList
                data={cards}
                numColumns={3}
                renderItem={renderCard}
                keyExtractor={(item => item.id.toString())}
                contentContainerStyle={styles.cardRow}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    cardRow: {
        justifyContent: 'center',
        width: "100%",
    },
    inputBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
    },
    input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        padding: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "white",
        marginBottom: 30,
    },
    cardContainer: {
        // flexDirection: 'row',
        // alignItems: "center",
        // marginVertical: 10,
    }
})