// flowstake-expo/screens/ActivityScreens/StartActivityScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StartActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start Activity</Text>
      {/* Add components to start an activity */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
