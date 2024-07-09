import { View, TextInput, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Card from "./Card";
import CounterInput from "./CounterInput";

export default function CardGrid({ updateTotalPoints, userInput, setUserInput}) {

    const cards = [
        { id: 1, imageName: require('../assets/images/ace_of_spades.png'), value: 20, name: 'Ace'},
        { id: 2, imageName: require('../assets/images/2_of_clubs.png'), value: 20, name: '2'},
        { id: 3, imageName: require('../assets/images/3_of_clubs.png'), value: 0, name: 'Black 3'},
        { id: 4, imageName: require('../assets/images/3_of_diamonds.png'), value: -100, name: 'Red 3'},
        { id: 5, imageName: require('../assets/images/4_of_clubs.png'), value: 5, name: '4'},
        { id: 6, imageName: require('../assets/images/5_of_hearts.png'), value: 5, name: '5'},
        { id: 7, imageName: require('../assets/images/6_of_clubs.png'), value: 5, name: '6'},
        { id: 8, imageName: require('../assets/images/7_of_diamonds.png'), value: 5, name: '7'},
        { id: 9, imageName: require('../assets/images/8_of_spades.png'), value: 10, name: '8'},
        { id: 10, imageName: require('../assets/images/9_of_hearts.png'), value: 10, name: '9'},
        { id: 11, imageName: require('../assets/images/10_of_clubs.png'), value: 10, name: '10'},
        { id: 12, imageName: require('../assets/images/jack_of_diamonds2.png'), value: 10, name: 'Jack'},
        { id: 13, imageName: require('../assets/images/queen_of_hearts2.png'), value: 10, name: 'Queen'},
        { id: 14, imageName: require('../assets/images/king_of_spades2.png'), value: 10, name: 'King'},
        { id: 15, imageName: require('../assets/images/black_joker.png'), value: 50, name: 'Joker'},
    ];

    const handleIncrement = (cardId) => {
        const updatedUserInput = {
            ...userInput,
            [cardId]: (userInput[cardId] || 0) + 1,
        };
        setUserInput(updatedUserInput);
        const newTotalPoints = calculateTotalPoints(updatedUserInput);
        updateTotalPoints(newTotalPoints);
    }
    const handleDecrement = (cardId) => {
        const updatedUserInput = {
            ...userInput,
            [cardId]: (userInput[cardId] || 0) - 1,
        };
        setUserInput(updatedUserInput);
        const newTotalPoints = calculateTotalPoints(updatedUserInput);
        updateTotalPoints(newTotalPoints);
    }

    const calculateTotalPoints = (updatedUserInput) => {
        let calculatedPoints = 0;
        cards.forEach(card => {
            const userInputValue = updatedUserInput[card.id] || 0;
            calculatedPoints += card.value * userInputValue;
        })
        return calculatedPoints;
    }

    const renderCard = ({item}) => {
        return (
            <View style={styles.cardContainer}>
                <Card imageName={item.imageName}/>
                <View style={styles.inputBox}>
                    <CounterInput
                        cardId={item.id}
                        value={userInput[item.id] || 0}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
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
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5,
    },
})