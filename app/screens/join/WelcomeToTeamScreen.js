import React, { useState } from 'react'
import { Text, SafeAreaView, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { s } from '../styles.js';

export const WelcomeToTeamScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const handleNext = () => navigation.navigate('FormBoardScreen', { name: name });

  return (
    <SafeAreaView style={s.aroundContainer}>
      <Text style={s.pText}>Welcome to Hack Reactor's FormSpace!</Text>
      <View>
        <Text style={s.pText}>What's your name?</Text>
        <TextInput
          style={s.input}
          onChangeText={setName}
          value={name}
          placeholder="Full name"
        />
      </View>
      <Button
        color="rgba(125, 204, 243, 1)"
        title="Next"
        onPress={handleNext}
      />
    </SafeAreaView>
  )
};
