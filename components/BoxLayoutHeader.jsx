import { StyleSheet, View, Text } from "react-native"
import RoundScore from "./RoundScore"
import { useState, useEffect } from "react"
import CardGrid from "./CardGrid";
import FooterButtons from "./FooterButtons";
import BookInput from "./BookInput";
import { useFonts, Sriracha_400Regular } from "@expo-google-fonts/dev"
import AppLoading from "expo-app-loading";
import RoundPopUp from "./RoundPopUp";
import Confirmation from "./Confirmation";
import FinalReport from "./FinalReport";
import PlayedSection from "./PlayedSection";

const calculateCardPoints = (playedCards, unplayedCards) => {
    let totalPoints = 0;
    for (let i = 1; i <= 15; i++) {
        const playedCardValue = (playedCards[i] && playedCards[i].value * playedCards[i].quantity) || 0;
        const unplayedCardValue = (unplayedCards[i + 15] && unplayedCards[i + 15].value * unplayedCards[i + 15].quantity) || 0;
        totalPoints += playedCardValue - unplayedCardValue;
    }
    return totalPoints;
};

export default function BoxLayoutHeader() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [endGamePopUp, setEndGamePopUp] = useState(false);
    const [finalReport, setFinalReport] = useState(false);
    const [activeSection, setActiveSection] = useState("played");
    const [playedCards, setPlayedCards] = useState({});
    const [unplayedCards, setUnplayedCards] = useState({});
    const [cardPoints, setCardPoints] = useState(0);
    const [bookPoints, setBookPoints] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0);
    const [currentRound, setCurrentRound] = useState(1);
    const [rounds, setRounds] = useState([{}, {}, {}, {}]);
    const [gameScore, setGameScore] = useState(0);
    const [naturalBookCount, setNaturalBookCount] = useState(0);
    const [unnaturalBookCount, setUnnaturalBookCount] = useState(0);

    const playedCardList = [
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
    const unplayedCardList = [
        { id: 16, imageName: require('../assets/images/ace_of_spades.png'), value: 20, name: 'Ace'},
        { id: 17, imageName: require('../assets/images/2_of_clubs.png'), value: 20, name: '2'},
        { id: 18, imageName: require('../assets/images/3_of_clubs.png'), value: 0, name: 'Black 3'},
        { id: 19, imageName: require('../assets/images/3_of_diamonds.png'), value: -100, name: 'Red 3'},
        { id: 20, imageName: require('../assets/images/4_of_clubs.png'), value: 5, name: '4'},
        { id: 21, imageName: require('../assets/images/5_of_hearts.png'), value: 5, name: '5'},
        { id: 22, imageName: require('../assets/images/6_of_clubs.png'), value: 5, name: '6'},
        { id: 23, imageName: require('../assets/images/7_of_diamonds.png'), value: 5, name: '7'},
        { id: 24, imageName: require('../assets/images/8_of_spades.png'), value: 10, name: '8'},
        { id: 25, imageName: require('../assets/images/9_of_hearts.png'), value: 10, name: '9'},
        { id: 26, imageName: require('../assets/images/10_of_clubs.png'), value: 10, name: '10'},
        { id: 27, imageName: require('../assets/images/jack_of_diamonds2.png'), value: 10, name: 'Jack'},
        { id: 28, imageName: require('../assets/images/queen_of_hearts2.png'), value: 10, name: 'Queen'},
        { id: 29, imageName: require('../assets/images/king_of_spades2.png'), value: 10, name: 'King'},
        { id: 30, imageName: require('../assets/images/black_joker.png'), value: 50, name: 'Joker'},
    ];

    let [fontsLoaded] = useFonts({
        Sriracha_400Regular,
    })
    if (!fontsLoaded) {
        return <AppLoading/>
    }

    const calculateTotalPoints = (cardPoints, bookPoints) => {
        console.log(cardPoints, bookPoints);
        return cardPoints + bookPoints;
    }

    const handleClosePopup = () => {
        setPopupVisible(false);
    }

    const handleSectionChange = (section) => {
        setActiveSection(section);
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
        if (currentRound == 4) {
            handleFinalReportOpen();
        }
    }

    const updatePlayedCards = (cardId, quantity, value) => {
        const updatedPlayedCards = {
            ...playedCards,
            [cardId]: { quantity, value },
        };
        setPlayedCards(updatedPlayedCards);
        const newCardPoints = calculateCardPoints(updatedPlayedCards, unplayedCards);
        setCardPoints(newCardPoints);
        setTotalPoints(calculateTotalPoints(newCardPoints, bookPoints));
    };

    const updateUnplayedCards = (cardId, quantity, value) => {
        const updatedUnplayedCards = {
            ...unplayedCards,
            [cardId]: { quantity, value },
        };
        setUnplayedCards(updatedUnplayedCards);
        const newCardPoints = calculateCardPoints(playedCards, updatedUnplayedCards);
        setCardPoints(newCardPoints);
        setTotalPoints(calculateTotalPoints(newCardPoints, bookPoints));
    };

    const clearUserInputs = () => {
        setPlayedCards({})
        setUnplayedCards({})
        setTotalPoints(0);
        setNaturalBookCount(0);
        setUnnaturalBookCount(0);
    }

    const endGame = () => {
        setRounds([{}, {}, {}, {}])
        setGameScore(0)
        setCurrentRound(1)
        setPlayedCards({})
        setUnplayedCards({})
        setTotalPoints(0)
        setNaturalBookCount(0);
        setUnnaturalBookCount(0);
        setEndGamePopUp(false);
        setFinalReport(false)
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
    const handleFinalReportOpen = () => {
        setEndGamePopUp(false);
        setFinalReport(true);
    }

    const handleChangeRound = (selectedRound) => {
        setCurrentRound(parseInt(selectedRound));
    }

    const handleNaturalBook = (increment) => {
        if (increment) {
            setNaturalBookCount(naturalBookCount + 1);
            const newBookPoints = (naturalBookCount+1) * 500 + unnaturalBookCount * 300;
            setBookPoints(newBookPoints);
            setTotalPoints(calculateTotalPoints(cardPoints, newBookPoints));
        } else {
            if (naturalBookCount > 0) {
                setNaturalBookCount(naturalBookCount - 1);
                const newBookPoints = (naturalBookCount-1) * 500 + unnaturalBookCount * 300;
                setBookPoints(newBookPoints);
                setTotalPoints(calculateTotalPoints(cardPoints, newBookPoints));
            }
        }
    }
    const handleUnnaturalBook = (increment) => {
        if (increment) {
            setUnnaturalBookCount(unnaturalBookCount + 1);
            const newBookPoints = naturalBookCount * 500 + (unnaturalBookCount+1) * 300;
            setBookPoints(newBookPoints);
            setTotalPoints(calculateTotalPoints(cardPoints, newBookPoints));
        } else {
            if (unnaturalBookCount > 0) {
                setUnnaturalBookCount(unnaturalBookCount - 1);
                const newBookPoints = naturalBookCount * 500 + (unnaturalBookCount-1) * 300;
                setBookPoints(newBookPoints);
                setTotalPoints(calculateTotalPoints(cardPoints, newBookPoints));
            }
        }
    }
    const tableData = [
        ['Natural', naturalBookCount, "-"],
        ['Unnatural', unnaturalBookCount, "-"],
        ['Ace', playedCards[1]?.quantity || "-", unplayedCards[16]?.quantity || "-"],
        ['2', playedCards[2]?.quantity || "-", unplayedCards[17]?.quantity || "-"],
        ['Black 3', playedCards[3]?.quantity || "-", unplayedCards[18]?.quantity || "-"],
        ['Red 3', playedCards[4]?.quantity || "-", unplayedCards[19]?.quantity || "-"],
        ['4', playedCards[5]?.quantity || "-", unplayedCards[20]?.quantity || "-"],
        ['5', playedCards[6]?.quantity || "-", unplayedCards[21]?.quantity || "-"],
        ['6', playedCards[7]?.quantity || "-", unplayedCards[22]?.quantity || "-"],
        ['7', playedCards[8]?.quantity || "-", unplayedCards[23]?.quantity || "-"],
        ['8', playedCards[9]?.quantity || "-", unplayedCards[24]?.quantity || "-"],
        ['9', playedCards[10]?.quantity || "-", unplayedCards[25]?.quantity || "-"],
        ['10', playedCards[11]?.quantity || "-", unplayedCards[26]?.quantity || "-"],
        ['Jack', playedCards[12]?.quantity || "-", unplayedCards[27]?.quantity || "-"],
        ['Queen', playedCards[13]?.quantity || "-", unplayedCards[28]?.quantity || "-"],
        ['King', playedCards[14]?.quantity || "-", unplayedCards[29]?.quantity || "-"],
        ['Joker', playedCards[15]?.quantity || "-", unplayedCards[30]?.quantity || "-"],
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
                            count={unnaturalBookCount}
                            onIncrement={() => handleUnnaturalBook(true)}
                            onDecrement={() => handleUnnaturalBook(false)}
                        />
                    </View>
                </View>
                <View style={styles.rightColumn}>
                    <View style={styles.box}>
                        <RoundScore totalPoints={totalPoints} currentRound={currentRound} rounds={rounds} onChangeRound={handleChangeRound} gameScore={gameScore}/>
                    </View>
                </View>
            </View>
            <PlayedSection onSectionChange={handleSectionChange}/>
            <View style={styles.theCardGrid}>
                { activeSection === "played" ? (
                        <CardGrid cards={playedCardList} userInput={playedCards} setUserInput={updatePlayedCards}/>
                        ) : (
                        <CardGrid cards={unplayedCardList} userInput={unplayedCards} setUserInput={updateUnplayedCards}/>
                        )
                }
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
                onConfirm={handleFinalReportOpen}
            />
            <FinalReport
                visible={finalReport}
                finalConfirm={endGame}
                rounds={rounds}
                gameScore={gameScore}
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
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    box1: {
        marginBottom: 10,
    },
})