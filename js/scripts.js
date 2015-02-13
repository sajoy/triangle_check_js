var triangleCheck = function(side1, side2, side3) {
  var triangle = "";

  if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
    if (side1 === side2 && side2 === side3) {
      triangle = "equilateral";
    } else if (side1 === side2 || side1 === side3 || side3 === side2) {
      triangle = "isosceles";
    } else {
      triangle = "scalene"
    }
  } else {
    triangle = "not a triangle";
  }

  return triangle;
};

$(function() {
  $("form#sides").submit(function(event) {
    $(".result").empty();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = triangleCheck(side1, side2, side3);

    if (result !== "not a triangle" && result !== "scalene") {
      $(".result").append("You're an " + result + " triangle!");
    } else if (result === "scalene") {
      $(".result").append("You're a " + result + " triangle!");
    } else {
      $(".result").append("Sorry, you're " + result + " ):");
    }

    $("#result").show();

    event.preventDefault();

  });

});
