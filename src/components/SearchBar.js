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
          strMeal: "Charuto de Couve",
          strMealThumb: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/06/charuto.jpg",
          idMeal: 1
        },
        {
          strMeal: "Strogonoff",
          strMealThumb: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/06/Strogonoff-frango.jpg",
          idMeal: 2
        },
        {
          strMeal: "Abobrinha recheada",
          strMealThumb: "https://www.mundoboaforma.com.br/wp-content/uploads/2021/06/abobrinha-fit.jpg",
          idMeal: 3
        }]);
        setActive('diabetes');
    } else {
      axios.post(`http://localhost:3000/filter`, { searchPhrase }).then((res) => {
            if (!res.data.length) {
              setRecipes([{ strMeal: 'Não há receitas com este nome', strMealThumb: 'https://i.ibb.co/C1jLQvr/sad-svgrepo-com-1.png', idMeal: '' }])
            } else {
              setRecipes(res.data);
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