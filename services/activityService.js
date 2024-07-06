// flowstake-expo/services/activityService.js
import { firebase } from '../config/firebaseConfig';

export const startActivity = async (activityData) => {
  try {
    const docRef = await firebase.firestore().collection('activities').add(activityData);
    return docRef.id;
  } catch (error) {
    console.error('Error starting activity: ', error);
    throw new Error(error);
  }
};

export const getActivityDetails = async (activityId) => {
  try {
    const doc = await firebase.firestore().collection('activities').doc(activityId).get();
    if (doc.exists) {
      return doc.data();
    } else {
      throw new Error('No such activity!');
    }
  } catch (error) {
    console.error('Error getting activity details: ', error);
    throw new Error(error);
  }
};
