// flowstake-expo/screens/AuthScreens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, handleLoginWithWeb3 } = useAuth();

  const handleLogin = async () => {
    try {
      // Handle traditional email/password login if needed
    } catch (error) {
      console.error(error);
      Alert.alert('Login Error', error.message);
    }
  };

  const handleWeb3Login = async () => {
    try {
      await handleLoginWithWeb3();
    } catch (error) {
      console.error(error);
      Alert.alert('Web3 Login Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login with Web3" onPress={handleWeb3Login} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
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
