$(document).ready(function() {

  //initializing firebase
  var config = {
    apiKey: "AIzaSyDtNA7S1roeuXiyO6nKReBxuvc7va5OEUY",
    databaseURL: "https://crashproject-6d234.firebaseio.com/"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  
  //create a new reference (branch called names)
  var readDataRef = database.ref("readDataRef");

  //pushing data into names branch (updates in real time)
  
  var tdata = [
  {
    lng: 33.503385,
    lat: 126.531216,
    type: "full",
    lastupdate: 1509154967
  },
  {
    lng: 33.503098,
    lat: 126.531573,
    type: "empty",
    lastupdate: 1509155967
  },
  {
    lng: 33.500768,
    lat: 126.530400,
    type: "full",
    lastupdate: 1509156967
  },
  {
    lng: 33.499448,
    lat: 126.529783,
    type: "empty",
    lastupdate: 1509157967
  },
  {
    lng: 33.499837,
    lat: 126.530582,
    type: "full",
    lastupdate: 1509158967
  }]


  for (var i = tdata.length - 1; i >= 0; i--) {
    var lng = tdata[i]["lng"];
    var lat = tdata[i]["lat"];
    var type = tdata[i]["type"];
    var lastupdate = tdata[i]["lastupdate"];
    
    readDataRef.push({
      lng: lng,
      lat: lat,
      type: type,
      lastupdate: lastupdate
    });
  }

  alert("Elements have been pushed");
});