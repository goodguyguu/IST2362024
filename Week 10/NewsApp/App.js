import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import USNewsScreen from './screens/USNewsScreen';
import WorldNewsScreen from './screens/WorldNewsScreen';
import TechNewsScreen from './screens/TechNewsScreen';
import BookmarkedNewsScreen from './screens/BookmarkedNewsScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';


// Create stack, drawer, and tab navigators
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Creating the bottom tab navigator
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="USNews" component={USNewsScreen} options={{ title: 'US News' }} />
      <Tab.Screen name="WorldNews" component={WorldNewsScreen} options={{ title: 'World News' }} />
      <Tab.Screen name="TechNews" component={TechNewsScreen} options={{ title: 'Tech News' }} />
    </Tab.Navigator>
  );
}

// Creating the drawer navigator
function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="News" component={MyTabs} options={{ title: 'News Categories' }} />
      <Drawer.Screen name="Bookmarked" component={BookmarkedNewsScreen} options={{ title: 'Bookmarked News' }} />
    </Drawer.Navigator>
  );
}

// Main App component with stack navigator
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }} />
          <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


