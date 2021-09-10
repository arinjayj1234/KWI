const firebaseConfig = {
      apiKey: "AIzaSyCkC3hZMOW7tAbOQAokqDnXpxP0rOoqbys",
      authDomain: "pr-a-fe332.firebaseapp.com",
      databaseURL: "https://pr-a-fe332-default-rtdb.firebaseio.com",
      projectId: "pr-a-fe332",
      storageBucket: "pr-a-fe332.appspot.com",
      messagingSenderId: "949818493747",
      appId: "1:949818493747:web:5605de2b5567b045cecc46"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("Username");
document.getElementById("ussyname").innerHTML = "Welcome "+username+"!";
function AdDrOoM(){
      roNa = document.getElementById("roAme").value;
      firebase.database().ref("/").child(roNa).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("roomName", roNa);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey; 
      //Start code
      console.log("Room Names = "+Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomname(this.id);'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomname(name){
      console.log(name);
      localStorage.setItem("Room_Name", name);
      window.location = "kwitterpage.html";
}
function loGout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("roomName");
      window.location = "index.html";
}