import { StyleSheet, View, Text } from "react-native"
import RoundScore from "./RoundScore"
import { useState } from "react"
import CardGrid from "./CardGrid";
import FooterButtons from "./FooterButtons";
import BookInput from "./BookInput";
import { useFonts, Sriracha_400Regular } from "@expo-google-fonts/dev"
import AppLoading from "expo-app-loading";
import RoundPopUp from "./RoundPopUp";
import Confirmation from "./Confirmation";

export default function BoxLayoutHeader() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [endGamePopUp, setEndGamePopUp] = useState(false);
    const [totalPoints, setTotalPoints] = useState(0);
    const [userInput, setUserInput] = useState({})
    const [currentRound, setCurrentRound] = useState(1);
    const [rounds, setRounds] = useState([{}, {}, {}, {}]);
    const [gameScore, setGameScore] = useState(0);
    const [naturalBookCount, setNaturalBookCount] = useState(0);
    const [UnnaturalBookCount, setUnnaturalBookCount] = useState(0);

    let [fontsLoaded] = useFonts({
        Sriracha_400Regular,
    })
    if (!fontsLoaded) {
        return <AppLoading/>
    }

    const handleClosePopup = () => {
        setPopupVisible(false);
    }

    const handleContinue = () => {
        const updatedRounds = [...rounds];
        updatedRounds[currentRound - 1] = { points: totalPoints };
        setRounds(updatedRounds);
        
        clearUserInputs();
        if (currentRound < 4) {
            setCurrentRound(prevRound => prevRound + 1);
        }
        const newGameScore = updatedRounds.reduce((acc, round) => acc + (round.points || 0), 0);
        setGameScore(newGameScore);
        setPopupVisible(false);
    }

    const updateTotalPoints = (newPoints) => {
        setTotalPoints(newPoints);
    }

    const clearUserInputs = () => {
        setUserInput({})
        setTotalPoints(0);
        setNaturalBookCount(0);
        setUnnaturalBookCount(0);
    }

    const endGame = () => {
        setRounds([{}, {}, {}, {}])
        setGameScore(0)
        setCurrentRound(1)
        setUserInput({})
        setTotalPoints(0)
        setNaturalBookCount(0);
        setUnnaturalBookCount(0);
        setEndGamePopUp(false);
    }
    const handleEndGamePopUpOpen = () => {
        setEndGamePopUp(true);
    }
    const handleEndGamePopUpClose = () => {
        setEndGamePopUp(false);
    }

    const handleEndRound = () => {
        setPopupVisible(true);
    }

    const handleChangeRound = (selectedRound) => {
        setCurrentRound(parseInt(selectedRound));
    }

    const handleNaturalBook = (increment) => {
        if (increment) {
            setNaturalBookCount(prevCount => prevCount + 1);
            setTotalPoints(prevPoints => prevPoints + 500);
        } else {
            if (naturalBookCount > 0) {
                setNaturalBookCount(prevCount => prevCount - 1);
                setTotalPoints(prevPoints => prevPoints - 500);
            }
        }
    }
    const handleUnnaturalBook = (increment) => {
        if (increment) {
            setUnnaturalBookCount(prevCount => prevCount + 1);
            setTotalPoints(prevPoints => prevPoints + 300);
        } else {
            if (UnnaturalBookCount > 0) {
                setUnnaturalBookCount(prevCount => prevCount - 1);
                setTotalPoints(prevPoints => prevPoints - 300);
            }
        }
    }
    const tableData = [
        ['Natural', naturalBookCount],
        ['Unnatural', UnnaturalBookCount],
        ['Ace', userInput[1] || 0],
        ['2', userInput[2] || 0],
        ['Black 3', userInput[3] || 0],
        ['Red 3', userInput[4] || 0],
        ['4', userInput[5] || 0],
        ['5', userInput[6] || 0],
        ['6', userInput[7] || 0],
        ['7', userInput[8] || 0],
        ['8', userInput[9] || 0],
        ['9', userInput[10] || 0],
        ['10', userInput[11] || 0],
        ['Jack', userInput[12] || 0],
        ['Queen', userInput[13] || 0],
        ['King', userInput[14] || 0],
        ['Joker', userInput[15] || 0],
    ];

    return (
        <View style={styles.container}>
            <View style={styles.topHalf}>
                <View style={styles.leftColumn}>
                    <View style={[styles.box, styles.box1]}>
                        <BookInput 
                            bookType={"Natural Book"} 
                            count={naturalBookCount}
                            onIncrement={() => handleNaturalBook(true)}
                            onDecrement={() => handleNaturalBook(false)}
                        />
                    </View>
                    <View style={styles.box}>
                    <BookInput 
                            bookType={"Unnatural Book"} 
                            count={UnnaturalBookCount}
                            onIncrement={() => handleUnnaturalBook(true)}
                            onDecrement={() => handleUnnaturalBook(false)}
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
            <FooterButtons onEndRound={handleEndRound} onEndGame={handleEndGamePopUpOpen}/>
            <RoundPopUp
                visible={popupVisible}
                onClose={handleClosePopup}
                onContinue={handleContinue}
                tableData={tableData}
                totalSum={totalPoints}
                currentRound={currentRound}
            />
            <Confirmation
                visible={endGamePopUp}
                onClose={handleEndGamePopUpClose}
                onConfirm={endGame}
            />
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
    },
    leftColumn: {
        width: "50%",
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