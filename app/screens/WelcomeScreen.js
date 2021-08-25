import * as React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import s from './styles.js';

export const HomeScreen = ({ navigation }) => {
  const handleHomePress = () => navigation.navigate('CreateJoinScreen');

  return (
    <SafeAreaView style={s.container}>
      <Text style={s.titleText}>Welcome to FormSpaces!</Text>
      <Button
        title="Start"
        onPress={handleHomePress}
      />
    </SafeAreaView>
  );
}

export const CreateJoinScreen = ({ navigation }) => {
const handleCreatePress = () => navigation.navigate('NameEntryScreen');

  return (
    <SafeAreaView style={s.container}>
      <Button
        style={s.baseText}
        title="Create a Team"
        onPress={handleCreatePress}
      />
      <Button
        style={s.baseText}
        title="Join a Team"
      />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}