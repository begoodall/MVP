import React from 'react'
import { Text, SafeAreaView, View, Button, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { dashStyles } from '../styles.js';
import { dumForm1Data } from '../../../dummydata.js';

export const FormSpecificScreen = ({ navigation }) => {
  const renderTeamMembers = ({ item }) => (
    // filled = 'rgba(129, 179, 106, 0.8)';
    <TouchableOpacity>
      <View style={dashStyles.listItemView}>
        <Text style={dashStyles.listItemText}>{item.firstName} {item.lastName.substring(0, 1)}.</Text>
        <View style={
          {
          height: 22,
          width: 22,
          backgroundColor: 'rgba(129, 179, 106, 0.8)',
          borderColor: '#81B26ACC',
          borderWidth: 1,
          borderRadius: 50,
          alignSelf: 'center'
          }
        }>
        </View>
      </View>
    </TouchableOpacity>
  );

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

// const localStyles = StyleSheet.create({
//   completed: {
//     // justifyContent: 'center',
//     height: 22,
//     width: 22,
//     backgroundColor: 'rgba(129, 179, 106, 0.8)',
//     borderColor: '#81B26ACC',
//     borderWidth: 1,
//     borderRadius: 50,
//     alignSelf: 'center',
//   }
// })