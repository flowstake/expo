// flowstake-expo/navigation/MainNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartActivityScreen from '../screens/ActivityScreens/StartActivityScreen';
import ActivityDetailScreen from '../screens/ActivityScreens/ActivityDetailScreen';
import FeedScreen from '../screens/SocialScreens/FeedScreen';
import FriendsListScreen from '../screens/SocialScreens/FriendsListScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StartActivity" component={StartActivityScreen} />
      <Tab.Screen name="ActivityDetail" component={ActivityDetailScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="FriendsList" component={FriendsListScreen} />
    </Tab.Navigator>
  );
}
