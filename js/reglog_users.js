$(document).ready(function() {

  //initializing firebase
  var config = {
    apiKey: "AIzaSyDtNA7S1roeuXiyO6nKReBxuvc7va5OEUY",
    authDomain: "crashproject-6d234.firebaseapp.com",
    databaseURL: "https://crashproject-6d234.firebaseio.com/",
    storageBucket: "crashproject-6d234.appspot.com"
  };
  firebase.initializeApp(config);
  
  //TODO: messages checking for validity of e-mail address
  //      length of pass should be > 6


  const txtpassword = document.getElementById("password");
  const txtemail = document.getElementById("username");
  const btnlogin = document.getElementById("loginbtn");
  const btnregister = document.getElementById("registerbtn");

  //login event listener
  btnlogin.addEventListener("click", e => {
    const email = txtemail.value;
    const pass = txtpassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    window.location="index.html";
  });

  //registration event listener
  btnregister.addEventListener("click", e => {
    const email = txtemail.value;
    const pass = txtpassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
      .then(user => window.location="index.html")
      .catch(e => console.log(e.message));
  });


});