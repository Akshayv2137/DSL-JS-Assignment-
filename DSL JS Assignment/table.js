
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your number?`, num1 => {
    console.log(` number is  ${num1}!`)
    

        table(num1);
        function table()
        {
        for(i=1;i<=10;i++)
        {
        t=num1*i
        
       console.log(`Table of ${num1} is `,i,'-',t);
        }
        }
    
        
        readline.close()
        
  })

  