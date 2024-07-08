import { StyleSheet, View, Text } from "react-native"
import SplitButton from "./SplitButton"
import RoundScore from "./RoundScore"
import { useState } from "react"
import CardGrid from "./CardGrid";
import FooterButtons from "./FooterButtons";

export default function BoxLayoutHeader() {
    const [totalPoints, setTotalPoints] = useState(0);
    const [userInput, setUserInput] = useState({})
    const [currentRound, setCurrentRound] = useState(1);
    const [rounds, setRounds] = useState([{}, {}, {}, {}]);
    const [gameScore, setGameScore] = useState(0);

    const updateTotalPoints = (newPoints) => {
        setTotalPoints(newPoints);
    }
    const clearUserInputs = () => {
        setUserInput({})
        setTotalPoints(0);
    }
    const endGame = () => {
        setRounds([{}, {}, {}, {}])
        setGameScore(0)
        setCurrentRound(1)
        setUserInput({})
        setTotalPoints(0)
    }
    const handleEndRound = () => {
        const updatedRounds = [...rounds];
        updatedRounds[currentRound - 1] = { points: totalPoints };
        setRounds(updatedRounds);

        clearUserInputs();
        if (currentRound < 4) {
            setCurrentRound(prevRound => prevRound + 1);
        }
        const newGameScore = updatedRounds.reduce((acc, round) => acc + (round.points || 0), 0);
        setGameScore(newGameScore);
    }
    const handleChangeRound = (selectedRound) => {
        setCurrentRound(parseInt(selectedRound));
    }

    const handleNaturalBook = (increment) => {
        if (totalPoints < 500 && !increment) {
            return
        }
        const incrementValue = increment ? 500 : -500;
        setTotalPoints(prevPoints => prevPoints + incrementValue);
    }
    const handleUnnaturalBook = (increment) => {
        if (totalPoints < 300 && !increment) {
            return
        }
        const incrementValue = increment ? 300 : -300;
        setTotalPoints(prevPoints => prevPoints + incrementValue);
    }

    return (
        <View style={styles.container}>
            <View style={styles.topHalf}>
                <View style={styles.leftColumn}>
                    <View style={[styles.box, styles.box1]}>
                        <SplitButton
                            leftLabel="Natural Book"
                            rightLabel="Undo"
                            onLeftPress={() => handleNaturalBook(true)}
                            onRightPress={() => handleNaturalBook(false)}
                        />
                    </View>
                    <View style={styles.box}>
                        <SplitButton
                            leftLabel="Unnatural Book"
                            rightLabel="Undo"
                            onLeftPress={() => handleUnnaturalBook(true)}
                            onRightPress={() => handleUnnaturalBook(false)}
                        />
                    </View>
                </View>
                <View style={styles.rightColumn}>
                    <View style={[styles.box, styles.parentScore]}>
                        <RoundScore totalPoints={totalPoints} currentRound={currentRound} rounds={rounds} onChangeRound={handleChangeRound} gameScore={gameScore}/>
                    </View>
                </View>

            </View>
            <View style={styles.theCardGrid}>
                <CardGrid updateTotalPoints={updateTotalPoints} userInput={userInput} setUserInput={setUserInput}/>
            </View>
            <FooterButtons onEndRound={handleEndRound} onEndGame={endGame}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topHalf: {
        marginTop: 50,
        marginLeft: 20,
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100,
    },
    leftColumn: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
        height: "100%",
    },
    rightColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    theCardGrid: {
        flex: 1,
        width: "100%",
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    box1: {
        marginBottom: 10,
    },
    parentScore: {
        zIndex: 100,
    },
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