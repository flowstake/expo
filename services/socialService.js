// flowstake-expo/services/socialService.js
import { firebase } from '../config/firebaseConfig';

export const getFeed = async () => {
  try {
    const querySnapshot = await firebase.firestore().collection('feed').get();
    const feed = [];
    querySnapshot.forEach((doc) => {
      feed.push({ id: doc.id, ...doc.data() });
    });
    return feed;
  } catch (error) {
    console.error('Error getting social feed: ', error);
    throw new Error(error);
  }
};

export const getFriendsList = async () => {
  try {
    const querySnapshot = await firebase.firestore().collection('friends').get();
    const friendsList = [];
    querySnapshot.forEach((doc) => {
      friendsList.push({ id: doc.id, ...doc.data() });
    });
    return friendsList;
  } catch (error) {
    console.error('Error getting friends list: ', error);
    throw new Error(error);
  }
};
