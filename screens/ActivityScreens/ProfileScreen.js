// flowstake-expo/screens/ActivityScreens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

export default function ProfileScreen() {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    // Implement logout functionality
    setUser(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: user?.photoURL || 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{user?.displayName || 'User Name'}</Text>
        <Text style={styles.profileEmail}>{user?.email || 'user@example.com'}</Text>
      </View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileEmail: {
    fontSize: 18,
    color: '#888',
  },
});
