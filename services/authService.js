// flowstake-expo/services/authService.js
import { firebase, auth } from '../config/firebaseConfig';
import web3auth from '../config/web3authConfig';

export const loginWithEmail = async (email, password) => {
  const userCredential = await auth.signInWithEmailAndPassword(email, password);
  return userCredential.user;
};

export const signupWithEmail = async (email, password) => {
  const userCredential = await auth.createUserWithEmailAndPassword(email, password);
  return userCredential.user;
};

export const loginWithWeb3 = async () => {
  await web3auth.initModal();
  const user = await web3auth.connect();
  return user;
};
