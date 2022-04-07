const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter your first number`, num1 => {
    console.log(`your first number is  ${num1}!`)
    

    readline.question(`Enter your second number`, num2 => {
        console.log(`your second number is  ${num2}!`)
    
        readline.question(`Enter your third  number`, num3 => {
            console.log(`your third number is ${num3}!`)
       
        Largest(num1,num2,num3);
        function Largest()
        {
       
        if (num1>=num2 && num1>=num3)
        
         //if (num1>=num3)
                console.log('Largest Number is ',num1);
                else if (num2>=num3)
                console.log('Largest Number is ',num2);
                else
                console.log('Largest Number is ',num3);
        }
        readline.close()
    })
        
  })
})
  