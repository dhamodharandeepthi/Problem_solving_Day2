//what is fibonacci?
/*
//recursive approach
* 0 1 1 2 3 5 8 11 .....
F(n)=F(n-1)+F(n-2)
0 => F(0)=>0
1 => F(1)=>1
2 => F(2)=F(2-1)+F(2-2)=>F(1)+F(0)=>1+0=>1
3 => F(3)=F(3-1)+F(3-2)=>F(2)+f(1)=>1+1=>2
4 => F(4)=F(4-1)+F(4-2)=>F(3)+F(2)=>2+1=>3
5 => F(5)=F(5-1)+F(5-2)=>F(4)+F(3)=>3+2=>5
//iterative approach
Inorder to get the next value in the sequence, we have add last two elements in the sequence

prev+curr=next;

*/

function fibonacci(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
    console.log(curr); //1 2 3 5 8 13 21 34 55
  }
  return curr;
}
console.log(fibonacci(10)); //55
