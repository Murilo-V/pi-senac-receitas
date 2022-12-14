import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import Cards from './src/components/Cards';
import DefaultText from './src/components/DefaultText';
import MealsFilter from './src/components/MealsFilter';
import SearchBar from './src/components/SearchBar';
import RecipeContext from './src/context/RecipeContext';
import Recipe from './src/pages/Recipe';

function Home({ navigation }) {
 
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [active, setActive] = useState('Breakfast');
  const [recipes, setRecipes] = useState([
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

 

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, active, setActive }}>
      <TouchableWithoutFeedback onPress={() => {
      setClicked(false);
      setSearchPhrase('');
      Keyboard.dismiss();
    }}>
      <View
      style={{ 
          flex: 1,
          backgroundColor: '#B30B61',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingHorizontal: 25,
          paddingVertical: 50,
        }}
    >
      <DefaultText family='bold' value='Cozinhar é um ato de amor ❤️' style={{ color: '#FFE31C', fontSize: 22}} />
      <SearchBar clicked={clicked} setClicked={setClicked} searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} />
      <MealsFilter />
      <Cards navigation={navigation} recipes={recipes} />
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
    </RecipeContext.Provider>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    'Epilogue': require('./assets/fonts/Epilogue-Regular.ttf'),
    'Epilogue-Medium': require('./assets/fonts/Epilogue-Medium.ttf'),
    'Epilogue-SemiBold': require('./assets/fonts/Epilogue-SemiBold.ttf'),
    'Epilogue-Bold': require('./assets/fonts/Epilogue-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Recipe" component={Recipe} options={{ title: 'Detalhes da Receita', headerStyle: {
            backgroundColor: '#FFE31C',
          }, headerTintColor: '#B30B61', headerTitleStyle: { fontFamily: 'Epilogue-Bold' }, headerBackTitleVisible: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;