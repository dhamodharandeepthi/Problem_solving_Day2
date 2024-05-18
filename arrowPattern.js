/**
 
 find below pattern
           *    *
            *  **
              ***
             ****
            *****



 */

let n = 5;
for (let row = 0; row < n; row++) {
  let arr = [];
  for (let col = 0; col < n; col++) {
    if (col == row || col >= n - 1 - row) arr.push("*");
    else arr.push(" ");
  }
  //   console.log(...arr); or
  console.log(arr.join(" "));
}

/*
  col=row

  1st iteration row=0
    col=0  => 0=0  true "*" added in while row0 and col0
    col=1  => 1=0
    col=2  => 2=0
    col=3  => 3=0
    col=4  => 4=0
  2nd iteration row=1
    col=0  => 0=1  
    col=1  => 1=1  true "*" added in while row1 and col1
    col=2  => 2=1
    col=3  => 3=1
    col=4  => 4=1
  3rd iteration row=2
    col=0  => 0=2  
    col=1  => 1=2
    col=2  => 2=2  true "*" added in while row2 and col2
    col=3  => 3=2
    col=4  => 4=2
  4th iteration row=3
    col=0  => 0=3  
    col=1  => 1=3
    col=2  => 2=3
    col=3  => 3=3  true "*" added in while row3 and col3
    col=4  => 4=3
  5th iteration row=4
    col=0  => 0=4  
    col=1  => 1=4
    col=2  => 2=4
    col=3  => 3=4  
    col=4  => 4=4  true "*" added in while row4 and col4



    col col col col col
row  *               *
row      *       *   *
row          *   *   *
row       *  *   *   *
row   *   *  *   *   *

col>=n-1-row

1st iteration row=0
   col=0 => 0>=5-1-0 false  " " added in array
   col=1=>  1>=5-1-0 false  " " 
   col=2=>  2>=5-1-0 false  " "
   col=3=>  3>=5-1-0 false  " "
   col=4=>  3>=5-1-0 true   "*" added in array

2nd iteration row=1
   col=0 => 0>=5-1-1 false  " " 
   col=1=>  1>=5-1-1 false  " " 
   col=2=>  2>=5-1-1 false  " "
   col=3=>  3>=5-1-1 true   "*" added in array
   col=4=>  3>=5-1-1 true   "*" added in array

3rd iteration row=2
   col=0 => 0>=5-1-2 false  " " 
   col=1=>  1>=5-1-2 false  " " 
   col=2=>  2>=5-1-2 true   "*" added in array
   col=3=>  3>=5-1-2 true   "*" added in array
   col=4=>  3>=5-1-2 true   "*" added in array

4th iteration row=3
   col=0 => 0>=5-1-3 false  " " 
   col=1=>  1>=5-1-3 true   "*" added in array
   col=2=>  2>=5-1-3 true   "*" added in array
   col=3=>  3>=5-1-3 true   "*" added in array
   col=4=>  3>=5-1-3 true   "*" added in array

5th iteration row=4
   col=0 => 0>=5-1-3 true   "*" added in array
   col=1=>  1>=5-1-3 true   "*" added in array
   col=2=>  2>=5-1-3 true   "*" added in array
   col=3=>  3>=5-1-3 true   "*" added in array
   col=4=>  3>=5-1-3 true   "*" added in array

*/
