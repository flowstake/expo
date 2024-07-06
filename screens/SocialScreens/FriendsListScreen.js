// flowstake-expo/screens/SocialScreens/FriendsListScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FriendsListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends List</Text>
      {/* Add components to display friends list */}
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
