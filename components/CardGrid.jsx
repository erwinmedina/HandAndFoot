import { View, TextInput, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Card from "./Card";
import CounterInput from "./CounterInput";

export default function CardGrid({ cards, userInput, setUserInput}) {

    const handleIncrement = (cardId, value) => {
        if (userInput[cardId]?.quantity >= 35) {
            return;
        }
        const updatedUserInput = {
            ...userInput,
            [cardId]: { quantity: (userInput[cardId]?.quantity || 0) + 1, value },
        };
        console.log(cardId, updatedUserInput[cardId].quantity, value);
        setUserInput(cardId, updatedUserInput[cardId].quantity, value);
    };

    const handleDecrement = (cardId, value) => {
        if (!userInput[cardId] || userInput[cardId].quantity <= 0) {
            return;
        }
        const updatedUserInput = {
            ...userInput,
            [cardId]: { quantity: userInput[cardId].quantity - 1, value },
        };
        setUserInput(cardId, updatedUserInput[cardId].quantity, value);
    };

    const renderCard = ({ item }) => {
        return (
            <View style={styles.cardContainer}>
                <Card 
                    imageName={item.imageName} 
                    cardId={item.id} 
                    onIncrement={() => handleIncrement(item.id, item.value)} 
                    onDecrement={() => handleDecrement(item.id, item.value)}
                />
                <View style={styles.inputBox}>
                    <CounterInput
                        cardId={item.id}
                        value={userInput[item.id]?.quantity || 0}
                        onIncrement={() => handleIncrement(item.id, item.value)}
                        onDecrement={() => handleDecrement(item.id, item.value)}
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