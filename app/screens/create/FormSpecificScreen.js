import React from 'react'
import { Text, SafeAreaView, View, Button, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { dashStyles } from '../styles.js';
import { dumForm1Data } from '../../../dummydata.js';

export const FormSpecificScreen = ({ navigation, route }) => {
  console.log(route);
  const renderTeamMembers = ({ item }) => {
    let fill = 'rgba(129, 179, 106, 0.8)';
    if (!item.complete) {
      fill = 'transparent'
    }
    return (
      <TouchableOpacity>
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