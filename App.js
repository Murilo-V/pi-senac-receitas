import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import DefaultText from './src/components/DefaultText';
import SearchBar from './src/components/SearchBar';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Epilogue': require('./assets/fonts/Epilogue-Regular.ttf'),
    'Epilogue-Medium': require('./assets/fonts/Epilogue-Medium.ttf'),
    'Epilogue-SemiBold': require('./assets/fonts/Epilogue-SemiBold.ttf'),
    'Epilogue-Bold': require('./assets/fonts/Epilogue-Bold.ttf'),
  });
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');

  if (!fontsLoaded) {
    return null;
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      setClicked(false);
      setSearchPhrase('');
    }}>
      <View
      style={{ 
          flex: 1,
          backgroundColor: '#B30B61',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingHorizontal: 25,
          paddingVertical: 70,
        }}
    >
      <DefaultText family='bold' value='Cozinhar é um ato de amor ❤️' style={{ color: '#FFE31C', fontSize: 22}} />
      <SearchBar clicked={clicked} setClicked={setClicked} searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} />
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}
