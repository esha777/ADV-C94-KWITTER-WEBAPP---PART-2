
const firebaseConfig = {
    apiKey: "AIzaSyChrP8tRqyqdPqTVHPDKXKTuG40P97I3Qg",
    authDomain: "classtest-e8e65.firebaseapp.com",
    databaseURL: "https://classtest-e8e65-default-rtdb.firebaseio.com",
    projectId: "classtest-e8e65",
    storageBucket: "classtest-e8e65.appspot.com",
    messagingSenderId: "829676087919",
    appId: "1:829676087919:web:fdf24a37f0866d9644fb9a",
    measurementId: "G-ZMPVQDC9T1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function addUser() {
      user_name=document.getElementById("user_name").value;
      firebaseConfig.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }