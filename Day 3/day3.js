// Activity 1

// Task 1
let a = 23;
if (a > 0) {
  console.log("A is positive");
} else if (a < 0) {
  console.log("A is negative");
} else {
  console.log("A is zero");
}
// Task 2
let age = 23;

if (age > 18) {
  console.log("You are elegible to vote");
} else {
  console.log("You are not elegible to vote");
}

// Activity 2

// Task 3
let number1 = 43,
  number2 = 12,
  number3 = 32;

if (number1 > number2) {
  if (number1 > number3) {
    console.log("Number1 is greatest");
  } else {
    console.log("number 3 is greatest");
  }
} else {
  if (number2 > number3) {
    console.log("number 2 is greatest");
  } else {
    console.log("Number 3 is Greatest");
  }
}

// Activity 3

// Task4
let day = "monday";

switch (day) {
  case "1":
    console.log("Today is Monday");
    break;

  case "2":
    console.log("Today is Tuesday");
    break;

  case "3":
    console.log("Today is Wednesday");
    break;

  case "4":
    console.log("Today is Thursday");
    break;

  case "5":
    console.log("Today is Friday");
    break;

  case "6":
    console.log("Today is Saturday");
    break;

  case "7":
    console.log("Today is Sunday");
    break;



  default:
    console.log("Today is neither Monday nor Tuesday");
    break;
}


// Task5
let Marks=3;
switch (Marks) {
    case 1:
        console.log("A");
        break;

        
    case 2:
        console.log("B");
        break;

        
    case 3:
        console.log("C");
        break;

        
    case 4:
        console.log("D");
        break;

        
    case 5:
        console.log("E");
        break;

    default:
        break;
}
// Acctivity 4

// Task6
let number=12;

let num=(number%2==0)?console.log("Number is even"):console.log("Number is odd");

// Activity 5

// Task7
let year = 2002;

if (year % 4 == 0) {
    if (year % 100 != 0 || year % 400 == 0) {
        console.log("True"); // It's a leap year
    } else {
        console.log("False"); // Not a leap year
    }
}
else{
    console.log("False")
}

