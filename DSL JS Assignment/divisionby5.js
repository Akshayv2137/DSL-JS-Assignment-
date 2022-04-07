
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your  number?`, num1 => {
    console.log(` number is  ${num1}!`)
     
        div(num1);
        function div()
        {
            if(num1%5==0)
            console.log('number is division by 5',num1)
            else
            console.log('number is not division by 5 ',num1)
        }
        readline.close()
        
  })
  