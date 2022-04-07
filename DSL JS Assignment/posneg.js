const { equal } = require('assert');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your  number?`, num1 => {
    console.log(` number is  ${num1}!`)
     
        posneg(num1);
        function posneg()
        {
            if(num1>0)
            console.log('is positive number')
            else
            if (num1<0)
            console.log('is negative number')
            else
            console.log('is equal to zero')
       
        }
        readline.close()
        
  })
  