import React from 'react'
import { Text, SafeAreaView, View, Button, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native'
import { dashStyles } from '../styles.js';
import { dumForm1Data } from '../../../dummydata.js';

export const FormSpecificScreen = ({ navigation, route }) => {
  const handleUnsubmitted = () =>
  Alert.alert(
    "Form not submitted",
    "Send reminder?",
    [
      {
        text: "Send",
        onPress: () => submittedAlert(),
      },
      { text: "Cancel", style: "cancel" }
    ]
  );
  const submittedAlert = () =>
  Alert.alert(
    "Reminder sent!"
  );
  const handleNamePress = () => navigation.navigate('FormResponseScreen');
  const renderTeamMembers = ({ item }) => {
    let fill = 'rgba(129, 179, 106, 0.8)';
    let formReaction = handleNamePress;
    if (!item.complete) {
      fill = 'transparent'
      formReaction = handleUnsubmitted;
    }

    return (
      <TouchableOpacity onPress={formReaction}>
        <View style={dashStyles.listItemView}>
          <Text style={dashStyles.listItemText}>{item.firstName} {item.lastName.substring(0, 1)}.</Text>
          <View style={
            {
            height: 20,
            width: 20,
            backgroundColor: fill,
            borderColor: '#81B26ACC',
            borderWidth: 1.8,
            borderRadius: 50,
            alignSelf: 'center'
            }
          }>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={dashStyles.container}>
      <Text style={dashStyles.title}>{dumForm1Data.formName}</Text>
      <View style={dashStyles.list}>
        <FlatList
          style={dashStyles.list}
          data={dumForm1Data.teamMembers}
          keyExtractor={dumForm1Data.teamMembers.id}
          renderItem={renderTeamMembers}
        />
      </View>

    </SafeAreaView>
  )
};