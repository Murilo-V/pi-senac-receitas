import { StyleSheet, TextInput, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={styles.searchBar}
      >
        <TextInput
          style={styles.input}
          placeholder="Digite uma receita"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
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
      </View>
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
  },
  searchBar: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    paddingLeft: 20,
    width: "100%",
  },
});