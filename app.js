"use strict";
function titleCase(str) {
  str = str.split(' ');
  let title ="";
  let result = [];
  for(let i = 0; i < str.length; i++){
    title = str[i].toLowerCase();
    result.push(title[0].toUpperCase()+title.slice(1));
  }
  return result.join(' ');
}
let myName = prompt ("What is your name?");
switch (myName.toLowerCase()) {
case "peter":
  alert("I like you, " + titleCase(myName) + " I like your face.");
  break;
default:
  alert("Welcome to my about me page " + titleCase(myName) + ".");
}
let nameBye =("Thank you for visiting my about page " + titleCase(myName) + ".");

let question1 = confirm("Are you smiling inside today?");

if (question1 === true) {
  alert("Awesome! Never change");
} else {
  alert("That's a shame, I hope you find your inner happy.");
}

let question2 = confirm("Are you seated comfortably?");

if (question2 === true) {
  alert("Great, hold that pose!");
} else {
  alert("Have a stretch and get comfy!");
}

let question3 = confirm("Are you hydrated?");

if (question3 === true) {
  alert("HYDRO HOMIESSSS!");
} else {
  alert("Fetch a glass of water, dehydration makes mistakes!");
}

let question4 = confirm("Have you eaten breakfast?");

if (question4 === true) {
  alert("Good going, you are ready to face the day.");
} else {
  alert("You're not you when you're hungry.");
}

let question5 = confirm("Are you ready to code?");

if (question5 === true) {
  alert("Code . and may the bugs be ever in your favour.");
} else {
  alert("Maybe I can help with that?");
}

let day = prompt("What is your favourite day of the week?");

// one way of making lowercase
// colour = colour.toLowerCase();

switch (day.toLowerCase()) {
case "monday":
  alert("Your favourite day is monday? We are not friends.");
  break;
case "tuesday":
  alert("You are clearly full of grace");
  break;
case "wednesday":
  alert("It is wednesday my dude.");
  break;
case "thursday":
  alert("Tuesday is THOR'S day!");
  break;
case "friday":
  alert("You must be loving and giving.");
  break;
case "saturday":
  alert("You must work hard.");
  break;
case "sunday":
  alert("You are bonny and blithe, good and gay!");
  break;
default:
  alert("Unknown day, maybe you love them all?");
}
alert(nameBye);
