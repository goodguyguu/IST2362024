import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CampgroundsOverviewScreen from './screens/CampgroundsOverviewScreen';
import Colors from "./constants/colors.js"
import React, { useCallback } from 'react';



const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    moutain: require("./assets/fonts/Mountain.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError){
    return null
  } else {
    return (
      <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.primary300,
            headerTitleStyle: {fontFamilt: "mountain", fontSize:30},
            contentStyle: { backgroundColor: Colors.primary800 },
          }}
        
        
        
        >
          <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Campground Reservations"
          }}
          />
          <Stack.Screen
          name="CampgroundsOverviewScreen"
          component={CampgroundsOverviewScreen}
         /> 
        </Stack.Navigator>
      </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
