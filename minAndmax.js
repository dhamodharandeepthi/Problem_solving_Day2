//find minimum and maximum value in an array

let arr = [6, 8, 4, 7, 9, 2, -1, -2];

function minAndMax(arr) {
  let min = arr[0];
  let max = arr[0];
  console.log(min); //6
  console.log(max); //6
  for (let ind = 0; ind < arr.length; ind++) {
    if (arr.length == 0) {
      return;
    }
    if (arr[ind] < min) {
      min = arr[ind];
    }
    if (arr[ind] > max) {
      max = arr[ind];
    }
  }
  return {
    min,
    max,
  };
}
console.log(minAndMax(arr)); //{ min: -2, max: 9 }
