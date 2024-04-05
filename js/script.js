// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"
// function to calculate area
function calculateArea() {
  // declaring variable for hours worked with value set as value inputed by user 
  let sideA = parseInt(document.getElementById("sidea").value);

  // declaring variable for side b inputted by user
  let sideB = parseInt(document.getElementById("sideb").value);
  // declaring variable for for height inputted by user 
  let height = parseInt(document.getElementById("height").value);

  // calculates result by multiplying the product of side a, side b, and height by 1/6
  let area = (height * sideA * sideB) * 1/6;
  document.getElementById("user-info").innerHTML = "The area of the triangular pyramid is " + area.toFixed(2) + " cm².";

  return area;
}

