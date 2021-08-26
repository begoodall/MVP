import React from 'react'
import { Text, SafeAreaView, View, Button, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { dashStyles } from '../styles.js';
import { dumForm1Data } from '../../../dummydata.js';

export const FormResponseScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={dashStyles.container}>
      <Text style={dashStyles.title}>{dumForm1Data.teamMembers[0].firstName} {dumForm1Data.teamMembers[0].lastName}</Text>
      <View style={dashStyles.responseList}>
        <Text style={dashStyles.question}>How did you feel about this sprint?</Text>
        <Text style={dashStyles.response}>{dumForm1Data.teamMembers[0].response}</Text>
      </View>
      <View style={dashStyles.responseList}>
        <Text style={dashStyles.question}>What did you struggle with?</Text>
        <Text style={dashStyles.response}>Nothing</Text>
      </View>
    </SafeAreaView>
  )
};