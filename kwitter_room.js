
 
  var firebaseConfig = {
    apiKey: "AIzaSyDYjz9C2rYH7Xk5rZkjE4o7m4ZkUeFn0YA",
    authDomain: "project-93-5796e.firebaseapp.com",
    databaseURL: "https://project-93-5796e-default-rtdb.firebaseio.com",
    projectId: "project-93-5796e",
    storageBucket: "project-93-5796e.appspot.com",
    messagingSenderId: "2349519269",
    appId: "1:2349519269:web:d3d98e4d65a069f0d6184c",
    measurementId: "G-N4H4P69X68"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              console.log("Room Name - " + Room_names);
              row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
              document.getElementById("output").innerHTML += row;

        });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
