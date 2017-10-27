$(document).ready(function() {

	//initializing firebase
  var config = {
    apiKey: "AIzaSyDtNA7S1roeuXiyO6nKReBxuvc7va5OEUY",
    databaseURL: "https://crashproject-6d234.firebaseio.com/"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  
  //create a new reference (branch called names)
  var namesref = database.ref("names");

  //pushing data into names branch (updates in real time)
  namesref.push(
  	{
  		username: "user_1",
  		name: "sseuraegee"
  	});

  namesref.on("child_added", function(snap) {
  	console.log(snap.key, snap.val());
  	snap.forEach(function(childsnap) {
  		var key = childsnap.key;
  		var childData = childsnap.val();
  		// console.log(key, childData);
  	});
  });

  alert("Two elements have been pushed into the database");
});