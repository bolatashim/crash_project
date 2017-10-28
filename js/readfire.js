$(document).ready(function() {

  var config = {
    apiKey: "AIzaSyDtNA7S1roeuXiyO6nKReBxuvc7va5OEUY",
    authDomain: "crashproject-6d234.firebaseapp.com",
    databaseURL: "https://crashproject-6d234.firebaseio.com/",
    storageBucket: "crashproject-6d234.appspot.com"
  };
  firebase.initializeApp(config);
  
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user.email);
  } else {
    console.log(null);
  }
});



});