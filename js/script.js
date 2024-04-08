// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"
// function to calculate area
function calculateArea() {
  // declaring variable for hours worked with value set as value inputed by user 
  let sideA = document.getElementById("sidea").value;

  // declaring variable for side b inputted by user
  let sideB = document.getElementById("sideb").value;
  // declaring variable for for height inputted by user 
  let height = document.getElementById("height").value;

  // calculates result by multiplying the product of side a, side b, and height by 1/6
  let volume = (height * sideA * sideB) * 1/6;
  document.getElementById("user-info").innerHTML = "The volume of the triangular pyramid is " + volume.toFixed(3) + " cm<sup>3</sup>.";

  return area;
}

