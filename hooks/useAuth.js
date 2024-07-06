// flowstake-expo/hooks/useAuth.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginWithWeb3 } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLoginWithWeb3 = async () => {
    try {
      const user = await loginWithWeb3();
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Implement logic to check for an existing authenticated user
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, handleLoginWithWeb3 }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);