// flowstake-expo/config/web3authConfig.js
import { Web3Auth } from '@web3auth/react-native-sdk';
import { WEB3AUTH_CLIENT_ID } from '@env';

const web3auth = new Web3Auth({
  clientId: WEB3AUTH_CLIENT_ID, // Get your client ID from Web3auth
  network: 'testnet', // Use 'mainnet' for production
});

export default web3auth;
