import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const HomeScreen = ({ navigation }) => {
  const handlePress = () => navigation.navigate('CreateJoinScreen');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>Welcome to FormSpaces!</Text>
      <Button
        title="Navigate"
        onPress={handlePress}
      />
    </SafeAreaView>
  );
}

export const CreateJoinScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        style={styles.baseText}
        title="Create a Team"
      />
      <Button
        style={styles.baseText}
        title="Join a Team"
      />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#334257',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  baseText: {
    fontFamily: 'Gill Sans',
    fontSize: 28,
    color: '#F3F3F3'
  }
});