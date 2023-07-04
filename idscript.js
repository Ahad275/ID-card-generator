$(document).ready(function() {
    // Event listener for generate card button
    $("#generate-card").click(function() {
      // Get input values
      var name = $("#name").val();
      var college = $("#college").val();
      var location = $("#location").val();
  
      // Set card values
      $("#card-name").text(name);
      $("#card-college").text("College: " + college);
      $("#card-location").text("Location: " + location);
  
      // Show uploaded image on the card
      var input = document.getElementById("image");
      if (input.files && input.files[0]) {
        var reader = new FileReader();
  
        reader.onload = function(e) {
          $("#card-image").attr("src", e.target.result);
        };
  
        reader.readAsDataURL(input.files[0]);
      }
  
      // Show the card section
      $("#card-section").show();
    });
  });
   