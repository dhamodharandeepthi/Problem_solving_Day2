//To find digits of given number
function sumOfDigit(num) {
  let sum = 0;
  while (num > 0) {
    let rem = num % 10;
    num = Math.floor(num / 10);
    sum += rem; //sum=sum+rem;
  }
  return sum;
}
console.log("sum of all digits: ", sumOfDigit(78963456));
