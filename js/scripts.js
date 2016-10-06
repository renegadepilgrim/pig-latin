// var input = "";
var output = "";

var first = "";
var suffix = "ay";
// IGNORING ALPHANUMERIC LIMITATIONS

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var input = $("input#userinput").val();

    if (first === "a" || first === "e" || first === "i" || first === "o" || first === "u")
    {
      output = input + suffix;
      $("#result").text(output);
    }
    else
    {

    }
    $("#result").show();
    event.preventDefault();
  });
});
