import React from 'react'
import { Text, SafeAreaView, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { dashStyles } from '../styles.js';
import { dumBoardData, dumUserData } from '../../../dummydata.js';

export const UserFormsScreen = ({ navigation }) => {
  const handleFormPress = () => navigation.navigate('FormSpecificScreen');
  const renderForms = ({ item }) => {
    let bgColor = 'rgba(125, 204, 243, 0.3)';
    if (item.complete) {
      bgColor = 'rgba(129, 179, 106, 0.6);';
    }
    return (
      <TouchableOpacity onPress={handleFormPress}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 315,
          padding: 14,
          marginTop: 18,
          marginBottom: 18,
          backgroundColor: bgColor,
          // borderColor: '#7DCCF3',
          borderRadius: 12,
          // borderWidth: 1,
        }}>
          <Text style={dashStyles.listItemText}>{item.title}</Text>
          <Text style={dashStyles.listItemTextSmall}>{item.dueDate}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={dashStyles.container}>
      <Text style={dashStyles.title}>{dumUserData.firstName} {dumUserData.lastName}'s Forms</Text>
      <View style={dashStyles.list}>
        <FlatList
          style={dashStyles.list}
          data={dumUserData.forms}
          renderItem={renderForms}
        />
      </View>
      {/* <TouchableOpacity>
        <View style={dashStyles.addFormBtn}>
          <Text style={dashStyles.addFormPlus}>+</Text>
        </View>
      </TouchableOpacity> */}
    </SafeAreaView>
  )
};
