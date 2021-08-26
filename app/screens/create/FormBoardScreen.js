import React from 'react'
import { Text, SafeAreaView, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { dashStyles } from '../styles.js';
import { dumBoardData } from '../../../dummydata.js';

export const FormBoardScreen = ({ navigation }) => {
  const renderForms = ({ item }) => (
    <TouchableOpacity>
      <View style={dashStyles.listItemView}>
        <Text style={dashStyles.listItemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={dashStyles.container}>
      <Text style={dashStyles.title}>{dumBoardData.team}'s Forms</Text>
      <View style={dashStyles.list}>
        <FlatList
          style={dashStyles.list}
          data={dumBoardData.forms}
          keyExtractor={dumBoardData.id}
          renderItem={renderForms}
        />
      </View>

    </SafeAreaView>
  )
};
