$(document).ready(function(){
  //alert("Hello World!");
  // Get a reference to the database service
  var firebase = new Firebase('https://crashproject-6d234.firebaseio.com/');
  //$('#update_table').tabs({ 'swipeable': true });
  /*
  for(var i=1;i<=10;i++){
    firebase.child('updates').push({
      text: "Random city" + i,
      time: i + "Oct",
      mayor: "Jack" + i
    })
  }*/
  firebase.child('updates').on('value',function(snapshot) {
    $("thead").remove();
    $("tbody").remove();
    $("#update_table").attr("opacity",0);
    $("table").append("<thead><tr><th>Update</th><th>Time</th><th>Thanks To</th></tr></thead>\
    <tbody></tbody>");

    snapshot.forEach(row => {
      str = "<tr>";
      str +="<td>" + row.val()["text"] +"</td>";
      str +="<td>" + row.val()["time"] +"</td>";
      str +="<td>" + row.val()["mayor"] +"</td>";
      str += "</tr>"

      $("tbody").append(str);
    });
  });
});
