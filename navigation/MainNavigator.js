// flowstake-expo/navigation/MainNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartActivityScreen from '../screens/ActivityScreens/StartActivityScreen';
import ActivityDetailScreen from '../screens/ActivityScreens/ActivityDetailScreen';
import FeedScreen from '../screens/SocialScreens/FeedScreen';
import FriendsListScreen from '../screens/SocialScreens/FriendsListScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ActivityScreens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="StartActivity" component={StartActivityScreen} />
      <Tab.Screen name="ActivityDetail" component={ActivityDetailScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="FriendsList" component={FriendsListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
