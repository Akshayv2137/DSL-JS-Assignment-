const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your first number?`, num1 => {
    console.log(`first number is  ${num1}!`)
    //readline.close()

    readline.question(`What's your second number?`, num2 => {
        console.log(`second number is  ${num2}!`)
       
        add(num1,num2);
        function add()
        {
        var result = (+num1) + (+num2);
        //return result
       console.log(`The sum of above two numbers is ${result}`);
        }
        readline.close()
        
  })
})
  