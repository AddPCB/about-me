"use strict";
function titleCase(str) {
  str.toLowerCase();
  let strAr = str.split(" ");
  for (let i = 0; i < strAr.length; i++) {
    strAr[i].charAt(0).toUpperCase();
  }
  str = strAr.join(" ");
  return str;
}


let myName = prompt ("What is your name?");
switch (titleCase(myName)) {
case "Peter":
  console.log("I like you, " + myName + " I like your face.");
  break;
default:
  console.log("Welcome to my about me page, " + myName);
}
let nameBye =("Thank you for visiting my about page " + myName);

let question1 = confirm("Are you smiling inside today?");

if (question1 === true) {
  console.log("Awesome! Never change");
} else {
  console.log("That's a shame, I hope you find your inner happy.");
}

let question2 = confirm("Are you seated comfortably?");

if (question2 === true) {
  console.log("Great, hold that pose!");
} else {
  console.log("Have a stretch and get comfy!");
}

let question3 = confirm("Are you hydrated?");

if (question3 === true) {
  console.log("HYDRO HOMIESSSS!");
} else {
  console.log("Fetch a glass of water, dehydration makes mistakes!");
}

let question4 = confirm("Have you eaten breakfast?");

if (question4 === true) {
  console.log("Good going, you are ready to face the day.");
} else {
  console.log("You're not you when you're hungry.");
}

let question5 = confirm("Are you ready to code?");

if (question5 === true) {
  console.log("Code . and may the bugs be ever in your favour.");
} else {
  console.log("Maybe I can help with that?");
}

let day = prompt("What is your favourite day of the week?");

// one way of making lowercase
// colour = colour.toLowerCase();

switch (day.toLowerCase()) {
case "monday":
  console.log("Your favourite day is monday? We are not friends.");
  break;
case "tuesday":
  console.log("You are clearly full of grace");
  break;
case "wednesday":
  console.log("It is wednesday my dude.");
  break;
case "thursday":
  console.log("Tuesday is THOR'S day!");
  break;
case "friday":
  console.log("You must be loving and giving.");
  break;
case "saturday":
  console.log("You must work hard.");
  break;
case "sunday":
  console.log("You are bonny and blithe, good and gay!");
  break;
default:
  console.log("Unknown day, maybe you love them all?");
}
console.log(nameBye);
