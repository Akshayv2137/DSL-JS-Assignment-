
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
readline.question(`How many element you want in array`, num2 => {
    console.log(` Element is  ${num2}!`)


 
var matrix = [];
var nbr = 0;
num1=num2-1

array1d(num1);
 function array1d()
 {
readline.on('line', (line) => 
{
    matrix.push(line.split(' '));
    nbr++;

    // number of lines to read
    if (nbr > num1)
        readline.close();
        
        console.log('Array is ',matrix);
        
})

}

});
