import { Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import RecipeContext from "../context/RecipeContext";
import DefaultText from "./DefaultText";

const gradients = {
    enabled: ['#FFE31C', '#D16146'],
    disabled: ['rgba(255, 227, 28, 0.44)', 'rgba(179, 11, 97, 0.7)']
}

const MealsFilter = () => {
    const { setRecipes, active, setActive } = useContext(RecipeContext);

    const filterByCategory = async (category) => {
        axios.post(`http://localhost:3000/recipes`, { type: category }).then((res) => {
            setRecipes(res.data);
            setActive(category);
        }).catch((err) => console.error(err));
    };
    return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 35, alignSelf: 'center' }}>
            <TouchableOpacity style={active === 'diabetes' ? styles.touchableOpacityEnabled : styles.touchableOpacityDisabled} onPress={() => filterByCategory('diabetes')}>
                <LinearGradient style={active === 'diabetes' ? styles.linearGradientEnabled : styles.linearGradientDisabled} colors={active === 'diabetes' ? gradients.enabled : gradients.disabled}>
                    <FontAwesome5
                        name="candy-cane"
                        size={30}
                        color={active === 'diabetes' ? '#B30B61' : '#FFE31C'}
                    />
                </LinearGradient>
                <DefaultText family='semiBold' value='Diabéticos' style={{ fontSize: 10, color: '#FFE31C', marginTop: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity style={active === 'lactose' ? styles.touchableOpacityEnabled : styles.touchableOpacityDisabled} onPress={() => filterByCategory('lactose')}>
                <LinearGradient style={active === 'lactose' ? styles.linearGradientEnabled : styles.linearGradientDisabled} colors={active === 'lactose' ? gradients.enabled : gradients.disabled}>
                    <MaterialIcons
                        name="lunch-dining"
                        size={30}
                        color={active === 'lactose' ? '#B30B61' : '#FFE31C'}
                    />
                </LinearGradient>
                <DefaultText family='semiBold' value='Sem Lactose' style={{ fontSize: 10, color: '#FFE31C', marginTop: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity style={active === 'vegano' ? styles.touchableOpacityEnabled : styles.touchableOpacityDisabled} onPress={() => filterByCategory('vegano')}>
                <LinearGradient style={active === 'vegano' ? styles.linearGradientEnabled : styles.linearGradientDisabled} colors={active === 'vegano' ? gradients.enabled : gradients.disabled}>
                    <Entypo
                        name="leaf"
                        size={30}
                        color={active === 'vegano' ? '#B30B61' : '#FFE31C'}
                    />
                </LinearGradient>
                <DefaultText family='semiBold' value='Veganos' style={{ fontSize: 10, color: '#FFE31C', marginTop: 8 }} />
            </TouchableOpacity>
        </View>
    )
};

export default MealsFilter;

const styles = StyleSheet.create({
    linearGradientEnabled: { alignItems: 'center', justifyContent: 'center', borderRadius: 8, padding: 20 },
    linearGradientDisabled: { alignItems: 'center', justifyContent: 'center', borderRadius: 8, padding: 20, borderColor: '#FFE31C', borderWidth: 0.5 },
    touchableOpacityEnabled: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        marginHorizontal: 2,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    touchableOpacityDisabled: { justifyContent: 'center', alignItems: 'center', width: 70, marginHorizontal: 2 }
  });