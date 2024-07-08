import { View, StyleSheet } from 'react-native';
import CustomHeader from "../components/CustomHeader";
import BoxLayoutHeader from '@/components/BoxLayoutHeader';
import {LinearGradient} from 'expo-linear-gradient';

export default function HomeScreen() {
    return (
        <LinearGradient
            colors={['#051937', '#474F8B']}
            style={styles.container}
        >
            <View style={styles.container}>
                <CustomHeader/>
                <BoxLayoutHeader/>
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