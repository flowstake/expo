// flowstake-expo/components/common/Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 FlowStake. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: '#6200EE',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
