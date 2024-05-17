//what is anagram?
/*
An anagram of a string is another string that contains the same characters, only the order of characters can be different.
eg: str1 = "listen"
    str2 = "silent"
*/
let str1 = "listen";
let str2 = "silent";

function isAnagram(str1, str2) {
  let arr = Array.from({ length: 256 }, () => 0);
  // console.log(...arr);
  if (str1.length != str2.length) return false;
  for (let ind = 0; ind < str1.length; ind++) {
    arr[str1.charCodeAt(ind)]++;
    arr[str2.charCodeAt(ind)]--;
  }
  return arr.filter((val) => val != 0).length == 0;
}
console.log(isAnagram(str1, str2)); //true

/*
here space need for arr storing 256 character
1byte=8bit
2^8=256
256 character occupy in 1 byte
*/
