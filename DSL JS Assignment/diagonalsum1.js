/*
sum [2,5,7] diagonal

const arr = [
  [2, 3, 4],
  [2, 5, 3],
  [4, 8, 7],
];
*/

const readline = require('readline').createInterface
({
    input: process.stdin,
    output: process.stdout
})
readline.question(`How many column you want in matrix => `, b => 
{
    console.log(` column is  ${b}!`)

    readline.question(`How many row you want in matrix => `, a => 
    {
        console.log(` row is  ${a}!`)
        console.log('Enter values')
        
        var arr = [];
        var nbr = 0;
        //a=b-1
        
        readline.on('line', (line) => 
        {
        arr.push(line.split(' '));
       nbr++;
  
      // number of lines to read
      
      if (nbr >= a)
      {
          readline.close();
          
          console.log("Array is ",arr);
          
      }
      
// program to create a two dimensional array

twoDimensionArray(a, b)
function twoDimensionArray(a, b) 
{
    
    let arr = [];

  
    
    for (let i = 0; i < a; i++) {
        arr[i] = [];
        for (let j = 0; j < b; j++) {
          arr[i][j] = j;
        }
    }

    return arr;
}

diagonalsum(arr)
function diagonalsum ()
{
   sum = 0
 
  for(let i = 0; i < arr.length; i++){
     for(let j = 0; j < arr[i].length; j++)
     {
        if(i == j)
        {
          
           //sum += arr[i][j];
           sum=sum+parseInt(arr[i][j])
      
        };
     };
  };
  return sum;
};

console.log('sum of all diagonals of array is ',sum);
        
});

});
});