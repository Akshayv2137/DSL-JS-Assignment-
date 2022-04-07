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
       
        ascending(num1,num2,num3);
        function ascending()
        {
       
            if (num1<num2 && num1<num3)
            {
                    if (num2<num3)
                    {
                        console.log(num1 + ", " + num2 + ", " +num3);
                    }
                    else
                    {
                        console.log(num1 + ", " + num3 + ", " +num2);
                    }
            }
            else if (num2<num1 && num2 <num3)
            {
                    if (num1<num3)
                    {
                         console.log(num2 + ", " + num1 + ", " +num3);
                    }
                    else
                    {
                         console.log(num2 + ", " + num3 + ", " +num1);
                    }
            }
            else if (num3<num1 && num3<num2)
            {
                    if (num1<num2)
                    {
                        console.log(num3 + ", " + num1 + ", " +num2);
                    }
                    else
                    {
                        console.log(num3 + ", " + num2 + ", " +num1);
                    }
            }       
            
        }
        readline.close()
    })
        
  })
})
  