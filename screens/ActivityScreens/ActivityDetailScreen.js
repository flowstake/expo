// flowstake-expo/screens/ActivityScreens/ActivityDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ActivityDetailScreen = ({ route, navigation }) => {
  const { activityId, activityTitle, activityDescription } = route.params;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>{activityTitle}</Text>
        <Text style={styles.description}>{activityDescription}</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default ActivityDetailScreen;
