# FlowStake Expo Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Project Setup](#project-setup)
3. [Key Features](#key-features)
4. [Technologies Used](#technologies-used)
5. [Installation Guide](#installation-guide)
6. [Directory Structure](#directory-structure)
7. [Environment Setup](#environment-setup)
8. [Development Workflow](#development-workflow)
9. [Account Management](#account-management)
10. [Activity Tracking](#activity-tracking)
11. [Data Storage](#data-storage)
12. [Smart Contracts](#smart-contracts)
13. [Attestation System](#attestation-system)
14. [Social Features](#social-features)
15. [Testing](#testing)
16. [Deployment](#deployment)
17. [Future Work](#future-work)
18. [Contributing](#contributing)
19. [License](#license)

---

## Introduction

FlowStake is a platform that captures proof of activity as a stake, initially focusing on running and cycling activities. It features GPS and heartbeat data tracking, photo/video attestation, and peer-to-peer attestation, with a progressive web app for live data capture and mobile apps for iOS and Android.

---

## Project Setup

To start working on the FlowStake Expo project, ensure you have the following prerequisites:

- Node.js
- Expo CLI
- Visual Studio Code or any preferred IDE

---

## Key Features

- GPS and Heartbeat Data Tracking
- Photo/Video Attestation
- Peer-to-Peer Attestation
- Social Network-like Activity Feed
- Smart Contracts for Self-Sports Betting

---

## Technologies Used

- **React Native**: For building mobile applications.
- **Expo**: For managing the React Native projects.
- **Web3Auth**: For account management.
- **Firebase**: For data storage.
- **Hedera Hashgraph**: For permanent records.
- **Ethereum**: For smart contracts.

---

## Installation Guide

1. Clone the repository:
    ```bash
    git clone https://github.com/username/flowstake-expo.git
    cd flowstake-expo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the Expo development server:
    ```bash
    expo start
    ```

---

## Directory Structure

flowstake-expo/
│
├── assets/                 # Assets like images and fonts
├── components/             # Reusable React components
├── screens/                # Application screens
├── navigation/             # Navigation configurations
├── services/               # API and backend service integrations
├── utils/                  # Utility functions and helpers
├── App.js                  # Entry point of the application
├── app.json                # Expo configuration
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation

---

## Environment Setup

Create a `.env` file at the root of the project and add the necessary environment variables:

WEB3AUTH_CLIENT_ID=your_web3auth_client_id
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
HEDERA_ACCOUNT_ID=your_hedera_account_id
ETHEREUM_CONTRACT_ADDRESS=0xce723BBCa01d354B7b55a3337690707eE85b7B81


---

## Development Workflow

1. **Start Development Server**:
    ```bash
    expo start
    ```

2. **Building for Android**:
    ```bash
    expo build:android
    ```

3. **Building for iOS**:
    ```bash
    expo build:ios
    ```

4. **Linting and Formatting**:
    ```bash
    npm run lint
    npm run format
    ```

---

## Account Management

FlowStake uses `web3auth.io` for account management. Users can sign up and log in using various authentication providers.

- **Sign Up**: Users create an account using their preferred authentication method.
- **Log In**: Users log in to access their profile and activity data.

---

## Activity Tracking

The app tracks activities such as running and cycling using the device's GPS and heart rate sensor.

- **Start Activity**: Begin tracking GPS and heart rate data.
- **End Activity**: Stop tracking and save the activity data.
- **View Activities**: Access a list of recorded activities.

---

## Data Storage

Activity data is stored in Firebase and Hedera Hashgraph for secure and permanent records.

- **Firebase**: Real-time database for quick access and updates.
- **Hedera Hashgraph**: Distributed ledger for immutable records.

---

## Smart Contracts

FlowStake integrates Ethereum smart contracts for self-sports betting.

- **Create Bet**: Users can create a bet on their performance.
- **Join Bet**: Friends can join and bet on the activity.
- **Settle Bet**: Contracts are settled based on the recorded activity data.

---

## Attestation System

FlowStake includes a robust attestation system to verify the authenticity of activities.

- **Photo/Video Attestation**: Users can upload media as proof.
- **Peer-to-Peer Attestation**: Friends can verify and attest to the activity.
- **Computer Vision**: Automated verification through image recognition.

---

## Social Features

FlowStake aims to provide a social experience similar to Strava.

- **Activity Feed**: View and interact with friends' activities.
- **Friends List**: Connect with and follow other users.
- **Challenges and Competitions**: Participate in events and compete with others.

---

## Testing

Testing is a crucial part of the development process. FlowStake follows the best practices outlined in Thomas Vanderstraeten's article.

- **Unit Tests**: Test individual components and functions.
- **Integration Tests**: Test interactions between components.
- **End-to-End Tests**: Test the complete application flow.

---

## Deployment

1. **Prepare for Deployment**:
    ```bash
    expo build:web
    ```

2. **Deploy to Firebase**:
    ```bash
    firebase deploy
    ```

3. **Deploy to App Stores**:
    - Follow the respective guidelines for the Apple App Store and Google Play Store.

---

## Future Work

- **Expand Activity Types**: Include more sports and activities.
- **Enhanced Social Features**: Add more ways for users to interact.
- **Advanced Analytics**: Provide detailed performance insights.

---

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to learn how you can help.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For any further questions or support, please contact Renat Razumov at [email@example.com](mailto:email@example.com).

---

This documentation should provide a thorough guide for developers and users of the FlowStake Expo project. Feel free to modify or expand upon it as the project evolves.
