
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your number?`, num => {
    console.log(` you enter number is  ${num}!`)



b =0
sum = 0;
//var temp = num;
/*
// using while loop
while(num > 0)
{
  b = num % 10;
  sum = sum * 10 + b;
  num = parseInt(num / 10);
}
console.log(sum);
*/

//using for 
sum(num1);
function sum()
{
for(i=num;num>0;num = parseInt(num / 10))
{
  b = num % 10;
  sum = sum + b;
  
}
console.log('sum of number is ',sum);
}
})