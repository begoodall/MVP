import React, { useState } from 'react'
import { Text, TextInput, SafeAreaView, View, Button, Alert } from 'react-native'
import { s } from '../styles.js';

export const FormInputScreen = ({ navigation }) => {
  const [response1, setResponse1] = useState('');
  const [response2, setResponse2] = useState('');
  const handleSubmit = () =>
  Alert.alert(
    "Submit form?",
    "You can edit it before it's due.",
    [
      {
        text: "Submit",
        onPress: () => submittedAlert(),
      },
      { text: "Cancel", style: "cancel" }
    ]
  );
  const submittedAlert = () => Alert.alert(
    "Submitted!",
    "nice.",
    [
      {
        text: "OK",
        onPress: () => navigation.navigate('CompletedForm1Screen')
      }
    ]
    );
  let formReaction = handleSubmit;
  if (response1.length > 9 && response2.length > 9) {
    formReaction = handleSubmit;
  } else {
    formReaction = () => Alert.alert('Please use 10+ characters per response');
  }

  return (
    <SafeAreaView style={s.evenContainer}>
      <View>
        <Text style={s.baseText}>How did you feel about this sprint?</Text>
        <TextInput style={s.input}
          onChangeText={setResponse1}
          value={response1}
        />
      </View>
      <View>
        <Text style={s.baseText}>What did you struggle with?</Text>
        <TextInput style={s.input}
          onChangeText={setResponse2}
          value={response2}
        />
      </View>
      <Button
        title="Submit"
        color="rgba(125, 204, 243, 1)"
        onPress={formReaction}
      />
    </SafeAreaView>
  )
};
