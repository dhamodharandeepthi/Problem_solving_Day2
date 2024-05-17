//what is anagram?
/*
An anagram of a string is another string that contains the same characters, only the order of characters can be different.
eg: str1 = "listen"
    str2 = "silent"
*/
str1 = "listen";
str2 = "silent ";
function isAnagram(str1, str2) {
  let obj = {};
  for (let ind = 0; ind < str1.length; ind++) {
    if (str1[ind] >= "a" && str1[ind] <= "z") {
      if (obj[str1[ind]]) {
        obj[str1[ind]]++; // obj[str1[ind]] +=1
      } else {
        obj[str1[ind]] = 1;
      }
    } else {
      return false;
    }
  }
  for (let ind = 0; ind < str2.length; ind++) {
    if (str2[ind] >= "a" && str2[ind] <= "z") {
      if (obj[str2[ind]]) {
        obj[str2[ind]]--; // obj[str1[ind]] -=1
        if (obj[str2[ind]] == 0) {
          delete obj[str2[ind]];
        }
      } else {
        return false;
      }
    }
  }
  console.log(obj);
  return Object.keys(obj).length == 0;
}

console.log(isAnagram(str1, str2));

/*
key codes:
 * str1[ind] >= "a" && str1[ind] <= "z") // check charecter a to z
 * each character in str1 and str2 are created as key in emoty obj and asign value 1 if it character comes again value incremented by 1 and compare with another str in another loop there value decremented
 * finally if obj empty means return true otherwise false
*/
