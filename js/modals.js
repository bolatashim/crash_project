$(document).ready(function() {

  //this is a test js code that manages modal content

  $("#full_cons").hide();//empty is selected by default so no need to show this

  $('input[type=radio][name=trashtypes]').change(function() {
      if (this.value == 'empty') {
          $("#full_cons").hide();
          // alert("Empty trash selected");
      }
      else if (this.value == 'full') {
        $("#full_cons").show();
          // alert("Full trash selected");
      }
  });


});