import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, CreateJoinScreen } from './app/screens/WelcomeScreen.js';
import { NameEntryScreen } from './app/screens/create/NameEntryScreen.js';
import { TeamIDScreen } from './app/screens/create/TeamIDScreen.js';
import { FormBoardScreen } from './app/screens/create/FormBoardScreen.js';
import { FormSpecificScreen } from './app/screens/create/FormSpecificScreen.js';
import { FormResponseScreen } from './app/screens/create/FormResponseScreen';
import { IDEntryScreen } from './app/screens/join/IDEntryScreen';
import { WelcomeToTeamScreen } from './app/screens/join/WelcomeToTeamScreen.js';
import { UserFormsScreen } from './app/screens/join/UserFormsScreen.js';
import { FormInputScreen } from './app/screens/join/FormInputScreen.js';
import { CompletedForm1Screen } from './app/screens/join/CompletedForm1Screen';

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
        <Stack.Screen
          name="FormBoardScreen"
          component={FormBoardScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="FormSpecificScreen"
          component={FormSpecificScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="FormResponseScreen"
          component={FormResponseScreen}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="IDEntryScreen"
          component={IDEntryScreen}
          options={{
            headerShown: false
          }}
        />
      <Stack.Screen
          name="WelcomeToTeamScreen"
          component={WelcomeToTeamScreen}
          options={{
            headerShown: false
          }}
      />
      <Stack.Screen
        name="UserFormsScreen"
        component={UserFormsScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="FormInputScreen"
        component={FormInputScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="CompletedForm1Screen"
        component={CompletedForm1Screen}
        options={{
          headerShown: false
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
