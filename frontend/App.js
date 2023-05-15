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
  const [active, setActive] = useState('diabetes');
  const [recipes, setRecipes] = useState([
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