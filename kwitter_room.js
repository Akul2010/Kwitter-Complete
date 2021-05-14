
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCVNoMz2X0Rbqp7LoB5xcY4pY3M1wOJ9yM",
      authDomain: "kwitter-5b958.firebaseapp.com",
      databaseURL: "https://kwitter-5b958-default-rtdb.firebaseio.com",
      projectId: "kwitter-5b958",
      storageBucket: "kwitter-5b958.appspot.com",
      messagingSenderId: "274737604076",
      appId: "1:274737604076:web:4f90d7b5d665c2b7e54cc9"
    };
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML="welcome"+user_name+"!";


function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
            });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}