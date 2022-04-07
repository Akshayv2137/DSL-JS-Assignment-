
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your  number?`, num1 => {
    console.log(` number is  ${num1}!`)
     
        evenodd(num1);
        function evenodd()
        {
            if(num1%2==0)
            console.log('number is even',num1)
            else
            console.log('number is odd ',num1)
        }
        readline.close()
        
  })
  