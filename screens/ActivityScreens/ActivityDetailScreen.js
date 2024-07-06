// flowstake-expo/screens/ActivityScreens/ActivityDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ActivityDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Details</Text>
      {/* Add components to display activity details */}
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
