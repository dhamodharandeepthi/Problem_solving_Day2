//what is anagram?
/*
An anagram of a string is another string that contains the same characters, only the order of characters can be different.
eg: str1 = "listen"
    str2 = "silent"
*/

let str1 = "they see";
let str2 = "the eyes ";
console.log(str1.length); //8
console.log(str2.length); //9  space also calculated

str1 = str1.split(" ").join("");
console.log(str1); //theysee

str2 = str2.split(" ").join("");
console.log(str2); //theeyes
