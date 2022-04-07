
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your number?`, num1 => {
    console.log(` number is  ${num1}!`)
    
        forloop(num1);
        function forloop()
        {
        for(i=1;i<=num1;i++)
         
       console.log(`Number using for loop `,i);
        }
        readline.close()
        
  })

  