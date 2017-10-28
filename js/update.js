$(document).ready(function(){
  //alert("Hello World!");
  // Get a reference to the database service
  var firebase = new Firebase('https://crashproject-6d234.firebaseio.com/');
  firebase.child('updates').on('value',function(snapshot) {
    $("thead").remove();
    $("tbody").remove();

    $("table").append("<thead><tr><th>Update</th><th>Time</th></tr></thead>\
    <tbody></tbody>");

    snapshot.forEach(row => {
      str = "<tr>";
      str +="<td>" + row.val()["text"] +"</td>";
      str +="<td>" + row.val()["time"] +"</td>";
      str += "</tr>"

      $("tbody").append(str);
    });
  });
});
