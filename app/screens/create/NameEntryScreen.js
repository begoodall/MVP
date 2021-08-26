import React, { useState } from 'react'
import { Text, TextInput, SafeAreaView, View, Button, Alert } from 'react-native'
import { s } from '../styles.js';

export const NameEntryScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [teamName, setTeamName] = useState('');
  const handleSubmit = () => {
    if (name.length > 2 && teamName.length > 2) {
      navigation.navigate('TeamIDScreen', { name: name, teamName: teamName });
    } else {
      Alert.alert(
        "Please use 3+ characters for each field"
      )
    }
  }
  // const handleSubmit = () => navigation.navigate('TeamIDScreen', { name: name, teamName: teamName });

  return (
    <SafeAreaView style={s.evenContainer}>
      <View>
        <Text style={s.baseText}>What's your name?</Text>
        <TextInput style={s.input}
          placeholder="Full Name"
          onChangeText={setName}
          value={name}
        />
      </View>
      <View>
        <Text style={s.baseText}>What's your team's name?</Text>
        <TextInput style={s.input}
          onChangeText={setTeamName}
          value={teamName}
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
