// flowstake-expo/config/web3authConfig.js
import { Web3Auth } from '@web3auth/react-native-sdk';

const web3auth = new Web3Auth({
  clientId: 'your-client-id', // Get your client ID from Web3auth
  network: 'testnet', // Use 'mainnet' for production
});

export default web3auth;
