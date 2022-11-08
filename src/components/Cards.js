import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import DefaultText from "./DefaultText";

const Cards = ({ recipes }) => {
    return (
        <View style={{ width: '100%', marginTop: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
               {recipes[0] && <TouchableOpacity style={{ ...styles.touchableOpacity, marginHorizontal: 14, flexShrink: 1, width: 200 }}>
                    <LinearGradient style={styles.linearGradient} colors={['rgba(179, 11, 97, 0.4)', 'rgba(255, 227, 28, 0.8)']}>
                        <Image
                            style={styles.smallLogo}
                            source={{ uri: recipes[0].strMealThumb }}
                        />
                        <DefaultText value={recipes[0].strMeal} family='semiBold' style={{ color: '#B30B61', fontSize: 20, alignSelf: 'flex-start' }} />
                    </LinearGradient>
                </TouchableOpacity>} 
                {recipes[1] && <TouchableOpacity style={{ ...styles.touchableOpacity, marginHorizontal: 14, flexShrink: 1, width: 200 }}>
                    <LinearGradient style={styles.linearGradient} colors={['rgba(179, 11, 97, 0.4)', 'rgba(255, 227, 28, 0.8)']}>
                        <Image
                            style={styles.smallLogo}
                            source={{ uri: recipes[1].strMealThumb }}
                        />
                        <DefaultText value={recipes[1].strMeal} family='semiBold' style={{ color: '#B30B61', fontSize: 20, alignSelf: 'flex-start' }} />
                    </LinearGradient>
                </TouchableOpacity>}
            </View>
            {recipes[2] && <TouchableOpacity style={{ ...styles.touchableOpacity, marginTop: 18, width: 300, alignSelf: 'center' }}>
                <LinearGradient style={styles.linearGradient} colors={['rgba(179, 11, 97, 0.4)', 'rgba(255, 227, 28, 0.8)']}>
                    <Image
                        style={styles.largeLogo}
                        source={{ uri: recipes[2].strMealThumb }}
                    />
                    <DefaultText value={recipes[2].strMeal} family='semiBold' style={{ color: '#B30B61', fontSize: 20, alignSelf: 'flex-start' }} />
                </LinearGradient>
            </TouchableOpacity>}
        </View>
    )
};

export default Cards;

const styles = StyleSheet.create({
    touchableOpacity: {
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.54,
        shadowRadius: 5.46,
        elevation: 9,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
    },
    largeLogo: {
        width: 290,
        height: 130,
        borderRadius: 10,
        marginBottom: 20
      },
    smallLogo: {
        width: 120,
        height: 90,
        borderRadius: 10,
        marginBottom: 20
    },
  });