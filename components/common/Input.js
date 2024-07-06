// components/common/Input.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({ placeholder, value, onChangeText, style, secureTextEntry }) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
});
