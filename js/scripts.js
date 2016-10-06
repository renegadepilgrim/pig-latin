var output = "TEST";

var first = "";
var suffix = "ay";

// var input = "";

// IGNORING ALPHANUMERIC LIMITATIONS

$(document).ready(function() {

  $("form").submit(function(event) {

    event.preventDefault();

    var input = $("input#userinput").val();

    if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u")
    {
      output = input + suffix;
      $("#output").text(output);
    }
    else
    {

    }
    $("#result").show();

  });
});


// Schema for Pig Latin Translator:

// The program adds "ay" to the end for words beginning with a vowel.
//   Example Input: i
//   Example Output: iay
//
// The program moves all of the first consecutive consonants to the end, and add "ay" for words beginning with one or more consonants.
//   Example Input: say; stay
//   Example Output: aysay; aystay
//
// The program treats "y" as a consonant in words beginning with "y".
//   Example Input: yours
//   Example Output: oursyay
//
// The program moves the "u" along with the "q" when the first consonants include "qu". Don't forget about words like "squeal" where "qu" doesn't come first!
//   Example Input: squeal
//   Example Output: ealsquay
//
// The program runs with multiple word strings as input.
//   Example Input: Hey there!
//   Example Output: Eyhay erethay!
//
// The program runs with multiple word strings as input, regardless of capitalization.
//   Example Input: HEy TheRE!
//   Example Output: Eyhay erethay!
//
// The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
//   RegEx Key:  /[^a-zA-Z]+/
//   Example Input: 3
//   Example Output: 3
