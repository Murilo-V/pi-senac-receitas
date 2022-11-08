import { StyleSheet, TextInput, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useContext, useEffect } from "react";
import RecipeContext from "../context/RecipeContext";
import axios from "axios";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {

  const { setActive, setRecipes } = useContext(RecipeContext);
  useEffect(() => {
    if (searchPhrase === '') {
      setRecipes([
        {
          strMeal: "Breakfast Potatoes",
          strMealThumb: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
          idMeal: "52965"
        },
        {
          strMeal: "English Breakfast",
          strMealThumb: "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
          idMeal: "52895"
        },
        {
          strMeal: "Fruit and Cream Cheese Breakfast Pastries",
          strMealThumb: "https://www.themealdb.com/images/media/meals/1543774956.jpg",
          idMeal: "52957"
        }]);
        setActive('Breakfast');
    } else {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchPhrase}`).then((res) => {
            if (res.data.meals === null) {
              setRecipes([{ strMeal: 'Não há receitas com este nome', strMealThumb: 'https://i.ibb.co/C1jLQvr/sad-svgrepo-com-1.png', idMeal: '' }])
            } else {
              setRecipes(res.data.meals.slice(0,3));
              setActive('');
            }
        }).catch((err) => console.error(err));
    }
  }, [searchPhrase])
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.searchBar}
        colors={['#FFE31C', '#D16146']}
      >
        <TextInput
          style={styles.input}
          placeholder="Digite uma receita"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          placeholderTextColor='#B30B61'
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked ? (
          <Entypo name="cross" size={20} color="#B30B61" style={{ padding: 1, marginRight: 20 }} onPress={() => {
              setSearchPhrase("");
          }}/>
        ) : (<Feather
          name="search"
          size={20}
          color="#B30B61"
          style={{ padding: 1, marginRight: 20 }}
        />)}
      </LinearGradient>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  searchBar: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 15,
    paddingLeft: 20,
    width: "100%",
    fontFamily: 'Epilogue',
    color: '#B30B61'
  },
});