// flowstake-expo/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to FlowStake!</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Start Activity"
            onPress={() => navigation.navigate('StartActivity')}
          />
          <Button
            title="Profile"
            onPress={() => navigation.navigate('Profile')}
          />
          <Button
            title="Social Feed"
            onPress={() => navigation.navigate('Feed')}
          />
          <Button
            title="Friends List"
            onPress={() => navigation.navigate('FriendsList')}
          />
        </View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-around',
    height: 200,
  },
});
