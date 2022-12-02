// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit5-07-forLoops/sw.js", {
    scope: "/ICS2O-unit5-07-forLoops/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  const num = parseInt(document.getElementById("num").value) + 1

  let sum = 0

  for (let count = 1; count < num; count++) {
    sum += count
  }

  document.getElementById("answer").innerHTML = "your answer is: " + sum + "."
}
