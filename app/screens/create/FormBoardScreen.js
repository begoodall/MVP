import React from 'react'
import { Text, SafeAreaView, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { s } from '../styles.js';

export const FormBoardScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={s.evenContainer}>
        <Text style={s.pText}>Hack Reactor</Text>
      <Button
        color="white"
        title="Next"
      />
    </SafeAreaView>
  )
};
