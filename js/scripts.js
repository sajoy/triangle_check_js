var triangleCheck = function(side1, side2, side3) {
  var triangle = "";

  if (side1 + side2 >= side3 && side2 + side3 >= side1 && side1 + side3 >= side2) {
    if (side1 === side2 && side2 === side3) {
      triangle = "equilateral";
    } else if (side1 === side2 || side1 === side3 || side3 === side2) {
      triangle = "isosceles";
    }
  } else {
    triangle = "not a triangle";
  }
  return triangle;
};
