/*
12345
2345
345
45
5
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your number?`, num1 => {
    console.log(` number is  ${num1}!`)
    

    pyramid(num1);
    function pyramid(num1)
    {
        var output = '';
    for(i=1;i<=num1;i++)
    {
        for(j=i;j<=num1;j++)
        {
            output += j + '  ';
   
        }
        
        console.log(output);
        output = '';
        console.log("\n");
    }
    }
        readline.close()
        
  })