// flowstake-expo/utils/formatters.js
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  
  export const formatTime = (time) => {
    return new Date(time).toLocaleTimeString();
  };
  