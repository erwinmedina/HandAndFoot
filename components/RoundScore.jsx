import { View, StyleSheet, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";

export default function RoundScore({ totalPoints, currentRound, rounds, onChangeRound, gameScore}) {
    const roundOptions = [1,2,3,4];
    const [selectedRound, setSelectedRound] = useState("1");
    useEffect(() => {
        setSelectedRound(currentRound.toString());
    }, [currentRound]);

    const data = [
        { key: '1', value: 'Round 1' },
        { key: '2', value: 'Round 2' },
        { key: '3', value: 'Round 3' },
        { key: '4', value: 'Round 4' },
        { key: '5', value: 'All Rounds' },
    ]

    const handleRoundSelect = (value) => {
        setSelectedRound(value);
        onChangeRound(value);
    }

    return (
        <View style={[styles.box, styles.parentScore]}>
            <SelectList
                setSelected={handleRoundSelect}
                data={data}
                save="key"
                search={false}
                defaultOption={{key: '1', value: 'Round 1'}}
                maxHeight={200}
                arrowicon={<FontAwesome name="chevron-down" size={12} color={'white'}/>}
                dropdownStyles={{
                    position: "absolute", 
                    top: 35,
                    width: 150,
                    color: "white",
                }}
                boxStyles={{
                    backgroundColor: 'blue',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    width: 150,
                    borderWidth: 1,
                    borderColor: 'white',
                }}
                inputStyles={{
                    color: 'white',
                    marginRight: 10,
                    fontWeight: "bold",
                }}
            />
            <View style={[styles.box, styles.points]}>
                <Text style={styles.score}>Round {selectedRound}: {totalPoints}</Text>
                <Text style={styles.score}>Total Score: {gameScore}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    points: {
        backgroundColor: 'red',
        padding: 10,
        width: 150,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'white',
        zIndex: -5,
    },
    score: {
        color: 'white',
        fontWeight: 'bold',
    },
})