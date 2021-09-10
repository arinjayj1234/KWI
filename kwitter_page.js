//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCkC3hZMOW7tAbOQAokqDnXpxP0rOoqbys",
      authDomain: "pr-a-fe332.firebaseapp.com",
      databaseURL: "https://pr-a-fe332-default-rtdb.firebaseio.com",
      projectId: "pr-a-fe332",
      storageBucket: "pr-a-fe332.appspot.com",
      messagingSenderId: "949818493747",
      appId: "1:949818493747:web:5605de2b5567b045cecc46"
    };
    userName = localStorage.getItem("Username");
    roomName = localStorage.getItem("roomName");
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
room_
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logOut(){
      localStorage.removeItem("Username");
      localStorage.removeItem("roomName");
      window.location = "index.html";
}

function sEnd(){
      msg = document.getElementById("iNput").value;
      firebase.database().ref(roomName).push({
            name: userName, like: 0, message: msg
      });
      document.getElementById("iNput").value = "";
}