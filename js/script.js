// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit205B/sw.js", {
    scope: "/ICS20-Unit205B/",
  })
}

/*
 * This function calculates the amutn of hours worked and the perhour pay
 */
function enterClicked() {
  //input
  const hourWorked = document.getElementById("hour-worked").value
  const perHour = document.getElementById("per-hour").value
  const incomeTax = 0.18
  const takeHomeSalary = perHour * hourWorked - perHour * hourWorked * incomeTax
  const govSalary = perHour * hourWorked * incomeTax

  // output
  document.getElementById("money").innerHTML =
    "your pay is $" + takeHomeSalary.toFixed(2)
  document.getElementById("gov-money").innerHTML =
    "The government will take $" + govSalary.toFixed(2)
}
