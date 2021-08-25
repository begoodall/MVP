import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, CreateJoinScreen } from './app/screens/WelcomeScreen.js';
import NameEntryScreen from './app/screens/create/NameEntryScreen.js';
import TeamIDScreen from './app/screens/create/TeamIDScreen.js';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="CreateJoinScreen"
          component={CreateJoinScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="NameEntryScreen"
          component={NameEntryScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="TeamIDScreen"
          component={TeamIDScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
