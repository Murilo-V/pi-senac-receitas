import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, View } from "react-native";
import DefaultText from "../components/DefaultText";

const Recipe = ({ route }) => {
    const { recipe } = route.params;
    return (
        <ScrollView style={{ backgroundColor: '#B30B61', height: '100%', paddingHorizontal: 30, paddingVertical: 20 }}>
            <DefaultText family='bold' value={recipe.strMeal} style={{ color: '#FFE31C', fontSize: 29, marginBottom: 20 }} />
            <LinearGradient colors={['rgba(255, 227, 28, 0.44)', 'rgba(179, 11, 97, 0.7)']} style={{ padding: 10, borderRadius: 10, borderColor: '#FFE31C', borderWidth: 1 }}>
                <Image
                    style={{ width: '100%', height: 200, borderRadius: 10 }}
                    source={{ uri: recipe.strMealThumb }}
                />

                <DefaultText family='medium' value='Ingredientes' style={{ color: '#FFE31C', fontSize: 20, textDecorationLine: 'underline', marginTop: 20 }} />
                {recipe.strIngredient1 && <DefaultText family='medium' value={`- ${recipe.strIngredient1}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient2 && <DefaultText family='medium' value={`- ${recipe.strIngredient2}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient3 && <DefaultText family='medium' value={`- ${recipe.strIngredient3}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient4 && <DefaultText family='medium' value={`- ${recipe.strIngredient4}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient5 && <DefaultText family='medium' value={`- ${recipe.strIngredient5}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient6 && <DefaultText family='medium' value={`- ${recipe.strIngredient6}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient7 && <DefaultText family='medium' value={`- ${recipe.strIngredient7}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient8 && <DefaultText family='medium' value={`- ${recipe.strIngredient8}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient9 && <DefaultText family='medium' value={`- ${recipe.strIngredient9}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient10 && <DefaultText family='medium' value={`- ${recipe.strIngredient10}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient11 && <DefaultText family='medium' value={`- ${recipe.strIngredient11}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient12 && <DefaultText family='medium' value={`- ${recipe.strIngredient12}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient13 && <DefaultText family='medium' value={`- ${recipe.strIngredient13}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient14 && <DefaultText family='medium' value={`- ${recipe.strIngredient14}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient15 && <DefaultText family='medium' value={`- ${recipe.strIngredient15}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient16 && <DefaultText family='medium' value={`- ${recipe.strIngredient16}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient17 && <DefaultText family='medium' value={`- ${recipe.strIngredient17}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient18 && <DefaultText family='medium' value={`- ${recipe.strIngredient18}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient19 && <DefaultText family='medium' value={`- ${recipe.strIngredient19}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}
                {recipe.strIngredient20 && <DefaultText family='medium' value={`- ${recipe.strIngredient20}`} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />}

                <DefaultText family='medium' value='Modo de preparo' style={{ color: '#FFE31C', fontSize: 20, textDecorationLine: 'underline', marginTop: 20 }} />
                <DefaultText family='medium' value={recipe.strInstructions} style={{ color: '#FFE31C', fontSize: 15, marginTop: 6 }} />
            </LinearGradient>
            <View style={{ height: 90, width: 10 }} />
        </ScrollView>
    )
};

export default Recipe;