import React, { useState } from 'react'
import { Text, SafeAreaView, View, Button } from 'react-native'
import { s } from '../styles.js';

export const TeamIDScreen = (props) => {
  const { name } = props.route.params;

  return (
    <SafeAreaView style={s.container}>
      <View>
        <Text style={s.baseText}>Hey { name }! Here's your team's unique ID. Send this to your team members for them to register:</Text>
        <Text style={s.baseText}>hackreactor@f67jf81</Text>
      </View>
      <Button
        title="Next"
      />
    </SafeAreaView>
  )
};
