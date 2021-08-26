import React, { useState } from 'react'
import { Text, TextInput, SafeAreaView, View, Button, Alert } from 'react-native'
import { s } from '../styles.js';

export const IDEntryScreen = ({ navigation }) => {
  const [id, setID] = useState('');
  const handleSubmit = () => {
    if (id === 'f67jf83ag870fde8g') {
      navigation.navigate('WelcomeToTeamScreen');
    } else {
      Alert.alert(
        "Please enter valid team ID"
      )
    }
  }
  // const handleSubmit = () => navigation.navigate('WelcomeToTeamScreen');

  return (
    <SafeAreaView style={s.evenContainer}>
      <View>
        <Text style={s.baseText}>Enter team ID to join a team:</Text>
        <TextInput style={s.input}
          placeholder="ex: f80asdf98asdf"
          onChangeText={setID}
          value={id}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <Button
        title="Next"
        color="rgba(125, 204, 243, 1)"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  )
};
