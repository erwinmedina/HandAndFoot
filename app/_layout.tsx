import { View, StyleSheet } from 'react-native';
import CustomHeader from "../components/CustomHeader";
import BoxLayoutHeader from '@/components/BoxLayoutHeader';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';

export default function HomeScreen() {
    const [playedCards, setPlayedCards] = useState({});
    const [unplayedCards, setUnplayedCards] = useState({});
    const [totalPoints, setTotalPoints] = useState(0);
    const [naturalBookCount, setNaturalBookCount] = useState(0);
    const [unnaturalBookCount, setUnnaturalBookCount] = useState(0);
    const [isGrouped, setIsGrouped] = useState(false);
    const [cardPoints, setCardPoints] = useState(0);
    const [bookPoints, setBookPoints] = useState(0);

    const clearRound = () => {
        setPlayedCards({})
        setUnplayedCards({})
        setTotalPoints(0);
        setCardPoints(0); 
        setBookPoints(0);
        setNaturalBookCount(0);
        setUnnaturalBookCount(0);
    }

    return (
        <LinearGradient
            colors={['#051937', '#474F8B']}
            style={styles.container}
        >
            <View style={styles.container}>
                <CustomHeader 
                    onClear={clearRound}
                    isGrouped={isGrouped}
                    setIsGrouped={setIsGrouped}
                />
                <BoxLayoutHeader
                    playedCards={playedCards}
                    setPlayedCards={setPlayedCards}
                    unplayedCards={unplayedCards}
                    setUnplayedCards={setUnplayedCards}
                    totalPoints={totalPoints}
                    setTotalPoints={setTotalPoints}
                    naturalBookCount={naturalBookCount}
                    setNaturalBookCount={setNaturalBookCount}
                    unnaturalBookCount={unnaturalBookCount}
                    setUnnaturalBookCount={setUnnaturalBookCount}
                    isGrouped={isGrouped}
                    cardPoints={cardPoints}
                    setCardPoints={setCardPoints}
                    bookPoints={bookPoints}
                    setBookPoints={setBookPoints}
                />
            </View>
        </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    homeText: {
        color: 'black',
    },
    content: {
        flex: 1,
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5,
    }
  });