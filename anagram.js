//what is anagram?
/*
An anagram of a string is another string that contains the same characters, only the order of characters can be different.
eg: str1 = "listen"
    str2 = "silent"
*/
let string1 = "listen";
let string2 = "silent";
console.log(string1.charCodeAt(0)); //108 //L ASCII
console.log(string2.charCodeAt(0)); //115 //L ASCII
let arr = Array.from({ length: 256 }, () => 0);
// console.log(...arr); // 256 index filled with value 0
console.log(arr[string1.charCodeAt(0)]++); //108:1 =>Debugging output
console.log(arr[string2.charCodeAt(0)]--); //115:-1 =>Debugging output

console.log(arr[string1.charCodeAt(1)]++); //105:1
console.log(arr[string2.charCodeAt(1)]--); //105:-1 //0

console.log(arr[string1.charCodeAt(2)]++); //115:1
console.log(arr[string2.charCodeAt(2)]--); //108:-1

console.log(arr[string1.charCodeAt(3)]++); //116:1
console.log(arr[string2.charCodeAt(3)]--); //101:-1

console.log(arr[string1.charCodeAt(4)]++); //101:1
console.log(arr[string2.charCodeAt(4)]--); //110:-1

console.log(arr[string1.charCodeAt(5)]++); //110:1
console.log(arr[string2.charCodeAt(5)]--); //116:-1

let filterArray = arr.filter((value) => value != 0);
console.log(filterArray); //[]
console.log(filterArray.length); //0
console.log(filterArray.length == 0); //true
