import { View, StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import { useState, useEffect, useRef } from "react";
// import { transform } from "@babel/core";

export default function RoundScore({ totalPoints, currentRound, rounds, onChangeRound, gameScore}) {
    const [selectedRound, setSelectedRound] = useState("1");
    const [flipped, setFlipped] = useState(false);
    const flipAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setSelectedRound(currentRound.toString());
    }, [currentRound]);

    const flipCard = () => {
        if (flipped) {
            Animated.spring(flipAnimation, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.spring(flipAnimation, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        }
        setFlipped(!flipped);
    }

    const frontInterpolate = flipAnimation.interpolate({
        inputRange: [0,1],
        outputRange: ["0deg", "180deg"]
    });
    const backInterpolate = flipAnimation.interpolate({
        inputRange: [0,1],
        outputRange: ["180deg", "360deg"]
    });
    const frontAnimatedStyle = {
        transform: [{rotateY: frontInterpolate}]
    }
    const backAnimatedStyle = {
        transform: [{rotateY: backInterpolate}]
    }


    return (
        <TouchableOpacity onPress={flipCard} >
            <View style={styles.mainCard}>
                <Animated.View style={[styles.card, frontAnimatedStyle, !flipped && styles.hidden]}>
                        <View style={[styles.box, styles.points]}>
                            <Text style={[styles.score, styles.scoreTitles]}>Round {selectedRound}:</Text>
                            <Text style={[styles.score, styles.scoreNums]}>{totalPoints}</Text>
                            <Text style={[styles.score, styles.scoreTitles]}>Total Score:</Text>
                            <Text style={[styles.score, styles.scoreNums, styles.lastNums]}>{gameScore}</Text>
                        </View>
                </Animated.View>
                <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle, flipped && styles.hidden]}>
                    <View style={[styles.box, styles.points]}>
                        {rounds.map((round, index) => (
                            <View style={styles.totalScoresRead}>
                                <Text style={[styles.score, styles.scoreTitles]}>Round {index + 1}:</Text>
                                <Text style={[styles.score, styles.scoreTitles]}>{round.points || 0}</Text>
                            </View>
                        ))}
                        <Text style={[styles.score, styles.scoreTitles]}>Total: {gameScore}</Text>
                    </View>
                </Animated.View>
            </View>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card: {
        backfaceVisibility: 'hidden',
        width: 150,
    },
    cardBack: {
        position: 'absolute',
        top: 0,
        width: 150,
    },
    hidden: {
        zIndex: -1,
    },
    points: {
        backgroundColor: 'blue',
        width: 150,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        zIndex: -5,
    },
    score: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: "Sriracha_400Regular",
    },
    scoreTitles: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    scoreNums: {
        textAlign: 'center',
        fontSize: 20,
    },
    lastNums: {
        marginBottom: 10,
    },
    totalScoresRead: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    mainCard: {
    }
});