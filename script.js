// console.log("Sander");
// console.log(4 + 4);
// console.log("the sum of 4 + 4 is equal:", 4 + 4);
// console.log(20 + 20, "hello world");

//string
// var pet = "cat";
// console.log(pet);

// var petOne = "Cat";
// var petTwo = "cat";
// console.log(petOne == petTwo);

// var petThree = "cat";
// var petFour = "cat";
// console.log(petThree == petFour);

// var myPets = "my pets are " + petOne + " " + petTwo;
// console.log(myPets);

// var first = "rab";
// var second = "bit";
// var animal = first + second;
// console.log(animal);

// var four = "4";

//numbers
// var integer = 4;
// var decimal = 5.5;
// console.log(integer * decimal);

// var multiply = integer * decimal;
// console.log(multiply);

// var devide = decimal / integer;
// console.log(devide);

// var firstNumber = 8;
// var secondNumber = 6;
// var sum = firstNumber + secondNumber;
// console.log(sum);

//booleans
// var lightIsOn = false;
// console.log(lightIsOn);

//data types
// var color = "red";
// typeof color;
// console.log(color);

//helper functions
// var d = new Date(); //todays date
// console.log(d);

// var day = d.getDay(); //number of the day of the week
// console.log(day);

//alert method
// alert("Sander");
// alert(3 * 3);

//Operaters:
//=== (equal)
//==(loose equal(do not use))
//!==(not equal)
//>(greater than)
//>=(greater than or equal to)
//<(less than)
//<=(less than or equal to)

// var firstNumber = 10;
// var secondNumber = 20;
// console.log(firstNumber === secondNumber);
// console.log(firstNumber <= secondNumber);
// console.log(firstNumber !== secondNumber);

//conditional statements
//declare a log in var
//check if user is logged in
//if the user is logged in i will show a nice message in the console
//else if the user is not logged in show another message
// var isLoggedIn = true;
// if (isLoggedIn === true) {
//   console.log("the user is logged in");
// } else {
//   console.log("the user is not logged in");
// }

// var inpurIsValid = false;
// if (inpurIsValid === false) {
//   alert("please fill in the email field");
// } else {
// }

//if.. if else.. else
// var color = "blue";
// if (color === "blue") {
//   console.log("the color is blue");
// } else if (color === "red") {
//   console.log("the color is red");
// } else {
//   console.log("the color is neither red nor blue");
// }

//switch
// var color = "red";
// switch (color) {
//   case "red":
//     console.log("the chosen color is red");
//     break;
//   case "blue":
//     console.log("the chosen color is blue");
//     break;
//   default:
//     console.log("the color is not blue, red, green...");
// }

//loops
// for (var count = 1; count <= 10; count++) {
//   console.log(count);
// }
// 1 >> 2
// 2 >> 3
// 3 >> 4
// keeps counting until 10

// count++

// count = count + 1;
// 3 = 3 + 1

// for (var i = 0; i <= 25; i++) {
//   console.log(i);
// }
//count from 0 to 25

// for (var i = 5; i < 26; i++) {
//   console.log(i);
// }
//counts from 5 to 25

//looping through arrays
//array:
// var cars = [
//   "bmw", // nmr 0
//   "ms", // nmr 1
//   "honda", //nmr 2
// ];

// var profile = [
//   { name: "Sander" },
//   { surname: "Smedbøl" },
//   { worktitle: "student" },
//   { age: "27" },
// ];
// console.log(profile);

var colors = ["red", "blue", "green", "yellow", "brown"];

var firstItem = colors[0];
console.log(firstItem);
console.log(colors[1]);
console.log(colors[2]);
// logs first red, then blue, green so on

//count variables
var numberOfColors = colors.length;
console.log(numberOfColors);
console.log(colors.length);

//loop array
for (var i = 0; i <= numberOfColors; i++) {
  //   console.log(colors[i]);
  //i want to show a message when green comes in the array
  if (colors[i] === "brown") {
    console.log("i have chosen brown");
  }
}

//while loop
// var counter = 100;
// while (counter >= 10) {
//   console.log("subtracting", counter);
//   counter++;
// }
