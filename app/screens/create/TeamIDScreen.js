import React from 'react'
import { Text, SafeAreaView, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { s } from '../styles.js';

export const TeamIDScreen = ({ navigation, route }) => {
  const { name, teamName } = route.params;
  const handleNext = () => navigation.navigate('FormBoardScreen');

  return (
    <SafeAreaView style={s.evenContainer}>
      <View>
        <Text style={s.pText}>Hey {name}! Here's your team's unique ID. Send this to your team members for them to register:</Text>
        <TouchableOpacity>
          <Text style={s.idText}>f67jf83ag870fde8g</Text>
        </TouchableOpacity>
      </View>
      <Button
        color="rgba(125, 204, 243, 1)"
        title="Next"
        onPress={handleNext}
      />
    </SafeAreaView>
  )
};
