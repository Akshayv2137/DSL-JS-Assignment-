const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your first number?`, num1 => {
    console.log(`first number of a is  ${num1}!`)
    

    readline.question(`What's your second number?`, num2 => {
        console.log(`second number b is  ${num2}!`)
       
        interchange(num1,num2);
        function interchange()
        {
        temp=num1;
        num1=num2;
        num2=temp;
       console.log(`The interchange of value a is now  ${num1}`);
       console.log(`The interchange of value b is now  ${num2}`);
        }
        readline.close()
        
  })
})
  