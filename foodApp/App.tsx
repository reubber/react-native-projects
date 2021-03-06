import React from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  if(!fontLoaded) {
    return ( 
      <AppLoading
        startAsync={fetchFonts}
        onFinish={()=> setFontLoaded(true)}
        onError={()=> setFontLoaded(false)}
      />
    )}

  return (
    <MealsNavigator />
  );
}
