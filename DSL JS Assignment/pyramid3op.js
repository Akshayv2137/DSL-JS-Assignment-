/*
12345
1234
12
1
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
        for(i=num1;i>=1;i--)
        {
            for(j=1;j<=i;j++)
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