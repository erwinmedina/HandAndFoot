import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useFonts, Sriracha_400Regular } from "@expo-google-fonts/dev"
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";

export default function RulesScreen() {

    let [headerThePack, setHeaderThePack] = useState(true)
    let [headerObjective, setHeaderObjective] = useState(true)
    let [headerCardValues, setHeaderCardValues] = useState(true)
    let [headerRounds, setHeaderRounds] = useState(true)
    let [headerTheDeal, setHeaderTheDeal] = useState(true)
    let [headerThePlay, setHeaderThePlay] = useState(true)
    let [headerMelds, setHeaderMelds] = useState(true)
    let [headerKeepScore, setHeaderKeepScore] = useState(true)

    let [fontsLoaded] = useFonts({
        Sriracha_400Regular,
    })

    const handleHeader = (header, setHeader) => {
        setHeader(!header)
    }

    if (!fontsLoaded) {
        return <AppLoading/>
    }
    
    return (
        <SafeAreaView>

            <ScrollView contentContainerStyle={styles.container}>

                {/* ******** */}
                {/* THE PACK */}
                {/* ******** */}
                <View>
                    <TouchableOpacity style={headerThePack ? styles.headerWrapper : styles.headerWrapedCollapsed} onPress={() => handleHeader(headerThePack, setHeaderThePack)}>
                        <Text style={styles.heading}>The Pack</Text>
                        <Ionicons name={headerThePack ? "chevron-up" : "chevron-down"} size={24} color="black" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                {headerThePack && (
                    <Text style={styles.text}>Hand and Foot uses five to six decks of cards with Jokers.</Text>
                )}

                {/* ********* */}
                {/* OBJECTIVE */}
                {/* ********* */}
                <View>
                    <TouchableOpacity style={headerObjective ? styles.headerWrapper : styles.headerWrapedCollapsed} onPress={() => handleHeader(headerObjective, setHeaderObjective)}>
                        <Text style={styles.heading}>Game Objective</Text>
                        <Ionicons name={headerObjective ? "chevron-up" : "chevron-down"} size={24} color="black" style={styles.icon}/>
                    </TouchableOpacity>
                </View>

                {headerObjective && (
                    <Text style={styles.text}>
                        Be the first to get rid of all your cards, 'hand' first, and then 'foot'.
                    </Text>
                )}

                {/* *********** */}
                {/* CARD VALUES */}
                {/* *********** */}
                <View>
                    <TouchableOpacity style={headerCardValues ? styles.headerWrapper : styles.headerWrapedCollapsed} onPress={() => handleHeader(headerCardValues, setHeaderCardValues)}>
                        <Text style={styles.heading}>Card Values / Scoring</Text>
                        <Ionicons name={headerCardValues ? "chevron-up" : "chevron-down"} size={24} color="black" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                {headerCardValues && (
                    <View>
                        <Text style={styles.text}>Jokers (Wild Cards) - 50 points</Text>
                        <Text style={styles.text}>Deuces (Wild Cards) - 20 Points</Text>
                        <Text style={styles.text}>Aces - 20 Points</Text>
                        <Text style={styles.text}>Eights through Kings - 10 Points</Text>
                        <Text style={styles.text}>Threes through Sevens - 5 Points</Text>
                    </View>

                )}

                {/* ********** */}
                {/* THE ROUNDS */}
                {/* ********** */}
                <View>
                    <TouchableOpacity style={headerRounds ? styles.headerWrapper : styles.headerWrapedCollapsed} onPress={() => handleHeader(headerRounds, setHeaderRounds)}>
                        <Text style={styles.heading}>Rounds</Text>
                        <Ionicons name={headerRounds ? "chevron-up" : "chevron-down"} size={24} color="black" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                {headerRounds && (
                    <View>
                        <Text style={styles.text}>
                            A game consists of four rounds. Each round has a minimum meld requirement that increases with each round.
                        </Text>
                        
                        <Text style={styles.subheading}>Round 1:</Text>
                        <Text style={styles.text}>Cards points must total at least 50 to start play.</Text>

                        <Text style={styles.subheading}>Round 2:</Text>
                        <Text style={styles.text}>Cards points must total at least 90 to start play.</Text>

                        <Text style={styles.subheading}>Round 3:</Text>
                        <Text style={styles.text}>Cards points must total at least 120 to start play.</Text>

                        <Text style={styles.subheading}>Round 4:</Text>
                        <Text style={styles.text}>Cards points must total at least 150 to start play.</Text>
                    </View>
                )}

                {/* ******** */}
                {/* THE DEAL */}
                {/* ******** */}
                <View>
                    <TouchableOpacity style={headerTheDeal ? styles.headerWrapper : styles.headerWrapedCollapsed} onPress={() => handleHeader(headerTheDeal, setHeaderTheDeal)}>
                        <Text style={styles.heading}>The Deal</Text>
                        <Ionicons name={headerTheDeal ? "chevron-up" : "chevron-down"} size={24} color="black" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                {headerTheDeal && (
                    <Text style={styles.text}>
                        Shuffle the decks of cards thoroughly. Each player is dealt 11 cards. This first set of 11 cards is called a 'Hand'. The 'Hand' can be picked up and examined by each player.{"\n\n "}
                        Each player is then dealt a second set of 11 cards. This second set of dealt cards is called the 'Foot', which is played when the ‘Hand’ has been used up, and is kept face-down.{"\n\n "}
                        Now, each player has two sets of cards, one set that he has seen, and another set that is kept face-down.{"\n\n "}
                        The remainder of the cards are to be kept in the center of the table and are called the 'Stock'.{"\n\n "}
                        The topmost card of the Stock pile is turned face-up as a discard pile. If it turns out to be a red Three, a Deuce, or a Joker, then this card goes back into the pile, and another card is drawn for the top.
                    </Text>
                )}

                {/* ******** */}
                {/* THE PLAY */}
                {/* ******** */}
                <View>
                    <TouchableOpacity style={headerThePlay ? styles.headerWrapper : styles.headerWrapedCollapsed} onPress={() => handleHeader(headerThePlay, setHeaderThePlay)}>
                        <Text style={styles.heading}>The Play</Text>
                        <Ionicons name={headerThePlay ? "chevron-up" : "chevron-down"} size={24} color="black" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                {headerThePlay && (
                    <Text style={styles.text}>
                        The objective is to get rid of all the cards from your 'Hand', and then 'Foot' by melding them. A Meld is a set of 3 - 7 cards of the same rank, that are placed face-up. It cannot have less than three cards or more than seven cards. 
                        A Meld belongs to the team, and not any individual player. After a Meld of three or more cards starts, more cards can be added to it until there are seven cards in the pile. It then becomes a 'Closed Pile' or 'Book'. 
                        Deuces and Jokers can be used in melds along with at least four natural cards, but not the red and black Threes.
                    </Text>
                )}

                {/* ************** */}
                {/* TYPES OF MELDS */}
                {/* ************** */}
                <View>
                    <TouchableOpacity style={headerMelds ? styles.headerWrapper : styles.headerWrapedCollapsed} onPress={() => handleHeader(headerMelds, setHeaderMelds)}>
                        <Text style={styles.heading}>Types of Melds</Text>
                        <Ionicons name={headerMelds ? "chevron-up" : "chevron-down"} size={24} color="black" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                {headerMelds && (
                    <Text style={styles.text}>
                        'Clean' or natural meld - Seven real cards of the same rank ('Red' Book).{"\n\n "}
                        'Dirty' or wild meld - A minimum of four cards of the same rank, and at least one wild card. Example: 5 Nines and two Wild Cards ('Black' Book).{"\n\n "}
                        The melds should not consist of all Wild Cards. When a Book is complete, it is identified as Red (Clean) or Black (Dirty). The Black must have a Wild Card turned to show that it is a Dirty Meld.{"\n\n "}
                        Red Book - All natural cards, no Wild cards (500 Points).{"\n\n "}
                        Black Books - At least 4 natural cards and Wild Cards (300 Points).{"\n\n "}
                        Each player picks up their 'hand', and play begins with the player on the left side of the dealer. The player is supposed to draw two cards from the Stock on each turn, and then discard one card on each turn. If a red Three is drawn, it is put down immediately and replaced with a new card from the deck.{"\n\n"}
                        The player also has the option of 'picking up the pile', which means that he can take the top seven cards from the discard pile. However, ensure that the top of the discard pile is not a black Three. The player must hold two cards of the same rank as the top card. These three cards (the two he is holding and the top discard) must be immediately laid out, possibly along with the other cards he is holding. Also keep in mind that, the player's team must have melded till then, or he is melding while picking up the pile.{"\n\n"}
                        Only the top card of the discard pile can be used towards the points needed for melding: the 6 other cards cannot be used towards points needed for the meld.{"\n\n"}
                        To meld, all the cards that are played must equal the number of points that are required for that round. Wild cards have bonus points.{"\n\n"}
                        If the player chooses to pick up the pile, they must make a meld of the top card of the pile. As you go on making melds, the number of cards in 'Hand' keep reducing, and you then eventually go on to the 'Foot'. You need to announce that you are playing your 'Foot', and then continue playing. If you happen to lay out all other cards except one, then you can discard it. This marks the end of your turn.{"\n\n"}
                        When the 'Book' of seven is completed, the player has to place them in a single stack, with the topmost card being a Red for 'Clean' and Black for 'Dirty'.{"\n\n"}
                        To 'Go Out', the player must get a Clean and Dirty, and get completely rid of the cards. Players must discard the final card, and not 'simply run out of cards'.
                    </Text>
                )}

                {/* ***************** */}
                {/* HOW TO KEEP SCORE */}
                {/* ***************** */}
                <View>
                    <TouchableOpacity style={headerKeepScore ? styles.headerWrapper : styles.headerWrapedCollapsed} onPress={() => handleHeader(headerKeepScore, setHeaderKeepScore)}>
                        <Text style={styles.heading}>How to Keep Score</Text>
                        <Ionicons name={headerKeepScore ? "chevron-up" : "chevron-down"} size={24} color="black" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                {headerKeepScore && (
                    <Text style={styles.text}>
                        By using this app, of course!{"\n\n"}
                        When a player goes out, it marks the end of the round. The players are then supposed to calculate their scores, recording the 'meld count' first. The players then calculate their second point count, which is calculated from each card's value that is played. If any card is left in the player's hand, it will count against the score for that round.{"\n\n"}
                        The person or team with the highest score wins.
                    </Text>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 10,
    },
    headerWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: 'rgba(0,0,0,.5)',
        borderBottomWidth: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "lightgray",
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -5},
        shadowOpacity: .5,
        shadowRadius: 5,
        paddingLeft: 5,
        marginTop: 20,
        marginBottom: 3,
    },
    headerWrapedCollapsed: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "lightgray",
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 5},
        shadowOpacity: .5,
        shadowRadius: 2,
        paddingLeft: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: "Sriracha_400Regular",
        padding: 2,
    },
    subheading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        fontFamily: "Sriracha_400Regular",
        textDecorationLine: "underline",
    },
    text: {
        marginTop: 5,
        fontSize: 18,
        lineHeight: 24,
        marginBottom: 10,
        fontFamily: "Sriracha_400Regular",
    },
    icon: {
        marginRight: 10,
    },
});