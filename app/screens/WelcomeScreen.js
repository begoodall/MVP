import React, { useEffect } from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { s } from './styles.js';

export const HomeScreen = ({ navigation }) => {
  const handleHomePress = () => navigation.navigate('CreateJoinScreen');
  setTimeout(() => navigation.navigate('CreateJoinScreen'), 1500);

  return (
    <SafeAreaView style={s.evenContainer}>
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
const handleJoinPress = () => navigation.navigate('IDEntryScreen');

  return (
    <SafeAreaView style={s.evenContainer}>
      <Button
        style={s.baseText}
        color="rgba(125, 204, 243, 1)"
        title="Create a Team"
        onPress={handleCreatePress}
      />
      <Button
        color="rgba(125, 204, 243, 1)"
        style={s.baseText}
        title="Join a Team"
        onPress={handleJoinPress}
      />
    </SafeAreaView>
  );
}