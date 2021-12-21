import React from 'react'
import { Text, SafeAreaView, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { dashStyles } from '../styles.js';
import { dumBoardData, dumUserData2 } from '../../../dummydata.js';

export const CompletedForm1Screen = ({ navigation }) => {
  const renderForms = ({ item }) => {
    let bgColor = 'rgba(125, 204, 243, 0.3)';
    if (item.complete) {
      bgColor = 'rgba(129, 179, 106, 0.6);';
    }
    return (
      <TouchableOpacity>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 315,
          padding: 14,
          marginTop: 18,
          marginBottom: 18,
          backgroundColor: bgColor,
          borderRadius: 12,
        }}>
          <Text style={dashStyles.listItemText}>{item.title}</Text>
          <Text style={dashStyles.listItemTextSmall}>{item.dueDate}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={dashStyles.container}>
      <Text style={dashStyles.title}>{dumUserData2.firstName} {dumUserData2.lastName}'s Forms</Text>
      <View style={dashStyles.list}>
        <FlatList
          style={dashStyles.list}
          data={dumUserData2.forms}
          renderItem={renderForms}
        />
      </View>
    </SafeAreaView>
  )
};
