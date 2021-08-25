import React, { useState } from 'react'
import { Text, TextInput, SafeAreaView, View, Button } from 'react-native'
import s from '../styles.js';

export default function NameEntryScreen({ navigation }) {
  const [name, setName] = useState('');
  const [teamName, setTeamName] = useState('');
  const handleSubmit = () => navigation.navigate('TeamIDScreen', { name: name, teamName: teamName });

  return (
    <SafeAreaView style={s.container}>
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
        onPress={handleSubmit}
      />
    </SafeAreaView>
  )
};
