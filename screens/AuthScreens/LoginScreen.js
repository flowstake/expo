// flowstake-expo/screens/AuthScreens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from '../../components/common/Input'; // Custom Input component
import Button from '../../components/common/Button'; // Custom Button component
import { useAuth } from '../../hooks/useAuth'; // Import the useAuth hook

export default function LoginScreen({ navigation }) {
  // State for email and password input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Destructure handleLoginWithWeb3 from useAuth hook
  const { handleLoginWithWeb3 } = useAuth();

  // Function to handle login with Web3Auth
  const handleLogin = async () => {
    try {
      // Call the login function from useAuth hook
      await handleLoginWithWeb3();
    } catch (error) {
      console.error(error);
      Alert.alert('Login Error', error.message); // Show error alert
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {/* Email Input Field */}
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      {/* Password Input Field */}
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      {/* Button to trigger login with Web3Auth */}
      <Button title="Login with Web3" onPress={handleLogin} />
      {/* Button to navigate to Signup screen */}
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}

// Styles for the LoginScreen component
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
