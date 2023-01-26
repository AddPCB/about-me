/* eslint-disable eqeqeq */
"use strict";
function titleCase(str) {
  str = str.split(" ");
  let title ="";
  let result = [];
  for(let i = 0; i < str.length; i++){
    title = str[i].toLowerCase();
    result.push(title[0].toUpperCase()+title.slice(1));
  }
  return result.join(" ");
}
// Create a variable to store the correct answers
let correctAnswers = 0;

// Ask user name
let myName = prompt ("What is your name?");
switch (myName.toLowerCase()) {
case "peter":
  alert("I like you, " + titleCase(myName) + " I like your face.");
  break;
default:
  alert("Welcome to my about me page " + titleCase(myName) + ".");
}
console.log("User is called " + myName + ".");
let question1 = confirm("Are you smiling inside today?");

if (question1 === true) {
  alert("Awesome! Never change");
  correctAnswers++;
} else {
  alert("That's a shame, I hope you find your inner happy.");
}
console.log("User smiling:" + question1);
let question2 = confirm("Are you seated comfortably?");

if (question2 === true) {
  alert("Great, hold that pose!");
  correctAnswers++;
} else {
  alert("Have a stretch and get comfy!");
}
console.log("User seated comfortably: " + question2 + ".");
let question3 = confirm("Are you hydrated?");

if (question3 === true) {
  alert("HYDRO HOMIESSSS!");
  correctAnswers++;
} else {
  alert("Fetch a glass of water, dehydration makes mistakes!");
}
console.log("User hydrated: " + question3 + ".");
let question4 = confirm("Have you eaten breakfast?");

if (question4 === true) {
  alert("Good going, you are ready to face the day.");
  correctAnswers++;
} else {
  alert("You're not you when you're hungry.");
}
console.log("User fed: " + question4 + ".");
let question5 = prompt("What is your favourite day of the week?");

// one way of making lowercase
// colour = colour.toLowerCase();

switch (question5.toLowerCase()) {
case "monday":
  alert("Your favourite day is " + titleCase(question5) + "? We are not friends.");
  break;
case "tuesday":
  alert(titleCase(question5) + "? You are clearly full of grace.");
  break;
case "wednesday":
  alert("It is " + titleCase(question5) + " my dude.");
  correctAnswers++;
  break;
case "thursday":
  alert(titleCase(question5) + " is THOR'S day!");
  break;
case "friday":
  alert(titleCase(question5) + "? You must be loving and giving.");
  break;
case "saturday":
  alert(titleCase(question5) + "? You must work hard.");
  break;
case "sunday":
  alert(titleCase(question5) + "? You are bonny and blithe, good and gay!");
  break;
default:
  alert("Unknown day, maybe you love them all?");
}
console.log("User's favourite day: " + titleCase(question5) + ".");

// Question 6: Numeric input
let question6 = prompt("What is the answer to Life, The universe, and everything? Hint: Two digit number between 40 and 50.");
let q6Attempts = 3;

// Check if the answer is correct
while (question6 != 42 && q6Attempts > 0) {
  alert("Sorry, that isn't correct. " + q6Attempts + " attempts remaining.");
  if (question6 < 42) {
    question6 = prompt("What is the answer to Life, The universe, and everything? Hint: Try guessing a little higher.");
  } else if (question6 > 42) {
    question6 = prompt("What is the answer to Life, The universe, and everything? Hint: Try guessing a little lower.");
  } else {
    question6 = prompt("What is the answer to Life, The universe, and everything? Hint: Try guessing a two-digit number.");
  }
  q6Attempts--;
}

// increment correctAnswers when correct
if (question6 == 42) {
  correctAnswers++;
  alert("Congratulations, the answer is 42! You had " + q6Attempts + " attempts left.");
} else {
  alert("Sorry, you have 0 attempts left. The correct answer is 42!");
}
console.log("User's answer to life: " + question6 + ". Attempts remaining: " + q6Attempts + ".");

// Question 7: Multiple correct answers
let answers7 = ["red", "blue", "green"];
let question7 = prompt("Guess one of my favourite colours?").toLowerCase();
let q7Attempts = 5;

// Check if the answer is correct
while (!answers7.includes(question7) && q7Attempts > 0) {
  alert("Sorry, that isn't correct. " + q7Attempts + " attempts remaining.");
  question7 = prompt("Guess one of my favourite colours? Hint: Try a primary colour.").toLowerCase();
  q7Attempts--;
}

// increment correctAnswers when correct
if (answers7.includes(question7)) {
  alert("You guessed correctly with "+ q7Attempts + " attempts remaining. Correct answers were: " + titleCase(answers7.join(", ")) + ".");
  correctAnswers++;
} else {
  alert("Sorry, you have no attempts left. Correct answers were: " + titleCase(answers7.join(", ")) + ".");
}
console.log("Colour picked: " + question7 + ". Attempts remaining: " + q7Attempts + ".");
console.log(myName + " scored " + correctAnswers + "points out of 7.");
let nameBye =("Thank you for visiting my about page " + titleCase(myName) + ". You got " + correctAnswers + " out of 7 correct!");

// show score
alert(nameBye);
