// flowstake-expo/services/authService.js
import { firebase, auth } from '../config/firebaseConfig';
import web3authConfig from '../config/web3authConfig';
import { Web3Auth } from '@web3auth/react-native-sdk';

export const loginWithEmail = async (email, password) => {
  const userCredential = await auth.signInWithEmailAndPassword(email, password);
  return userCredential.user;
};

export const signupWithEmail = async (email, password) => {
  const userCredential = await auth.createUserWithEmailAndPassword(email, password);
  return userCredential.user;
};

export const loginWithWeb3 = async () => {
  const web3auth = new Web3Auth(web3authConfig);
  await web3auth.initModal();
  const user = await web3auth.connect();
  return user;
};

export const checkExistingUser = async () => {
  const user = await auth.currentUser;
  return user ? user : null;
};
