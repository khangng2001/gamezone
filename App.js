import { StatusBar } from 'expo-status-bar';
import Home from './screens/home';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});


export default function App() {
  const [fontsLoad, setFontsLoaded] = useState(false);

  if (fontsLoad) {
    return (
      <Navigator/>
      
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError = {console.warn}
      />
    )
  }

}


