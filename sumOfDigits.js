let num = 794312;

let rem = num % 10;
console.log("1st iteration: ", rem); //2
num = Math.floor(num / 10);
console.log("1st Iteration: ", num); //79431

rem = num % 10;
console.log("2nd iteration: ", rem); //1
num = Math.floor(num / 10);
console.log("2nd Iteration: ", num); //7943

rem = num % 10;
console.log("3rd iteration: ", rem); //3
num = Math.floor(num / 10);
console.log("3rd Iteration: ", num); //794

rem = num % 10;
console.log("4th iteration: ", rem); //4
num = Math.floor(num / 10);
console.log("4th Iteration: ", num); //79

rem = num % 10;
console.log("5th iteration: ", rem); //9
num = Math.floor(num / 10);
console.log("5th Iteration: ", num); //7

rem = num % 10;
console.log("6th iteration: ", rem); //7
num = Math.floor(num / 10);
console.log("6th Iteration: ", num); //0
/*
To find sumofdigits we have iterate upto num =0 and devide by 10 to find each digit
*/
