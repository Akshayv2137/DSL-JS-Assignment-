
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your number?`, num1 => {
    console.log(` number is  ${num1}!`)
    

        ntheven(num1);
        function ntheven()
        {
        for(i=1;i<=num1*2;i++)
        if(i%2==0)
           console.log(`${num1}  even number is `,i);
        }
        readline.close()
        
  })

  